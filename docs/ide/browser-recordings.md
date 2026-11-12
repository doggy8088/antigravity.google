瀏覽器錄製 - Antigravity IDE
antigravity-ide
Antigravity IDE
功能
瀏覽器錄製 - Antigravity IDE Antigravity IDE 功能
Antigravity IDE
適用於：
Antigravity IDE
# 瀏覽器錄製

[「瀏覽器錄影」章節](#browser-recordings)

在 Antigravity IDE 中（`v2.6.0+`)，當您輸入以下內容時，瀏覽器子代理便會執行 [`/browser`](/docs/commands/browser) 在 Antigravity 面板中。它會透過 Chrome DevTools MCP 伺服器驅動您自己的 Google Chrome（`npx`)，因此 Node.js 必須位於您的 `PATH` 且 Chrome 必須已在本機執行並開啟遠端偵錯。如需設定步驟，請參閱 [設定 Chrome](/docs/commands/browser#set-up-chrome).

子代理與頁面互動（例如點按、輸入或填寫表單）時，Antigravity IDE 可以將這些動作錄製為 WebM 影片。錄影並非保證：僅開啟頁面或擷取螢幕畫面的工作階段不會產生錄影，而與頁面互動的工作階段也可能不會產生錄影。

產生錄影時，會儲存為 `recording.webm` 在瀏覽器子代理完成後的產出物中，代理會告知您該產出物已可使用。

[上一個
IDE 瀏覽器總覽](/docs/ide/browser/)

[下一步
Chrome 設定檔](/docs/ide/separate-chrome-profile/)

您的下載已開始

## 您如何得知我們？

請選一個。這有助於我們接觸更多像您一樣的人。

感謝您讓我們知道！
