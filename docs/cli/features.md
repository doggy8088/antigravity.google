# Antigravity CLI 功能

功能 - Antigravity CLIcliAntigravity CLI開始使用功能 - Antigravity CLI Antigravity CLI 開始使用Antigravity CLI
# Antigravity CLI 功能
[「Antigravity CLI 功能」章節](#antigravity-cli-features)
### 外掛程式
[「外掛」章節](#plugins)
**外掛的運作方式** 外掛程式是命名空間化的套件，可包含技能、代理、規則、MCP 伺服器與掛鉤，作為單一可部署單元。

當您安裝外掛時，CLI 會將檔案暫存於家目錄下的 `~/.gemini/antigravity-cli/plugins/<plugin_name>/`。Antigravity 代理會自動探索並載入這些暫存的自訂。

```
~/.gemini/antigravity-cli/
├── plugins/
│   └── <plugin_name>/
│       ├── plugin.json         # Required marker file
│       ├── mcp_config.json     # Optional MCP server definitions
│       ├── hooks.json          # Optional event hooks definition
│       ├── skills/             # Optional skills
│       ├── agents/             # Optional subagents
│       └── rules/              # Optional rules
└── import_manifest.json        # Tracking manifest
```

### 使用以下管理外掛 /plugin （市集與已安裝）
[「使用 /plugin 管理外掛（市集與已安裝）」章節](#manage-plugins-with-plugin-marketplace-and-installed)
使用下列項目在 CLI 中觸發互動式外掛管理員 `/plugin` 斜線命令（別名 `/plugins`），並按下 Tab 在…之間切換 **已安裝** 分頁與 **探索** 分頁：

- **探索分頁**：從目錄瀏覽並安裝可用的外掛程式：
  - 開始輸入以搜尋特定外掛。
  - 按下 Enter 選取 從本機目錄安裝 並提供外掛安裝的本機路徑。
  - 按下 Enter 於外掛以展開其詳細檢視（包含描述、MCP 與技能等元件、市集與版本）。
  - 按下 Ctrl + S 於未安裝的外掛以安裝（或 Ctrl + S 於已安裝的外掛以解除安裝）。
  - 安裝後 ：綠色圓點（ ● ）出現在外掛程式名稱旁，位於 探索 分頁，表示其安裝狀態，外掛名稱會出現在 已安裝 分頁。
- **已安裝分頁**：檢視並設定已安裝的外掛程式：
  - 開始輸入以搜尋已安裝的外掛。
  - 按下 Space 切換啟用或停用外掛。
  - 按下 Enter 於已安裝的外掛以展開其詳細檢視（包含描述、適用技能、適用 MCP、市集、本機安裝路徑與版本）。
- **內嵌指令**：直接從提示詞管理外掛程式，無需開啟互動式面板：
  - /plugin 提供行內 install , uninstall , enable , disable ，與 list 子命令，無需開啟互動式外掛管理員面板。
  - 若要內嵌安裝，請執行 /plugin install <plugin-name>@<marketplace-name> ( <marketplace-name> 支援官方市集， antigravity-plugins-official ）或 /plugin install <local-path> 。例如，執行 /plugin install firebase@antigravity-plugins-official 輸出： `Successfully installed plugin "firebase" from "antigravity-plugins-official".`

### 從 shell 管理外掛（ agy plugin )
[「從 Shell 管理外掛（agy plugin）」章節](#manage-plugins-from-your-shell-agy-plugin)
在互動式 TUI 工作階段之外，您可以使用 從終端機安裝與管理外掛 `agy plugin`:

- **從官方 Marketplace 安裝**：指定 `<plugin-name>@antigravity-plugins-official` (`<marketplace-name>` 僅支援官方市集， `antigravity-plugins-official`），或傳遞裸 `<plugin-name>`，預設為 `<plugin-name>@antigravity-plugins-official`: `agyplugininstall<plugin-name>@antigravity-plugins-officialagyplugininstall<plugin-name>`
- **從 GitHub 連結安裝**：直接從 GitHub 儲存庫 URL 複製並暫存外掛程式： `agyplugininstallhttps://github.com/<owner>/<repo>`
- **從本機目錄安裝**：將本地外掛程式套件暫存至您的設定檔： `agyplugininstall</path/to/local/plugin>`
- **列出已安裝的外掛**：執行 `agy plugin list` 取得已安裝外掛及其元件數量的 人類可讀摘要，或傳入 `--json` 輸出包含安裝路徑與元件名稱的 JSON 陣列： `agypluginlistagypluginlist--json`
- **啟用、停用或解除安裝外掛**: `agypluginenable<plugin-name>agyplugindisable<plugin-name>agypluginuninstall<plugin-name>`

**存取外掛元件** 暫存並載入後，您可以使用斜線指令在 CLI 內與外掛元件互動。

### 終端機沙箱
[「終端機沙箱」章節](#terminal-sandbox)
終端機沙箱是一種輕量安全隔離機制，可在代理執行本機殼層指令時，保護您的主機系統免於潛在破壞性的檔案操作或未經授權的對外網路請求。

CLI 使用原生作業系統功能（`nsjail` 於 Linux， `sandbox-exec` 於 macOS，以及 `AppContainer` 於 Windows）強制執行嚴格的隔離邊界，零啟動額外負擔。

**設定** 您可以在以下位置設定沙箱行為 `settings.json` 檔案 (位於 `~/.gemini/antigravity-cli/settings.json`):

```
{
    "enableTerminalSandbox": true
}
```

該設定支援下列選項：

- `enableTerminalSandbox` （布林值，預設值： false ）：在所有本機代理處理程序上啟用一般執行圍堵屏障。

**互動式核准** 當代理提議需要您確認的終端機指令時，CLI 提示會根據您的設定動態調整：

- 啟用沙箱時 ：確認提示包含特定選項，可 是，並在無沙箱限制下執行 若您需要為單一受信任指令暫時繞過隔離邊界。
- 停用沙箱時 ：提示詞包含選項，可 是，並在沙箱中執行 若您希望強制在安全邊界內執行特定、可能有風險的指令。

### CLI 斜線指令參考
[「CLI 斜線指令參考」章節](#cli-slash-commands-reference)
Antigravity CLI 支援多種可直接在提示詞方塊中輸入的斜線指令，用於管理對話、設定設定，以及檢視代理功能。

### 核心斜線指令
[「核心斜線指令」章節](#core-slash-commands)
| 指令 | 類別 | 目的 |
| --- | --- | --- |
| /resume （別名 /switch ) | 對話 | 開啟對話選擇器以繼續或切換工作階段。 |
| /boost <task> | 推理 | 針對複雜錯誤、競爭條件與演算法的多代理深度推理。 |
| /teamwork-preview <task> | 推理 | 啟動 協作式多代理團隊 適用於長期專案（付費方案）。 |
| /effort [level] | 設定 | 設定使用中模型的 推理強度等級 ( low 透過 max ，視模型而定）。 |
| /rewind （別名 /undo ) | 對話 | 將對話記錄回滾至先前的檢查點。 |
| /rename <name> | 對話 | 重新命名使用中的對話串，方便追蹤。 |
| /permissions | 設定 | 選取代理自主層級（ request-review , always-proceed ，或 strict ). |
| /model | 設定 | 選取預設推理模型（跨工作階段保留）。 |
| /keybindings | 設定 | 開啟互動式鍵盤快速鍵編輯器。 |
| /statusline | 設定 | 自訂 CLI 狀態列中顯示的即時指標。 |
| /tasks | 工具 & 監控 | 監控、查看日誌，或終止使用中的背景任務。 |
| /plugin （別名 /plugins ) | 工具 & 監控 | 開啟互動式 外掛程式管理員 探索、安裝、啟用、停用或解除安裝外掛。 |
| /skills | 工具 & 監控 | 瀏覽本機與全域的封裝代理工作流程。 |
| /mcp | 工具 & 監控 | 開啟面板以設定與管理 Model Context Protocol 伺服器。 |
| /btw <query> | 公用程式 | 詢問 在背景執行的旁支問題 不中斷使用中的對話。 |
| /context | 公用程式 | 視覺化 啟用中的情境視窗用量 ，類別權杖明細與檢查點。 |
| /open <path> | 公用程式 | 立即在您偏好的外部編輯器中開啟檔案。 |
| /diff | 公用程式 | 開啟 互動式差異檢視器 檢閱變更並引導代理。 |
| /remote-control | 公用程式 | 為使用中的終端機工作階段開啟或關閉 Remote Control。 |
| /changelog | 公用程式 | 檢視 版本化的 CLI 發行說明 於 TUI 或無頭模式。 |
| /usage | 公用程式 | 顯示模型配額用量與重新整理上限。 |
| /logout | 帳戶 | 登出您的 Google 工作階段並清除快取的憑證。 |

### 使用以下方式進階自訂 settings.json
[「使用 settings.json 進行進階自訂」章節](#advanced-customization-using-settingsjson)
進階使用者可透過你的自訂項目，對數個斜線指令進行深度自訂 `~/.gemini/antigravity-cli/settings.json` 設定：

- 細緻權限 ：不使用全域層級，而是定義特定允許或拒絕的指令： `"permissions": {"allow": ["command(git)","command(npm test)"],"deny": ["command(rm -rf)"]}`
- 自訂狀態列與視窗標題 ：您可以將即時代理中繼資料（JSON 格式，包含目前工作目錄、作用中模型、Token 用量、狀態等）直接傳送至您自己的自訂 shell 指令碼，以產生動態狀態列或終端機視窗標題。

### Antigravity CLI 中的子代理
[「Antigravity CLI 中的子代理」章節](#subagents-in-antigravity-cli)
Antigravity CLI 具備非同步子代理框架，讓主代理可委派平行工作、執行背景研究與系統測試，而不阻擋您進行中的對話。

**什麼是子代理？** 子代理是獨立的並行代理工作階段，設計用於與主要對話平行處理特定的 背景工作：

- 目的 ：主代理會自動產生子代理，執行背景作業，例如查詢文件、執行建置或驗證修正。
- 功能 ：子代理可完整存取程式碼搜尋、檔案編輯、終端機指令與網路搜尋等工具以完成指派的任務。主代理決定子代理可使用的工具與權限，包括是否可使用 MCP 工具及是否可寫入檔案。

### 管理代理： /agents 面板
[「管理代理：/agents 面板」章節](#managing-agents-the-agents-panel)
Antigravity CLI 提供互動式終端機 UI，可檢視、管理與核准執行中子代理的動作：

- 存取 ：輸入 /agents 於提示詞開啟子代理面板。
- 總覽 ：面板會顯示作用中與已完成子代理的清單，包括表面層級的詳細資訊，例如其狀態（執行中、完成或已終止）與目前執行的步驟。

**工具確認與核准** 當子代理需要執行需要您權限的工具（例如執行本機指令或寫入檔案）時，它會浮現該請求。您可以透過兩種方式管理核准：

1. 詳細資訊檢視核准 ：子代理詳細檢視包含互動 區段，其中列出所有待核准項目，您可選擇性核准 或拒絕要求。

1. 快速通道警示 ：為了讓您保持專注，當子代理要求 權限時，Antigravity CLI 會在提示詞方塊正上方顯示 快速通道警示。
[上一個  
CLI 指令](/docs/cli/reference/)[下一步  
CLI 設定與技巧](/docs/cli/using/)
