瀏覽器總覽 - Antigravity IDE
antigravity-ide
Antigravity IDE
功能
瀏覽器總覽 - Antigravity IDE Antigravity IDE 功能
Antigravity IDE
適用於：
Antigravity IDE
# IDE 瀏覽器總覽

[標題為「IDE 瀏覽器總覽」的章節](#ide-browser-overview)

在 Antigravity IDE 中（`v2.6.0+`) 以及 Google Antigravity VS Code 擴充功能 (`v1.9.0+`)，代理可以透過以下方式開啟、讀取並操作本機 Google Chrome 瀏覽器 [`/browser`](/docs/commands/browser) 以測試本機開發網站、閱讀文件並驗證視覺變更。

---

## 前置需求與設定

[標題為「前置需求與設定」的章節](#prerequisites-and-setup)

類型 [`/browser`](/docs/commands/browser) 後方接著您的任務，位於 Antigravity 面板中，以將網頁檢查委派給 `browser` 子代理（一般語言提示詞不會在 IDE 中自動啟動瀏覽器子代理）。子代理會透過 Chrome DevTools MCP 伺服器驅動您本機的 Google Chrome，該伺服器由 Antigravity IDE 啟動，並搭配 `npx`:

1. 安裝 [Node.js](https://nodejs.org/) 以便 `npx` 可在您的 `PATH`.
2. 在…上開啟 Google Chrome（144 以上版本） **同一台電腦** 做為您的工作區，請前往 `chrome://inspect/#remote-debugging`，並開啟 **允許這個瀏覽器執行個體進行遠端偵錯** （請參閱 [設定 Chrome](/docs/commands/browser#set-up-chrome)).
3. 執行 `/browser <task>` 在 Antigravity 面板中，然後按一下 **允許** 在 60 秒內，當 Chrome 詢問是否允許遠端偵錯時。

## 功能與設定

[標題為「功能與設定」的章節](#capabilities-and-settings)

連接至 Chrome 後， `browser` 子代理可以瀏覽頁面、點擊並填寫表單、檢查主控台訊息與網路請求、執行效能追蹤與 Lighthouse 稽核、擷取螢幕截圖，並可選擇將頁面互動錄製為 WebM 影片（請參閱 [瀏覽器錄製](/docs/ide/browser-recordings))。因為 `/browser` 共用單一即時 Chrome 連線與您使用中的 Chrome 設定檔，請一次只執行一個瀏覽器工作階段；請參閱 [Chrome 設定檔](/docs/ide/separate-chrome-profile).

如要控制子代理可以執行的操作，請按一下 **Antigravity** 在狀態列中選取 **開啟設定** > **瀏覽器** (或點選 **更多動作…** 在 Antigravity 面板標頭 > **開啟設定**，或執行 **Antigravity：開啟設定** 從指令面板）：

- **啟用瀏覽器工具**：使用
- **瀏覽器 Javascript 執行政策**：控制以 Chrome 為基礎的 `/browser` 子代理會請求審查（**要求審查**，預設值)，會自動執行 (**一律繼續**)，或封鎖自訂 JavaScript (`evaluate_script`) 在頁面中 (**已停用**).
- **瀏覽器操作規則**：按一下 **編輯** 以設定開啟 URL 與下載檔案時允許與拒絕的網站；請參閱 [允許清單與拒絕清單](/docs/ide/allowlist-denylist).

[上一個
允許清單與拒絕清單](/docs/ide/allowlist-denylist/)

[下一步
瀏覽器錄製](/docs/ide/browser-recordings/)

您的下載已開始

## 您如何得知我們？

請選一個。這有助於我們接觸更多像您一樣的人。

感謝您讓我們知道！
