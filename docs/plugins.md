# 外掛程式

外掛程式2-0Antigravity 應用程式功能外掛程式 Antigravity App 功能Antigravity 應用程式Antigravity CLIAntigravity IDE適用於：Antigravity 應用程式Antigravity CLIAntigravity IDE
# 外掛程式
[「外掛」章節](index.html#plugins)
外掛程式將可重複使用的技能、背景子代理、lint 規則、Model Context Protocol (MCP) 伺服器與生命週期掛鉤，打包成單一可部署 資產。

## 目錄結構
[「目錄結構」章節](index.html#directory-structure)
外掛是一個目錄，其中包含必要的資訊清單檔案（`plugin.json`） 以及不同自訂類型的選用子目錄：

```
plugins/<plugin-name>/
├── plugin.json       # Required marker and manifest file
├── mcp_config.json   # Optional MCP server definitions
├── hooks.json        # Optional hooks definition
├── skills/           # Optional skills directory
│   └── <skill-name>/
│       └── SKILL.md
├── agents/           # Optional subagent definition templates
│   └── <agent-name>.md
└── rules/            # Optional rules directory
    └── <rule-name>.md
```

### 資訊清單檔案（ plugin.json )
[「資訊清單檔案（plugin.json）」章節](index.html#manifest-file-pluginjson)
每個外掛都需要 `plugin.json` 檔案置於其根目錄，以將目錄 識別為外掛並定義其中繼資料：

```
{
  "$schema": "https://antigravity.google/schemas/v1/plugin.json",
  "name": "my-custom-plugin",
  "description": "A brief description of what my plugin does."
}
```

#### 欄位參照
[「欄位參考」章節](index.html#field-reference)
| 欄位 | 類型 | 必要 | 描述 |
| --- | --- | --- | --- |
| name | 字串 | 是 （CLI）/ 選用（Antigravity App 與 IDE） | 外掛程式的唯一機器可讀名稱（符合 ^[a-zA-Z0-9-_]+$ ）。使用 Antigravity CLI 指令管理外掛程式時為必填；若在 Antigravity App 或 Antigravity IDE 中省略，則預設為資料夾名稱。 |
| description | 字串 | 否 | 外掛用途的簡短人類可讀描述，顯示於外掛清單中。 |

#### 自動驗證
[「自動驗證」章節](index.html#automatic-validation)
若要在 VS Code 或 JetBrains IDE 等編輯器中啟用自動完成與驗證，請加入 `$schema` 鍵，指向官方結構描述 URL：

```
"$schema": "https://antigravity.google/schemas/v1/plugin.json"
```

#### 完整 JSON 結構描述
[「完整 JSON 架構」章節](index.html#full-json-schema)
```
{
  "$schema": "https://antigravity.google/schemas/v1/plugin.json",
  "title": "Antigravity Plugin Manifest",
  "description": "Schema for Antigravity plugin manifest files (plugin.json)",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The unique, machine-readable name of the plugin. Must contain only alphanumeric characters, hyphens, and underscores.",
      "pattern": "^[a-zA-Z0-9-_]+$"
    },
    "description": {
      "type": "string",
      "description": "A brief human-readable description of the plugin's purpose and capabilities."
    }
  },
  "required": ["name"],
  "additionalProperties": false
}
```

### 支援的元件
[「支援的元件」章節](index.html#supported-components)
外掛可包含下列任一元件：

- skills/ ：包含以下項目的子目錄 SKILL.md 檔案含給 代理的指示。
- agents/ ：定義自訂子代理與角色組態的 Markdown 檔案。
- rules/ ：定義行為限制或風格指南的 Markdown 檔案。
- mcp_config.json ：將 Antigravity 連接至外部工具 伺服器的宣告。
- hooks.json ：在工具 呼叫前後執行 shell 指令的事件處理常式。

## 依介面管理外掛
[「依介面管理外掛」章節](index.html#managing-plugins-by-surface)
依照以下指示在你偏好的 介面上安裝與管理外掛：

- Antigravity 應用程式
- Antigravity CLI
- Antigravity IDE

### Antigravity 應用程式
[「Antigravity App」章節](index.html#sr-tab-1)
#### 市集與內建外掛
[「市集與隨附外掛」章節](index.html#marketplace-and-bundled-plugins)
Antigravity App 提供精選的外掛程式，您可以直接從應用程式介面瀏覽並安裝：

1. 開啟 自訂項目 分頁，位於…下方 排程任務 左側側邊欄中的分頁。
2. 在…之間切換 市集 檢視（顯示你可用的所有外掛）與 已安裝 分頁（僅顯示你已安裝的外掛）。
3. 在 市集 分頁，點選 + 按鈕以安裝外掛，或按一下外掛名稱以查看套件中包含的內容（例如 技能 , MCP 伺服器 , 規則 ，與 代理 ).

關於外掛探索與跨介面 同步的完整導覽，請參閱 [市集指南](https://antigravity.gh.miniasp.com/docs/marketplace).

#### 手動外掛安裝
[「手動安裝外掛」章節](index.html#manual-plugin-installation)
您可以將自訂外掛的目錄放在以下任一位置來安裝：

- 工作區層級 ：將外掛程式資料夾置於 .agents/plugins/ 於您工作區的根目錄。該外掛僅在該專案中工作時啟用。
- 全域層級 ：將外掛程式資料夾置於 ~/.gemini/config/plugins/ 。 外掛程式會在您工作站上的所有工作區中啟用。

### Antigravity CLI
[「Antigravity CLI」章節](index.html#sr-tab-2)
#### 互動式外掛管理員（ /plugin )
[「互動式外掛管理員（/plugin）」章節](index.html#interactive-plugins-manager-plugin)
在互動式 TUI 工作階段中，執行 `/plugin` （或其別名 `/plugins`）以開啟 **外掛程式管理員**，您可在…中瀏覽市集 **探索** 分頁、從本機目錄安裝外掛，或在…中啟用、停用與解除安裝外掛 **已安裝** 分頁。

您也可以直接在提示詞中使用內嵌子指令（`install`, `uninstall`, `enable`, `disable`，與 `list`）。對於 市集安裝， `<marketplace-name>` 支援官方市集（`antigravity-plugins-official`):

```
/plugin install <plugin-name>@antigravity-plugins-official
/plugin install <local-path>
/plugin enable <plugin-name>
/plugin disable <plugin-name>
/plugin uninstall <plugin-name>
/plugin list
```

關於的完整互動式導覽，請參閱 **探索** 和 **已安裝** 分頁、鍵盤快速鍵與行內市集命令，請參閱 [市集指南](https://antigravity.gh.miniasp.com/docs/marketplace?tab=cli).

#### CLI 殼層子指令（ agy plugin )
[「CLI Shell 子指令（agy plugin）」章節](index.html#cli-shell-subcommands-agy-plugin)
在互動式 TUI 工作階段之外，Antigravity CLI 提供 `agy plugin` 子命令管線，可從你的殼層安裝與管理擴充功能：

- 安裝外掛 ：從官方市集安裝 （ antigravity-plugins-official ），GitHub 儲存庫 URL，或本機 目錄： `# Install from the official marketplace (<marketplace-name> only supports antigravity-plugins-official)agyplugininstall<plugin-name>@antigravity-plugins-official# Or install by plugin name (defaults to <plugin-name>@antigravity-plugins-official)agyplugininstall<plugin-name># Install from a GitHub repository linkagyplugininstallhttps://github.com/<owner>/<repo># Install from a local plugin directoryagyplugininstall</path/to/local/plugin>`
- 列出已安裝的外掛 ：檢視所有已安裝外掛程式、其啟用或 停用狀態、版本、來源與元件計數。傳遞 --json 以 JSON 陣列輸出清單，並附完整元件名稱（ skills , agents , rules , mcpServers ，與 hooks ）與安裝路徑： `# Human-readable summary of installed pluginsagypluginlist# Machine-readable JSON output with component names and pathsagypluginlist--json` 執行中 agy plugin list 輸出已安裝外掛與元件 數量的摘要： `Installed plugins:- gcalendar (enabled, 0.0.3)Source:     antigravity-plugins-officialComponents: 1 skill- gdocs (disabled, 0.0.3)Source:     antigravity-plugins-officialComponents: 1 skill- workspace (enabled, 1.0.0)Source:     gemini-cliComponents: 1 MCP server` 執行中 agy plugin list --json 以 JSON 格式輸出完整詳情： `[{"name":"gcalendar","enabled":true,"version":"0.0.3","source":"antigravity-plugins-official","path":"/home/user/.gemini/config/plugins/gcalendar","skills": ["gcalendar"]},{"name":"gdocs","enabled":false,"version":"0.0.3","source":"antigravity-plugins-official","path":"/home/user/.gemini/config/plugins/gdocs","skills": ["gdocs"]},{"name":"workspace","enabled":true,"version":"1.0.0","source":"gemini-cli","path":"/home/user/.gemini/config/plugins/workspace","mcpServers": ["WorkspaceMCP"]}]`
- 啟用或停用外掛 ：切換外掛程式而不移除其檔案： `agyplugindisable<plugin_name>agypluginenable<plugin_name>`
- 解除安裝外掛 ：移除外掛程式檔案並清理組態 登錄： `agypluginuninstall<plugin_name>`

#### CLI 檔案系統位置
[「CLI 檔案系統位置」章節](index.html#cli-filesystem-location)
安裝後，CLI 會將外掛資產暫存於您的全域設定目錄：

```
~/.gemini/antigravity-cli/plugins/<plugin_name>/
```

#### 後續步驟
[「後續步驟」章節](index.html#next-steps)
探索相關文件與指南：

- 市集
- 從 Gemini CLI 遷移
- 疑難排解
- 權限與沙箱

### Antigravity IDE
[「Antigravity IDE」章節](index.html#sr-tab-3)
#### 獨立式 IDE 外掛程式安裝
[「獨立 IDE 外掛安裝」章節](index.html#standalone-ide-plugin-installation)
在獨立的 Antigravity IDE 中，外掛可在本機或全域載入：

- 工作區層級 ：將外掛程式資料夾儲存至 .agents/plugins/ 於您的專案 根目錄。
- 全域層級 ：將外掛程式資料夾儲存至 ~/.gemini/config/plugins/ 在所有 IDE 視窗中啟用它們。
- 編輯器設定 ：存取 自訂項目 代理側邊面板的下拉式選單，以審查啟用中的外掛元件並檢查已載入的技能。
[上一個  
市集](../marketplace/index.html)[下一步  
終端機沙箱](../sandbox/index.html.gz)
