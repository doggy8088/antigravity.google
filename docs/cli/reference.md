CLI 指令 - Antigravity CLI
cli
Antigravity CLI
開始使用
CLI 指令 - Antigravity CLI Antigravity CLI 開始使用
Antigravity CLI
# CLI 指令

[「CLI 指令」章節](#cli-commands)

查閱列出所有 TUI 斜線指令、預設鍵盤快速鍵、命令列旗標與 JSON 設定參數的表格。

## 核心斜線指令

[「核心斜線指令」章節](#core-slash-commands)

類型 `/` 於提示詞方塊內部開啟前置輸入指令選取選單。

| 指令 | 類別 | 別名 | 執行目的 |
| --- | --- | --- | --- |
| **`/add-dir <path>`** | 公用程式 | — | 將目錄路徑新增至使用中的工作區。 |
| **[`/agents`](/docs/cli/commands/agents)** | 工具 & 工作 | — | 開啟 [代理管理員面板](/docs/cli/commands/agents) 切換自訂代理並監控背景子代理。 |
| **[`/agy-customizations`](/docs/commands/agy-customizations)** `[request]` | 工具 & 工作 | — | 載入 [自訂參考資料](/docs/commands/agy-customizations) 讓代理能夠建立、修正或說明規則、技能、外掛程式、掛鉤與 MCP 伺服器。 |
| **[`/antigravity-guide`](/docs/commands/antigravity-guide)** `[question]` | 公用程式 | — | 詢問如何使用或設定 Antigravity，並從 取得答案 [官方文件](/docs). |
| **`/artifact`** | 工具 & 工作 | — | 開啟產出物審查面板。 |
| **[`/boost`](/docs/boost)** `<task>` | 推理 | — | 執行隨選的多代理深度推理循環。 |
| **[`/browser`](/docs/commands/browser)** `<task>` | 工具 & 工作 | — | 將網頁瀏覽、UI 驗證與瀏覽器內偵錯委派給 [瀏覽器子代理](/docs/commands/browser). |
| **[`/btw`](/docs/cli/commands/btw) `<query>`** | 公用程式 | — | 詢問 [在背景執行的旁支問題](/docs/cli/commands/btw) 不中斷主對話。 |
| **[`/changelog`](/docs/cli/commands/changelog)** | 公用程式 | — | 開啟 [互動式版本說明檢視器](/docs/cli/commands/changelog) 或於無頭模式列印 CLI 變更。 |
| **`/clear`** | 公用程式 | `/new` | 清除終端機並重設作用中的對話情境。 |
| **[`/codesearch`](/docs/cli/commands/codesearch) `<query>`** | 公用程式 | `/cs`, `/search` | 開啟 [互動式 Code Search 面板](/docs/cli/commands/codesearch) 在整個工作區中搜尋程式碼。 |
| **`/config`** | 設定 | `/settings` | 開啟互動式設定編輯器覆疊層。 |
| **[`/context`](/docs/cli/commands/context)** | 公用程式 | — | 開啟 [情境用量視覺化面板](/docs/cli/commands/context). |
| **`/copy [n|btw]`** | 公用程式 | — | 複製最近一次代理回應、第 n 近的回應，或最新 [`/btw`](/docs/cli/commands/btw) 答案。 |
| **[`/credits`](/docs/cli/commands/credits)** | 帳戶 | — | 檢視剩餘的 G1 點數與購買連結。 |
| **[`/diff`](/docs/cli/commands/diff)** | 公用程式 | — | 開啟 [互動式差異檢視器](/docs/cli/commands/diff) 檢視變更、輪次與提交。 |
| **[`/effort`](/docs/cli/commands/effort) `[level]`** | 設定 | — | 設定或檢視使用中模型的 [推理強度等級](/docs/cli/commands/effort) (`low` 透過 `max`，視模型而定）。 |
| **`/exit`** | 核心 | `/quit` | 關閉 TUI 工作階段並還原您的主機殼層。 |
| **`/feedback`** | 公用程式 | — | 開啟意見回饋提交面板。 |
| **`/fork`** | 對話 | `/branch` | 將目前的對話串複製到新的平行工作階段。 |
| **[`/goal`](/docs/commands/goal)** `<objective>` | 推理 | — | 自主執行直到 [目標經驗證完成](/docs/commands/goal)，中間無暫停。 |
| **[`/grill-me`](/docs/commands/grill-me)** `[task]` | 規劃 | — | 讓代理 [訪談您](/docs/commands/grill-me) 在開始工作前，一次提出一個問題，並為每個問題提供建議答案。 |
| **`/help`** | 公用程式 | — | 開啟顯示指令與快速鍵的說明面板。 |
| **`/hooks`** | 工具 & 工作 | — | 瀏覽啟用中的飛行前／格式化後指令碼掛鉤。 |
| **`/keybindings`** | 設定 | — | 開啟互動式鍵盤快速鍵編輯器。 |
| **[`/learn`](/docs/commands/learn)** `[instruction]` | 工具 & 工作 | — | 將工作階段修正擷取為永久性 [規則或技能](/docs/commands/learn) 透過可檢閱的提案。 |
| **`/logout`** | 帳戶 | — | 中斷您的個人檔案連線，並從安全金鑰圈清除驗證權杖。 |
| **`/mcp`** | 工具 & 工作 | — | 開啟 Model Context Protocol (MCP) 伺服器管理員。 |
| **`/model`** | 設定 | — | 選擇你偏好的推理模型（會跨工作階段保留）。若要在不變更預設值的情況下以另一個模型執行單一提示詞，請使用 `/model <model> <prompt>`. |
| **`/open <path>`** | 公用程式 | — | 強制路徑在你的預設系統編輯器中開啟。 |
| **[`/permissions`](/docs/cli/commands/permissions)** | 設定 | — | 開啟互動式工具權限管理員面板。 |
| **[`/plan`](/docs/plan)** `[task]` | 規劃 | — | 探索程式碼庫、釐清需求，並起草一份可審閱的 [實作計畫](/docs/implementation-plan). |
| **[`/plugin`](/docs/plugins?tab=cli)** | 工具 & 工作 | `/plugins` | 開啟互動式 [外掛程式管理員](/docs/marketplace?tab=cli) 或內嵌執行 `install`, `uninstall`, `enable`, `disable`，與 `list` 指令。 |
| **`/rename <name>`** | 對話 | — | 重新命名目前的工作階段串。 |
| **[`/remote-control`](/docs/remote-control?tab=cli#interactive-mode) [on/off]** | 公用程式 | — | 為使用中的終端機工作階段切換 Remote Control。 |
| **[`/resume`](/docs/cli/commands/resume)** | 對話 | `/switch`, `/conversation` | 開啟 [對話選擇器覆蓋層](/docs/cli/commands/resume) 選取並載入先前的執行緒。 |
| **`/rewind`** | 對話 | `/undo` | 將您的對話記錄回滾至先前的訊息。 |
| **[`/schedule`](/docs/commands/schedule)** `<when> <task>` | 工具 & 工作 | — | 設定 [一次性計時器或重複性 cron 排程](/docs/commands/schedule) 以指令喚醒代理的… |
| **`/skills`** | 工具 & 工作 | — | 瀏覽已載入的本機與全域代理技能。執行 `/skills reload` 從磁碟重新載入技能。 |
| **[`/statusline`](/docs/cli/commands/statusline)** | 設定 | — | 開啟狀態列自訂覆疊層。 |
| **`/tasks`** | 工具 & 工作 | — | 開啟任務管理員面板以監控背景 shell 執行日誌。 |
| **[`/swarm`](/docs/swarm)** `<task>` | 推理 | — | 執行一個 [swarm](/docs/swarm) 具名工作者與一位驗證者，在共享訊息板上協調。 |
| **[`/swarm board`](/docs/swarm#live-board)** | 推理 | — | 開啟 [即時群組看板](/docs/swarm#live-board) 全螢幕（Alt+S). |
| **[`/teamwork`](/docs/teamwork)** `<task>` | 推理 | — | 啟動 [協作式多代理團隊](/docs/teamwork) 適用於長期專案（付費方案）。 |
| **[`/title`](/docs/cli/commands/title) [on/off]** | 設定 | — | 切換或設定終端機視窗標題更新。 |
| **[`/usage`](/docs/cli/commands/usage)** | 公用程式 | `/quota` | 顯示模型配額用量。 |
| **[`/voice`](/docs/cli/commands/voice)** | 公用程式 | — | 以語音與代理交談（`/voice live`）或口述提示詞（`/voice dictate`). `/record` 一律聽寫。 |

## 預設快速鍵繫結

[「預設按鍵繫結」章節](#default-keybindings)

下表列出將全域、提示詞、導覽與核准操作對應至鍵盤捷徑的指令。

### 全域控制項

[「全域控制」章節](#global-controls)

無論目前聚焦於哪個面板、覆蓋層或提示詞，這些快速鍵一律有效。

| 金鑰 | TUI 指令 | 動作行為 |
| --- | --- | --- |
| Esc | `cli.escape` | 關閉作用中的面板、停止作用中的串流，或清除空白提示詞。 |
| Ctrl + C | `cli.escape` | 中斷代理目前的回合。當沒有任何工作在執行時，按兩次即可結束 CLI。 |
| Ctrl + D | `cli.exit` | 離開 CLI 工作階段（僅在提示詞方塊為空時）。 |
| Ctrl + L | `cli.clear_screen` | 重新整理並清除視覺終端機緩衝區。 |

### 提示詞聚焦按鍵

[「提示詞焦點按鍵」章節](#prompt-focus-keys)

這些按鍵在提示詞方塊中撰寫指示時有效。

| 金鑰 | TUI 指令 | 動作行為 |
| --- | --- | --- |
| Enter | `cli.enter` | 將您的提示詞或目前的選單選項提交給代理。 |
| Shift + Enter / Ctrl + J | `prompt.insert_newline` | 插入乾淨的換行而不送出。 |
| Shift + Tab | `cli.cycle_mode` | 在執行模式之間循環切換 (`default` > `accept-edits` > `auto` > `plan`; `auto` 僅在可用的情況下）。 |
| Ctrl + V | `edit.paste` | 將圖形媒體檔案或剪貼簿區塊貼入提示詞。 |
| Ctrl + O | `view.toggle_trajectory` | 展開或收合詳細的工具推理輸出。 |
| Ctrl + R | `view.review_artifact` | 開啟產出物審查面板。 |
| Ctrl + G | `edit.open_editor` | 在外部編輯器中開啟您的提示詞（ `editor` 設定；預設為 `$EDITOR`). |
| Alt + J | `subagent.jump_to_waiting` | 即時將焦點切換至下一個等待確認的子代理。 |
| Ctrl + K | `subagent.approve_fast` | 即時核准狀態警示中列出的待確認子代理動作。 |
| Alt + S | `swarm.board` | 開啟 [即時群組看板](/docs/swarm#live-board) 全螢幕。 |
| Alt + X | `swarm.dismiss` | 關閉已完成群組的 [狀態列](/docs/swarm#live-status-line). |
| Ctrl + A | `—` | 將提示詞插入游標移至行首。 |
| Ctrl + E | `—` | 將提示詞插入游標移至行尾。 |
| Ctrl + _ / Ctrl + Shift + - | `edit.undo` | 還原上一個編輯。 |
| Ctrl + Shift + Z | `edit.redo` | 重做上一個復原的文字操作。 |
| Ctrl + D | `—` | 向前刪除（僅在提示詞框非空白時）。 |
| F5 | `voice.start_dictation` | 啟動或停止 [語音聽寫](/docs/cli/commands/voice). |

### 導覽與捲動

[「導覽與捲動」章節](#navigation-and-scrolling)

這些按鍵在選取面板、選單與可捲動文字方塊內有效。

| 金鑰 | TUI 指令 | 動作行為 |
| --- | --- | --- |
| ↑ / ↓ | `navigation.up` / `navigation.down` | 將反白選取項目向上或向下捲動一個項目。 |
| PgUp / Shift + ↑ | `navigation.page_up` / `navigation.half_page_up` | PgUp 將使用中的文字檢視區向上捲動一頁； Shift + ↑ 向上捲動半頁。 |
| PgDn / Shift + ↓ | `navigation.page_down` / `navigation.half_page_down` | PgDn 將使用中的文字檢視區向下捲動一頁； Shift + ↓ 向下捲動半頁。 |
| ← / → | `navigation.left` / `navigation.right` | 在多頁結構（如工作階段選擇器）內切換頁面。 |
| Tab | `navigation.tab` | 確認醒目提示的斜線指令自動填入選項。 |

### 工具確認

[「工具確認」章節](#tool-confirmations)

這些按鍵在確認提示期間有效。

| 金鑰 | TUI 指令 | 動作行為 |
| --- | --- | --- |
| y | `confirm.yes` | 授權建議的工具、指令或使用中產出物。 |
| n | `confirm.no` | 拒絕提議的工具、指令或使用中的產出物。 |
| Shift + A | `—` | （位於審查面板內）以單一動作核准所有生成的產出物（內建快速鍵）。 |

## 命令列旗標

[標題為「Command-line flags」的章節](#command-line-flags)

啟動時傳入啟動旗標 `agy` 設定工作階段或以非互動方式執行：

| 旗標 | 預設 | 描述 |
| --- | --- | --- |
| **`--mode`** | `""` | 設定代理 [執行模式](/docs/cli/modes) 用於此工作階段： `accept-edits`, `auto` (`v1.3.5+` 在 macOS 與 Linux 上， `v1.4.4+` 在 Windows 上；需要終端機沙箱；不適用於商務或企業版帳戶；如果無法使用，CLI 會在以下模式中執行： `default` 模式和 `auto` 會從 Shift+Tab 和 `/config`), or `plan`. |
| **`--model`** | — | 選取目前 CLI 工作階段的模型（請參閱 `agy models`). |
| **`--effort`** | — | 設定 [推理強度](/docs/cli/commands/effort) 用於目前的 CLI 工作階段 (`low` 透過 `max`，視模型而定）。 |
| **`--agent`** | — | 選取目前 CLI 工作階段的代理（請參閱 `agy agents`). |
| **`--add-dir`** | `[]` | 將目錄加入工作區（可重複）。 |
| **`-c`**, **`--continue`** | `false` | 繼續最近的對話。 |
| **`--conversation`** | — | 依 ID 繼續先前的對話。 |
| **`-i`**, **`--prompt-interactive`** | — | 以互動方式執行初始提示詞並繼續工作階段。 |
| **`-p`**, **`--print`**, **`--prompt`** | — | 以非互動方式執行單一提示詞，位於 [無頭模式](/docs/cli/headless) 並印出回應。 |
| **`--output-format`** | `text` | 列印模式的輸出格式（`text`, `json`, `stream-json`). |
| **`--input-format`** | `text` | 列印模式的輸入格式 (`text`, `stream-json`). |
| **`--json-schema`** | — | JSON schema 字串或 schema 檔案路徑，用於在列印模式中強制結構化輸出。 |
| **`--print-timeout`** | `0s` | 列印模式的選用時間限制（`0` 等到回合完成為止）。 |
| **`--disable-slash-commands`** | `false` | 在列印模式下停用斜線指令和技能展開。 |
| **`--sandbox`** | `false` | 在啟用 OS 隔離限制的終端機沙箱中執行（在 `v1.4.4+`, 若您的電腦無法使用沙箱，則不會有任何效果). |
| **`--dangerously-skip-permissions`** | `false` | 自動核准所有工具權限要求，不進行提示。 |
| **`--remote-control`** | `false` | 建立 [遠端控制](/docs/remote-control?tab=cli) 在啟動時供 CLI 工作階段使用的連線。 |
| **`--remote-agent`** | `false` | 在⋯上執行工作階段的對話 [遠端代理](/docs/remote-agents?tab=cli)。使用 `--project`，它們會在具有該名稱或 ID 的遠端專案中開啟；否則，會在這部電腦的預設遠端專案中開啟。 |
| **`--project`** | — | 目前 CLI 工作階段的專案 ID 或專案名稱。 |
| **`--new-project`** | `false` | 為此工作階段建立一個新專案。 |
| **`--log-file`** | — | 覆寫 CLI 記錄檔路徑。 |

## 設定鍵（`settings.json`)

[「設定鍵（settings.json）」章節](#configuration-keys-settingsjson)

本節列出您可以在下列檔案中設定的每個鍵： `~/.gemini/antigravity-cli/settings.json`, 包含其類型與預設值。您省略的鍵會使用其預設值。關於 CLI 如何讀取與儲存檔案，以及接受物件的鍵，請參閱 [CLI 設定](/docs/settings?tab=cli).

### 範例 `settings.json`

[「settings.json 範例」章節](#example-settingsjson)

```
{
    "agentMode": "auto",
    "colorScheme": "tokyo night",
    "altScreenMode": "always",
    "toolPermission": "proceed-in-sandbox",
    "notifications": true,
    "enableTerminalSandbox": true
}
```

若要在 VS Code 等編輯器中取得自動完成與驗證功能，請新增 `"$schema": "https://antigravity.google/schemas/v1/settings.json"` 位於檔案頂部。詳情請參閱 [編輯器自動完成與驗證](/docs/settings?tab=cli#editor-autocomplete-and-validation).

| 選項鍵名稱 | 值類型 | 系統預設值 | 參數特性 & 選項 |
| --- | --- | --- | --- |
| **`agentMode`** | 字串 | `""` （預設模式） | 預設啟動方式 [執行模式](/docs/cli/modes): `""` （標準 `default` 模式）， `"accept-edits"` （自動核准工作區檔案編輯）， `"auto"` (`v1.3.5+` 在 macOS 與 Linux 上， `v1.4.4+` 在 Windows 上；需要終端機沙箱；會自動核准編輯、預設在終端機沙箱中執行命令，並自動檢查任何需要在沙箱外執行的命令，讓安全、可還原的命令無須提示即可執行，而不可還原的動作仍會提示；不適用於商務或企業版帳戶；如果無法使用，CLI 會在以下模式中執行： `default` 模式和 `auto` 會從 Shift+Tab 和 `/config`), or `"plan"` （在撰寫程式碼前先研究並擬定大綱）。可透過下列方式依工作階段覆寫： `--mode`. |
| **`colorScheme`** | 字串 | `"terminal"` | 色彩主題： `"light"`, `"solarized light"`, `"colorblind-friendly light"`, `"dark"`, `"solarized dark"`, `"colorblind-friendly dark"`, `"tokyo night"`，或 `"terminal"` （繼承原生 Shell 色彩）。 |
| **`altScreenMode`** | 字串 | `"default"` | 螢幕緩衝區用量： `"default"` （以行內方式呈現對話，並在替換畫面中開啟全螢幕檢視）， `"always"` （在替換畫面中執行整個 TUI），或 `"never"` （從不使用替換畫面；僅適用於 `settings.json`). |
| **`toolPermission`** | 字串 | `"request-review"` | 全域安全預設： `"request-review"` （對 write、bash、網路與 MCP 工具提示，除非允許規則涵蓋它們）， `"proceed-in-sandbox"` （當沙箱開啟且指令在其中執行時，執行終端機指令不提示；在 `v1.4.4+`，行為類似 `"request-review"` 若沙箱無法使用）， `"always-proceed"` （執行指令、網路要求與 MCP 工具時不提示，除非詢問或拒絕規則相符），或 `"strict"` （在每個工具動作前提示，包括檔案讀取，即使允許規則相符亦然）。拒絕規則適用於每種模式。 |
| **`artifactReviewPolicy`** | 字串 | `"asks-for-review"` | 當代理就產出物（例如實作計畫）徵求意見回饋時，是否等待您的審查： `"asks-for-review"` （一律等待）， `"agent-decides"` （目前與以下相同： `"asks-for-review"`), or `"always-proceed"` （從不等待）。不影響檔案編輯。 |
| **`notifications`** | boolean | `false` | 當代理需要您的核准或答覆，或完成其回合時，響起終端機鈴聲並顯示桌面通知。 |
| **`showTips`** | boolean | `true` | 在代理產生回覆時顯示有用的使用提示。 |
| **`showFeedbackSurvey`** | boolean | `true` | 在作用中任務完成時顯示定期品質意見回饋調查。 |
| **`editor`** | 字串 | `"auto"` | 用於開啟產出物和檔案以及撰寫提示詞的外部編輯器 (Ctrl + G): `"auto"` （使用 `$EDITOR`, 然後改用 `vim`，或 `edit` 和 `notepad` 在 Windows 上）， `"vim"`, `"emacs"`, 或任何其他編輯器指令. |
| **`editorMode`** | 字串 | `"default"` | 提示詞編輯模型： `"default"` （純文字編輯）或 `"vim"` （模態編輯）。有別於 `editor`，選取外部程式。請參閱 [Vim 編輯器模式](/docs/cli/vim-editor-mode). |
| **`vimInsertFirst`** | boolean | `false` | 以插入模式啟動 Vim 編輯，並建立空白的 Enter 提交。需要 `editorMode` 設為 `"vim"`. |
| **`allowNonWorkspaceAccess`** | boolean | `false` | 讓代理能讀取並編輯工作區資料夾之外的檔案，但須遵守 `toolPermission`, `agentMode`，以及您的權限規則。 |
| **`enableTerminalSandbox`** | boolean | `false` | 將代理啟動的所有本機執行指令限制在 OS 隔離環內（在 `v1.4.4+`, 若您的電腦無法使用沙箱，則不會有任何效果). |
| **`useG1Credits`** | boolean | `false` | 在您方案的配額用完後，使用您的 AI 點數進行模型請求。不適用於商業帳戶。 |
| **`verbosity`** | 字串 | `"medium"` | 視覺詳細程度： `"high"` （完整呈現每個工具呼叫、指令與想法）， `"medium"` （將相關的工具呼叫與想法彙整為摘要，同時保持指令與回應可見），或 `"low"` （僅呈現回應，並將工具活動收合為 token 用量摘要）。 |
| **`runningLightSpeed`** | 字串 | `"medium"` | 視覺跑馬燈進度動畫速度： `"fast"`, `"medium"`, `"slow"`，或 `"off"`. |
| **`copyOnSelect`** | boolean | `true` | 在替代畫面模式中，當您放開滑鼠選取時，會將文字複製到剪貼簿。當 `false`, 產出物檢視器會使用您終端機本身的文字選取功能. |
| **`hideActiveItems`** | boolean | `false` | 隱藏提示框下方使用中的子代理與背景工作清單 (**顯示進行中的任務** 於 `/config`). |
| **`pickerGrouping`** | 字串 | `"none"` | 如何 [`/resume`](/docs/cli/commands/resume) 選擇器會列出對話： `"none"` （單一清單，最近的優先）或 `"grouped"` （依工作區分組）。 |
| **`queuedMessages`** | 字串 | `"queue"` | 當代理正在工作時，您傳送的訊息會如何處理： `"queue"` （保留至目前輪次結束）或 `"send-immediately"` （中斷代理並立即傳送）。 |
| **`clearScrollbackOnResize`** | boolean | `true` | 在行內呈現中，當 CLI 重繪對話時（例如您調整視窗大小後），會清除終端機的回捲緩衝區。 |
| **`disableSlashCommands`** | boolean | `false` | 於 [無頭模式](/docs/cli/headless) (`-p`），傳送以此開頭的提示詞 `/` 依輸入內容處理，而非執行斜線指令或技能。與以下相同： `--disable-slash-commands`. |
| **`historySize`** | 整數 | `2000` | 保存在磁碟上的提示詞歷史記錄項目，會在 CLI 結束時修剪： `-1` 保留每個項目，且 `0` 清除歷史紀錄。 |
| **`model`** | 字串 | `""` | 您使用下列按鍵選擇的模型 `/model`, 依其標籤儲存. |
| **`modelProvider`** | 字串 | `""` | `"gemini"` 直接將模型請求傳送至 Gemini API，金鑰位於 `GEMINI_API_KEY` ([使用 Gemini API 金鑰](/docs/install#using-a-gemini-api-key)). |
| **`trustedWorkspaces`** | string[] | `[]` | 您在 CLI 詢問時選擇信任的資料夾。CLI 會為您新增項目。 |
| **`useTerminalCursor`** | boolean | `false` | 使用您終端機本身的游標形狀，而不是方塊游標。 |
| **`permissions`** | 物件 | — | 代理工具的允許、詢問與拒絕規則。請參閱 [`permissions`](/docs/settings?tab=cli#permissions). |
| **`statusLine`** | 物件 | — | 自訂狀態列腳本。請參閱 [`statusLine` 和 `title`](/docs/settings?tab=cli#statusline-and-title). |
| **`title`** | 物件 | — | 自訂終端機標題腳本。請參閱 [`statusLine` 和 `title`](/docs/settings?tab=cli#statusline-and-title). |
| **`sandboxProxy`** | 物件 | — | 用於沙箱化終端機指令的 HTTP 代理。請參閱 [`sandboxProxy`](/docs/settings?tab=cli#sandboxproxy). |
| **`customModelsConfig`** | 物件 | — | Gemini API 金鑰設定的額外模型。請參閱 [`customModelsConfig` 和 `gcp`](/docs/settings?tab=cli#custommodelsconfig-and-gcp). |
| **`gcp`** | 物件 | — | 由以下項目儲存 **使用 Google Cloud 專案** 登入。請參閱 [`customModelsConfig` 和 `gcp`](/docs/settings?tab=cli#custommodelsconfig-and-gcp). |

**啟用遙測** 於 `/config` 沒有 `settings.json` 鍵：CLI 會將該選擇與您的帳戶一起保存。

## 後續步驟

[「後續步驟」章節](#next-steps)

了解如何安全地部署權限政策、沙箱並自訂外掛：

- **[CLI 設定](/docs/settings?tab=cli)**: 使用互動式 `/config` 面板，選擇呈現模式，並查看 CLI 如何讀取與儲存 `settings.json`.
- **[權限與沙箱](/docs/sandbox?tab=cli)**：強制執行命令列隔離規則。
- **[外掛程式與技能](/docs/plugins?tab=cli)**：建立您自己的自訂技能斜線指令。
- **[安裝與驗證](/docs/install)**：更新您的 CLI 安裝。

[上一個
其他編輯器 (ACP)](/docs/ide/extensions/acp/)

[下一步
CLI 功能](/docs/features?tab=cli#antigravity-cli-features)

您的下載已開始

## 您如何得知我們？

請選一個。這有助於我們接觸更多像您一樣的人。

感謝您讓我們知道！
