驗證與防護機制
全部
全部
學習
驗證與防護機制 深入了解
全部
Antigravity 應用程式
Antigravity CLI
Antigravity IDE
IDE 擴充功能
Antigravity SDK
# 驗證與防護機制

標題為「驗證與防護機制」的章節

AI 模型可能會寫出看似合理、卻在執行時出錯、遺漏邊界案例， 或呼叫無法識別的 API 的程式碼。可靠的代理工作流程會將 **驗證，作為提示詞的 一部分**，而非事後補充。

---

## 建置分層驗證循環

標題為「建置分層驗證迴圈」的章節

結合快速的確定性檢查與實際的執行階段檢查，讓代理在您開啟 diff 之前就發現錯誤：

| 驗證層 | 它能捕捉的內容 | Antigravity 範例 |
| --- | --- | --- |
| **型別檢查與 Linter** | 語法錯誤、錯誤的匯入，以及型別不符。 | 請代理執行 `tsc --noEmit`, `eslint`，或 `go vet` 編輯之後。 |
| **單元測試** | 邏輯退化，以及損壞的數學運算或資料轉換。 | 將純邏輯與 UI 程式碼分開，以便 `npm test` 或 `pytest` 會在數毫秒內完成。 |
| **即時瀏覽器檢查** | 空白渲染、版面配置損壞、404 資源與主控台錯誤。 | 使用 [瀏覽器使用](/docs/browser) 或 [`/browser`](/docs/commands/browser) 點按各個流程並檢查螢幕截圖。 |
| **獨立審查** | 遺漏的邊界案例、弱化的斷言，以及未要求的編輯。 | 將工作者與以下項目搭配 `@verifier` 於 [`/swarm`](/docs/swarm) 並在以下位置檢查差異 [審查變更](/docs/review-changes) 或 `/diff`. |

### 單元測試遺漏的失敗模式

標題為「單元測試遺漏的失敗模式」的章節

