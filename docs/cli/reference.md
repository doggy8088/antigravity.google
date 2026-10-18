# CLI 指令

CLI 指令 - Antigravity CLIcliAntigravity CLI開始使用CLI 指令 - Antigravity CLI Antigravity CLI 開始使用Antigravity CLI
# CLI 指令
[「CLI 指令」章節](#cli-commands)
審查列出所有 TUI 斜線指令、預設鍵盤快速鍵與 JSON 設定參數的表格。

## 核心斜線指令
[「核心斜線指令」章節](#core-slash-commands)
類型 `/` 於提示詞方塊內部開啟前置輸入指令選取選單。

| 指令 | 類別 | 別名 | 執行目的 |
| --- | --- | --- | --- |
| /add-dir <path> | 公用程式 | — | 將目錄路徑新增至使用中的工作區。 |
| /agents | 工具 & 工作 | — | 開啟 代理管理員面板 切換自訂代理並監控背景子代理。 |
| /artifact | 工具 & 工作 | — | 開啟產出物審查面板。 |
| /boost <task> | 推理 | — | 執行隨選的多代理深度推理循環。 |
| /browser <task> | 工具 & 工作 | — | 將網頁瀏覽、UI 驗證與瀏覽器內偵錯委派給 瀏覽器子代理 . |
| /btw <query> | 公用程式 | — | 詢問 在背景執行的旁支問題 不中斷主對話。 |
| /changelog | 公用程式 | — | 開啟 互動式版本說明檢視器 或於無頭模式列印 CLI 變更。 |
| /clear | 公用程式 | /new | 清除終端機並重設作用中的對話情境。 |
| /config | 設定 | /settings | 開啟互動式設定編輯器覆疊層。 |
| /context | 公用程式 | — | 開啟 情境用量視覺化面板 . |
| /copy [n|btw] | 公用程式 | — | 複製最近一次代理回應、第 n 近的回應，或最新 /btw 答案。 |
| /credits | 帳戶 | — | 檢視剩餘的 G1 點數與購買連結。 |
| /diff | 公用程式 | — | 開啟 互動式差異檢視器 檢視變更、輪次與提交。 |
| /effort [level] | 設定 | — | 設定或檢視使用中模型的 推理強度等級 ( low 透過 max ，視模型而定）。 |
| /exit | 核心 | /quit | 關閉 TUI 工作階段並還原您的主機殼層。 |
| /fast | 設定 | — | 啟用快速模式（略過推理計畫）以執行快速動作。 |
| /feedback | 公用程式 | — | 開啟意見回饋提交面板。 |
| /fork | 對話 | /branch | 將目前的對話串複製到新的平行工作階段。 |
| /goal <objective> | 推理 | — | 自主執行直到 目標經驗證完成 ，中間無暫停。 |
| /help | 公用程式 | — | 開啟顯示指令與快速鍵的說明面板。 |
| /hooks | 工具 & 工作 | — | 瀏覽啟用中的飛行前／格式化後指令碼掛鉤。 |
| /keybindings | 設定 | — | 開啟互動式鍵盤快速鍵編輯器。 |
| /learn [instruction] | 工具 & 工作 | — | 將工作階段修正擷取為永久性 規則或技能 透過可檢閱的提案。 |
| /logout | 帳戶 | — | 中斷您的個人檔案連線，並從安全金鑰圈清除驗證權杖。 |
| /mcp | 工具 & 工作 | — | 開啟 Model Context Protocol (MCP) 伺服器管理員。 |
| /model | 設定 | — | 選擇您偏好的推理模型（會在工作階段之間保留）。 |
| /open <path> | 公用程式 | — | 強制路徑在你的預設系統編輯器中開啟。 |
| /permissions | 設定 | — | 開啟互動式工具權限管理員面板。 |
| /planning | 設定 | — | 啟用多回合計畫產生模式，以處理複雜的工程任務。 |
| /plugin | 工具 & 工作 | /plugins | 開啟互動式 外掛程式管理員 或內嵌執行 install , uninstall , enable , disable ，與 list 指令。 |
| /rename <name> | 對話 | — | 重新命名目前的工作階段串。 |
| /remote-control [on/off] | 公用程式 | — | 為使用中的終端機工作階段切換 Remote Control。 |
| /resume | 對話 | /switch , /conversation | 開啟 對話選擇器覆蓋層 選取並載入先前的執行緒。 |
| /rewind | 對話 | /undo | 將您的對話記錄回滾至先前的訊息。 |
| /schedule <when> <task> | 工具 & 工作 | — | 設定 一次性計時器或重複性 cron 排程 以指令喚醒代理的… |
| /skills | 工具 & 工作 | — | 瀏覽已載入的本機與全域代理技能。 |
| /statusline | 設定 | — | 開啟狀態列自訂覆疊層。 |
| /tasks | 工具 & 工作 | — | 開啟任務管理員面板以監控背景 shell 執行日誌。 |
| /teamwork-preview <task> | 推理 | /teamwork | 啟動 協作式多代理團隊 適用於長期專案（付費方案）。 |
| /title [on/off] | 設定 | — | 切換或設定終端機視窗標題更新。 |
| /usage | 公用程式 | /quota | 顯示模型配額用量。 |
| /voice | 公用程式 | /record | 使用麥克風以語音輸入提示詞。 |

## 預設快速鍵繫結
[「預設按鍵繫結」章節](#default-keybindings)
下表列出將全域、提示詞、導覽與核准操作對應至鍵盤捷徑的指令。

### 全域控制項
[「全域控制」章節](#global-controls)
無論目前聚焦於哪個面板、覆蓋層或提示詞，這些快速鍵一律有效。

| 金鑰 | TUI 指令 | 動作行為 |
| --- | --- | --- |
| Esc | cli.escape | 關閉作用中的面板、停止作用中的串流，或清除空白提示詞。 |
| Ctrl+C | cli.exit | 終止 CLI 工作階段（若代理正在工作，會提示確認）。 |
| Ctrl+D | cli.exit | 離開 CLI 工作階段（僅在提示詞方塊為空時）。 |
| Ctrl+L | cli.clear_screen | 重新整理並清除視覺終端機緩衝區。 |

### 提示詞聚焦按鍵
[「提示詞焦點按鍵」章節](#prompt-focus-keys)
這些按鍵在提示詞方塊中撰寫指示時有效。

| 金鑰 | TUI 指令 | 動作行為 |
| --- | --- | --- |
| Enter | prompt.submit | 將您的提示詞或目前的選單選項提交給代理。 |
| Shift+Enter / Ctrl+J | prompt.newline | 插入乾淨的換行而不送出。 |
| Ctrl+V | prompt.paste | 將圖形媒體檔案或剪貼簿區塊貼入提示詞。 |
| Ctrl+O | prompt.toggle_trajectory | 展開或收合詳細的工具推理輸出。 |
| Ctrl+R | prompt.open_review | 開啟產出物審查面板。 |
| Ctrl+G | prompt.external_editor | 啟動您的預設 $EDITOR 殼層來撰寫提示詞。 |
| Alt+J | prompt.teleport_agent | 即時將焦點切換至下一個等待確認的子代理。 |
| Ctrl+K | prompt.fast_approve | 即時核准狀態警示中列出的待確認子代理動作。 |
| Ctrl+A | prompt.cursor_start | 將提示詞插入游標移至行首。 |
| Ctrl+E | prompt.cursor_end | 將提示詞插入游標移至行尾。 |
| Ctrl+Z | prompt.undo_text | 還原上一個編輯。 |
| Ctrl+Shift+Z | prompt.redo_text | 重做上一個復原的文字操作。 |
| Ctrl+D | — | 向前刪除（僅在提示詞框非空白時）。 |
| F5 | voice.start_dictation | 啟動或停止 語音聽寫 . |

### 導覽與捲動
[「導覽與捲動」章節](#navigation-and-scrolling)
這些按鍵在選取面板、選單與可捲動文字方塊內有效。

| 金鑰 | TUI 指令 | 動作行為 |
| --- | --- | --- |
| ↑ / ↓ | navigation.up / navigation.down | 將反白選取項目向上或向下捲動一個項目。 |
| PgUp / Shift+↑ | navigation.page_up | 將使用中的文字檢視區向上捲動一個頁面區塊。 |
| PgDn / Shift+↓ | navigation.page_down | 將使用中的文字檢視區向下捲動一個頁面區塊。 |
| ← / → | navigation.left / navigation.right | 在多頁結構（如工作階段選擇器）內切換頁面。 |
| Tab | navigation.tab | 確認醒目提示的斜線指令自動填入選項。 |

### 工具確認
[「工具確認」章節](#tool-confirmations)
這些按鍵在確認提示期間有效。

| 金鑰 | TUI 指令 | 動作行為 |
| --- | --- | --- |
| y | confirm.yes | 授權建議的工具、指令或使用中產出物。 |
| n | confirm.no | 拒絕提議的工具、指令或使用中的產出物。 |
| A | — | （位於審查面板內）以單一動作核准所有生成的產出物（內建快速鍵）。 |

## 設定鍵（ settings.json )
[「設定鍵（settings.json）」章節](#configuration-keys-settingsjson)
本節列出主要設定鍵名、資料型別、系統預設值與預期參數。

### 範例 settings.json
[「settings.json 範例」章節](#example-settingsjson)
```
{
    "colorScheme": "tokyo night",
    "altScreenMode": "always",
    "toolPermission": "request-review",
    "notifications": true,
    "enableTerminalSandbox": true
}
```

| 選項鍵名稱 | 值類型 | 系統預設值 | 參數特性 & 選項 |
| --- | --- | --- | --- |
| colorScheme | 字串 | "terminal" | 色彩主題： "light" , "solarized light" , "colorblind-friendly light" , "dark" , "solarized dark" , "colorblind-friendly dark" , "tokyo night" ，或 "terminal" （繼承原生 Shell 色彩）。 |
| altScreenMode | 字串 | "default" | 螢幕緩衝區用量： "default" （適應性 inline/altscreen）， "always" （強制使用替代畫面緩衝區），或 "never" （強制行內循序輸出）。 |
| toolPermission | 字串 | "request-review" | 全域安全預設： "request-review" （對寫入/bash/網頁工具提示）， "proceed-in-sandbox" （在沙箱內自動繼續）， "always-proceed" （永不提示），或 "strict" （對所有非讀取工具提示）。 |
| artifactReviewPolicy | 字串 | "asks-for-review" | 程式碼審查政策： "asks-for-review" （寫入程式碼前一律提示）， "agent-decides" （動態提示），或 "always-proceed" （永不提示）。 |
| notifications | boolean | false | 在任務完成時發出系統桌面與終端機鈴聲通知。 |
| showTips | boolean | true | 在生成回合期間，於提示詞面板上方顯示實用的代理式技巧。 |
| showFeedbackSurvey | boolean | true | 在作用中任務完成時顯示定期品質意見回饋調查。 |
| editor | 字串 | "auto" | 目標文字編輯器公用程式： "auto" （諮詢系統 $EDITOR ), "vim" , "emacs" ，或自訂文字標籤。 |
| editorMode | 字串 | "default" | 提示詞編輯模型： "default" （純文字編輯）或 "vim" （模態編輯）。有別於 editor ，選取外部程式。請參閱 Vim 編輯器模式 . |
| vimInsertFirst | boolean | false | 以插入模式啟動 Vim 編輯，並建立空白的 Enter 提交。需要 editorMode 設為 "vim" . |
| allowNonWorkspaceAccess | boolean | false | 允許代理的檔案讀寫工具瀏覽已辨識的 Git/工作區根目錄之外的位置。 |
| enableTerminalSandbox | boolean | false | 將代理啟動的所有本機執行指令限制在作業系統隔離環中。 |
| useG1Credits | boolean | false | 僅限外部版本。 方案配額用罄後，模型呼叫會使用個人 AI 點數。 |
| enableTelemetry | boolean | true | 允許指標收集與當機記錄串流，以提升工具可靠性。 |
| verbosity | 字串 | "high" | 視覺詳細程度： "high" （渲染完整的思考過程與工具輸出）或 "low" （僅顯示最少的視覺進度指示器）。 |
| runningLightSpeed | 字串 | "medium" | 視覺跑馬燈進度動畫速度： "fast" , "medium" , "slow" ，或 "off" . |

## 後續步驟
[「後續步驟」章節](#next-steps)
了解如何安全地部署權限政策、沙箱並自訂外掛：

- [權限與沙箱](/docs/cli/sandbox) ：強制執行命令列隔離規則。
- [外掛程式與技能](/docs/cli/plugins) ：建立您自己的自訂技能斜線指令。
- [安裝與驗證](/docs/cli/install) ：更新您的 CLI 安裝。
[上一個  
Xcode](/docs/ide/extensions/xcode/)[下一步  
CLI 功能](/docs/cli/features/)
