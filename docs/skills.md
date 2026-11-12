代理技能
2-0
Antigravity 應用程式
功能
代理技能 Antigravity 應用程式功能
Antigravity 應用程式
Antigravity CLI
Antigravity IDE
適用於：
Antigravity 應用程式
Antigravity CLI
Antigravity IDE
# 代理技能

[「代理技能」章節](#agent-skills)

技能是 [開放標準](https://agentskills.io/home) 用來擴充代理
功能。技能是包含 的資料夾 `SKILL.md` 檔案含代理在處理特定任務時可遵循的
指示。

## 什麼是技能？

[「什麼是技能？」章節](#what-are-skills)

技能是可重複使用的知識套件，可擴展代理的能力。
每個技能包含：

- **指示**：關於如何處理特定任務的明確協定。
- **最佳實務**：要遵循的慣例、風格指南與檢查清單。
- **指令碼與資源**：代理可執行的 選用輔助指令碼與資料結構描述。

在每一輪中，代理會看到可用技能的清單，包括其名稱與
說明。若某項技能看起來與您的任務相關，代理會讀取完整
指示並加以遵循。

## 技能剖析

[「技能剖析」章節](#anatomy-of-a-skill)

技能以目錄套件的形式組織，包含必要的 `SKILL.md` 檔案：

```
my-skill/
├── SKILL.md       # Required skill instructions and metadata
├── scripts/       # Optional executable scripts
├── examples/      # Optional reference implementations
└── resources/     # Optional templates, schemas, or data files
```

### 資訊清單格式（`SKILL.md`)

[「資訊清單格式（SKILL.md）」章節](#manifest-format-skillmd)

每個 `SKILL.md` 檔案開頭是定義其名稱與
觸發條件的 YAML frontmatter：

```
---
name: code-review
description: Reviews code changes for bugs, style issues, and best practices. Use when reviewing pull requests or checking code quality.
---

# Code Review Skill

When reviewing code, follow these steps:

## Review checklist

1. **Correctness**: Verify that the code satisfies specifications.
2. **Edge cases**: Ensure error conditions and boundaries are handled.
3. **Style**: Follow project naming and architectural patterns.
4. **Performance**: Identify potential bottlenecks or inefficiencies.
```

### Frontmatter 欄位

[「前置資訊欄位」章節](#frontmatter-fields)

YAML 前置資訊支援下列欄位：

| 欄位 | 必要 | 描述 |
| --- | --- | --- |
| `name` | 否 | 技能的唯一識別碼（小寫，空格以連字號取代）。若未提供，預設為資料夾名稱。 |
| `description` | 是 | 清楚描述技能的功能與使用時機。這是代理決定是否套用該技能時所看到的內容。 |

## 代理如何使用技能

[「代理使用技能的方式」章節](#how-the-agent-uses-skills)

技能遵循 **漸進式揭露** 模式：

1. **探索**: 在每個回合，代理都會看到可用技能的清單，包含 其名稱與說明。
2. **啟用**：若技能看似與您的任務相關，代理會讀取 完整的 `SKILL.md` 內容。
3. **執行**：代理在處理 您的任務時會遵循技能的指示。

您不需要明確告訴代理使用技能——它會根據情境自行決定。不過，若您想確保使用某個技能，可以直接提及該技能的名稱。

## 最佳實務

[「最佳實務」章節](#best-practices)

### 保持技能聚焦

[「保持技能聚焦」章節](#keep-skills-focused)

每個技能都應專注做好一件事。與其建立「包山包海」的技能，不如為不同任務建立各自獨立的技能。

### 撰寫清晰的描述

[「撰寫清楚的描述」章節](#write-clear-descriptions)

描述是代理決定是否使用您技能的依據。請具體說明技能的功能與適用時機。

### 將指令碼作為黑箱使用

[「將指令碼視為黑箱使用」章節](#use-scripts-as-black-boxes)

若您的技能包含指令碼，請鼓勵代理使用執行它們 `--help`
先閱讀，而非閱讀整個原始碼。這能讓代理的上下文
專注於任務。

### 包含決策樹

[「納入決策樹」章節](#include-decision-trees)

對於複雜的技能，新增一個區段，協助代理依情境選擇正確的方法
。

## 依介面區分的技能

[「依介面分類的技能」章節](#skills-by-surface)

探索如何在您偏好的介面上建立與管理技能：

- [Antigravity 應用程式](#tab-panel-229)
- [Antigravity CLI](#tab-panel-230)
- [Antigravity IDE](#tab-panel-231)

### Antigravity 應用程式

[「Antigravity App」章節](#sr-tab-1)

#### Antigravity 應用程式技能位置

[「Antigravity App 技能位置」章節](#antigravity-app-skill-locations)

Antigravity App 會從兩個主要位置載入技能：

| 位置 | 範圍 |
| --- | --- |
| `<workspace-root>/.agents/skills/<skill-folder>/` | 工作區專用 |
| `~/.gemini/config/skills/<skill-folder>/` | 全域（所有工作區） |

每個範圍各有不同的用途：

- **工作區技能**: 範圍限定於單一專案，並提交至版本 控制，以便在您的工程團隊間分享。Antigravity 也會讀取 `.agents/skills/` 在每個上層資料夾中，上溯至儲存庫根目錄。
- **全域技能**：適用於您工作站上的所有專案。

#### 在 Antigravity 應用程式中呼叫技能

[「在 Antigravity App 中呼叫技能」章節](#invoking-skills-in-the-antigravity-app)

您可以透過兩種方式在 Antigravity 應用程式中呼叫技能：

- **自主呼叫**：代理會根據您的提示詞自動讀取並遵循相關 技能。
- **手動斜線指令**：輸入 `/<skill-name>` 在訊息框中，以 明確叫用技能。

### Antigravity CLI

[「Antigravity CLI」章節](#sr-tab-2)

#### CLI 技能位置

[「CLI 技能位置」章節](#cli-skill-locations)

Antigravity CLI 完整支援本機與全域代理技能：

| 位置 | 範圍 |
| --- | --- |
| `<workspace-root>/.agents/skills/<skill-folder>/` | 工作區專用 |
| `~/.gemini/config/skills/<skill-folder>/` | 全域（所有工作區，與 Antigravity 應用程式共用） |
| `~/.gemini/config/plugins/<plugin-folder>/skills/` | 外掛程式提供的技能（[外掛程式](/docs/plugins)) |

Antigravity 也會讀取 `.agents/skills/` 在每個上層資料夾中，直到
儲存庫根目錄。Antigravity CLI 也會從以下位置載入技能：
`~/.gemini/antigravity-cli/skills/` 和 `~/.gemini/skills/`, 而
Antigravity App 不會讀取它。詳情請參閱
[自訂項目探索](/docs/customization-discovery?tab=cli#check-what-antigravity-loaded).

#### 斜線指令轉換

[「斜線指令轉換」章節](#slash-command-conversion)

每當您定義技能時，CLI **自動將其轉換為斜線指令** 於互動式 TUI 內部。例如，建立名為 的技能
`deploy-staging` 使 `/deploy-staging` 可在提示詞框中使用。如果您
在 CLI 執行期間新增技能，請執行 `/skills reload` 或開始新
對話以更新斜線指令。

#### 使用外掛管理技能

[「使用外掛管理技能」章節](#managing-skills-with-plugins)

技能也可以打包在外掛程式中，並透過下列方式管理 `agy plugin`:

```
# List installed plugins (pass --json to include bundled skill names and paths)
agy plugin list
agy plugin list --json

# Install a plugin from the official marketplace (defaults to @antigravity-plugins-official)
agy plugin install <plugin-name>

# Install a skill bundle from a GitHub URL or local plugin path
agy plugin install https://github.com/<owner>/<repo>
agy plugin install ./my-skills-plugin
```

### Antigravity IDE

[「Antigravity IDE」章節](#sr-tab-3)

#### Antigravity IDE 技能位置

[「Antigravity IDE 技能位置」章節](#antigravity-ide-skill-locations)

在獨立的 Antigravity IDE 中，技能從以下位置探索：

| 位置 | 範圍 |
| --- | --- |
| `<workspace-root>/.agents/skills/<skill-folder>/` | 工作區專用 |
| `~/.gemini/config/skills/<skill-folder>/` | 全域（所有工作區；舊版 `~/.gemini/antigravity/skills/` 亦支援） |

您可以從以下位置檢視所有啟用中的技能 **自訂項目** 選單，於代理
側邊面板。

[上一個
邊車](/docs/sidecars/)

[下一步
IDE 工作流程](/docs/ide/workflows/)

您的下載已開始

## 您如何得知我們？

請選一個。這有助於我們接觸更多像您一樣的人。

感謝您讓我們知道！
