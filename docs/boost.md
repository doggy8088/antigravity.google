提升深度推理（/boost）
2-0
Antigravity 應用程式
指令
強化深度推理（/boost）Antigravity App 指令
Antigravity 應用程式
Antigravity CLI
IDE 擴充功能
Antigravity IDE
適用於：
Antigravity 應用程式
Antigravity CLI
IDE 擴充功能
Antigravity IDE
# 提升深度推理（/boost）

「強化深度推理（/boost）」章節

The `/boost` 斜線命令會啟動隨需多代理推理管線，專為具挑戰性的軟體工程任務設計。當標準的單輪程式碼協助在複雜錯誤、競爭條件或精細重構上力有未逮時， `/boost` 拆解問題，將聚焦的工作串流委派給專門化子代理，並在反覆輪次中獨立驗證解決方案。

---

## 總覽

「總覽」章節

現代軟體開發涉及橫跨廣泛複雜度光譜的問題：

1. **日常工程**：互動式功能開發、程式碼庫 導覽、重構，以及講求速度與 多功能性的一般程式設計工作流程。
2. **深度推理任務**：高難度並行錯誤、演算法 最佳化、細微回歸，以及多檔案架構難題， 適合透過多代理探索與反覆驗證解決。
3. **長期活動**：儲存庫規模遷移、大型子系統 建構，以及多日探索性研究。

`/boost` 填補關鍵的中間地帶： **互動式、高強度 開發人員生產力**。它直接在 您的日常程式碼撰寫工作階段中提供多代理深度推理，無需複雜設定或 冗長的範圍訪談。

---

## Boost 的運作方式

「Boost 的運作方式」章節

當您呼叫 `/boost`，Antigravity 會啟動三階段多代理推理管線，將任務路由與反覆執行及驗證分開：

### 第一階段：目標與策略制定

「階段 1：目標與策略擬定」章節

主要協調器會接收你的提示詞，評估任務是否需要實作（`DeepCoder`）或根本原因分析（`DeepInvestigator`），並將您的原始任務與相關對話脈絡交給管線協調者。

### 階段 2：反覆執行與挑戰回合

標題為「階段 2：反覆執行與挑戰回合」的章節

管線協調器會在隔離的子代理情境中分派專門的工作人員：

- **初步實作或調查**：第一輪工作者會探索 程式碼庫、實作候選變更或追蹤根本原因，並執行專案的測試套件與邊緣案例檢查。
- **改進回合**：後續改進工作者會獨立審查原始需求，嘗試找出先前工作者輸出中的缺陷或缺口、修正任何瑕疵，並重新執行測試。

### 階段 3：獨立驗證與交付

標題為「階段 3：獨立驗證與交付」的章節

在呈現最終結果之前，主要協調器會獨立 驗證管線的結果：

- 協調器會根據提示詞中的每項需求，抽查程式碼變更與測試紀錄。
- 如果仍有任何邊緣案例、限制或測試失敗，協調器會使用更新後的進度脈絡開始新一輪委派。
- 一旦所有需求與測試都通過，協調器會提供已驗證解決方案的簡潔摘要。

---

## 何時使用 /boost

「何時使用 /boost」章節

對於日常編碼與快速提問，請直接向預設代理發出提示詞。當任務適合由多個代理處理時，請比較 Antigravity 的代理協調器與背景子代理：

|  | [子代理](/docs/subagents) | Boost（`/boost`) | [群體（`/swarm`)](/docs/swarm) | [Teamwork（`/teamwork`)](/docs/teamwork) |
| --- | --- | --- | --- | --- |
| **適用於** | 委派集中的附帶任務，例如程式碼庫研究、瀏覽器檢查或測試執行 | **需要深度推理的棘手錯誤、競爭條件、演算法與棘手重構** | 可乾淨拆分到獨立檔案、套件或調查軌道的廣泛任務 | 多里程碑專案、存放庫規模遷移、模擬與深度研究 |
| **代理如何協調** | 每個子代理都在背景執行，並向啟動它的代理回報 | **協調器會執行反覆式管線，由工作者實作、挑戰、修正並重新驗證解決方案** | 協調者將任務分配給具名工作者與驗證者，彼此在一個共用訊息板上溝通 | A `Sentinel` 和 `Project Orchestrator` 透過里程碑計畫與審查閘道執行專門角色 |
| **如何開始** | 自動委派或 `@subagent` 提及 | **`/boost <task>` （立即開始）** | `/swarm <task>` （立即開始） | `/teamwork <goal>`，接著進行範圍界定訪談 |
| **工作區** | 目前工作區（或依要求使用隔離分支或工作副本） | **跨隔離子代理脈絡的目前工作區** | 預設為目前工作區，或為重疊編輯提供每位工作者的工作副本 | 專屬專案目錄（`~/teamwork_projects/{PROJECT_NAME}`），並擁有專屬檔案所有權 |
| **驗證** | 父代理檢查子代理的回覆 | **改進工作者會嘗試找出先前嘗試的缺陷並執行實際測試，再由協調器抽查** | 專屬 `@verifier` 工作人員會在簽核前審查差異並執行測試 | Independent `Critic`, `Challenger`, `Auditor`，與 `Success Auditor` 閘道會驗證每個里程碑 |
| **典型時間跨度** | 秒到分鐘 | **秒到小時** | 數分鐘至數小時 | 數小時到數天 |
| **方案層級** | 所有方案 | **付費方案** | 所有方案 | 付費方案 |

