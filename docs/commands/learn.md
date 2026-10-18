# Learn 指令（/learn）

Learn 指令（/learn）2-0Antigravity 應用程式功能Learn 指令（/learn）Antigravity 應用程式功能Antigravity 應用程式Antigravity CLIAntigravity IDE適用於：Antigravity 應用程式Antigravity CLIAntigravity IDE
# Learn 指令（/learn）
[「學習指令（/learn）」章節](#learn-command-learn)
擷取代理在此工作階段學到的內容，例如您做出的修正、它屢次遺漏的限制，或終於成功的多步驟設定，並將其保存為 [規則](/docs/rules) 或 [技能](/docs/skills) 讓未來的工作階段自動受益。

## 總覽
[「總覽」章節](#overview)
代理不會記住對話。如果您花了二十分鐘教代理，您的儲存庫測試必須使用特定旗標執行，這些知識會在對話結束時消失，除非它被寫成自訂項目。

The `/learn` 指令要求代理反思近期互動並提出持久性變更：

- 找到課程 ：代理會分析您最近的訊息，尋找明確的 修正（「no」、「instead」、「that failed」），比較失敗的嘗試與最終修正，並分離關鍵變更與其根本原因。
- 將其分類 ：代理會決定該經驗是 規則 （護欄、約束或格式不變量）或一個 技能 （可重複使用的多步驟程序、旗標組合或速查表）。
- 偏好更新勝過建立新檔案 ：若現有規則或技能曾被使用但 失敗、過時或遺漏邊界案例，代理會更新它而非 建立重複項目。
- 撰寫前先提案 ：代理從不立即編輯組態檔。它會先草擬提案產出物供您審查。

若工作階段未產生可重用的內容，代理會如實說明並結束，不提出變更。

## 執行 /learn
[「執行 /learn」章節](#run-learn)
您可以執行 `/learn` 無論有無焦點。

### 回顧最近的工作階段
[「回顧最近的工作階段」章節](#reflect-on-the-recent-session)
修正代理或完成棘手的設定後，輸入純指令：

```
/learn
```

代理會審查最近的對話、識別要保留的內容，並 提議規則或技能。

### 教授特定課程
[「教導特定課程」章節](#teach-a-specific-lesson)
若要準確指示代理擷取的目標，請加入指示：

```
/learn always run vitest with --pool=forks in this repo
```

```
/learn save the database transaction retry pattern we just used as a project rule
```

代理仍會分類並界定課程範圍，但略過探索步驟。

## 審查並核准提案
[「審查並核准提案」章節](#review-and-approve-the-proposal)
`/learn` 遵循強制性的提案工作流程：

1. 結構描述檢查 ：代理會檢查您現有的規則與技能，或 內建自訂指南，讓新檔案符合專案既有的 frontmatter 與 目錄慣例。
2. 提案產出物 ：代理會建立 learning_proposal.md 產出物，說明其分類（規則或技能）、理由，以及打算新增或差異化的確切文字。
3. 您的審查 ：產出物要求意見回饋。新增行內註解以 調整範圍、措辭或位置。
4. 套用 ：僅在您明確核准後，代理才會建立或更新 檔案。

## 位置 /learn 儲存知識
[「/learn 儲存知識的位置」章節](#where-learn-saves-knowledge)
`/learn` 寫入 Antigravity 探索自訂項目的相同位置。代理會根據該經驗教訓是專屬於此專案還是普遍適用，選擇工作區或全域範圍，並在提案中確認位置。

| 類型 | 工作區範圍 | 全域範圍 |
| --- | --- | --- |
| 規則 | AGENTS.md 或 GEMINI.md 於工作區或子目錄，或 .agents/rules/<name>.md | ~/.gemini/config/rules/<name>.md ，或 ~/.gemini/config/AGENTS.md 或 GEMINI.md |
| 技能 | .agents/skills/<name>/SKILL.md | ~/.gemini/config/skills/<name>/SKILL.md |

### 規則或技能？
[「規則還是技能？」章節](#rule-or-skill)
代理使用與您手寫自訂時相同的指引：

- 規則 ：「一律使用 zod 用於驗證」，「絕不匯入 internal/ 跨套件」、「提交訊息必須遵循 Conventional Commits。」規則是代理應持續牢記，或在觸發條件符合時遵守的簡短約束。
- 技能 ：「如何執行資料庫遷移」、「如何重新產生 protobuf 繫結並修復會出錯的三個位置」。技能是代理可按需載入並執行的程序，形式可為 /<skill-name> 斜線命令。

## 後續步驟
[「後續步驟」章節](#next-steps)
探索相關文件：

- 規則 ：了解規則如何被探索、界定範圍與啟用。
- 代理技能 ：學習 SKILL.md 格式，以及技能 如何成為斜線指令。
- 外掛程式 ：封裝規則與技能以跨專案 與團隊共用。
- 斜線指令總覽 ：瀏覽所有可用的 斜線指令。
[上一個  
目標（/goal）](/docs/commands/goal/)[下一步  
權限（/permissions）](/docs/cli/commands/permissions/)
