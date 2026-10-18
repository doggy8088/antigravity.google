# 計畫（/plan）

計畫（/plan）2-0Antigravity 應用程式功能計畫（/plan）Antigravity App 功能Antigravity 應用程式Antigravity CLI適用於：Antigravity 應用程式Antigravity CLI
# 計畫（/plan）
[「計畫（/plan）」章節](index.html#plan-plan)
The `/plan` 指令有助於在直接進入程式碼執行前，進行結構化規劃、程式碼庫探索與需求探索。對於非簡單任務， `/plan` 確保複雜變更在修改檔案前被充分理解、適當界定範圍並妥善組織。

---

## 總覽
[「總覽」章節](index.html#overview)
在釐清邊界情況之前就撰寫程式碼，可能導致白費力氣、產生不必要的差異或造成迴歸問題。雖然標準提示詞會立即開始修改檔案， `/plan` 引入刻意的規劃階段，探索 工作區、識別相依性，並將架構決策呈現給 您審閱。

The `/plan` 工作流程有助於銜接初步想法與程式碼執行之間的落差：

1. 無副作用的探索 ：代理會讀取檔案、檢查呼叫 圖，並分析相依性，而不提早撰寫程式碼。
2. 互動式探索 ：若需求規格不足，代理會提出 針對性問題以釐清取捨。
3. 可審查產出物 ：代理會草擬結構化的 實作計畫 產出物 具備清楚的任務分解與驗證檢查點。
4. 使用者引導執行 ：您保有完整控制權，可留下行內註解、 要求調整，或按一下 繼續 開始實作。

---

## 如何 /plan 運作
[「/plan 的運作方式」章節](index.html#how-plan-works)
當您呼叫 `/plan`，Antigravity 會執行多階段規劃與探索 工作流程，旨在產出可行的實作計畫：

- 分析與探索 ：代理會分析您的提示詞、檢查工作區組態，並檢視 受影響的檔案。
- 釐清與訪談 ：若規格含糊不清或有多種可行的技術方法， 代理會使用互動式問題提示與結構化選項啟動聚焦式訪談。
- 結構化計畫建立 ：需求明確後，代理會產生 Implementation Plan 產出物。
- 使用者審查與核准 ：代理會在審查窗格中呈現計畫產出物。您可以審查 提議的步驟、留下行內註解，或調整個別任務。

---

## 何時使用 /plan
[「何時使用 /plan」章節](index.html#when-to-use-plan)
The `/plan` 指令在以下開發情境中特別有價值：

- 複雜重構 ：當重組模組、升級程式庫，或 跨多個檔案重構介面時。
- 模糊的需求 ：當啟動具有未決問題、 未知限制或競爭架構方法的功能時。
- 高風險變更 ：適用於資料庫遷移、驗證機制全面更新或 安全性敏感修補，且事前檢查清單至關重要的情況。
- 協作式對齊 ：當您想在任何程式碼修改發生前，審查並形塑代理的 策略時。

---

## 如何使用 /plan
[「如何使用 /plan」章節](index.html#how-to-use-plan)
您可以呼叫 `/plan` 使用特定任務提示詞，或不帶引數以開始開放式探索工作階段。

- Antigravity 應用程式
- Antigravity CLI

### Antigravity 應用程式
[「Antigravity App」章節](index.html#sr-tab-1)
類型 `/plan` 後接您的目標，輸入於提示詞輸入區：

```
/plan Refactor our authentication middleware to support OIDC token verification with JWKS caching
```

若要在沒有預定義提示詞的情況下，為目前的工作區內容啟動互動式探索工作階段：

```
/plan
```

代理會檢查您目前的使用中檔案與最近的對話歷程， 然後提出釐清問題以協助制定計畫。

### Antigravity CLI
[「Antigravity CLI」章節](index.html#sr-tab-2)
類型 `/plan` 直接輸入互動式提示詞：

```
/plan Add rate limiting middleware to all public API endpoints using Redis token buckets
```

您也可以執行 `/plan` 不帶引數：

```
/plan
```

CLI 會進入規劃模式、執行程式碼庫分析，並直接在終端機介面中呈現 結構化計畫。

---

## 與計畫產出物互動
[「與計畫產出物互動」章節](index.html#interacting-with-plan-artifacts)
由以下項目產生的計畫 `/plan` 使用標準 Antigravity 產出物格式。你可以透過多種方式與計畫互動：

- 內嵌註解 ：突顯文字或選取特定計畫步驟以新增 針對性意見回饋。
- 範圍調整 ：請代理將任務拆解為更小的步驟，或 在繼續前移除選用的工作項目。
- 產出物審查政策 ：使用您專案的以下項目，設定代理是否暫停以進行計畫 核准 產出物審查政策 .
- 繼續 ：按一下 繼續 將代理轉換為執行模式。代理會逐步遵循核准的計畫，並以測試驗證每個里程碑。

關於產出物瀏覽與註解工作流程的詳細指示，請參閱 [實作計畫指南](https://antigravity.gh.miniasp.com/docs/implementation-plan).

---

## 規劃與推理模式比較
[「計畫模式與推理模式比較」章節](index.html#comparison-of-planning-and-reasoning-modes)
Antigravity 依據任務範圍與複雜度提供互補指令：

| 指令 | 主要重點 | 適用對象 | 方案層級 |
| --- | --- | --- | --- |
| /plan | 需求探索與可審查計畫 | 在修改程式碼前劃定複雜任務、重構與多檔案變更的範圍 | 所有方案 |
| /grill-me | 蘇格拉底式設計訪談 | 草擬設計前的深度需求對齊與邊界案例探測 | 所有方案 |
| /boost | 多代理深度推理 | 困難的並行錯誤、競爭條件與演算法最佳化 | 付費方案 |
| /teamwork-preview | 協作式代理團隊 | 長期活動、儲存庫遷移與開放式研究 | 付費方案 |

---

## 後續步驟
[「後續步驟」章節](index.html#next-steps)
探索相關規劃與自動化文件：

- 實作計畫產出物 ：了解如何審查、 註解與核准計畫產出物。
- 產出物審查政策 ：設定審查行為與 自動繼續設定。
- 斜線指令目錄 ：探索 斜線指令的完整目錄。
- 提升深度推理（`/boost`) ：運用多代理推理 循環，應對艱難的工程挑戰。
- Teamwork 代理團隊 (`/teamwork-preview`) ：執行協作 代理團隊，處理儲存庫規模專案。
[上一個  
權限（/permissions）](../cli/commands/permissions/index.html.gz)[下一步  
恢復（/resume）](../cli/commands/resume/index.html.gz)