使用下列指引選擇正確的做法：

- **使用 [子代理](/docs/subagents) 供聚焦的背景委派使用**：讓 您的代理委派獨立的附帶任務，例如程式碼庫研究、 瀏覽器驗證或測試執行，同時您繼續在主要執行緒中工作。
- **使用 `/boost` 當問題困難而非廣泛時**：選擇 `/boost` 供根本原因除錯、競爭條件、演算法最佳化，或緊密耦合的重構使用，其中初始嘗試應在多回合中受到挑戰、修正與驗證。
- **使用 [`/swarm`](/docs/swarm) 當任務範圍廣泛且可清楚劃分時**： 在建立規則、技能、外掛程式、 掛鉤或 MCP 伺服器之前，請先載入自訂參考資料。 `/swarm` 當工作拆分為跨獨立檔案、套件、測試套件或研究問題的獨立部分，且你想要具名工作人員與驗證者立即在可監控與引導的即時訊息看板上協調。
- **使用 [`/teamwork`](/docs/teamwork) 供長期、多里程碑專案使用**：選擇 `/teamwork` 當專案跨越數小時或數天時——例如儲存庫範圍的遷移、系統模擬或形式化證明——且需要事先進行範圍界定訪談、專用專案目錄與里程碑稽核閘道。

---

## 如何使用 /boost

「如何使用 /boost」章節

您可以在所有 Antigravity 介面上呼叫 Boost。

[Antigravity 應用程式](#tab-panel-153)[Antigravity CLI](#tab-panel-154)Antigravity 應用程式[「Antigravity App」章節](#sr-tab-1)類型 `/boost` 後接您的任務提示詞，可在任何對話回合中輸入：`/boost Investigate the race condition in the session cache and implement a thread-safe fix with tests.`Antigravity CLI[「Antigravity CLI」章節](#sr-tab-2)類型 `/boost` 直接輸入終端機使用者介面（TUI）提示框：`/boost Optimize the matrix transposition algorithm to use SIMD vectorization and benchmark throughput.`

---

## 主要使用情境

「主要使用案例」章節

### 並行與競態條件

「並行與競爭條件」章節

使用 `/boost` 偵錯多執行緒時序問題、死結與快取同步錯誤，其中重現需要仔細的追蹤分析與隔離驗證：

```
/boost Reproduce and fix the intermittent deadlock in the connection pool during high connection turnover.
```

### 演算法問題解決

「演算法問題解決」章節

使用 `/boost` 實作高效能演算法、自訂資料結構、圖形走訪或數學常式，並進行嚴格的邊界測試：

```
/boost Implement a lock-free ring buffer for streaming telemetry events and write stress tests.
```

### 非平凡重構

「非簡單重構」章節

使用 `/boost` 重構緊密耦合的模組、現代化傳統介面，或跨多個檔案將同步 API 遷移為非同步模式：

```
/boost Refactor the authentication middleware to use asynchronous token validation without breaking existing routes.
```

### 深度根本原因調查

「深度根本原因調查」章節

使用 `/boost` 追蹤陌生或大型程式碼庫中的執行路徑，以隔離意外失敗的確切源頭：

```
/boost Trace why HTTP request timeouts spike when batch payload size exceeds 2MB, without modifying code.
```

---

## 安全與權限

「安全性與權限」章節

Boost 遵守所有標準 Antigravity 安全政策：

- **範圍化權限**：子代理會繼承為作用中工作區或專案設定的檔案存取規則與指令 權限政策。
- **互動式核准**：當工作者提議受保護的終端機指令 或超出信任範圍的檔案編輯時，授權提示會浮現至您的 介面以供確認。
- **情境隔離**：子代理在隔離的記憶體空間中執行，防止 冗長的偵錯日誌與暫存差異雜亂您的主要聊天 記錄。

---

## 後續步驟

「後續步驟」章節

探索相關文件與指南：

- **[斜線指令目錄](/docs/slash-commands)**：審查 Antigravity 各介面中所有可用的 斜線指令。
- **[群體（`/swarm`)](/docs/swarm)**：協調具名工作者與驗證者，在共用訊息板上執行平行任務。
- **[Teamwork 代理團隊 (`/teamwork`)](/docs/teamwork)**：了解協作代理團隊 如何處理大規模遷移。
- **[子代理總覽](/docs/subagents)**：了解非同步子代理 工作者如何平行運作。
- **[Antigravity CLI 參考](/docs/cli/reference)**：探索終端機 按鍵綁定與 CLI 指令參考。

上一個
Goals

下一步
Swarms

您的下載已開始您如何得知我們？請選一個。這有助於我們接觸更多像您一樣的人。感謝您讓我們知道！
