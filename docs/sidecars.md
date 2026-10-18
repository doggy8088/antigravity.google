# 邊車

邊車2-0Antigravity 應用程式功能邊車 Antigravity App 功能Antigravity 應用程式適用於：Antigravity 應用程式
# 邊車
[「邊車」章節](index.html#sidecars)
Sidecar 是與 Antigravity 並行運行的背景程序。Antigravity 會管理 Sidecar 的生命週期，自動啟動它們，並在它們當機或發生錯誤時重新啟動。  
 它們適用於持久背景指令碼、排程的重複工作，以及回應事件。

## 設定
[「設定」章節](index.html#configuration)
Antigravity 透過搜尋以下項目來探索 sidecar `sidecar.json` 兩個位置的設定檔：

- 全域 sidecar ：在以下項目下 ~/.gemini/config/sidecars/
- 外掛程式側車 ：在以下項目下 ~/.gemini/config/plugins/<pluginName>/sidecars/

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

### 設定結構描述（ sidecar.json )
[「設定架構（sidecar.json）」章節](index.html#config-schema-sidecarjson)
The `sidecar.json` 檔案支援以下設定欄位：

- `command` （字串）：指令或可執行檔（例如， python3 或 /bin/bash ）。與…互斥 builtin .
- `builtin` （字串）：要執行的內建指令。目前支援 schedule 。與…互斥 command .
- `args` （字串陣列）：選用。傳遞給指令或內建函式的引數。
- `restart_policy` （字串）：選用。重新啟動行為。以下其中之一 always , on-failure ，或 never 。預設為 always .
- `description` （字串）：選用。描述 sidecar 功能的人類可讀說明。
- `env` （物件）：選用。要為 sidecar 處理程序設定的環境變數對應表。
- `display_name` （字串）：選用。使用者介面中使用的顯示名稱。

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

### 使用者設定（ config.json )
[「使用者設定（config.json）」章節](index.html#user-configuration-configjson)
除非您在全域設定檔中明確啟用，否則 Sidecar 預設為停用，設定檔位於 `~/.gemini/config/config.json`:

- `enabled` （布林值）：sidecar 是否已啟用。
- `projectId` （字串）：選用。專案的 ID，其中 agentapi 建立對話。

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
[「執行階段資料」章節](index.html#runtime-data)
側車產生的執行階段資料儲存在 `~/.gemini/antigravity/sidecar_data/<sidecarId>/`.

此目錄包含下列子目錄：

- `data/` ：用於任何持久資料的子目錄。此路徑可透過以下項目取得 ANTIGRAVITY_EXECUTABLE_DATA_DIR 環境變數。
- `logs/` ：來自 stdout 與 stderr 的自動產生時間戳記日誌。
- `events/` ：為以下項目記錄的 JSON 檔案 agentapi 呼叫。

### schedule builtin
[「schedule 內建功能」章節](index.html#schedule-builtin)
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

第一個引數是標準的五欄位 cron 運算式。其餘引數是要在指定排程執行的指令與引數。

### agentapi
[「agentapi」章節](index.html#agentapi)
Sidecar 可以使用 `agentapi` 以程式化方式與 Antigravity 互動的 CLI。執行檔會自動加入 sidecar 的路徑，並可作為 `agentapi` 搭配下列子命令：

- `agentapi new-conversation <prompt>` ：建立新對話。建立對話的 Sidecar 必須具備 projectId 集合。
- `agentapi send-message <conversation_id> <prompt>` ：傳送訊息至現有對話。
[上一個  
生命週期掛鉤](../hooks/index.html.gz)[下一步  
總覽與快速入門](../sdk/overview/index.html.gz)
