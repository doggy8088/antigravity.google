# 提升深度推理（/boost）

提升深度推理（/boost）2-0Antigravity 應用程式功能提升深度推理（/boost）Antigravity App 功能Antigravity 應用程式Antigravity CLI適用於：Antigravity 應用程式Antigravity CLI
# 提升深度推理（/boost）
[「強化深度推理（/boost）」章節](index.html#boost-deep-reasoning-boost)
The `/boost` 斜線命令會啟動隨需多代理推理管線，專為具挑戰性的軟體工程任務設計。當標準的單輪程式碼協助在複雜錯誤、競爭條件或精細重構上力有未逮時， `/boost` 拆解問題，將聚焦的工作串流委派給專門化子代理，並在反覆輪次中獨立驗證解決方案。

---

## 總覽
[「總覽」章節](index.html#overview)
現代軟體開發涉及橫跨廣泛複雜度光譜的問題：

1. 日常工程 ：互動式功能開發、程式碼庫 導覽、重構，以及講求速度與 多功能性的一般程式設計工作流程。
2. 深度推理任務 ：高難度並行錯誤、演算法 最佳化、細微回歸，以及多檔案架構難題， 適合透過多代理探索與反覆驗證解決。
3. 長期活動 ：儲存庫規模遷移、大型子系統 建構，以及多日探索性研究。

`/boost` 填補關鍵的中間地帶： **互動式、高強度
開發人員生產力**。它直接在 您的日常程式碼撰寫工作階段中提供多代理深度推理，無需複雜設定或 冗長的範圍訪談。

---

## Boost 的運作方式
[「Boost 的運作方式」章節](index.html#how-boost-works)
當您呼叫 `/boost`，Antigravity 會啟動三階段多代理 推理管線，將策略制定與隔離執行 及驗證解耦：

### 第一階段：目標與策略制定
[「階段 1：目標與策略擬定」章節](index.html#phase-1-goal-and-strategy-formulation)
主要編排者會接收您的提示詞、檢查工作區上下文，並 制定執行策略。它將複雜的工程挑戰拆解為離散、可驗證的子任務，並判斷需要哪些專門的工作串流。

### 第二階段：平行執行與驗證
[「階段 2：平行執行與驗證」章節](index.html#phase-2-parallel-execution-and-verification)
編排者將聚焦的子任務分派給在乾淨、隔離範圍中運作的專門子代理：

- 實作工作流程 ：建構候選程式碼解決方案、套用 重構，並產生單元測試。
- 調查工作流程 ：執行根本原因偵錯、追蹤執行 呼叫圖，並分析不熟悉的相依性，而不修改檔案。
- 本機驗證 ：子代理在回報結果前， 於本地執行建構目標與測試套件以驗證假設。

### 第三階段：彙整與交付
[「階段 3：整合與交付」章節](index.html#phase-3-synthesis-and-delivery)
在呈現最終結果之前，推理管線會彙整發現並執行迴歸檢查：

- 編排者會依據完整的測試套件與 邊界案例，驗證組合後的解決方案。
- 若斷言失敗，錯誤診斷會回饋至下一次迭代進行自動修正。
- 所有測試與需求通過後，管線會提供簡潔的摘要與已驗證的變更。

---

## 何時使用 /boost
[「何時使用 /boost」章節](index.html#when-to-use-boost)
下表比較 Antigravity 中的三種主要執行模式：

| 維度 | 預設代理 | 🚀 Boost（ /boost ) | 👥 Teamwork（ /teamwork-preview ) |
| --- | --- | --- | --- |
| 主要重點 | 全方位互動式程式撰寫與結對程式設計 | 深度推理與棘手錯誤 | 自主多日代理團隊 |
| 任務視野 | 秒到分鐘 | 秒到小時 | 數小時到數天 |
| 方案層級 | 所有方案 | 付費方案 | 付費方案 |
| 範圍界定階段 | 單一提示詞 | 立即執行 | 兩階段範圍訪談 |
| 架構 | 單一代理直接迴圈 | 三階段推理階層 | 多角色代理團隊 |
| 工作區模型 | 共用工作樹 | 短暫的隔離 worktree | 每個里程碑的持久隔離工作樹 |
| 驗證 | 單次通過工具檢查 | 多輪獨立驗證 | 對抗式偽證與獨立成功審計 |
| 最適合 | 功能開發、程式碼導覽、重構與一般工程工作流程 | 棘手的並行錯誤、演算法最佳化、複雜的多檔案重構 | 子系統建置、形式化證明，以及自主的作業系統級活動 |

---

## 如何使用 /boost
[「如何使用 /boost」章節](index.html#how-to-use-boost)
您可以在所有 Antigravity 介面上呼叫 Boost。

- Antigravity 應用程式
- Antigravity CLI

### Antigravity 應用程式
[「Antigravity App」章節](index.html#sr-tab-1)
類型 `/boost` 後接您的任務提示詞，可在任何對話回合中輸入：

```
/boost Investigate the race condition in the session cache and implement a thread-safe fix with tests.
```

### Antigravity CLI
[「Antigravity CLI」章節](index.html#sr-tab-2)
類型 `/boost` 直接輸入終端機使用者介面（TUI）提示框：

```
/boost Optimize the matrix transposition algorithm to use SIMD vectorization and benchmark throughput.
```

---

## 主要使用情境
[「主要使用案例」章節](index.html#key-use-cases)
### 並行與競態條件
[「並行與競爭條件」章節](index.html#concurrency-and-race-conditions)
使用 `/boost` 偵錯多執行緒時序問題、死結與快取同步錯誤，其中重現需要仔細的追蹤分析與隔離驗證：

```
/boost Reproduce and fix the intermittent deadlock in the connection pool during high connection turnover.
```

### 演算法問題解決
[「演算法問題解決」章節](index.html#algorithmic-problem-solving)
使用 `/boost` 實作高效能演算法、自訂資料結構、圖形走訪或數學常式，並進行嚴格的邊界測試：

```
/boost Implement a lock-free ring buffer for streaming telemetry events and write stress tests.
```

### 非平凡重構
[「非簡單重構」章節](index.html#non-trivial-refactoring)
使用 `/boost` 重構緊密耦合的模組、現代化傳統介面，或跨多個檔案將同步 API 遷移為非同步模式：

```
/boost Refactor the authentication middleware to use asynchronous token validation without breaking existing routes.
```

### 深度根本原因調查
[「深度根本原因調查」章節](index.html#deep-root-cause-investigation)
使用 `/boost` 追蹤陌生或大型程式碼庫中的執行路徑，以隔離意外失敗的確切源頭：

```
/boost Trace why HTTP request timeouts spike when batch payload size exceeds 2MB, without modifying code.
```

---

## 安全與權限
[「安全性與權限」章節](index.html#safety-and-permissions)
Boost 遵守所有標準 Antigravity 安全政策：

- 範圍化權限 ：子代理會繼承為作用中工作區或專案設定的檔案存取規則與指令 權限政策。
- 互動式核准 ：當工作者提議受保護的終端機指令 或超出信任範圍的檔案編輯時，授權提示會浮現至您的 介面以供確認。
- 情境隔離 ：子代理在隔離的記憶體空間中執行，防止 冗長的偵錯日誌與暫存差異雜亂您的主要聊天 記錄。

---

## 後續步驟
[「後續步驟」章節](index.html#next-steps)
探索相關文件與指南：

- [斜線指令目錄](https://antigravity.gh.miniasp.com/docs/slash-commands) ：審查 Antigravity 各介面中所有可用的 斜線指令。
- [Teamwork 代理團隊 ( /teamwork-preview )](https://antigravity.gh.miniasp.com/docs/teamwork) ：了解協作代理團隊 如何處理大規模遷移。
- [子代理總覽](https://antigravity.gh.miniasp.com/docs/subagents) ：了解非同步子代理 工作者如何平行運作。
- [Antigravity CLI 參考](https://antigravity.gh.miniasp.com/docs/cli/reference) ：探索終端機 按鍵綁定與 CLI 指令參考。
[上一個  
代理 (/agents)](../cli/commands/agents/index.html)[下一步  
瀏覽器（/browser）](../commands/browser/index.html.gz)
