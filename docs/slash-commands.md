# 斜線指令總覽

斜線指令總覽2-0Antigravity 應用程式功能斜線指令總覽 Antigravity App 功能Antigravity 應用程式Antigravity CLI適用於：Antigravity 應用程式Antigravity CLI
# 斜線指令總覽
[「斜線指令總覽」章節](index.html#slash-commands-overview)
斜線指令為呼叫專門的代理 工作流程、推理模式、互動式規劃工具與背景 自動化，提供快速捷徑。這些指令在下列兩者中運作一致 **Google
Antigravity 應用程式** （桌面版與網頁版）以及 **Antigravity CLI**.

---

## 總覽
[「總覽」章節](index.html#overview)
現代軟體開發需要依任務複雜度與範圍，採用不同的代理互動模式：

1. 日常工程 ：用於互動式功能 開發、導覽與重構的標準提示詞。
2. 深度推理 ：多代理探索與獨立驗證。
3. 結構化規劃 ：在修改程式碼前的互動式需求訪談與可審查 計畫。
4. 長期活動 ：用於 儲存庫規模遷移的協作多代理團隊。
5. 背景工具 ：沙箱隔離的瀏覽器研究、排程自動化，以及 輔助查詢。

斜線指令讓您精準且即時地掌控這些功能。

---

## 指令目錄
[「指令目錄」章節](index.html#command-catalog)
下表提供所有公開斜線 指令的完整參考：

| 指令 | 類別 | 描述 | 方案層級 | Horizon |
| --- | --- | --- | --- | --- |
| /boost | 推理 | 針對複雜錯誤、競爭條件與演算法的多代理深度推理。 | 付費方案 | 秒到小時 |
| /teamwork-preview | 推理 | 針對存放庫規模遷移、模擬與研究的協作式代理團隊。 | 付費方案 | 數小時到數天 |
| /goal | 推理 | 在目標達成前自主執行，中途不暫停。 | 所有方案 | 數分鐘至數小時 |
| /plan | 規劃 | 研究程式碼、進行需求訪談，並撰寫可審查的計畫產出物。 | 所有方案 | 分鐘 |
| /grill-me | 規劃 | 進行互動式訪談以對齊設計細節與邊緣案例。 | 所有方案 | 分鐘 |
| /learn | 自訂 | 將工作階段意見回饋與修正提煉為持久的規則或技能。 | 所有方案 | 立即 |
| /plugin | 自訂 | 開啟互動式 外掛程式管理員 或管理並建立外掛。 | 所有方案 | 立即 |
| /schedule | 自動化 | 將指令排程為一次性計時器或定期 cron 工作。 | 所有方案 | 已排程 |
| /browser | 工具 | 啟動沙箱瀏覽器子代理，以進行網頁研究與 UI 檢查。 | 所有方案 | 分鐘 |
| /btw | 工具 | 在背景提出快速的情境問題，不暫停工作。 | 所有方案 | 立即 |

---

## 推理與自主性
[「推理與自主性」章節](index.html#reasoning-and-autonomy)
### /boost
[標題為「/boost」的區段](index.html#boost)
啟用隨選的三層多代理推理階層（`Orchestrator` -> `DeepCoder` / `DeepInvestigator` -> 隔離的工作器）。它 探索多個假設、執行測試套件，並在傳回結果前獨立驗證 解決方案。

若要為演算法最佳化呼叫 Boost，請執行下列指令：

```
/boost Optimize the sparse matrix multiplication routine using SIMD intrinsics and benchmark throughput.
```

關於詳細的架構文件與 CLI 按鍵繫結，請參閱 [提升深度推理指南](https://antigravity.gh.miniasp.com/docs/boost) 和 [CLI 參考資料](https://antigravity.gh.miniasp.com/docs/cli/reference).

### /teamwork-preview
[「/teamwork-preview」章節](index.html#teamwork-preview)
啟動多代理框架，用於多日工程戰役、子系統重寫與開放式科學研究。從 Sentinel 主導的互動式範圍界定訪談開始，草擬具約束力的規格計畫。

若要啟動多代理遷移，請執行下列指令：

```
/teamwork-preview Migrate our REST backend from Express to Fastify with full test parity and benchmarks.
```

關於完整的多代理生命週期文件與工程模式，請參閱 [Teamwork 代理團隊指南](https://antigravity.gh.miniasp.com/docs/teamwork).

### /goal
[標題為「/goal」的區段](index.html#goal)
指示代理持續工作，直到指定目標完全達成。代理自主執行建置、診斷錯誤並套用修正編輯，無須逐回合確認。

若要自動執行測試套件修復，請執行下列指令：

```
/goal Fix all failing unit tests in the authentication package and ensure 100% pass rate.
```

關於目標模式如何攔截停止、稽核交付項目，以及如何 取消目標的詳細資訊，請參閱 [目標指令指南](https://antigravity.gh.miniasp.com/docs/commands/goal).

---

## 規劃與需求
[「計畫與需求」章節](index.html#planning-and-requirements)
### /plan
[標題為「/plan」的區段](index.html#plan)
The `/plan` 斜線命令有助於在直接執行前進行結構化規劃、程式碼庫探索與需求發掘。它確保複雜任務在程式碼變更前被充分理解、範圍界定得當且組織有序。

#### 運作方式
[「運作方式」章節](index.html#how-it-works)
當您呼叫 `/plan`，Antigravity 會執行四步驟工作流程：

1. 分析與探索 ：代理會檢視您的提示詞、分析 工作區、讀取相關原始檔，並探索相依性或 潛在障礙。
2. 釐清與訪談 ：若細節規格不足或 架構決策含糊不清，代理會與您進行聚焦式訪談（運用互動式問題提示或結構化選項） 以釐清需求與取捨。
3. 結構化計畫建立 ：代理會建立全面的 Implementation Plan 產出物，詳述高層級方法、含驗證關卡的逐步任務拆解，以及潛在風險。
4. 使用者審查與核准 ：代理會呈現計畫產出物供您 審查。一旦您審查、註解或核准該計畫，代理 便會轉換為執行模式。

#### 何時使用 /plan
[「何時使用 /plan」章節](index.html#when-to-use-plan)
使用 `/plan` 於以下情境：

- 複雜重構 ：當跨 多個檔案或套件重構架構元件時。
- 模糊的需求 ：當啟動具有未決問題、 取捨或缺失規格的功能時。
- 高風險變更 ：適用於資料庫遷移、核心協定變更或 安全性敏感更新，且事前檢查清單與風險評估至關重要的情況。
- 協作式對齊 ：當您想在任何程式碼修改發生前，審查並引導代理的 提議步驟時。

#### 使用範例
[「使用範例」章節](index.html#usage-examples)
若要規劃特定任務，請執行 `/plan` 搭配你的目標：

```
/plan Refactor our authentication middleware to support OIDC token verification with JWKS caching
```

若要在沒有預定義提示詞的情況下，為目前的工作區內容啟動互動式探索工作階段：

```
/plan
```

關於完整的工作流程詳細資訊，請參閱 [計畫斜線指令
指南](https://antigravity.gh.miniasp.com/docs/plan) 和 [實作計畫產出物
指南](https://antigravity.gh.miniasp.com/docs/implementation-plan).

### /grill-me
[標題為「/grill-me」的區段](index.html#grill-me)
在撰寫程式碼之前提示代理對您進行訪談。代理會針對架構、錯誤處理、效能目標與回溯 相容性提出精準 問題，以消除歧義。

若要確認設計限制，請執行下列指令：

```
/grill-me I want to redesign the notification dispatch queue to support priority scheduling.
```

---

## 工作流程與自訂
[「工作流程與自訂」章節](index.html#workflows-and-customization)
### /learn
[標題為「/learn」的區段](index.html#learn)
分析您使用中工作階段中的近期修正、使用者回饋與除錯解決方案，將其萃取為常駐專案規則（`AGENTS.md`, `GEMINI.md`，或 `.agents/rules/*.md`）或可重複使用的代理技能 （`.agents/skills/<name>/SKILL.md`）。代理在…中提議變更 `learning_proposal.md` 產出物，且僅在您核准後才寫入檔案。

若要將近期工作階段模式擷取為持久性規則，請執行下列指令：

```
/learn Save our database transaction retry pattern as a project rule for all future database changes.
```

關於提案工作流程以及規則與技能位置的完整清單，請參閱 [Learn 指令指南](https://antigravity.gh.miniasp.com/docs/commands/learn) 和 [規則
文件](https://antigravity.gh.miniasp.com/docs/rules).

### /plugin
[「/plugin」章節](index.html#plugin)
管理已安裝的外掛，瀏覽 [市集](https://antigravity.gh.miniasp.com/docs/marketplace)，並將 可重複使用的技能、規則、子代理、MCP 伺服器與掛鉤封裝為單一 可部署的外掛程式套件。

在 **Antigravity CLI**，執行中 `/plugin` （或其別名 `/plugins`）開啟 互動式外掛程式管理員面板，包含 **已安裝** 和 **探索** 分頁，或直接執行行內子命令（`<marketplace-name>` 支援官方市集， `antigravity-plugins-official`):

```
/plugin
/plugin install <plugin-name>@antigravity-plugins-official
/plugin install <local-path>
/plugin list
```

在 **Antigravity 應用程式**，您也可以呼叫 `/plugin` 使用自然語言指示來啟用、停用、安裝或搭建自訂外掛。

關於完整的外掛資訊清單與市集文件，請參閱 [外掛程式指南](https://antigravity.gh.miniasp.com/docs/plugins) 和 [市集指南](https://antigravity.gh.miniasp.com/docs/marketplace).

---

## 自動化與排程
[「自動化與排程」章節](index.html#automation-and-scheduling)
### /schedule
[「/schedule」章節](index.html#schedule)
設定代理使用背景排程工作，在指定的未來時間或定期 cron 排程執行提示詞。

若要設定每日清理例行工作，請執行下列指令：

```
/schedule "0 9 * * 1-5" Run git fetch, prune stale local branches, and summarize pending PR reviews.
```

關於計時器與 cron 參數、管理使用中的排程，以及如何 `/schedule` 與持續性自動化不同，請參閱 [排程指令
指南](https://antigravity.gh.miniasp.com/docs/commands/schedule) 和 [Sidecar 與排程工作
指南](https://antigravity.gh.miniasp.com/docs/sidecars).

---

## 工具與內容
[「工具與上下文」章節](index.html#tools-and-context)
### /browser
[標題為「/browser」的區段](index.html#browser)
產生沙箱化的 Chrome 瀏覽器子代理，能夠瀏覽網頁、 閱讀文件、檢查 DOM 元素、擷取視覺螢幕截圖， 並驗證前端版面配置。

若要驗證本機網頁伺服器版面配置，請執行下列指令：

```
/browser Open http://localhost:3000/dashboard, verify that the analytics charts render, and capture a screenshot.
```

關於子代理的完整工具組、工作階段錄影與範例任務，請參閱 [瀏覽器指令指南](https://antigravity.gh.miniasp.com/docs/commands/browser).

### /btw
[標題為「/btw」的區段](index.html#btw)
提交在輕量背景執行緒中執行的頻外查詢， 不會中斷或暫停主要代理的進行中執行。

若要在實作執行期間詢問旁支問題，請執行下列指令：

```
/btw Which file did you say defines the UserSession interface?
```

對於 CLI 卡片瀏覽、歷史瀏覽與 `/copy btw` 剪貼簿支援，請參閱 [旁問（ /btw ）指令指南](https://antigravity.gh.miniasp.com/docs/cli/commands/btw).

---

## 指令選擇指南
[「指令選擇指南」章節](index.html#command-selection-guide)
下列決策指南根據您的 任務需求，說明何時使用各指令：

| 主要目標 | 建議的指令 | 關鍵功能 |
| --- | --- | --- |
| 複雜錯誤、競態條件或演算法難題 | /boost | 具備隔離驗證迴圈的多代理深度推理。 |
| 多日專案、儲存庫遷移或研究 | /teamwork-preview | 具備範圍訪談與里程碑路線圖的協作式代理團隊。 |
| 在進行程式碼編輯前需要審查的功能 | /plan | 研究程式碼、訪談需求，並產生可審查的計畫。 |
| 需要架構對齊的模糊需求 | /grill-me | 進行逐步訪談以釐清邊緣案例與限制。 |
| 應持續執行直到 100% 完成的任務 | /goal | 自主執行，無需逐輪確認暫停。 |
| 將最近的修正提煉為永久的專案規則 | /learn | 分析工作階段模式，並撰寫常駐規則與技能。 |
| 探索、安裝或管理外掛與市集套件 | /plugin | 互動式 外掛程式管理員 於 CLI 與對話式外掛管理。 |
| 網頁研究、UI 驗證與版面配置檢查 | /browser | 沙箱化 Chrome 瀏覽器子代理，用於即時頁面互動。 |
| 單次倒數計時器或週期性背景排程 | /schedule | 依 cron 排程在背景執行指令。 |
| 快速進行次要查詢，不中斷主要代理工作 | /btw | 在背景執行的輕量頻外查詢。 |

---

## 跨介面相容性
[「跨介面相容性」章節](index.html#cross-surface-compatibility)
公開斜線指令在 Antigravity 開發者介面中均受支援：

| 介面 | 輸入法 | 導覽與管理 |
| --- | --- | --- |
| Antigravity 應用程式（桌面版與網頁版） | 類型 / 於提示詞輸入區或從指令選單選取。 | 模型選擇器下拉式選單、產出物審查面板、視覺 diff 檢視器。 |
| Antigravity CLI | 類型 / 於互動式提示詞方塊。 | /agents 面板， Alt + J （切換執行緒）， Ctrl + O （軌跡）。 |

---

## 後續步驟
[「後續步驟」章節](index.html#next-steps)
探索相關文件與指南：

- 提升深度推理（`/boost`) ：深入探討三層 多代理推理階層。
- 計畫斜線指令（`/plan`) ：進行結構化規劃、 需求探索與互動式訪談。
- Teamwork 代理團隊 (`/teamwork-preview`) ：了解協作代理團隊 如何處理大規模遷移。
- 旁問指令（`/btw`) ：快速詢問背景 問題，而不會加入您的對話記錄。
- 目標指令（`/goal`) ：自主執行長期任務， 直到每個交付項目都驗證完成。
- Learn 指令（`/learn`) ：透過可審查的提案，將工作階段修正 保留為規則與技能。
- 排程指令（`/schedule`) ：在對話中設定一次性 計時器與循環 cron 排程。
- 瀏覽器指令（`/browser`) ：將網路任務 與 UI 驗證委派給瀏覽器子代理。
- 實作計畫產出物指南 ：掌握可審查的 規劃產出物與結構化工作流程。
- 規則（`/learn`) ：保留專案範圍的 模式與慣例。
- 外掛程式（`/plugin`) 和 市集 ： 探索、安裝及封裝可重複使用的代理擴充功能。
- Sidecar 與排程工作 (`/schedule`) ：使用 cron 運算式自動化例行 維護。
[上一個  
Vim 編輯器模式](../cli/vim-editor-mode/index.html)[下一步  
代理 (/agents)](../cli/commands/agents/index.html)
