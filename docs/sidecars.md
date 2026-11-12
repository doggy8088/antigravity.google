邊車
2-0
Antigravity 應用程式
功能
邊車 Antigravity App 功能
Antigravity 應用程式
適用於：
Antigravity 應用程式
# 邊車

[「邊車」章節](#sidecars)

Sidecar 是與 Antigravity 並行運行的背景程序。Antigravity 會管理 Sidecar 的生命週期，自動啟動它們，並在它們當機或發生錯誤時重新啟動。

它們適用於持久背景指令碼、排程的重複工作，以及回應事件。

## 設定

[「設定」章節](#configuration)

Antigravity 透過搜尋以下項目來探索 sidecar `sidecar.json` 兩個位置的設定檔：

- **全域 sidecar**：在以下項目下 `~/.gemini/config/sidecars/`
- **外掛程式側車**：在以下項目下 `~/.gemini/config/plugins/<pluginName>/sidecars/`

每個 sidecar 都有自己的目錄，目錄名稱即為該 sidecar 的 ID。從外掛載入的 sidecar 其 ID 為 `<pluginName>/<sidecarName>`.

Sidecar 的目錄必須包含 `sidecar.json` 檔案，且可能包含其他輔助檔案，例如要執行的指令碼。sidecar 的目錄同時也是該 sidecar 指令的目前工作目錄。

下列範例說明目錄結構：

```
~/.gemini/config/sidecars/
├── sidecar1/
│   ├── sidecar.json
│   └── script.py
└── sidecar2/
    └── sidecar.json

~/.gemini/config/plugins/
└── my-plugin/
      └── sidecars/
            └── plugin-sidecar/
                  └── sidecar.json
```

### 設定結構描述（`sidecar.json`)

[「設定架構（sidecar.json）」章節](#config-schema-sidecarjson)

The `sidecar.json` 檔案支援以下設定欄位：

- **`command`** （字串）：指令或可執行檔（例如， `python3` 或 `/bin/bash`）。與…互斥 `builtin`.
- **`builtin`** （字串）：要執行的內建指令。目前支援 `schedule`。與…互斥 `command`.
- **`args`** （字串陣列）：選用。傳遞給指令或內建函式的引數。
- **`restart_policy`** （字串）：選用。重新啟動行為。以下其中之一 `always`, `on-failure`，或 `never`。預設為 `always`.
- **`description`** （字串）：選用。描述 sidecar 功能的人類可讀說明。
- **`env`** （物件）：選用。要為 sidecar 處理程序設定的環境變數對應表。
- **`display_name`** （字串）：選用。使用者介面中使用的顯示名稱。

其中之一 `command` 或 `builtin` 必須設定。

下列範例示範 `sidecar.json` 設定：

```
{
  "description": "Background worker",
  "command": "python3",
  "args": ["worker.py"],
  "restart_policy": "on-failure"
}
```

```
{
  "description": "Hourly agent to triage review requests.",
  "builtin": "schedule",
  "args": [
    "0 * * * *",
    "agentapi",
    "new-conversation",
    "Give me a summary of incoming review requests."
  ]
}
```

### 使用者設定（`config.json`)

[「使用者設定（config.json）」章節](#user-configuration-configjson)

除非您在全域設定檔中明確啟用，否則 Sidecar 預設為停用，設定檔位於 `~/.gemini/config/config.json`:

- **`enabled`** （布林值）：sidecar 是否已啟用。
- **`projectId`** （字串）：選用。專案的 ID，其中 `agentapi` 建立對話。

下列範例同時啟用全域 Sidecar 與外掛程式 Sidecar：

```
{
  "sidecars": {
    "sidecar1": {
      "enabled": true
    },
    "my-plugin/plugin-sidecar": {
      "enabled": true,
      "projectId": "<projectId>"
    }
  }
}
```

### 執行階段資料

[「執行階段資料」章節](#runtime-data)

側車產生的執行階段資料儲存在 `~/.gemini/antigravity/sidecar_data/<sidecarId>/`.

此目錄包含下列子目錄：

- **`data/`**：用於任何持久資料的子目錄。此路徑可透過以下項目取得 `ANTIGRAVITY_EXECUTABLE_DATA_DIR` 環境變數。
- **`logs/`**：來自 stdout 與 stderr 的自動產生時間戳記日誌。
- **`events/`**：為以下項目記錄的 JSON 檔案 `agentapi` 呼叫。

### `schedule` builtin

[「schedule 內建功能」章節](#schedule-builtin)

`schedule` 是執行重複性指令的內建排程器：

```
{
  "builtin": "schedule",
  "args": [
    "* * * * *",
    "<command>",
    "<arg1>",
    "<arg2>"
  ]
}
```

第一個引數是標準的五欄位 cron 運算式。其餘引數是要在指定排程上執行的指令與引數。若要將排程固定在某個時區，請在運算式前加上 `CRON_TZ=<IANA zone>` （例如， `CRON_TZ=America/Los_Angeles 0 9 * * 1`).

為 `"builtin": "schedule"`，保留 `restart_policy` 於 `always` (預設值)。 `on-failure` 和 `never` 僅適用於一次性 `command` sidecars.

### 自動化

[標題為「Automations」的章節](#automations)

自動化是排程的附屬程序，每次執行都會開啟新的代理對話。 [`/automation`](/docs/commands/automation) 指令會在該處建立它們。 `~/.gemini/config/sidecars/<automation-id>/sidecar.json`，且列於 **自動化** 分頁。

自動化結合了 `schedule` 內建，搭配 `agentapi new-conversation` 並新增兩個選用欄位：

- **`arguments`** (物件陣列)：選填。開啟自動化時提供的輸入內容。每個項目包含 `key`, a `description`，以及 `string_arg` (文字，附選填的 `default_value`）或 `workspace_arg` (工作區資料夾)。請以下列方式參照值 `${key}` 在提示詞中或在 `workspace_uris`.
- **`agent_permissions`** (物件)：選填。無人值守代理無須詢問即可執行的操作：  **`workspace_uris`** (字串陣列)：代理可以存取的工作區資料夾。 **`access_grants`** (字串陣列)：已限定範圍、預先核准的權限，例如 `command(gh issue list)`, `read_file(/abs/path)`, `write_file(/abs/path)`, `mcp(<server>/<tool>)`，或 `read_url(github.com)`.

以下範例顯示一個自動化，會在您啟用時所選的工作區中，於每週一上午 9:00（太平洋時間）檢查未關閉的提取請求：

```
{
  "display_name": "Weekly PR check",
  "description": "Lists open pull requests with failing checks every Monday at 9:00 AM.",
  "builtin": "schedule",
  "args": [
    "CRON_TZ=America/Los_Angeles 0 9 * * 1",
    "agentapi",
    "new-conversation",
    "--",
    "In ${repo_dir}, list my open pull requests with failing checks and summarize what's failing."
  ],
  "arguments": [
    {
      "key": "repo_dir",
      "description": "Repository to check",
      "workspace_arg": {}
    }
  ],
  "agent_permissions": {
    "workspace_uris": ["${repo_dir}"],
    "access_grants": ["command(gh pr list)", "command(gh pr checks)"]
  }
}
```

### `agentapi`

[「agentapi」章節](#agentapi)

Sidecar 可以使用 `agentapi` 以程式化方式與 Antigravity 互動的 CLI。執行檔會自動加入 sidecar 的路徑，並可作為 `agentapi` 搭配下列子命令：

- **`agentapi new-conversation <prompt>`**：建立新對話。建立對話的 Sidecar 必須具備 `projectId` 集合。
- **`agentapi send-message <conversation_id> <prompt>`**：傳送訊息至現有對話。

[上一個
外掛程式](/docs/plugins/)

[下一步
代理技能](/docs/skills/)

您的下載已開始

## 您如何得知我們？

請選一個。這有助於我們接觸更多像您一樣的人。

感謝您讓我們知道！
