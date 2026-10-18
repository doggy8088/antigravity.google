# 自訂子代理

自訂子代理2-0Antigravity 應用程式功能自訂子代理 Antigravity App 功能Antigravity 應用程式Antigravity CLI適用於：Antigravity 應用程式Antigravity CLI
# 自訂子代理
[「自訂子代理」章節](#custom-subagents)
將平行建置、多檔案程式碼生成與研究掃描委派給並行的背景子代理，同時維持您目前的程式設計流程。

- Antigravity 應用程式
- Antigravity CLI

## Antigravity 應用程式
[「Antigravity App」章節](#sr-tab-1)
### 呼叫子代理
[「呼叫子代理」章節](#invoking-subagents)
父代理會呼叫 `invoke_subagent` 產生具有專屬角色與初始提示詞的新並行工作階段的工具：

- 工作區選項 ：子代理可繼承與其父代理相同的工作區（ inherit ），建立隔離的 Git worktree（ branch ），或共用目錄儲存空間（ share ).
- 情境隔離 ：子代理使用指定的模型層級執行，但不繼承父代理現有的對話記錄（上下文視窗），從乾淨的狀態開始。
- 執行 ：叫用後，子代理會立即開始執行其任務。父代理可同時叫用多個子代理。
- 監控 ：您可以按一下子代理面板中其對話，或按下以下按鍵，直接監控任何子代理的進度 Alt+J 於 CLI。

### 內建子代理
[「內建子代理」章節](#built-in-subagents)
Antigravity 開箱即附數個專門化的子代理：

- `research` ：針對程式碼庫研究、檔案導覽與結構探索最佳化。
- `browser` ：操作沙箱隔離的網頁瀏覽器以執行互動式瀏覽器測試（僅透過以下項目叫用 `/browser` 斜線命令 ).
- `self` ：呼叫代理的直接複製，共享相同的系統指示與工具集。

### 自訂子代理
[「自訂子代理」章節](#custom-subagents-1)
您可以使用 Markdown 格式定義可重複使用的自訂子代理（`.md`）搭配 YAML frontmatter，或在工作階段期間使用…建立暫態子代理 `define_subagent` 工具。

#### 代理位置與探索
[「代理位置與探索」章節](#agent-location-and-discovery)
Antigravity 會自動探索自訂子代理 `.md` 檔案，位於以下位置：

| 位置 | 路徑 | 範圍 |
| --- | --- | --- |
| 工作區自訂 | .agents/agents/<name>.md 或 .agents/agents/<name>/agent.md | 工作區 / 存放庫根目錄 |
| 全域自訂 | ~/.gemini/config/agents/<name>.md 或 .../agents/<name>/agent.md | 整機 / 所有專案 |
| 外掛程式 | plugins/<plugin_name>/agents/ | 隨附外掛程式套件 |

#### Frontmatter 設定（YAML）
[「前置資訊設定（YAML）」章節](#frontmatter-configuration-yaml)
使用檔案頂端的 YAML frontmatter 定義代理詮釋資料、能力上限與執行政策 `.md` 檔案：

| 屬性 | 類型 | 預設 | 描述 |
| --- | --- | --- | --- |
| name | string | （必填） | 自訂代理的唯一識別碼。 |
| description | string | （必填） | 供規劃器判斷何時將任務委派給此代理的詳細描述。 |
| tools | string[] | [] | 此子代理允許使用的工具明確清單（例如， view_file , replace_file_content , grep_search , run_command ). |
| mainAgent | boolean | true | 如果 true ，允許在聊天介面中選為主要代理。 |
| subagent | boolean | true | 如果 true ，允許使用…進行呼叫 invoke_subagent 工具。 |
| model | string | inherit | 呼叫時使用的模型層級（ inherit , flash ，或 pro ). |
| commandExecutionPolicy | string | sandbox | shell 指令的自動執行政策（ off , auto , eager , sandbox ). |
| mcpServers | object[] | [] | 為此子代理設定的自訂 Model Context Protocol 伺服器。 |
| skills / plugins | string[] | [] | 技能路徑（例如， skills/my-helper-skill ）或外掛程式相依性。 |

> 已知問題（工具驗證） ：在以下項目中指定未對應或拼錯的工具
名稱 tools 清單可能導致子代理行程於
執行期間卡住。請仔細檢查確切的工具名稱（例如 view_file 或 run_command ）於設定自訂子代理時。增強的結構描述驗證與此行為的修正計畫於未來的更新中推出。

#### 系統提示詞與 Markdown 內文
[「系統提示詞與 Markdown 內文」章節](#system-prompt-and-markdown-body)
YAML 之後的內容 `---` 分隔符號定義子代理的系統提示詞。您可以使用標準 Markdown H1 標題（`# System Prompt`, `# Review Guidelines`).

#### Markdown 自訂代理範例（ code-auditor.md )
[「Markdown 自訂代理範例（code-auditor.md）」章節](#example-markdown-custom-agent-code-auditormd)
下列範例定義自訂安全稽核員子代理：

```
---
name: code-auditor
description: Specialized subagent for security audits, static analysis, and code quality reviews.
tools:
  - view_file
  - grep_search
  - run_command
subagent: true
mainAgent: false
model: pro
commandExecutionPolicy: sandbox
skills:
  - skills/security-checklist
---

# System Prompt
You are an expert security auditor and code reviewer. Your primary objective is to inspect source code for security vulnerabilities, memory leaks, and anti-patterns.

# Review Guidelines
1. Perform thorough static analysis without altering files unless explicitly asked.
2. Flag potential injection flaws, unvalidated inputs, or hardcoded secrets.
3. Provide concise, actionable remediation steps for each finding.
```

### 子代理生命週期與狀態
[「子代理生命週期與狀態」章節](#subagent-lifecycle-and-states)
子代理在背景中非同步執行。在工作階段的任何時刻，子代理都會處於三種狀態之一。

#### 執行中
[「執行中」章節](#running)
子代理正在積極執行其工作、呼叫工具並生成回應：

- 取消 ：您可以按一下以下項目來取消執行中的子代理 停止子代理 於子代理面板（或按下 k 於 CLI）。
- 父控制項 ：父代理可透過傳送訊息或終止子代理來中斷它。

#### 閒置
[「閒置」章節](#idle)
子代理已完成其工作、已將結果訊息傳送給其父代理，並已暫停執行：

- 重新喚醒 ：閒置的代理會自動重新喚醒至 執行中 在收到另一個代理的訊息時的狀態。
- 情境保留 ：喚醒時，代理會保留先前執行回合的所有上下文。

#### 已終止
[「已終止」章節](#killed)
子代理已永久終止，無法重新喚醒：

- 清理 ：為子代理產生的任何暫時 Git worktree 都會自動清除。
- 可見性 ：歷史對話記錄在 JSONL 日誌中仍可讀取。

### 代理間通訊與巢狀限制
[「代理間通訊與巢狀限制」章節](#inter-agent-communication-and-nesting-limits)
代理透過使用唯一的代理對話 ID 互相傳送訊息來溝通：

- 彈性路由 ：代理可與父代理、子代理或已知 ID 的對等代理通訊。
- 自動喚醒 ：向閒置的子代理傳送訊息會自動重新喚醒它，以處理傳入的指示。
- 共用文字記錄 ：代理可讀取彼此的對話記錄，以稽核多步驟工作流程。

### 權限與設定繼承
[「權限與設定繼承」章節](#permissions-and-configuration-inheritance)
子代理會繼承其父代理的安全設定，以維持安全邊界：

- 繼承的範圍 ：子代理會自動繼承父代理允許的終端機指令前綴、檔案讀寫目錄範圍與沙箱設定。
- 工作區存取 ：父代理保留對其子代理工作區的完整存取權，包括隔離的 Git worktree。
- 權限冒泡 ：若子代理遇到需要使用者授權的工具執行，要求會自動冒泡至主 UI 或子代理面板。

### 多代理協調器
[「多代理協調器」章節](#multi-agent-orchestrators)
Antigravity 提供兩個先進的多代理編排器，專為不同的任務規模與執行時程設計。

#### 提升深度推理（ /boost )
[「強化深度推理（/boost）」章節](#boost-deep-reasoning-boost)
呼叫 [/boost](/docs/boost) 啟動三層多代理推理 階層 (`Orchestrator` -> `DeepCoder` / `DeepInvestigator` 協調器 -> 隔離執行工作程序）。它在互動式程式設計工作階段（數秒至數小時）中處理棘手的並行錯誤、演算法挑戰與非簡單重構，並具獨立驗證循環。深入了解請參閱 [Boost 文件](/docs/boost).

#### 多代理團隊合作（ /teamwork-preview )
[「多代理協作（/teamwork-preview）」章節](#multi-agent-teamwork-teamwork-preview)
使用 [/teamwork-preview](/docs/teamwork) 協調專為大型軟體專案、多檔案重構與複雜研究設計的專門化 AI 代理團隊。該團隊處理里程碑拆解、平行實作與獨立驗證檢查，讓您定義高層級目標，平台負責管理代理協調。深入了解請參閱 [Teamwork 文件](/docs/teamwork).

## Antigravity CLI
[「Antigravity CLI」章節](#sr-tab-2)
### 非同步執行模型
[「非同步執行模型」章節](#asynchronous-execution-model)
為最大化開發速度，Antigravity CLI 採用多執行緒非同步執行架構。主代理不會在長時間建置、大規模程式碼庫搜尋或複雜的多檔案編輯期間鎖定您的終端機工作階段，而是將這些作業委派給平行 **子代理** 或背景 **任務**.

此委派模式確保您不必等待高延遲的 AI 流程。您可以繼續起草程式碼、提交提示詞或檢查檔案，同時多個自主背景執行緒平行執行驗證工作。

### 管理代理： /agents 面板
[「管理代理：/agents 面板」章節](#managing-agents-the-agents-panel)
使用中的代理階層與自訂代理選擇選單完全透明，並可透過互動式…進行管理 [代理管理員面板（ /agents )](/docs/cli/commands/agents).

#### 開啟面板
[「開啟面板」章節](#opening-the-panel)
類型 `/agents` 於提示詞並按下 Enter 開啟互動式 **代理管理員面板**.

#### 面板概覽
[「面板總覽」章節](#panel-overview)
該面板會顯示所有使用中、已完成、已終止或失敗的背景代理的即時檢查清單：

- 識別碼 ：唯一的目標子代理 ID。
- 角色 ：代理的專門角色（例如「Codebase Researcher」或「Database Debugger」）。
- 狀態 ：即時狀態指示器（執行中、完成、已終止或錯誤）。
- 步驟 ：目前正在執行的工具或推理步驟的即時摘要。

### 自訂代理（Markdown 格式）
[「自訂代理（Markdown 格式）」章節](#custom-agents-markdown-format)
除了內建代理，CLI 會自動探索以 Markdown 格式定義的自訂代理（`.md`）搭配 YAML frontmatter：

- 工作區代理 : .agents/agents/<name>.md 或 .agents/agents/<name>/agent.md
- 全域代理 : ~/.gemini/config/agents/

當自訂代理具備 `subagent: true` 在其 YAML frontmatter 中設定，主代理可使用…呼叫它 `invoke_subagent`。您也可以在…中直接將自訂代理選為主要代理 `/agents` 面板選單。

關於完整的結構描述、frontmatter 參數與程式碼範例，請參閱 [自訂子代理](/docs/subagents#custom-subagents).

### 深度監控
[「深度監控」章節](#deep-dive-monitoring)
若要檢視特定背景代理的內部推理、想法與記錄：

1. 開啟 /agents 面板並使用 突顯目標代理 ↑ / ↓ .
2. 按下 Enter 開啟 子代理詳細檢視 .
3. 檢查子代理的完整推理記錄，包括其私有內部思考、工具呼叫與執行輸出。
4. 按下 Esc 離開並返回主代理管理員清單。

### 使用 監控背景任務 /tasks
[「使用 /tasks 監控背景工作」章節](#monitoring-background-tasks-with-tasks)
對於非代理背景操作，如直接 shell 指令、測試套件，或使用發起的簡單背景查詢 `/btw`，使用 `/tasks` 指令：

```
/tasks
```

工作追蹤清單讓您可以執行下列動作：

- 追蹤標準的非互動式背景處理程序。
- 使用以下方式選取工作 ↑ / ↓ 並按下 Enter 檢視 stdout 記錄。
- 安全地終止失控的終端機處理程序。

### 鍵盤人體工學
[「鍵盤人體工學」章節](#keyboard-ergonomics)
為降低子代理需要手動互動或工具授權時的內容切換阻力，Antigravity CLI 整合了高效率的捷徑路徑。

#### 詳細的「teleport」導覽（ Alt+J )
[「詳細「瞬移」導覽（Alt+J）」章節](#detailed-teleport-navigation-altj)
當子代理遇到需要核准的工具（例如寫入檔案或執行資料庫遷移）時，狀態列通知會閃爍：

- 按下 Alt + J 於主要提示詞面板內部，立即從目前對話直接跳到等待您核准的下一個子代理的詳細檢視。
- 確認或拒絕該動作，然後按下 Esc 返回你的主要執行緒。

#### 」快速路徑確認（ Ctrl+K )
[「「Fast-path」確認（Ctrl+K）」章節](#fast-path-confirmations-ctrlk)
若要立即授權代理動作而不離開目前的工作區：

1. 查看提示詞方塊正上方顯示的行內狀態通知。它會摘要待處理動作（例如， Subagent 12 asks to run "npm test" ).
2. 按下 Ctrl + K 立即核准待處理的快速路徑動作，無需切換面板或開啟覆蓋層。

## 後續步驟
[「後續步驟」章節](#next-steps)
探索相關文件與指南：

- [提升深度推理（ /boost )](/docs/boost) ：探索隨選多代理推理。
- [Teamwork 代理團隊 ( /teamwork-preview )](/docs/teamwork) ：啟動協作多代理團隊，處理長期專案。
- [設定、算繪與按鍵繫結](/docs/settings) ：自訂按鍵對應、緩衝與 JSON 規則。
- [權限與沙箱](/docs/sandbox) ：對背景處理程序強制執行安全隔離環。
- [外掛程式與技能](/docs/plugins) ：建立您自己的自訂技能與斜線指令。
- [斜線指令目錄](/docs/slash-commands) ：審查 Antigravity 各介面中所有可用的斜線指令。
[上一個  
IDE 工作流程](/docs/ide/workflows/)[下一步  
生命週期掛鉤](/docs/hooks/)
