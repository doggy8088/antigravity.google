# 允許清單與拒絕清單

允許清單與拒絕清單 - Antigravity IDEantigravity-ideAntigravity IDE功能允許清單與拒絕清單 - Antigravity IDE Antigravity IDE 功能Antigravity IDE適用於：Antigravity IDE
# 允許清單與拒絕清單
[「允許清單與拒絕清單」章節](index.html#allowlist-and-denylist)
瀏覽器使用雙層安全系統來控制可存取的 URL：

- 拒絕名單 ：拒絕危險或惡意的 URL。
- 允許清單 ：明確允許可信任的 URL。

## 運作方式
[「運作方式」章節](index.html#how-it-works)
### 拒絕名單
[「拒絕清單」章節](index.html#denylist)
拒絕清單透過 Google Superroots BadUrlsChecker 服務維護與強制執行。當瀏覽器嘗試導覽至某個 URL 時，會透過 RPC 檢查該主機名稱是否在伺服器端的拒絕清單中。

**備註：** 若伺服器無法使用，預設拒絕存取。

### 允許清單
[「允許清單」章節](index.html#allowlist)
允許清單是您可以編輯的本機文字檔，用於明確信任特定 URL。

允許清單初始化時僅包含 `localhost`，您可隨時編輯它。

當瀏覽器嘗試前往不在允許清單上的 URL 時，會向您顯示 **一律允許** 按鈕。按一下此按鈕會將網址加入允許清單，並讓瀏覽器能開啟該網頁並與之互動，如以下範例所示：

您也可以手動從允許清單新增或移除網址。但拒絕清單一律優先：出現在拒絕清單上的網址無法加入允許清單。
[上一個  
瀏覽器錄製](../browser-recordings/index.html)[下一步  
獨立的 Chrome 設定檔](../separate-chrome-profile/index.html.gz)
