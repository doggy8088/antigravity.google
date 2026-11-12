瀏覽器指令（/browser）
2-0
Antigravity 應用程式
功能
瀏覽器指令（/browser）Antigravity App 功能
Antigravity 應用程式
Antigravity CLI
適用於：
Antigravity 應用程式
Antigravity CLI
# 瀏覽器指令（/browser）

[「瀏覽器指令（/browser）」章節](#browser-command-browser)

將網頁任務直接交給 **`browser` 子代理** 以開啟頁面、與執行中的應用程式互動、檢查主控台與網路活動、擷取
螢幕截圖，並驗證視覺修正。

## 總覽

[「總覽」章節](#overview)

許多開發工作最終都需要在瀏覽器中完成：確認版面修正已正確呈現、重現主控台錯誤、完整填寫表單，或驗證登入流程。輸入 `/browser` 指示主要代理將您的
請求委派給專門的 `browser` 子代理會在各自隔離的內容
視窗中執行：

- **Antigravity App（內建瀏覽器、個人 Google 帳戶 `v2.30.0+`)**： 子代理不會建立個別的 Chrome 設定檔。相反地，它會透過 Chrome 的 遠端偵錯，連接到您電腦上已在執行的 Google Chrome，並在該瀏覽器中工作。 **停止** 接管按鈕，以及暫停與恢復登入 交接。在這些帳戶中，主要代理也會啟動 `browser` 子代理會 根據一般語言提示詞自動啟動——您無須輸入 `/browser` 除非您想強制執行瀏覽器子代理。如需完整的 App 導覽與示範，請參閱 [瀏覽器使用](/docs/browser).
- **Antigravity CLI、Antigravity IDE（`v2.6.0+`)，以及 Antigravity App 中的商務／企業 帳號 (Chrome DevTools MCP)**：涵蓋`v144+`) 透過 Chrome DevTools MCP 伺服器， Antigravity 會在以下情況自動啟動該伺服器： `/browser` 遭到呼叫（使用 `npx` 在 CLI 與 IDE 中，或 App 內建的 Node.js 執行環境）。支援 Chrome DevTools 效能追蹤、Lighthouse 稽核、堆積快照、裝置／網路 節流、自訂指令碼評估（`evaluate_script`)，以及與頁面互動時可選的 WebM 工作階段錄影。Chrome 必須已在同一台電腦上執行並啟用遠端偵錯；請參閱 [設定 Chrome](#set-up-chrome).

## 執行瀏覽器任務

[「執行瀏覽器工作」章節](#run-a-browser-task)

類型 `/browser` 後接任務。描述清楚的結束條件，讓
子代理知道何時回傳，例如「回報 X 是否渲染」或「擷取
Y 的螢幕截圖」。

- [Antigravity 應用程式](#tab-panel-142)
- [Antigravity CLI](#tab-panel-143)

### Antigravity 應用程式

[「Antigravity App」章節](#sr-tab-1)

類型 `/browser` 在訊息方塊中（或在個人 Google 帳戶上，於
`v2.30.0+`，以自然語言詢問)：

```
/browser Open http://localhost:3000, resize to a 390px-wide mobile viewport, verify the navigation drawer opens and closes, and capture a screenshot of each state
```

在個人 Google 帳戶上（`v2.30.0+`)，內建瀏覽器會開啟側邊面板
分頁，您可以在其中即時觀看子代理，或點選 **停止** 以接管，或
點按對話中子代理的名稱以檢查其步驟記錄：

在 Antigravity App 中執行瀏覽器子代理（個人帳戶 v2.30.0 以上版本，可透過 /browser 或自然語言）：觀看子代理在內建瀏覽器分頁中開啟 localhost:5174/checkout、使用即時動畫游標重現計算錯誤，並在套用程式碼修正後驗證更新後的總計。

若要為螢幕截圖加上註解，請要求代理將其儲存至對話的
產出物，或按一下 **將螢幕截圖加入對話** 在瀏覽器工具列中。如需
平行分頁與登入交接示範，請參閱 [瀏覽器使用](/docs/browser)
和 [螢幕截圖](/docs/screenshots).

### Antigravity CLI

[「Antigravity CLI」章節](#sr-tab-2)

請確認已啟用 Chrome 遠端偵錯（請參閱
[設定 Chrome](#set-up-chrome))，然後在互動式
提示詞中輸入指令：

```
/browser Open http://localhost:3000/dashboard, verify that the analytics charts render, and report any console errors
```

按下 Alt + J 或執行 [`/agents`](/docs/cli/commands/agents)
以切換至子代理的對話並觀看其工作，或按下
Ctrl + K 以核准來自您主要對話的網站
請求。

## 設定 Chrome

[標題為「設定 Chrome」的章節](#set-up-chrome)

執行時 `/browser` 在 Antigravity CLI、Antigravity IDE 中
（`v2.6.0+`，或 Google Antigravity VS Code 擴充功能 `v1.9.0+`)，或在 Antigravity App 中的
商務或企業帳號上，子代理會連接到已在
Google Chrome (144 版或更新版本) 上執行的 **同一台本機
電腦** 做為您的工作區（遠端 SSH、Dev Container 與雲端工作站
工作階段無法連接至您本機電腦上的 Chrome）。它不會為您啟動
Chrome，且 Chrome 無需登入。在執行之前
`/browser`:

1. **在 Antigravity CLI 或 IDE 中**：探索 Antigravity 中的每個斜線指令。 [Node.js](https://nodejs.org/) 已 安裝，因此 `npx` 在您的 `PATH` (用於啟動 `chrome-devtools-mcp`；每個指令現在都會成為以其資料夾命名的技能，包括沒有 frontmatter 的指令，或含有 Claude Code 風格值 (例如
2. 開啟 Google Chrome（`v144+`).
3. 前往 `chrome://inspect/#remote-debugging`.
4. 開啟 **允許這個瀏覽器執行個體進行遠端偵錯**.

如果遠端偵錯已關閉，Antigravity 會顯示 **需要遠端偵錯**
執行這些步驟。當子代理連線時，Chrome 會要求您允許遠端
偵錯——請點按 **允許** 在 60 秒內，以便子代理可以附加至
瀏覽器。

## 瀏覽器子代理能做什麼

[「瀏覽器子代理可執行的作業」章節](#what-the-browser-subagent-can-do)

兩種瀏覽器引擎都能瀏覽頁面、點擊、懸停、拖曳、輸入、上傳核准的
檔案、擷取螢幕截圖與頁面快照、調整檢視區大小，並檢查
主控台錯誤與網路請求。透過 Chrome
DevTools MCP 連線至 Chrome 時，子代理還會額外提供 DevTools 效能分析與稽核
工具：

| 功能 | 內建瀏覽器（App `v2.30.0+`，個人帳號) | Chrome DevTools MCP（CLI、IDE 與 App 商務版／企業版） |
| --- | --- | --- |
| **導覽與管理分頁** | 開啟網址、等待頁面載入，並執行多個 `browser` 子代理會在平行的隔離分頁中執行。 | 開啟網址、建立或關閉頁面、切換分頁，並等待元素或文字出現。 |
| **與頁面互動** | 點擊、雙擊、右鍵點擊、懸停、拖曳、捲動、按鍵、輸入文字、選取選項，以及上傳或下載核准的檔案，並即時顯示游標位置與 **停止** takeover. | 點擊、懸停、拖曳、按鍵、輸入文字、填寫欄位或表單、上傳檔案，以及處理對話方塊。 |
| **檢查狀態** | 擷取頁面快照與螢幕截圖，並讀取主控台訊息與經過清理的網路請求。 | 擷取無障礙快照與螢幕截圖、列出主控台訊息與網路請求，並錄製選用的 WebM 互動影片。 |
| **偵錯、效能分析與模擬** | 調整可視區域大小，並驗證即時熱重載變更，無需外部設定。 | 評估 JavaScript（`evaluate_script`)，執行效能追蹤與 Lighthouse 稽核、擷取堆積快照，並模擬緩慢網路或 CPU 節流。 |

在 Antigravity 應用程式中 (`v2.30.0+`)，開啟 **設定** > **瀏覽器** 然後前往
 **瀏覽器子代理** 區段來設定瀏覽器權限：

- **瀏覽器操作規則**：按一下 **編輯** 以管理 **執行網址** (子代理無須詢問即可開啟或絕對不得開啟的網站) 以及 **下載檔案** (子代理可從中下載的網站)。如需瞭解比對規則， `localhost:port` 隔離，以及企業網域政策，請參閱 [允許清單與拒絕清單](/docs/ide/allowlist-denylist).
- **瀏覽器 Javascript 執行政策** *(僅限 Chrome DevTools MCP)*：選擇在對話中點選網頁連結時，是否在以下位置開啟`evaluate_script`) 在頁面中。 **要求審查** (預設值) 會先徵求您的核准， **一律繼續** 會執行指令碼而不詢問，且 **已停用** 加以封鎖。 當內建瀏覽器代理啟用時，不會使用任意頁面內 JavaScript 執行，因此會隱藏此設定。

如果你的組織管理員已停用瀏覽器子代理，該
區段會顯示通知而非這些設定。在 Antigravity IDE
（`v2.6.0+`)，點選 **Antigravity** 在狀態列中選取 **開啟
設定** > **瀏覽器** 以管理相同的控制項；請參閱
[IDE 瀏覽器總覽](/docs/ide/browser).

## 範例任務

[「工作範例」章節](#example-tasks)

下列提示詞顯示典型的 `/browser` 工作流程：

- **驗證 UI 修正**: `/browser Reload http://localhost:5173/settings and confirm the save button is no longer disabled after editing the display name`
- **重現主控台錯誤**: `/browser Go to http://localhost:3000/checkout, add any item to the cart, and report the full text and stack of any console errors`
- **檢查回應式與低速網路行為**: `/browser Load http://localhost:3000 with a Slow 3G network profile and a 375px viewport, then screenshot the hero section once it finishes loading`
- **研究文件**: `/browser Open the Astro docs for content collections and summarize how to define a schema with zod`

## 後續步驟

[「後續步驟」章節](#next-steps)

探索相關文件：

- [瀏覽器使用](/docs/browser)：當瀏覽器子代理開啟頁面或觸發檔案下載時，它會檢查您的
- [子代理](/docs/subagents)：了解內建與自訂子代理如何在 隔離上下文中執行。
- [權限](/docs/permissions)：控制哪些瀏覽器工具 自動執行，哪些先詢問。
- [產出物](/docs/artifacts)：尋找子代理產生的 螢幕截圖與工作階段錄影。
- [斜線指令總覽](/docs/slash-commands)：瀏覽所有可用的 斜線指令。

[上一個
/boost](/docs/boost/)

[下一步
/btw](/docs/cli/commands/btw/)

您的下載已開始

## 您如何得知我們？

請選一個。這有助於我們接觸更多像您一樣的人。

感謝您讓我們知道！
