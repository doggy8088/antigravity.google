# 從工作流程遷移至技能

工作流程轉技能遷移2-0Antigravity 應用程式開始使用工作流程轉技能遷移 Antigravity 應用程式開始使用Antigravity 應用程式
# 從工作流程遷移至技能
[「從工作流程移轉至技能」章節](#migrate-from-workflows-to-skills)
了解如何將舊版 Antigravity 工作流程遷移至現代化標準 [代理技能](/docs/skills).

## 為何遷移至技能？
[「為何要移轉至技能？」章節](#why-migrate-to-skills)
工作流程最初在 Antigravity IDE 中以單一 Markdown 檔案的形式推出，專為可重複的提示詞序列設計。雖然對簡單指令很有效，但隨著任務複雜度提升，單體式檔案帶來了挑戰。

2026 年 5 月，Antigravity 採用了開放的產業標準 [代理技能](https://agentskills.io/home)。遷移至技能帶來顯著的架構與營運改善：

漸進式情境載入

技能只會預先將必要的詮釋資料（名稱與描述）載入代理的上下文。完整指示與參考資料會在需要時載入，避免提示詞膨脹。

多檔案目錄綑綁

與單一檔案工作流程不同，技能是目錄組合。您可以將可執行的輔助指令碼、文件、範例結構描述與參考資產直接放在下列項目旁邊 `SKILL.md`.

開放生態系標準

技能遵循跨平台代理規格，讓您能在 Antigravity IDE、Antigravity CLI 及其他相容的代理工具之間共用與重複使用技能。

子代理整合

技能可以定義專門的系統提示詞、指定工具需求，並直接從技能套件將子任務委派給自訂子代理。

---

## 比較：工作流程與技能
[「比較：工作流程與技能」章節](#comparison-workflows-and-skills)
| 功能 | 舊版工作流程（ .md ) | 代理技能（ SKILL.md ) |
| --- | --- | --- |
| 規格 | 專屬 Antigravity 格式 | 開啟代理技能標準（ agentskills.io ) |
| 結構 | 單一獨立版本 .md 檔案 | 目錄套件（ <skill-name>/SKILL.md + 資產） |
| 工作區路徑 | .agents/workflows/<name>.md | .agents/skills/<name>/SKILL.md |
| 全域路徑 | ~/.gemini/config/workflows/<name>.md | ~/.gemini/config/skills/<name>/SKILL.md |
| 情境載入 | 整個檔案已載入提示詞 | 漸進式 ：中繼資料預先索引；內文按需載入 |
| 隨附資產 | 不支援（所有內容必須放在一個提示詞中） | 支援 ( scripts/ , references/ , examples/ ) |
| 斜線指令 | 支援 ( /<workflow-name> ) | 支援 ( /<skill-name> ) |
| 自主探索 | 支援 | 支援（使用描述的增強語意比對） |
| 檔案大小上限 | 12,000 個字元 | 無限制組合；模組化多檔案架構 |

---

## 自動遷移
[「自動移轉」章節](#automatic-migration)
Antigravity 提供自動化遷移指令，可探索您現有的工作流程並將其轉換為技能目錄套件。

### 使用 /migrate-workflows
[「使用 /migrate-workflows」章節](#using-migrate-workflows)
完成下列步驟以自動遷移您的工作流程：

1. 開啟 Antigravity 應用程式。
2. 執行遷移指令： `/migrate-workflows`
3. 代理會執行下列動作：
  - 掃描全域（ ~/.gemini/config/workflows/ ）與工作區層級（ .agents/workflows/ ）目錄。
  - 解析每個工作流程的 YAML 前置資料與內文。
  - 鷹架 .agents/skills/<workflow-name>/SKILL.md 具備合規的中繼資料。
  - 透過附加以下內容來封存原始工作流程檔 .bak （例如， deploy.md 變為 deploy.md.bak ).
  - 立即啟用斜線指令與自主代理使用的新技能。

---

## 手動遷移指南
[「手動移轉指南」章節](#manual-migration-guide)
若您偏好手動遷移工作流程，或想將單體式提示詞重構為模組化技能套件，請依下列步驟操作：

1. 建立技能目錄[「建立技能目錄」章節](#create-the-skill-directory) 在工作區或全域設定目錄中，建立以工作流程命名的新資料夾 `skills/`: [工作區技能](#tab-panel-92)[全域技能](#tab-panel-93)`mkdir-p.agents/skills/deploy-staging``mkdir-p~/.gemini/config/skills/deploy-staging`
2. 建立並填入 `SKILL.md`[「建立並填寫 SKILL.md」章節](#create-and-populate-skillmd) 將您現有的工作流程 Markdown 檔案移至 `SKILL.md` 於新的 資料夾內： `mv.agents/workflows/deploy-staging.md.agents/skills/deploy-staging/SKILL.md`
3. 標準化 YAML 前置資訊[「標準化 YAML 前置資訊」章節](#standardize-the-yaml-frontmatter) 確認您的 `SKILL.md` 以標準開頭 `name` 和 `description` frontmatter 欄位。描述應清楚說明 **什麼** 技能的作用與 **當** 代理應使用它： `---name:deploy-stagingdescription:Deploys the current project build to the staging preview environment on App Engine. Use when testing staging releases or verifying PR previews.---# Deploy StagingFollow these instructions to deploy the current build to staging...`
4. （選用）擷取指令碼與資源[標題為「(選用) 擷取指令碼與資源」的區段](#optional-extract-scripts-and-resources) 若您的工作流程包含內嵌指令碼、程式碼片段或冗長的參考文件，請將它們提取至專屬子目錄，以保持 `SKILL.md` 精簡： `.agents/skills/deploy-staging/├── SKILL.md├── scripts/│   └── deploy.sh└── references/└── staging-endpoints.json` 於 `SKILL.md`，指示代理在需要時執行或檢查這些檔案，而非在提示詞中重複它們。
5. 驗證遷移後的技能[「驗證已移轉的技能」章節](#verify-the-migrated-skill) 在 Antigravity 應用程式中直接呼叫技能： `/deploy-staging` 代理會載入技能詮釋資料並執行步驟。

---

## 遷移前後範例
[「移轉前後範例」章節](#before-and-after-migration-example)
### 遷移前：舊版單體式工作流程
[「之前：舊版單體工作流程」章節](#before-legacy-monolithic-workflow)
```
---
name: build-and-test
description: Run test suites and verify build
---

Run the following checks sequentially:
1. First run `npm run check` to verify TypeScript and template integrity.
2. Next execute `npm run test` for unit tests.
3. If tests pass, run `npm run build` and report the generated bundle size.
```

### 之後：模組化代理技能套件
[「之後：模組化代理技能套件」章節](#after-modular-agent-skill-package)
```
.agents/skills/build-and-test/
├── SKILL.md
└── scripts/
    └── verify-bundle.js
```

```
---
name: build-and-test
description: Runs full validation suite including TypeScript checks, unit tests, and production build verification. Use before submitting changes.
---

# Build and Test Suite

Execute the project verification pipeline:

1. **Type & Template Diagnostics**:
   ```bash
   npm run check
   ```

2. **Unit Tests**:
   ```bash
   npm run test
   ```

3. **Production Build & Bundle Size Analysis**:
   ```bash
   npm run build
   node scripts/verify-bundle.js
   ```
```

## 常見問題
[「常見問題」章節](#frequently-asked-questions)
### 我的工作流程會立即停止運作嗎？
[「我的工作流程會立即停止運作嗎？」章節](#will-my-workflows-stop-working-immediately)
否。目前的工作流程在 Antigravity 中仍可運作，直到 **2026 年 10 月 19 日**。我們正加速帶來更強大、更動態的工作流程定義與使用方式，並將很快附上如何轉換至新工作流程系統的說明。2026 年 10 月 19 日之後，舊版工作流程目錄將不再被索引，也無法使用斜線指令執行。

### 我是否仍可使用斜線指令呼叫已遷移的技能？
[「我是否仍可使用斜線指令呼叫已移轉的技能？」章節](#can-i-still-invoke-my-migrated-skills-using-slash-commands)
是。您可以呼叫位於以下位置的任何技能 `.agents/skills/<name>/` 或 `~/.gemini/config/skills/<name>/` 輸入 `/<name>` 於聊天中，如同舊版工作流程。

### 若我同時有同名的工作流程與技能會發生什麼事？
[「如果我同時擁有同名的工作流程與技能會發生什麼事？」章節](#what-happens-if-i-have-both-a-workflow-and-a-skill-with-the-same-name)
技能優先於舊版工作流程。如果兩者 `.agents/skills/deploy/` 和 `.agents/workflows/deploy.md` 存在，Antigravity 便執行該技能。

### 我應該將全域技能放在哪裡？
[「我應該將全域技能放在哪裡？」章節](#where-should-i-put-global-skills)
將全域技能放在以下位置 `~/.gemini/config/skills/<skill-name>/SKILL.md` 讓它們可在你的所有工作區存取。

## 相關文件
[「相關文件」章節](#related-documentation)
探索下列資源以深入了解：

- [代理技能總覽](/docs/skills) ：建立、設定與組織技能的完整指南。
- [自訂代理規則](/docs/ide/rules) ：了解如何定義持久的工作區與全域規則。
- [Antigravity CLI 外掛與技能](/docs/cli/plugins) ：在 Antigravity CLI 中管理技能。
[上一個  
Firebase Studio](/docs/firebase-studio-migration/)[下一步  
方案](/docs/plans/)
