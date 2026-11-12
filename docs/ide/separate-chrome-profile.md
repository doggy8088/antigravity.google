Chrome 設定檔 - Antigravity IDE
antigravity-ide
Antigravity IDE
功能
Chrome 設定檔 - Antigravity IDE Antigravity IDE 功能
Antigravity IDE
適用於：
Antigravity 應用程式
Antigravity IDE
# Chrome 設定檔

[標題為「Chrome 設定檔」的章節](#chrome-profile)

瀏覽器子代理使用的瀏覽器設定檔取決於其執行位置：

- **Antigravity App 中的內建瀏覽器（個人 Google 帳戶， `v2.30.0+`)**：內建瀏覽器會為您在 Antigravity 中登入的每個帳號保留隔離、持久的 Cookie 設定檔，與您的 Chrome 設定檔分開，因此您的網站工作階段在分頁與 App 重新啟動後仍保持登入狀態。當瀏覽器工作遇到 Google 登入、第三方 OAuth 或 SSO 提供者 (例如 Microsoft、Apple、Okta 或 Auth0)、多重要素 驗證、金鑰提示或 CAPTCHA 時： [瀏覽器使用](/docs/browser).
- **透過 Google Chrome [`/browser`](/docs/commands/browser) (Antigravity IDE、 Antigravity CLI，以及 Antigravity App 中的商務／企業帳號)**：瀏覽器子代理無法附加磁碟上的任意檔案。只有為工作準備的檔案 (最多 20 個檔案，每個 50 MiB，總計 100 MiB) 可供選取，且每次上傳都會暫停，等待

因為以 Chrome 為基礎的 `/browser` 子代理會在您自己的 Chrome 中運作，共用
與您一般 Chrome 瀏覽相同的 Cookie 與登入狀態。它可以開啟您已登入的網站
頁面，因此請僅允許您希望它操作的網站。如需詳細資訊，請參閱 [允許清單與拒絕清單](/docs/ide/allowlist-denylist).

## 將子代理連結至 Chrome

[標題為「將子代理連線到 Chrome」的章節](#connect-the-subagent-to-chrome)

1. 開啟 Google Chrome（144 以上版本）。
2. 前往 `chrome://inspect/#remote-debugging`.
3. 開啟 **允許這個瀏覽器執行個體進行遠端偵錯**.

當子代理連線時，Chrome 會詢問是否允許遠端偵錯—請按一下
**允許** 在 60 秒內。Chrome 必須在與您的工作區相同的本機電腦上執行（在 Antigravity IDE 或 CLI 中，必須安裝 Node.js，才能
`npx` 在您的 `PATH`)。如需詳細資訊，請參閱
[設定 Chrome](/docs/commands/browser#set-up-chrome).

## Antigravity App 中的內建瀏覽器設定檔

[標題為「Antigravity App 中的內建瀏覽器設定檔」的章節](#built-in-browser-profile-in-the-antigravity-app)

Antigravity App 的內建瀏覽器會在側邊面板中開啟網頁，並為您在 Antigravity 中使用的每個帳戶保留各自的 Cookie 與登入狀態，在分頁與應用程式重新啟動後依然持續有效。如要清除造訪過的網址與自動完成建議，請前往 **設定** > **瀏覽器** (`v2.30.0+`) > **內建
瀏覽器** 並按一下 **Clear** 旁邊 **瀏覽記錄**。當內建瀏覽器代理在您的帳號上
作用中時，它會顯示 **刪除 Cookie 與網站資料**。差異分頁的標題列接著會顯示

[上一個
瀏覽器錄製](/docs/ide/browser-recordings/)

[下一步
總覽](/docs/artifacts/)

您的下載已開始

## 您如何得知我們？

請選一個。這有助於我們接觸更多像您一樣的人。

感謝您讓我們知道！
