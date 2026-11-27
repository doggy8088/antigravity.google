AI 代理如何運作
全部
全部
學習
AI 代理如何運作 學習
全部
Antigravity 應用程式
Antigravity CLI
Antigravity IDE
IDE 擴充功能
Antigravity SDK
# AI 代理如何運作

標題為「AI 代理如何運作」的章節

一般的聊天模型只能在回覆中建議程式碼。而 **AI 代理** 將推論 模型與工具配對：讀取檔案、編輯程式碼、執行終端機 指令，以及檢查即時瀏覽器。這能讓代理觀察真實 回饋並反覆迭代，直到任務通過。

---

## 代理迴圈

標題為「代理迴圈」的章節

當您指派任務給 Antigravity 時，代理會透過重複的迴圈逐步進行， 而非一次猜出完整答案：

1. **代理檢查上下文。** 它會讀取相關檔案、搜尋符號， 並檢查工作區規則與提示詞限制。
2. **代理規劃下一步。** 它會決定要變更哪些檔案，或接下來要執行哪個 診斷指令。
3. **代理呼叫工具。** 它會編輯檔案、執行測試指令、查詢 MCP 伺服器，或在瀏覽器中開啟頁面。
4. **代理讀取結果。** 它會檢查該工具呼叫的編譯器診斷、測試 斷言、主控台輸出或螢幕截圖。
5. **代理反覆執行或完成任務。** 它會修正所有失敗並重複執行，直到 驗證通過，然後摘要差異供您審查。

### 範例：透過迴圈修復一個錯誤

標題為「範例：透過迴圈修復一個錯誤」的章節

以下是單一帳單日期錯誤如何經歷這五個步驟：

1. **檢查**：代理會讀取 `src/billing/renewal.ts` 和 `tests/renewal.test.ts` 追蹤續約日期的變動位置。
2. **計畫**：它會發現本地午夜 `Date` 會在日光節約時間轉換期間中斷的呼叫。
3. **呼叫工具**：它會將計算更新為 UTC 並執行 `npm test -- tests/renewal.test.ts`.
4. **讀取結果**：有一項邊界案例測試在 2 月 29 日閏年轉換時失敗。
5. **反覆運算並完成**：它會箝制月底日期、重複執行測試直到 通過，並交回差異。

---

## 工具、MCP 與掛鉤

標題為「工具、MCP 與掛鉤」的章節

內建工具涵蓋本機檔案、程式碼搜尋、終端機命令與瀏覽器 檢查。若需外部上下文，例如問題追蹤器、資料庫或雲端文件， 代理會透過以下方式連線 [Model Context Protocol (MCP)](/docs/mcp):

- **標準化的外部工具**：MCP 讓代理探索並呼叫外部 工具，無須為每個服務撰寫自訂銜接程式碼。
- **全域與工作區設定**：在以下位置設定全域 MCP 伺服器 `~/.gemini/config/mcp_config.json` 或專案範圍的伺服器，位於 `.agents/mcp_config.json`.
- **精選外掛程式組合**：從以下位置安裝預先建置的技能、MCP 伺服器、 規則、代理與掛鉤套裝 [市集](/docs/marketplace) 或 [與 Google 攜手建置](/docs/build-with-google).
- **確定性生命週期掛鉤**：設定 [掛鉤](/docs/hooks) 於 `.agents/hooks.json` 或 `~/.gemini/config/hooks.json` 在以下位置執行殼層指令碼 `PreToolUse` 和 `PostToolUse`。使用它們自動格式化檔案或封鎖高風險 命令。

---

## 選擇代理模式

標題為「選擇代理模式」的章節

大多數日常任務在單一對話中就能順利完成。當工作異常困難、可清楚拆分到不同檔案，或 需要獨立審查時，再使用專門的編排器：

| 模式 | 運作方式 | 適用於 | 介面 | 方案 |
| --- | --- | --- | --- | --- |
| **單一代理** | 單一對話會依序讀取、編輯與驗證。 | 專注的錯誤修正、單一模組編輯與快速原型。 | 所有介面 | 所有方案 |
| **[Orchestrator](/docs/models#orchestrator)** | 在同一個對話中，將規劃模型與速度更快的執行模型搭配使用。 | 日常功能開發與多檔案偵錯，延遲更低。 | App、CLI | 付費 Pro、Ultra、企業版 |
| **[子代理](/docs/subagents) （內建 & 自訂）** | 主要代理委派限定範圍的任務（`research`, `browser`，或 `.agents/agents/*.md`） 至隔離的子工作階段。 | 深度程式碼庫研究、瀏覽器檢查，或可重複使用的稽核角色。 | App、CLI、IDE | 所有方案 |
| **[群體（`/swarm`)](/docs/swarm)** | 協調者會將工作分配給具名工作者與 `@verifier` 於共用的即時看板上。 | 可乾淨地拆分至不同檔案或套件的廣泛任務。 | App、CLI | 所有方案 *（預覽）* |
| **[動態工作流程 (`/run-workflow`)](/docs/dynamic-workflows)** | 代理撰寫並執行 Python 指令碼，協調 `parallel()` 和 `pipeline()` 代理。 | 跨多個檔案的扇出稽核，或可重複的分階段管道。 | App、CLI | 所有方案 |
| **[Boost（`/boost`)](/docs/boost)** | 多代理管線，工作者會實作、挑戰、修正並重新驗證解決方案。 | 困難的錯誤、競爭條件與複雜演算法。 | App、CLI | 付費方案 |
| **[Teamwork（`/teamwork`)](/docs/teamwork)** | 範圍界定訪談，隨後進行里程碑編排（`Critic`, `Challenger`, `Auditor`) in `~/teamwork_projects/`. | 多里程碑遷移、模擬與多日專案。 | App、CLI | 付費方案 |

比較聚焦的單一代理提示詞與平行 `/swarm` 您可以在任何存放庫中試用的提示詞：

```
Find all TODO and FIXME comments in this repository, group them by directory, and list the top three with the highest bug risk without editing any files.
```

```
/swarm Audit this repository's tests and docs in parallel: have @test-audit list untested edge cases, @docs-audit check README commands against project scripts, and @verifier cross-check both reports on the board.
```

---

## 由您掌控之處

標題為「由您掌控之處」的章節

代理負責繁重的工作，而你掌握架構與發布標準：

- **事先界定範圍** 搭配清晰的提示詞， [規則](/docs/rules), [掛鉤](/docs/hooks)，與 [權限](/docs/permissions).
- **審查計畫與差異** 在接受編輯或執行敏感 指令之前。
- **保持驗證客觀** 透過將任務錨定於自動化測試與 視覺檢查。

---

## 後續步驟

「後續步驟」章節

學習單元下一篇驗證與防護機制了解如何結合測試、即時瀏覽器檢查、掛鉤與沙箱，讓代理編輯保持安全。

多代理群體（/swarm）在共用看板上執行平行具名工作者與獨立驗證者。

建置指南建置可遊玩的 3D 瀏覽器世界觀看四個平行叢集工作者與 /browser 建置並驗證即時的 Three.js 應用程式。

上一個
情境視窗與權杖

下一步
驗證與防護機制

您的下載已開始您如何得知我們？請選一個。這有助於我們接觸更多像您一樣的人。感謝您讓我們知道！