| 失敗模式 | 為何單元測試會遺漏它 | Antigravity 防護措施 |
| --- | --- | --- |
| **無法辨識的 API 或過時的旗標** | 模擬會隱藏真實的上游簽名。 | 以套件資訊清單或以下內容為提示詞提供依據 [Google Developer Knowledge MCP 伺服器](/docs/mcp#example-search-google-developer-docs). |
| **空白畫布、版面配置不佳或 404 資源** | 單元測試可在沒有即時 DOM 或 WebGL 算繪器的情況下執行。 | 執行 [瀏覽器使用](/docs/browser) 或 [`/browser`](/docs/commands/browser) 驗證主控台輸出與螢幕截圖。 |
| **被弱化或刪除的斷言** | 放寬檢查後，測試套件仍然通過。 | 先在⋯⋯中審查測試差異 **審查** 或 `/diff`，或執行跨模型 `@verifier` 於 [`/swarm`](/docs/swarm). |
| **不安全的 Shell 指令或密鑰讀取** | 單元測試不會強制執行主機邊界。 | 結合 [終端機沙箱](/docs/sandbox), `Deny` 規則，以及 `PreToolUse` [掛鉤](/docs/hooks). |

---

## 保護您電腦的防護措施

標題為「保護您機器的防護機制」的章節

在賦予代理廣泛自主權之前，請設定明確的執行與審查 界限：

- **權限（`Deny > Ask > Allow`)**：控制檔案存取 （`read_file`, `write_file`）、Shell 命令 （`command`）、網頁 URL （`read_url`, `execute_url`, `download_url`），以及 MCP 工具 （`mcp`）。相互衝突的規則 一律依優先順序評估： **拒絕 > 詢問 > 允許**。請參閱 [權限](/docs/permissions).
- **終端機沙箱**：在 OS 層級隔離 Shell 命令 （Linux 命名空間、macOS `sandbox-exec`，以及 Windows 11 24H2 以上版本上的 Windows 處理程序安全性環境）。對外網路存取為 **預設為封鎖** （僅 `read_url` 網域已列入允許清單），以及敏感檔案，例如 `~/.ssh` 和 `.env` 遭到封鎖。請參閱 [終端機沙箱](/docs/sandbox).
- **生命週期掛鉤**：以下位置中的確定性 Shell 指令碼 `.agents/hooks.json` 或 `~/.gemini/config/hooks.json` (`PreToolUse`, `PostToolUse`）。與提示詞 指示不同，掛鉤每次都會執行，可封鎖不安全的命令或自動執行 Linter。請參閱 [掛鉤](/docs/hooks).
- **計畫核准（[產出物審查](/docs/artifact-review))**：控制項 **計畫審查政策** (**一律詢問** vs. **一律繼續**） 用於 實作計畫。呼叫 [`/plan`](/docs/plan) 在程式碼編輯開始前，一律會暫停以取得您的 核准。
- **Diff 檢閱 ([審查變更](/docs/review-changes))**：逐檔檢查 Git 差異， 為代理留下行內行註解，暫存或捨棄 檔案，滿意後再提交。

### 依介面區分的防護措施

標題為「依介面區分的防護機制」的章節

[Antigravity 應用程式](#tab-panel-233)[Antigravity CLI](#tab-panel-234)Antigravity 應用程式[「Antigravity App」章節](#sr-tab-1) **權限預設集**：選擇 **要求審查**, **預設**, **自動**，或 **Turbo**. **預設** 在沙箱中執行指令，並向外部詢問。 **自動** 會自動檢查安全的主機指令（`v2.23.0+` macOS/Linux, `v2.26.0+` Windows、個人帳號）。在以下位置切換預設集 **設定**，依專案而定，或 從訊息方塊。 **內建瀏覽器防護措施**：在個人 Google 帳戶上 （`v2.30.0+`），內建瀏覽器會隔離 `localhost` 依連接埠進行區分，並遮蔽登入或付款 框架。檔案上傳（以及 `data:`/`blob:` 下載）需要一次性 核准，而標準檔案下載（`v2.31.0+`） 每個網域一個提示詞，除非 獲得允許 **瀏覽器操作規則** 或 **Turbo**。商業版與企業版 帳戶使用 `/browser` 搭配本機 Chrome（`v144+`). **審查窗格**: 開啟 **審查** 來自 **總覽** (Cmd + Option + O 或 Ctrl + Alt + O）。檢查 **未提交**, **分支**，或 **代理編輯** 差異 並傳送行內留言。 Antigravity CLI[「Antigravity CLI」章節](#sr-tab-2) **執行模式**：按下 Shift + Tab 在兩者之間循環切換 `default`, `accept-edits`, `auto`，與 `plan`. `auto` 自以下版本起為預設值 `v1.5.7` （如有提供），並自動啟用沙箱。在外部 `auto` 模式，請使用以下方式啟用沙箱 `agy --sandbox` 或 `"enableTerminalSandbox": true`. **瀏覽器檢查**：執行 [`/browser`](/docs/commands/browser) 針對本機 Google Chrome（`v144+`） 且已啟用遠端偵錯。 **互動式差異檢視器**：執行 [`/diff`](/docs/cli/commands/diff) 檢查 **所有變更**, **每輪**，與 **提交樹** 檢視。按下 c 於任何一行，以為您的下一個提示詞附加意見回饋。

### 範例 `Deny` 規則

標題為「Deny 規則範例」的章節

新增常駐 `Deny` 規則，位於 [權限](/docs/permissions) 封鎖 破壞性指令並保護敏感路徑，無論預設為何：

```
command(rm -rf)                    # Block destructive deletions
command(regex:curl .*)             # Block unvetted curl downloads
command(sudo)                      # Block sudo privileges
write_file(.git/)                  # Safeguard Git history
write_file(/home/user/.ssh)        # Safeguard SSH keys
```

---

## 在發布前發現幻覺

標題為「在發佈前抓出幻覺」的章節

三個習慣可消除大多數幻覺問題：

- **以第一手資料為代理提供依據。** 指向真實的工作區檔案、 套件資訊清單（`package.json`, `pyproject.toml`），或 [Google Developer Knowledge MCP 伺服器](/docs/mcp#example-search-google-developer-docs) 而非依賴模型記憶。
- **讓測試保持誠實。** 將測試差異與實作差異一併審查，讓 失敗的斷言從根本原因修復，絕不刪除或放寬。
- **直接檢查視覺輸出。** 對於前端、Canvas 或 3D 應用程式，通過 單元測試並不能證明頁面能乾淨地算繪。請執行即時瀏覽器檢查並 檢視螢幕截圖。

```
Run the unit tests, start the local dev server, and use /browser to verify the main flow loads with zero console errors and no horizontal overflow on desktop and mobile viewports.
```

---

## 後續步驟

「後續步驟」章節

實際運用建置可遊玩的 3D 瀏覽器世界看看單元測試、專屬的 @verifier 工作者與 /browser 視覺檢查如何協同運作。

安全性權限在檔案、終端機指令與 MCP 工具之間設定拒絕、詢問與允許規則。

驗證瀏覽器使用讓 Antigravity 開啟執行中的網頁應用程式、檢查主控台日誌並擷取螢幕截圖。

上一個
AI 代理如何運作

下一步
可遊玩的 3D 瀏覽器世界

您的下載已開始您如何得知我們？請選一個。這有助於我們接觸更多像您一樣的人。感謝您讓我們知道！
