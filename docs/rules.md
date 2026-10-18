# 規則

規則2-0Antigravity 應用程式功能規則 Antigravity App 功能Antigravity 應用程式Antigravity CLIAntigravity IDE適用於：Antigravity 應用程式Antigravity CLIAntigravity IDE
# 規則
[「規則」章節](#rules)
規則是持久的指令、編碼標準與架構 限制，形塑 Antigravity 在您的程式碼庫中的行為。與只適用於單一對話的聊天 提示詞不同，Antigravity 會自動 從您的檔案系統探索規則，並將其注入代理的情境。

## 規則的儲存位置
[「規則的儲存位置」章節](#where-rules-are-stored)
Antigravity 在多個範圍中探索規則，依優先順序（由高至低）列於下方。規則為 **累積** 而非取代式：Antigravity 會將全域、工作區與目錄範圍內找到的所有規則合併進提示詞。若指令衝突，以更特定的目錄規則為優先。

### 目錄範圍規則
[「目錄範圍規則」章節](#directory-scoped-rules)
您可以放置 `AGENTS.md` 或 `GEMINI.md` 檔案—或 `.agents/rules/` 目錄——於 **任何子目錄** 您的專案。每當 Antigravity 讀取或 編輯檔案，會從該檔案的資料夾向上走訪目錄樹至 工作區根目錄，在每個層級載入規則：

- <dir>/AGENTS.md 或 <dir>/GEMINI.md
- <dir>/.agents/AGENTS.md 或 <dir>/.agents/GEMINI.md
- <dir>/.agents/rules/*.md （以及舊版 `<dir>/.agent/rules/*.md`)

### 全域規則
[「全域規則」章節](#global-rules)
全域規則適用於 **全部** 您工作站上的專案：

- 獨立全域檔案 （無需 frontmatter，一律啟用）： ~/.gemini/AGENTS.md , ~/.gemini/GEMINI.md , ~/.gemini/config/AGENTS.md ，或 ~/.gemini/config/GEMINI.md
- 模組化全域規則 （需要 YAML frontmatter）： ~/.gemini/config/rules/*.md

## YAML 前置資料與啟用模式
[「YAML 前置資訊與啟用模式」章節](#yaml-frontmatter-and-activation-modes)
Frontmatter 需求取決於檔案類型：

1. `AGENTS.md` 和 `GEMINI.md` 請勿使用前置資料。 Antigravity 將其全部內容視為純 Markdown，並使其持續保持作用中（ always_on ）用於其目錄範圍。
2. 每個 `.md` 檔案內部 `rules/` 必須以 YAML frontmatter 開頭 宣告有效的 trigger .

### 支援的前置資訊鍵
[「支援的前置資訊鍵」章節](#supported-frontmatter-keys)
在以下項目中的規則 `.agents/rules/` 支援下列 YAML frontmatter 鍵：

```
---
trigger: model_decision       # Required: always_on | model_decision | glob | manual
description: "..."            # Required for model_decision; recommended for all rules
globs: "*.ts, *.tsx"          # Required for glob (singular `glob:` is also accepted)
---
```

| 欄位 | 類型 | 必要 | 描述 |
| --- | --- | --- | --- |
| trigger | string | 是 | 控制規則啟動的方式與時機： model_decision , always_on , glob ，或 manual . |
| description | string | 必要 供 model_decision | 規則適用時機的簡潔摘要。Antigravity 會將此摘要注入提示詞索引，以供 model_decision 規則，並在…時將其用作備援內容 always_on 規則超過 token 預算。 |
| globs （或 glob ) | string | 必要 供 glob | 以逗號分隔的檔案 glob 模式（例如， "*.py, *_test.py" ）。包裝以…開頭的模式 * 以引號括住，讓 YAML 不會將 * 作為別名錨點。 |

### 啟用模式
[「啟用模式」章節](#activation-modes)
設定 `trigger` 鍵，控制規則載入至 上下文的方式與時機：

- **model_decision** *（最適合詳細的領域指南）*：Antigravity 僅注入規則的路徑與 `description` 預先（漸進式揭露）。當你的任務符合描述時，代理會按需讀取完整規則。 `---trigger:model_decisiondescription:"Apply these guidelines whenever writing or reviewing database migrations or SQL schema changes."---# Database Migration Rules1.Never drop or rename a column in a single deployment; use an expand-and-contract migration.2.Always add`CONCURRENTLY`when creating indexes on existing tables in PostgreSQL.`
- **always_on** *（在範圍內一律啟用）*：Antigravity 會在每一輪將完整 內容注入系統提示詞。建議將其放置於 `always_on` 直接在…中撰寫規則 `AGENTS.md` 當你不需要 frontmatter 時。
- **glob** *（以檔案模式界定範圍）*：當代理 與符合以下項目中任何逗號分隔模式的檔案互動時自動啟用 `globs`: `---trigger:globglobs:"*.proto, **/*.pb.go"description:"Protobuf schema design and backward-compatibility rules."---# Protobuf Conventions*Never reuse a deleted field number; always mark both the field number and name as`reserved`.`
- **manual** *（明確 @ 僅提及）*：Antigravity 從不自動載入這些 規則。僅當您明確要求時，代理才會注入該規則 `@`-在聊天中提及它（適用於發行檢查清單或稽核評分標準）。

## 進階功能與限制
[「進階功能與限制」章節](#advanced-features-and-limits)
### 檔案包含
[「檔案包含」章節](#file-includes)
在任何規則檔案中（`AGENTS.md`, `GEMINI.md`，或 `.agents/rules/*.md`）， Antigravity 支援兩種不同的 `@` 參照檔案的語法：

- `@[label](path)` ：在提示詞評估與大小限制檢查前，將目標檔案的內容 直接內嵌至規則中。
  - 路徑解析 ：Antigravity 從包含規則檔案的 目錄解析相對路徑。以以下開頭的路徑 ~/ 展開至您的使用者家目錄。
  - Frontmatter 剝除 ：若包含的檔案含有 YAML frontmatter， Antigravity 會移除 frontmatter，僅併入 Markdown 內文。
- `@filename` ：是否 非 內嵌檔案內容。 它會解析路徑（相對於規則檔案，或作為 工作區相對/絕對路徑），並將其重寫為標準絕對 工作區路徑 ( @/workspace/path ）讓代理擁有明確的檔案參照。

```
Follow our shared API design standards:
@[API Design Standards](../docs/api-standards.md)

When updating database models, check @src/db/schema.ts first.
```

### 跨專案分享規則
[「跨專案分享規則」章節](#sharing-rules-across-projects)
若要分享儲存在下列項目之外的規則 `.agents/rules/` 或納入規則的巢狀 子目錄，同時保留其 YAML frontmatter 與觸發條件， 請建立 `.agents/rules.json`:

```
{
  "inherits": [
    { "path": "../shared-config/.agents/rules.json" }
  ],
  "entries": [
    { "path": "../shared-rules", "exclude": ["deprecated_rules.md", "legacy/"] },
    { "path": "rules", "include_only": ["frontend/react.md"] }
  ]
}
```

### 大小限制與權杖預算
[「大小限制與符記預算」章節](#size-limits-and-token-budgets)
為防止規則耗盡內容視窗，Antigravity 強制執行兩項限制：

1. 24 KB (`24,000` 位元組）每檔案限制 ：Antigravity 會截斷任何超過 24,000 位元組的單一 規則檔案（在展開後 @[label](path) 包含）。
2. 20,000 權杖彙總規則預算 ：所有使用中的全域與 always_on 規則共用 20,000 個 token 的預算，與自訂預算（例如技能與 MCP 等外掛）分開計算。若總量超過 20,000 個 token，Antigravity 會自動將最大的規則檔案從行內文字降級為輕量指標（ - <path>: <description> ），讓代理能依需求讀取 它們。

## 依介面設定
[「依介面設定」章節](#configuration-by-surface)
在下方選取您的介面，以設定全域或工作區專屬規則：

- Antigravity 應用程式
- Antigravity CLI
- Antigravity IDE & 擴充功能

### Antigravity 應用程式
[「Antigravity App」章節](#sr-tab-1)
#### 在 Antigravity 應用程式中管理規則
[「在 Antigravity App 中管理規則」章節](#managing-rules-in-the-antigravity-app)
依照以下步驟在 Antigravity 應用程式中建立或管理規則：

1. 開啟 自訂項目 面板，從應用程式選單或專案設定。
2. 選取 規則 分頁。
3. 按一下 + 全域 建立全域規則，或 + 工作區 建立範圍限於使用中專案的規則。

#### Antigravity 應用程式檔案位置
[「Antigravity App 檔案位置」章節](#antigravity-app-file-locations)
Antigravity App 會從下列位置載入規則：

- 工作區規則 : AGENTS.md , GEMINI.md ，或 .agents/rules/*.md 於您的 工作區根目錄或任何專案子目錄。
- 全域規則 : ~/.gemini/AGENTS.md , ~/.gemini/GEMINI.md ，或…中的模組化 規則 ~/.gemini/config/rules/*.md .

### Antigravity CLI
[「Antigravity CLI」章節](#sr-tab-2)
#### 在 Antigravity CLI 中管理規則
[「在 Antigravity CLI 中管理規則」章節](#managing-rules-in-antigravity-cli)
Antigravity CLI 會在提示詞展開期間評估工作區、目錄範圍、全域與外掛程式 規則：

- 工作區與目錄規則 : AGENTS.md , GEMINI.md ，或 .agents/rules/*.md 於存放庫根目錄或子目錄。
- 全域規則 : ~/.gemini/AGENTS.md , ~/.gemini/GEMINI.md , ~/.gemini/config/rules/*.md ，或 ~/.gemini/antigravity-cli/rules/*.md .
- 外掛程式規則 ：Antigravity 會自動啟用封裝在 已安裝外掛程式內的規則，位於 ~/.gemini/antigravity-cli/plugins/<plugin_name>/rules/ .

### Antigravity IDE & 擴充功能
[「Antigravity IDE」章節 & 擴充功能」](#sr-tab-3)
#### 在 Antigravity IDE 與擴充功能中管理規則
[「在 Antigravity IDE 與擴充功能中管理規則」章節](#managing-rules-in-antigravity-ide-and-extensions)
依照以下步驟在 Antigravity IDE 與擴充功能中建立或管理規則：

1. 按一下 … 選單，位於代理側邊面板頂部。
2. 選取 自訂項目 ，然後導覽至 規則 分頁。
3. 按一下 + 全域 撰寫工作站範圍的規則，或 + 工作區 建立專案專屬規則。

#### Antigravity IDE 與擴充功能檔案位置
[「Antigravity IDE 與擴充功能檔案位置」章節](#antigravity-ide-and-extensions-file-locations)
Antigravity IDE 與擴充功能從以下位置載入規則：

- 工作區規則 : AGENTS.md , GEMINI.md ，或 .agents/rules/*.md 在你的專案或子目錄內。
- 全域規則 : ~/.gemini/AGENTS.md , ~/.gemini/GEMINI.md ，或 ~/.gemini/config/rules/*.md .
[上一個  
代理技能](/docs/skills/)[下一步  
IDE 工作流程](/docs/ide/workflows/)
