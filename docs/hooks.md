# 掛鉤

掛鉤2-0Antigravity 應用程式功能掛鉤 Antigravity 應用程式功能Antigravity 應用程式Antigravity CLIAntigravity IDE適用於：Antigravity 應用程式Antigravity CLIAntigravity IDE
# 掛鉤
[「掛鉤」章節](#hooks)
掛鉤可讓您在 Antigravity 執行迴圈的特定位點執行自訂指令碼或 Shell 指令，以強制執行規則、執行程式碼檢查器或擷取診斷資訊。

- Antigravity 應用程式
- Antigravity CLI
- Antigravity IDE

## Antigravity 應用程式
[「Antigravity App」章節](#sr-tab-1)
### 在 Antigravity 應用程式中管理掛鉤
[「在 Antigravity App 中管理掛鉤」章節](#managing-hooks-in-the-antigravity-app)
在 Antigravity 應用程式中，掛鉤設定於 `hooks.json` 檔案位於您的 自訂目錄中：

- 工作區層級 : .agents/hooks.json 於您的工作區根目錄。
- 全域層級 : ~/.gemini/config/hooks.json .

您也可以從以下位置查看並切換掛鉤 **設定** > **自訂項目** > **掛鉤**。對於 Antigravity App， `<app_data_dir>` 於掛鉤承載中解析為 `~/.gemini/antigravity`.

## Antigravity CLI
[「Antigravity CLI」章節](#sr-tab-2)
### 在 Antigravity CLI 中管理掛鉤
[「在 Antigravity CLI 中管理掛鉤」章節](#managing-hooks-in-antigravity-cli)
掛鉤會在代理動作執行前或執行後立即攔截。它們適用於執行自動化的起飛前檢查或產生後格式化工具（例如執行 `prettier` 寫入檔案後）。

您可以在以下任何位置定義掛鉤：

- 工作區層級 : .agents/hooks.json 於您的專案根目錄。
- 全域層級 : ~/.gemini/config/hooks.json 或於您的主要 ~/.gemini/antigravity-cli/settings.json 檔案。
- 外掛程式層級 ：封裝於已安裝外掛程式的以下項目內 hooks.json 檔案。

您可以在 TUI 中輸入以下指令，以互動方式檢視所有已載入且啟用中的掛鉤：

```
/hooks
```

對於 Antigravity CLI， `<app_data_dir>` 於掛鉤承載中解析為 `~/.gemini/antigravity-cli`.

## Antigravity IDE
[「Antigravity IDE」章節](#sr-tab-3)
### 在 Antigravity IDE 中管理掛鉤
[「在 Antigravity IDE 中管理掛鉤」章節](#managing-hooks-in-antigravity-ide)
在獨立的 Antigravity IDE 中，掛鉤設定於 `hooks.json` 檔案：

- 工作區層級 : .agents/hooks.json 於您開啟的專案。
- 全域層級 : ~/.gemini/config/hooks.json .

您可以從以下位置管理啟用中的掛鉤 **…** > **自訂項目** > **掛鉤** 選單，於代理側邊面板。適用於 Antigravity IDE， `<app_data_dir>` 於掛鉤 承載中解析為 `~/.gemini/antigravity-ide`.

## 結構描述與檔案格式
[「架構與檔案格式」章節](#schema-and-file-format)
The `hooks.json` 檔案將掛鉤名稱對應到其事件設定：

```
{
  "my-linter-hook": {
    "PostToolUse": [
      {
        "matcher": "run_command",
        "hooks": [
          {
            "type": "command",
            "command": "./scripts/lint.sh",
            "timeout": 10
          }
        ]
      }
    ]
  },
  "safety-gate": {
    "enabled": false,
    "PreToolUse": [
      {
        "matcher": "run_command",
        "hooks": [
          {
            "command": "./scripts/safety-check.sh"
          }
        ]
      }
    ]
  },
  "reminder": {
    "PreInvocation": [
      {
        "type": "command",
        "command": "./scripts/reminder.sh"
      }
    ]
  },
  "session-init": {
    "SessionStart": [
      {
        "type": "command",
        "command": "./scripts/init-env.sh"
      }
    ]
  }
}
```

### 掛鉤定義欄位
[「掛鉤定義欄位」章節](#hook-definition-fields)
每個掛鉤定義支援下列欄位：

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| enabled | boolean | 選用。設定為 false 停用掛鉤而不移除它。預設為 true . |
| SessionStart | 陣列 | 新對話工作階段開始、首次模型呼叫前執行一次的處理器。 |
| PreToolUse | 陣列 | 工具執行前執行的處理器。 |
| PostToolUse | 陣列 | 工具完成後執行的處理器。 |
| PreInvocation | 陣列 | Antigravity 呼叫模型前執行的處理器。 |
| PostInvocation | 陣列 | 每次模型呼叫完成後立即執行的處理器。 |
| Stop | 陣列 | 執行迴圈終止時執行的處理器。 |

## 支援的事件
[「支援的事件」章節](#supported-events)
Antigravity 支援以下掛鉤事件：

| 事件 | 描述 | 比對器目標 |
| --- | --- | --- |
| SessionStart | 在新對話工作階段開始、首次模型呼叫前觸發一次。 | 不適用（忽略比對器） |
| PreToolUse | 在工具執行前觸發。 | 工具名稱（例如， run_command ) |
| PostToolUse | 在工具完成後觸發。 | 工具名稱 |
| PreInvocation | 在呼叫模型前觸發。 | 不適用（忽略比對器） |
| PostInvocation | 每次模型呼叫完成後立即觸發。 | 不適用（忽略比對器） |
| Stop | 在執行終止時觸發。 | 不適用（忽略比對器） |

### 比對器
[「比對器」章節](#matcher)
為 `PreToolUse` 和 `PostToolUse`，您可在…中使用規則運算式 `matcher` 欄位，用來指定哪些工具會觸發掛鉤：

- "" 或 "*" ：比對所有工具。
- "run_command" ：精確比對 run_command .
- "run_command|view_file" ：比對任一工具。
- "browser_.*" ：比對以以下開頭的任何工具 browser_ .

## 支援的工具
[「支援的工具」章節](#supported-tools)
為 `PreToolUse` 和 `PostToolUse` 比對器，您可依類別分組比對標準工具名稱。

### 檔案與目錄作業
[「檔案與目錄操作」章節](#file-and-directory-operations)
下列工具管理檔案與目錄：

- `view_file` ：檢視檔案的內容。
  - 引數 : AbsolutePath , StartLine （選用）， EndLine （選用）， IsSkillFile （選用）
- `write_to_file` ：建立新檔案。
  - 引數 : TargetFile , Overwrite , CodeContent , Description , IsArtifact （選用）， ArtifactMetadata （選用）
- `replace_file_content` ：編輯檔案中單一連續的文字區塊。
  - 引數 : TargetFile , Instruction , Description , AllowMultiple , TargetContent , ReplacementContent , StartLine , EndLine , TargetLintErrorIds （選用）
- `multi_replace_file_content` ：對同一檔案進行多處非連續編輯。
  - 引數 : TargetFile , Instruction , Description , ReplacementChunks （區塊陣列）， TargetLintErrorIds （選用）， ArtifactMetadata （選用）
- `list_dir` ：列出目錄的內容。
  - 引數 : DirectoryPath
- `find_by_name` ：使用 glob 模式搜尋檔案與目錄。
  - 引數 : SearchDirectory , Pattern , Type （選用）， Excludes （選用）， Extensions （選用）， FullPath （選用）， MaxDepth （選用）

### 搜尋與研究
[「搜尋與研究」章節](#search-and-research)
下列工具搜尋檔案與網路：

- `grep_search` ：在特定路徑內執行快速文字搜尋。
  - 引數 : SearchPath , Query , IsRegex （選用）， CaseInsensitive （選用）， Includes （選用）， MatchPerLine （選用）
- `search_web` ：執行一般網路搜尋。
  - 引數 : query , domain （選用）
- `read_url_content` ：擷取公開 URL 的文字內容。
  - 引數 : Url

### 系統與執行
[「系統與執行」章節](#system-and-execution)
下列工具執行指令並管理權限：

- `run_command` ：提議要執行的 Bash 指令。
  - 引數 : CommandLine , Cwd , WaitMsBeforeAsync , RunPersistent （選用）， RequestedTerminalID （選用）
- `manage_task` ：與背景任務互動。
  - 引數 : Action ( 'list' , 'kill' , 'status' , 'send_input' ), TaskId （選用）， Input （選用）
- `schedule` ：設定計時器或循環 cron 工作。
  - 引數 : DurationSeconds （選用）， CronExpression （選用）， MaxIterations （選用）， Prompt
- `list_permissions` ：檢視目前的資源存取授權。
  - 引數 ：無
- `ask_permission` ：要求額外的範圍權限。
  - 引數 : Action , Target , Reason

### 代理協作
[「代理協作」章節](#agent-collaboration)
下列工具協調子代理：

- `invoke_subagent` ：產生專門的子代理。
  - 引數 : Subagents （規格陣列，包含 Prompt , Role , TypeName , Workspace （選用））
- `define_subagent` ：建立自訂子代理。
  - 引數 : name , description , system_prompt , enable_mcp_tools （選用）， enable_write_tools （選用）， enable_subagent_tools （選用）
- `send_message` ：與其他代理通訊。
  - 引數 : Recipient , Message
- `manage_subagents` ：列出或終止作用中的子代理。
  - 引數 : Action ( 'list' , 'kill' , 'kill_all' ), ConversationIds （選用）

### 互動與媒體
[「互動與媒體」章節](#interaction-and-media)
下列工具處理使用者互動與媒體生成：

- `ask_question` ：提出選擇題。
  - 引數 : questions （問題陣列，包含 question , options , is_multi_select )
- `generate_image` ：建立或編輯圖片。
  - 引數 : Prompt , ImageName , ImagePaths （選用）

## 掛鉤處理器設定
[「掛鉤處理常式設定」章節](#hook-handler-configuration)
每個項目，位於 `hooks` 陣列支援以下欄位：

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| type | 字串 | 選用。目前僅 "command" 支援。預設為 "command" . |
| command | 字串 | 必要。要執行的殼層指令。 |
| timeout | 整數 | 選用。逾時秒數。預設為 30 . |

## 輸入與輸出合約
[「輸入與輸出契約」章節](#input-and-output-contract)
掛鉤透過以下方式接收輸入 **stdin** 以 JSON 格式並透過以下方式傳回輸出 **stdout** 以 JSON 格式。欄位名稱使用駝峰式命名。

### 常見輸入欄位
[「常用輸入欄位」章節](#common-input-fields)
所有掛鉤在其輸入承載中都會收到以下系統中繼資料欄位，位於 `stdin`:

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| conversationId | 字串 | 使用中代理對話的唯一 UUID。 |
| workspacePaths | 字串陣列 | 代表您已掛載工作區的絕對目錄路徑。 |
| transcriptPath | 字串 | 持久…的絕對路徑 transcript.jsonl 對話記錄。 備註 ：此檔案位於 <app_data_dir>/brain/<conversationId>/.system_generated/logs/transcript.jsonl 其中 <app_data_dir> 是： ~/.gemini/antigravity 適用於 Antigravity 應用程式 ~/.gemini/antigravity-cli 適用於 Antigravity CLI ~/.gemini/antigravity-ide 適用於 Antigravity IDE |
| artifactDirectoryPath | 字串 | 包含所有對話產出物與螢幕截圖的目錄之絕對路徑。 |
| modelName | 字串 | 處理呼叫的模型名稱或識別碼（例如， gemini-3.6-flash-medium ). |

---

### SessionStart
[「SessionStart」章節](#sessionstart)
在新對話工作階段開始、首次模型呼叫前觸發一次。

**輸入欄位 (stdin)**:

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| （常用欄位） |  | 包含 conversationId , workspacePaths , transcriptPath , artifactDirectoryPath , modelName . |

**輸出欄位 (stdout)**:

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| injectSteps | 物件陣列 | 選用。 要在工作階段開始時注入對話軌跡的步驟清單（結構描述與以下相同： PreInvocation 注入步驟）。 |

**範例**:

- 輸入 (stdin) :

```
{
  "conversationId": "ec33ebf9-0cba-4100-8142-c61503f6c587",
  "workspacePaths": ["/workspace/project"],
  "transcriptPath": "~/.gemini/antigravity/brain/ec33ebf9-0cba-4100-8142-c61503f6c587/.system_generated/logs/transcript.jsonl",
  "artifactDirectoryPath": "~/.gemini/antigravity/brain/ec33ebf9-0cba-4100-8142-c61503f6c587",
  "modelName": "gemini-3.6-flash-medium"
}
```

- 輸出 (stdout) :

```
{
  "injectSteps": [
    {
      "systemMessage": {
        "systemMessage": "Environment initialized for workspace /workspace/project"
      }
    }
  ]
}
```

---

### PreToolUse
[「PreToolUse」章節](#pretooluse)
在工具執行前觸發。

**輸入欄位 (stdin)**:

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| toolCall | 物件 | 提議的工具呼叫詳細資料。 |
| toolCall.name | 字串 | 正在執行的工具名稱（例如， run_command ). |
| toolCall.args | 物件 | 傳遞至工具呼叫的引數。 |
| stepIdx | 整數 | 軌跡中目前步驟的 0 起始索引。 |
| （常用欄位） |  | 包含 conversationId , workspacePaths , transcriptPath , artifactDirectoryPath , modelName . |

**輸出欄位 (stdout)**:

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| decision | 字串 | 必要。 控制工具呼叫的閘控方式： - "allow" ：允許工具呼叫繼續執行，委派給下一個掛鉤或預設政策。 - "auto_approve" ：當預設政策原本會提示時，自動核准工具呼叫，同時遵守明確的使用者設定規則。 - "deny" ：立即硬性封鎖執行。 - "ask" ：提示您核准，但遵守「Always Allow」設定。 - "force_ask" ：一律提示您核准，忽略快取的權限。 - "deny_unless_prior_grant" ：除非資源先前已在授權中核准，否則拒絕執行。 |
| reason | 字串 | 選用。 顯示給代理或您的決策說明。 |
| overwrite | 物件 | 選用。 取代參數合併（淺層頂層合併）至 toolCall.args 執行前。當引數被修改時，工具結果前會加上指明變更鍵的通知。 |
| permissionOverrides | 字串陣列 | 選用。 資源字串清單（例如 ["read_file(/path)", "command(args)"] ）以覆寫預設工具權限。 |

**範例**:

- 輸入 (stdin) :

```
{
  "toolCall": {
    "name": "run_command",
    "args": {
      "CommandLine": "npm test",
      "Cwd": "/workspace/project",
      "WaitMsBeforeAsync": 5000
    }
  },
  "stepIdx": 19,
  "conversationId": "ec33ebf9-0cba-4100-8142-c61503f6c587",
  "workspacePaths": ["/workspace/project"],
  "transcriptPath": "~/.gemini/antigravity/brain/ec33ebf9-0cba-4100-8142-c61503f6c587/.system_generated/logs/transcript.jsonl",
  "artifactDirectoryPath": "~/.gemini/antigravity/brain/ec33ebf9-0cba-4100-8142-c61503f6c587",
  "modelName": "gemini-3.6-flash-medium"
}
```

- 輸出 (stdout) :

```
{
  "decision": "ask",
  "reason": "Requires confirmation for test execution.",
  "permissionOverrides": ["command(npm test)"]
}
```

---

### PostToolUse
[「PostToolUse」章節](#posttooluse)
在工具完成後觸發。

**輸入欄位 (stdin)**:

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| toolCall | 物件 | 已執行的工具呼叫詳細資料（ name 和 args ). |
| stepIdx | 整數 | 已完成步驟的 0 起始索引。 |
| error | 字串 | 選用。工具呼叫失敗時的詳細執行階段錯誤訊息；成功時為空。 |
| （常用欄位） |  | 包含 conversationId , workspacePaths , transcriptPath , artifactDirectoryPath , modelName . |

**輸出欄位 (stdout)**：傳回空的 JSON 物件 `{}`.

**範例**:

- 輸入 (stdin) :

```
{
  "toolCall": {
    "name": "run_command",
    "args": {
      "CommandLine": "npm test",
      "Cwd": "/workspace/project",
      "WaitMsBeforeAsync": 5000
    }
  },
  "stepIdx": 5,
  "error": "exit status 1",
  "conversationId": "ec33ebf9-0cba-4100-8142-c61503f6c587",
  "workspacePaths": ["/workspace/project"],
  "transcriptPath": "~/.gemini/antigravity/brain/ec33ebf9-0cba-4100-8142-c61503f6c587/.system_generated/logs/transcript.jsonl",
  "artifactDirectoryPath": "~/.gemini/antigravity/brain/ec33ebf9-0cba-4100-8142-c61503f6c587",
  "modelName": "gemini-3.6-flash-medium"
}
```

- 輸出 (stdout) : {}

---

### PreInvocation
[「PreInvocation」章節](#preinvocation)
在呼叫模型前觸發。

**輸入欄位 (stdin)**:

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| invocationNum | 整數 | 目前模型呼叫的 0 起始序號（第一次呼叫為 0）。 |
| initialNumSteps | 整數 | 軌跡中目前的步驟數。 |
| （常用欄位） |  | 包含 conversationId , workspacePaths , transcriptPath , artifactDirectoryPath , modelName . |

**輸出欄位 (stdout)**:

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| injectSteps | 物件陣列 | 選用。 要在呼叫模型前注入對話軌跡的步驟清單。 |

每個物件，位於 `injectSteps` 陣列可包含以下任一欄位：

- `systemMessage` （物件）：給代理的帶外系統指令（例如， {"systemMessage": "Remember to lint", "metadata": {"source": "policy"}} ).
- `userMessage` （字串）：來自您的訊息。
- `ephemeralMessage` （字串）：暫態系統訊息。
- `toolCall` （物件）：要執行的工具呼叫。

**範例**:

- 輸入 (stdin) :

```
{
  "invocationNum": 3,
  "initialNumSteps": 10,
  "conversationId": "ec33ebf9-0cba-4100-8142-c61503f6c587",
  "workspacePaths": ["/workspace/project"],
  "transcriptPath": "~/.gemini/antigravity/brain/ec33ebf9-0cba-4100-8142-c61503f6c587/.system_generated/logs/transcript.jsonl",
  "artifactDirectoryPath": "~/.gemini/antigravity/brain/ec33ebf9-0cba-4100-8142-c61503f6c587",
  "modelName": "gemini-3.6-flash-medium"
}
```

- 輸出 (stdout) :

```
{
  "injectSteps": [{"ephemeralMessage": "Remember to lint"}]
}
```

---

### PostInvocation
[「PostInvocation」章節](#postinvocation)
每次模型呼叫完成後立即觸發。

**輸入欄位 (stdin)**：與以下相同 `PreInvocation` 輸入欄位 (`invocationNum` 和 `initialNumSteps`).

**輸出欄位 (stdout)**:

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| injectSteps | 物件陣列 | 選用。 要在呼叫完成後注入的步驟清單（結構描述與以下相同： PreInvocation 注入步驟）。 |
| terminationBehavior | 字串 | 選用。 控制注入後的執行流程： - "force_continue" ：強制循環繼續。 - "terminate" ：強制循環終止。 - "" （或省略）：預設行為。 |

**範例**:

- 輸入 (stdin) ：與以下相同 PreInvocation .
- 輸出 (stdout) :

```
{
  "injectSteps": [],
  "terminationBehavior": ""
}
```

---

### 停止
[「停止」章節](#stop)
在執行迴圈終止時觸發。

**輸入欄位 (stdin)**:

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| executionNum | 整數 | 執行嘗試的序號。 |
| terminationReason | 字串 | 執行停止的原因（例如， "model_stop" , "max_steps_exceeded" , "error" ). |
| error | 字串 | 選用。若終止由系統錯誤引起，則為錯誤訊息。 |
| fullyIdle | boolean | 必要。 true 若代理已完全完成，且所有背景指令或非同步任務皆已完成。 false 若背景任務仍在執行。 |
| （常用欄位） |  | 包含 conversationId , workspacePaths , transcriptPath , artifactDirectoryPath , modelName . |

**輸出欄位 (stdout)**:

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| decision | 字串 | 必要。 設為 "continue" 防止代理停止並重新進入執行循環。任何其他值都允許停止。 |
| reason | 字串 | 選用。 如果 decision 是 "continue" ，此訊息會以系統訊息注入對話。 |

**範例**:

- 輸入 (stdin) :

```
{
  "executionNum": 1,
  "terminationReason": "model_stop",
  "error": "",
  "fullyIdle": true,
  "conversationId": "ec33ebf9-0cba-4100-8142-c61503f6c587",
  "workspacePaths": ["/workspace/project"],
  "transcriptPath": "~/.gemini/antigravity/brain/ec33ebf9-0cba-4100-8142-c61503f6c587/.system_generated/logs/transcript.jsonl",
  "artifactDirectoryPath": "~/.gemini/antigravity/brain/ec33ebf9-0cba-4100-8142-c61503f6c587",
  "modelName": "gemini-3.6-flash-medium"
}
```

- 輸出 (stdout) :

```
{
  "decision": "continue",
  "reason": "Not done yet"
}
```
[上一個  
自訂子代理](/docs/subagents/)[下一步  
邊車](/docs/sidecars/)
