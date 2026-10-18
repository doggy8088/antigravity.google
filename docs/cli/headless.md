# 無頭模式

無頭模式 - Antigravity CLIcliAntigravity CLI功能無頭模式 - Antigravity CLI Antigravity CLI 功能Antigravity CLI適用於：Antigravity CLI
# 無頭模式
[「無頭模式」章節](#headless-mode)
以非互動方式執行 Antigravity CLI，以編寫代理任務指令碼、與 CI 管線整合，並擷取機器可讀的輸出。

無頭模式（亦稱列印模式）會向代理傳送單一提示詞，串流或回傳回應後結束。每當您需要在程式中（而非終端機 UI）取得代理輸出時使用。

## 執行單一提示詞
[「執行單一提示詞」章節](#run-a-single-prompt)
傳遞包含以下內容的提示詞 `-p` （或其別名（複數） `--print` 和 `--prompt`）以執行一次並結束：

```
agy -p "In one sentence, what is a git rebase?"
```

```
A git rebase rewrites the commit history by transplanting a sequence of commits onto a new base commit, imposing a strictly linear progression of changes that eliminates arbitrary merge artifacts.
```

回應會傳送至 `stdout`。診斷資訊—錯誤、驗證提示、進度與權限通知—會傳送至 `stderr`。此拆分讓擷取的回應保持乾淨：

```
# Capture only the model response; diagnostics still print to the terminal.
answer=$(agy -p "Name three popular version control systems, comma-separated.")
```

> 備註： 無頭模式使用您快取的憑證。使用互動式驗證一次 agy 先進行工作階段。在沒有終端機的非互動式環境（例如 CI）中，尚未驗證的執行會以…結束 authentication required 錯誤而非卡住。

## 輸出格式
[「輸出格式」章節](#output-formats)
The `--output-format` 旗標控制 的形狀 `stdout`。它接受三個值：

| 格式 | stdout 形狀 | 將其用於 |
| --- | --- | --- |
| text | 回應文字（預設） | 人類可讀的輸出、快速指令碼 |
| json | 完成時列印一個 JSON 物件 | 擷取結果與中繼資料 |
| stream-json | 換行分隔 JSON (NDJSON) 事件 | 監控進度、工具與權杖用量 |

### 文字
[「文字」章節](#text)
這是預設格式。回應文字會直接傳送至 `stdout` 不換行：

```
agy -p "In one sentence, what does the command git bisect do?"
```

```
Git bisect executes a binary search algorithm across a project's commit history to rapidly isolate the precise commit responsible for introducing a defect.
```

### JSON
[「JSON」章節](#json)
設定 `--output-format json` 在執行完成後取得單一 JSON 封包。CLI 會以單行發出；透過…傳送管線 `jq` 美化輸出：

```
agy -p "In one sentence, what is a git rebase?" --output-format json | jq
```

```
{
  "conversation_id": "055a398f-db14-4c5f-abbb-1bf03f8120a7",
  "status": "SUCCESS",
  "response": "A git rebase rewrites the commit history by transplanting a sequence of commits onto a new base commit, imposing a strictly linear progression of changes that eliminates arbitrary merge artifacts.\n",
  "duration_seconds": 7.16,
  "num_turns": 1,
  "usage": {
    "input_tokens": 10415,
    "output_tokens": 657,
    "thinking_tokens": 616,
    "cache_read_tokens": 8113,
    "total_tokens": 11072
  }
}
```

信封包含下列欄位：

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| conversation_id | 字串 | 對話 ID，用於稍後恢復 |
| status | 字串 | 終端機狀態（參閱 狀態值 ) |
| response | 字串 | 代理的自由文字回應 |
| error | 字串 | 錯誤訊息；僅於失敗時顯示 |
| duration_seconds | 數字 | 執行的實際經過時間 |
| num_turns | 數字 | 對話中的使用者回合數 |
| structured_output | 物件 | 已解析的結構描述輸出；僅與以下項目一起呈現 --json-schema |
| json_schema | 物件 | 強制執行的結構描述；僅在…時出現 --json-schema |
| usage | 物件 | 權杖數量： input_tokens , output_tokens , thinking_tokens , cache_read_tokens , total_tokens |

#### 含結構描述的結構化輸出
[「使用架構的結構化輸出」章節](#structured-output-with-a-schema)
通過 `--json-schema` 將答案限制為符合結構描述。解析後的物件會出現在 `structured_output`，與 `response` 保留相同的承載，序列化為字串：

```
agy -p "Parse the semantic version string v2.14.3 into an object with integer fields major, minor, and patch." \
  --output-format json \
  --json-schema '{"type":"object","properties":{"major":{"type":"integer"},"minor":{"type":"integer"},"patch":{"type":"integer"}},"required":["major","minor","patch"]}' | jq
```

```
{
  "conversation_id": "4e502687-290c-4030-b908-5ed6c68fa5dc",
  "status": "SUCCESS",
  "response": "{\"major\":2,\"minor\":14,\"patch\":3}\n",
  "duration_seconds": 4.45,
  "num_turns": 1,
  "structured_output": { "major": 2, "minor": 14, "patch": 3 },
  "json_schema": {
    "type": "object",
    "properties": {
      "major": { "type": "integer" },
      "minor": { "type": "integer" },
      "patch": { "type": "integer" }
    },
    "required": ["major", "minor", "patch"]
  },
  "usage": { "input_tokens": 10522, "output_tokens": 354, "thinking_tokens": 329, "cache_read_tokens": 8112, "total_tokens": 10876 }
}
```

該旗標接受結構描述字串、…的路徑 `.json` 結構描述檔案，或基本型別名稱（`string`, `number`, `integer`, `boolean`）。從…讀取解析後的值 `structured_output`:

```
agy -p "Parse the semantic version string v2.14.3 into an object with integer fields major, minor, and patch." \
  --output-format json \
  --json-schema '{"type":"object","properties":{"major":{"type":"integer"},"minor":{"type":"integer"},"patch":{"type":"integer"}},"required":["major","minor","patch"]}' \
  | jq '.structured_output'
```

### 串流 JSON
[「串流 JSON」章節](#streaming-json)
設定 `--output-format stream-json` 在執行過程中每行發出一個 JSON 物件（NDJSON）。使用此格式即時觀察工具呼叫與 token 使用量。

```
agy -p "In one sentence, what is a git rebase?" --output-format stream-json
```

串流以一個…開始 `init` 事件，後接任意數量的 `step_update` 事件，並以一個結束 `result` 事件（ `cwd` 和 `tools` 在以下範例中陣列會縮寫）：

```
{"event":"init","conversation_id":"c3b66b04-872b-4fbe-a3a4-058a026ef20a","init":{"cwd":"/home/user/project","tools":["ask_permission","run_command","write_to_file","..."],"permission_mode":"request-review"}}
{"event":"step_update","step_update":{"conversation_id":"c3b66b04-872b-4fbe-a3a4-058a026ef20a","step_index":0,"state":"DONE","step_type":"user_input"}}
{"event":"step_update","step_update":{"conversation_id":"c3b66b04-872b-4fbe-a3a4-058a026ef20a","step_index":3,"state":"DONE","step_type":"agent_response","text_delta":"Git rebase destructively rewrites a branch's commit history by systematically detaching its unique commits and sequentially reapplying them onto a new base commit.\n","duration_seconds":6.28,"usage":{"input_tokens":10302,"output_tokens":582,"thinking_tokens":551,"cache_read_tokens":8113,"total_tokens":10884}}}
{"event":"step_update","step_update":{"conversation_id":"c3b66b04-872b-4fbe-a3a4-058a026ef20a","step_index":4,"state":"DONE","step_type":"checkpoint","duration_seconds":0.53,"usage":{"input_tokens":116,"output_tokens":7,"thinking_tokens":0,"cache_read_tokens":0,"total_tokens":123}}}
{"event":"result","result":{"conversation_id":"c3b66b04-872b-4fbe-a3a4-058a026ef20a","status":"SUCCESS","response":"Git rebase destructively rewrites a branch's commit history by systematically detaching its unique commits and sequentially reapplying them onto a new base commit.\n","duration_seconds":6.88,"num_turns":1,"usage":{"input_tokens":10418,"output_tokens":589,"thinking_tokens":551,"cache_read_tokens":8113,"total_tokens":11007}}}
```

當回應以區塊串流傳入時，下列項目 `agent_response` 步驟發出一個或多個 `ACTIVE` 承載部分內容的事件 `text_delta` 最終 之前的片段 `DONE`；像這樣的簡短回覆會在單一 `DONE`.

每行都是一個事件物件，其 `event` 欄位會標示其型別：

| event | 承載金鑰 | 已發出 |
| --- | --- | --- |
| init | init | 串流開始時一次 |
| step_update | step_update | 對於每個步驟轉換或文字差異 |
| result | result | 結尾時一次（形狀與 相同） json ) |

The `init` 承載記錄執行組態。 `model` 和 `agent` 僅在使用以下方式設定時才會出現 `--model` 或 `--agent`; `permission_mode` 是 `request-review` 預設（且 `always-proceed` 下方 `--dangerously-skip-permissions`):

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| cwd | 字串 | 工作目錄 |
| tools | string[] | 所有可用工具的名稱 |
| permission_mode | 字串 | 有效權限模式 |
| model | 字串 | 使用中模型（覆寫時） |
| agent | 字串 | 使用中代理（被覆寫時） |
| json_schema | 物件 | 強制結構描述，設定方式為 --json-schema |

每個 `step_update` 承載描述一個步驟。觀察到的 `step_type` 值包括 `user_input`, `agent_response`, `tool`，與 `checkpoint`; `state` 是 `ACTIVE` 在步驟執行期間，且 `DONE` 完成時：

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| conversation_id | 字串 | 對話 ID |
| step_index | 數字 | 步驟的從零開始索引 |
| state | 字串 | ACTIVE 或 DONE |
| step_type | 字串 | 步驟類別，例如 agent_response 或 tool |
| tool_name | 字串 | 工具步驟中的標準工具名稱 |
| text_delta | 字串 | 漸進式回應文字 |
| duration_seconds | 數字 | 步驟持續時間（若已知） |
| usage | 物件 | 已知時顯示每步驟權杖用量 |
| tool_info | 物件 | 工具呼叫詳細資訊 |
| subagent_info | 物件 | 子代理呼叫詳細資訊 |

#### 串流中的工具呼叫
[「串流中的工具呼叫」章節](#tool-calls-in-the-stream)
在工具步驟中， `tool_info` 承載該呼叫及其結果。這是實際執行中的真實工具步驟 `echo hello_headless_demo`:

```
{"event":"step_update","step_update":{"conversation_id":"edb1c8c1-50ba-4f3f-87eb-412d0e9d47c3","step_index":4,"state":"DONE","step_type":"tool","tool_name":"run_command","duration_seconds":0.07,"tool_info":{"name":"run_command","parameters":{"CommandLine":"echo hello_headless_demo"},"output":"hello_headless_demo\r\n"}}}
```

`tool_info` 保留 `name`, `parameters`, `output`，以及—當工具失敗時—一個 `error` 附 的物件 `type` 和 `message`。產生子代理的步驟帶有 `subagent_info` 改為在 下列出每個子代理 `subagents` （包含 `type_name`, `role`, `conversation_id`, `log_uri`，與 `workspace_uris`).

#### 串流中的結構化輸出
[「串流中的結構化輸出」章節](#structured-output-in-the-stream)
搭配 `--json-schema`，結構描述適用於終端機 `result` 事件，承載相同的 `structured_output` 和 `json_schema` 欄位作為 `json` 封包。

## 使用 jq 解析輸出
[「使用 jq 解析輸出」章節](#parse-output-with-jq)
`stdout` 為機器可讀，因此 `jq` 擷取您需要的內容。

從 JSON 執行取得回應文字：

```
agy -p "Name three popular version control systems, comma-separated." --output-format json | jq -r '.response'
```

```
Git, Subversion, Mercurial.
```

在串流文字抵達時將其串接：

```
agy -p "Explain what a merge conflict is in two sentences." --output-format stream-json \
  | jq -j 'select(.event=="step_update") | .step_update.text_delta // empty'
```

從終端機讀取權杖用量 `result` 事件：

```
agy -p "In one sentence, what is a git rebase?" --output-format stream-json \
  | jq 'select(.event=="result") | .result.usage'
```

> 提示： 使用 jq -j （連接輸出）於串接時 text_delta 片段
以便 jq 不會在它們之間插入換行。

## 繼續對話
[「繼續對話」章節](#continue-a-conversation)
無頭執行預設為無狀態。使用以下方式恢復先前的情境 `--continue` (`-c`）用於最近的對話，或 `--conversation` 使用先前執行的…的 ID `conversation_id`:

```
# Continue the most recent conversation.
agy -p "Now explain your previous answer in more detail" --continue

# Resume a specific conversation by ID.
agy -p "Summarize what we discussed" --conversation 055a398f-db14-4c5f-abbb-1bf03f8120a7
```

每個都會啟動新的處理程序。若要在單一處理程序中執行多個回合，請參閱 [從 stdin 串流提示詞](#stream-prompts-from-stdin).

## 從 stdin 串流提示詞
[「從 stdin 串流提示詞」章節](#stream-prompts-from-stdin)
使用 `--input-format stream-json` 維持單一、連續的對話處理程序，逐一透過標準輸入（stdin）餵入提示詞。每個提示詞執行完整的一輪並發出自己的 `result` 事件。

這種方法非常適合會根據上一個答案動態決定下一個提示詞的應用程式。由於流程只啟動一次，後續回合可略過啟動負擔，並重複使用已熱機的對話。這比使用…重複執行指令快得多 `--continue`.

> 備註： --input-format stream-json 需要 --output-format stream-json 。
在串流工作階段中，CLI 會發出一個 result 每回合事件。

### 傳送提示詞
[「傳送提示詞」章節](#send-a-prompt)
每行寫入一個 JSON 物件至 `stdin`。該 `event` 鍵指定訊息類型（符合輸出串流格式）。提示詞表示為 `user` 事件搭配 `message`:

```
{ "event": "user", "message": { "content": "Reply with exactly the word: apple. Nothing else." } }
```

您可以將多個提示詞傳送至單一工作階段：

```
printf '%s\n' \
  '{"event":"user","message":{"content":"Reply with exactly the word: apple. Nothing else."}}' \
  '{"event":"user","message":{"content":"What word did I ask you to reply with in my previous message? Answer with just that word."}}' \
  | agy --input-format stream-json --output-format stream-json
```

The `content` 欄位可接受標準字串或文字區塊清單。以下兩種格式等效：

```
{ "event": "user", "message": { "content": "Reply with exactly: banana" } }
{ "event": "user", "message": { "content": [{ "type": "text", "text": "Reply with exactly: banana" }] } }
```

`text` 是唯一支援的區塊類型。提交任何其他區塊類型會以錯誤訊息結束工作階段，而非靜默捨棄該區塊。這能確保代理永不回答您未明確傳送的提示詞。

### 讀取結果
[「讀取結果」章節](#read-the-results)
輸出串流的運作方式如下：

1. 以單一 開啟 init 事件。
2. 發出一系列 step_update 啟用中回合的事件。
3. 以最終項目結束該輪 result 事件。

此範例顯示前一節中雙提示詞 Bash 指令的輸出（使用 `init` 承載縮寫）：

```
{"event":"init","conversation_id":"9ec58bfd-4d67-4f5e-83a5-9d907e9c6b1f","init":{"cwd":"/home/user/project","tools":["ask_permission","run_command","write_to_file","..."],"permission_mode":"request-review"}}
{"event":"step_update","step_update":{"conversation_id":"9ec58bfd-4d67-4f5e-83a5-9d907e9c6b1f","step_index":0,"state":"DONE","step_type":"user_input"}}
{"event":"step_update","step_update":{"conversation_id":"9ec58bfd-4d67-4f5e-83a5-9d907e9c6b1f","step_index":2,"state":"ACTIVE","step_type":"agent_response","text_delta":"apple"}}
{"event":"step_update","step_update":{"conversation_id":"9ec58bfd-4d67-4f5e-83a5-9d907e9c6b1f","step_index":2,"state":"DONE","step_type":"agent_response","text_delta":"\n","duration_seconds":1.169607627,"usage":{"input_tokens":30384,"output_tokens":4,"thinking_tokens":0,"cache_read_tokens":0,"total_tokens":30388}}}
{"event":"result","result":{"conversation_id":"9ec58bfd-4d67-4f5e-83a5-9d907e9c6b1f","status":"SUCCESS","response":"apple\n","duration_seconds":1.427806958,"num_turns":1,"usage":{"input_tokens":30384,"output_tokens":4,"thinking_tokens":0,"cache_read_tokens":0,"total_tokens":30388}}}
{"event":"step_update","step_update":{"conversation_id":"9ec58bfd-4d67-4f5e-83a5-9d907e9c6b1f","step_index":3,"state":"DONE","step_type":"user_input"}}
{"event":"step_update","step_update":{"conversation_id":"9ec58bfd-4d67-4f5e-83a5-9d907e9c6b1f","step_index":4,"state":"DONE","step_type":"agent_response","text_delta":"apple\n","duration_seconds":0.895679386,"usage":{"input_tokens":278,"output_tokens":4,"thinking_tokens":0,"cache_read_tokens":30214,"total_tokens":282}}}
{"event":"result","result":{"conversation_id":"9ec58bfd-4d67-4f5e-83a5-9d907e9c6b1f","status":"SUCCESS","response":"apple\n","duration_seconds":2.548755756,"num_turns":2,"usage":{"input_tokens":30662,"output_tokens":8,"thinking_tokens":0,"cache_read_tokens":30214,"total_tokens":30670}}}
```

第二回合的回答 `apple` 從首回合的上下文。請注意，單一 `conversation_id` 追蹤整個工作階段，且 `init` 僅傳送一次。

解析結果物件時請注意，回應文字僅適用於目前的回合，而中繼資料計數器追蹤的是累計的工作階段：

| 欄位 | 範圍 |
| --- | --- |
| response | 發出它的回合 |
| num_turns | 在工作階段中累積 |
| usage | 在工作階段中累積 |
| duration_seconds | 在工作階段中累積 |

若要篩選並僅檢視最終回應，您可以將輸出透過管線傳至 `jq`:

```
printf '%s\n' \
  '{"event":"user","message":{"content":"Reply with exactly: one"}}' \
  '{"event":"user","message":{"content":"Reply with exactly: two"}}' \
  | agy --input-format stream-json --output-format stream-json \
  | jq -r 'select(.event=="result") | "\(.result.num_turns): \(.result.response)"'
```

```
1: one

2: two
```

### 以程式化方式驅動工作階段
[「以程式化方式驅動工作階段」章節](#drive-a-session-programmatically)
若不預先傳入所有提示詞，您可以保留 `stdin` 在指令碼中保持管道開啟。這讓您的應用程式可在提交下一個提示詞前評估模型的答案。

> 提示： 您可以閱讀 stdout 逐行與基於 的分派邏輯 event 欄位。等收到 result 在寫入下一個提示詞之前，觸發目前提示詞的事件。

例如：

```
import json
import subprocess

proc = subprocess.Popen(
    ["agy", "--input-format", "stream-json", "--output-format", "stream-json"],
    stdin=subprocess.PIPE,
    stdout=subprocess.PIPE,
    text=True,
    bufsize=1,
)

def ask(prompt):
    """Send one prompt and return the response for that turn."""
    message = {"event": "user", "message": {"content": prompt}}
    proc.stdin.write(json.dumps(message) + "\n")
    proc.stdin.flush()
    for line in proc.stdout:
        event = json.loads(line)
        if event["event"] == "result":
            return event["result"]["response"]

first = ask("Name one popular version control system. Answer with one word.")
print(ask(f"Name a competitor to {first.strip()}. Answer with one word."))

proc.stdin.close()
proc.wait()
```

### 結束工作階段
[「結束工作階段」章節](#end-a-session)
若要正常關閉工作階段，請關閉 `stdin`。處理程序會在輸入管線關閉且目前回合完成後結束。若應用程式寫入最終提示詞並立即關閉管線，它仍會收到最終的 `result` 程序終止前。

乾淨的工作階段會以以下項目結束 `0`，符合標準無頭模式的行為。

### 不支援的訊息
[「不支援的訊息」章節](#unsupported-messages)
為防止無法預測的行為，CLI 會驗證輸入。若遇到格式錯誤或不支援的訊息，其回應如下表所述：

| 輸入 | 結果 | 離開 |
| --- | --- | --- |
| 無法辨識 event 名稱 | 已略過：警告已記錄至 stderr | — |
| control_request 或 control_response 事件 | ERROR 結果，工作階段結束 | 2 |
| CLI 直接處理的斜線指令，例如 /model | ERROR 結果，工作階段結束 | 2 |
| 訊息缺少 event 欄位 | ERROR 結果，工作階段結束 | 1 |
| 無效的 JSON 行 | ERROR 結果，工作階段結束 | 1 |
| 內容區塊類型，而非 text | ERROR 結果，工作階段結束 | 1 |

無法辨識 `event` 命名安全略過並附警告。這能確保依新版串流協定建構的應用程式在舊版 CLI 上執行時不會當機：

```
warning: ignoring unsupported stream input message event "future_thing"
```

對於所有其他錯誤，工作階段會立即終止。先前已完成的回合保留其 `result` 事件，但格式錯誤的輸入行會中止工作階段的其餘部分。

CLI 可直接回應的斜線指令（例如 `/model` 和 `/usage`）產生文字報告而非標準事件串流。串流工作階段無法使用這類斜線指令。例如：

```
{ "event": "result", "result": { "conversation_id": "4fae3a70-409d-42a4-86ea-9de206a49ff4", "status": "ERROR", "response": "", "error": "/model is answered by the CLI itself and is unavailable with --input-format stream-json; run it as its own --print /model invocation", "duration_seconds": 0, "num_turns": 0, "usage": { "input_tokens": 0, "output_tokens": 0, "thinking_tokens": 0, "cache_read_tokens": 0, "total_tokens": 0 } } }
```

### 常見錯誤
[「常見錯誤」章節](#common-mistakes)
| 錯誤 | 失敗的原因 | 如何修正 |
| --- | --- | --- |
| 正在與以下項目配對 --output-format json 或 text | 這些格式僅在處理程序結束時發出單一輸出封包，導致除最後一個回合以外的所有回合內容遺失。 | 一律使用 --output-format stream-json 使用此輸入模式。 |
| 傳遞包含以下內容的提示詞 -p 旗標 | 串流模式只會監聽下列位置的提示詞 stdin 。透過命令列旗標傳入的任何提示詞都會被捨棄。 | 將提示詞傳送至 stdin 作為 user 改為訊息。 |
| 傳送中 /model 或 /usage 進入串流 | CLI 在事件串流之外於內部處理這些指令，會中斷 JSON 流程。 | 執行 agy -p /model 作為完全獨立的獨立指令。 |
| 處理 num_turns 作為每回合計數 | 中繼資料計數器（如回合數、持續時間與用量）會追蹤整個累計工作階段，而不只是目前回合。 | 使用 response 欄位，以取得目前回合的文字。 |
| 讀取前等待處理程序結束 stdout | 工作階段會無限期保持開啟，直到 stdin 已關閉。若您的指令碼等待結束訊號，會卡住。 | 在事件到達時逐行讀取，並手動關閉 stdin 完成時。 |

## 選取模型、投入程度或代理
[「選擇模型、投入程度或代理」章節](#select-a-model-effort-or-agent)
列出可用的模型代稱，然後為本次執行固定一個：

```
agy models
```

```plaintext
gemini-4-argon-high       Gemini 4 Argon (High)
gemini-4-argon-medium     Gemini 4 Argon (Medium)
gemini-3.8-flash-high     Gemini 3.8 Flash (High)
gemini-3.8-flash-medium   Gemini 3.8 Flash (Medium)
gemini-3.7-flash-high     Gemini 3.7 Flash (High)
gemini-3.7-flash-medium   Gemini 3.7 Flash (Medium)
gemini-3.6-flash-high     Gemini 3.6 Flash (High)
gemini-3.6-flash-medium   Gemini 3.6 Flash (Medium)
gemini-3.1-pro-high       Gemini 3.1 Pro (High)
...
```

```
# Pin a model by slug.
agy -p "Reverse the string antigravity." --model gemini-3.8-flash-medium

# Set reasoning effort (low, medium, or high).
agy -p "Outline a plan to add caching to this service." --effort high

# Select an agent (list them with `agy agents`).
agy -p "Review this function for edge cases." --agent <agent-name>
```

與互動式 UI 不同，當下列情況發生時，無頭模式不會悄悄退回 `--model` 命名未知模型。以非零結束並附 `ERROR` 狀態，讓固定的管線大聲失敗，而非執行錯誤的模型。

## 無頭模式中的權限
[「無頭模式中的權限」章節](#permissions-in-headless-mode)
無頭模式沒有互動式提示詞，因此通常會要求確認的工具會改由政策處理。

預設情況下，CLI 會遵循您設定中的權限模式。無法取得核准的工具會被軟性拒絕：執行會繼續，然後結束 `0`，並將通知列印至 `stderr` 命名工具與允許方式。在作用中工作區內讀寫檔案會自動允許；shell 指令等動作預設為 **詢問** 除非您授權，否則在無頭模式下會被柔性拒絕。

提前新增一個，預先授權工具 `action(target)` 規則，位於 `permissions.allow` 於 `~/.gemini/antigravity-cli/settings.json`:

```
{
  "permissions": {
    "allow": [
      "command(git)",
      "command(regex:npm run (build|lint|test))",
      "write_file(src/)"
    ]
  }
}
```

若要自動核准某次執行中的所有工具，請傳遞 `--dangerously-skip-permissions`:

```
agy -p "Run the test suite and report failures" --dangerously-skip-permissions
```

> 警告： --dangerously-skip-permissions 核准所有工具呼叫，包括檔案寫入與指令執行。建議使用限定範圍的 permissions.allow 規則，除非你完全信任該提示詞與環境。請參閱 權限 查看完整規則語法。

## 處理結束代碼與錯誤
[「處理結束代碼與錯誤」章節](#handle-exit-codes-and-errors)
成功的執行會以此結束： `0`。未能產生回應的執行會以非零結束碼結束，並將原因寫入 `stderr`。於 `json` 和 `stream-json` 模式，失敗也會出現於 `status` 和 `error` 欄位。

例如，釘選未知模型會結束 `1` 並傳回錯誤封包：

```
agy -p "hi" --model does-not-exist-model --output-format json; echo "exit=$?"
```

```
{"conversation_id":"","status":"ERROR","response":"","error":"invalid model selection (--model \"does-not-exist-model\" --effort \"\"): model does-not-exist-model is not recognized as a known model or custom model in settings\nAvailable models:\n  Gemini 3.6 Flash (High)\n  ...","duration_seconds":0,"num_turns":0,"usage":{"input_tokens":0,"output_tokens":0,"thinking_tokens":0,"cache_read_tokens":0,"total_tokens":0}}
```

```
exit=1
```

The `status` 欄位會回報執行作業的最終狀態：

| 狀態 | 含義 |
| --- | --- |
| SUCCESS | 執行已完成並產生回應 |
| ERROR | 執行以錯誤結束 |
| CANCELED | 執行已取消 |
| INTERRUPTED | 執行被中斷（例如， SIGINT ) |
| INVALID | 執行達到無效狀態 |
| WAITING | 執行在等待輸入時結束 |
| RUNNING | 執行未達到終端狀態 |

預設情況下，執行會等待回應最多五分鐘。您可透過以下方式調整上限 `--print-timeout`:

```
agy -p "Summarize the design tradeoffs of optimistic locking." --print-timeout 15m
```

## 旗標參考
[「旗標參考」章節](#flag-reference)
| 旗標 | 預設 | 描述 |
| --- | --- | --- |
| -p , --print , --prompt | — | 以非互動方式執行單一提示詞並列印回應 |
| --output-format | text | 輸出格式： text , json ，或 stream-json |
| --input-format | text | 輸入格式： text 或 stream-json ；從標準輸入讀取提示詞 |
| --json-schema | — | 強制結構化輸出的結構描述字串或檔案路徑 |
| --model | — | 本次執行的模型代稱（請參閱 agy models ) |
| --effort | — | 推理投入： low , medium ，或 high |
| --agent | — | 本次執行的代理（請參閱 agy agents ) |
| --continue , -c | false | 繼續最近的對話 |
| --conversation | — | 依 ID 恢復對話 |
| --dangerously-skip-permissions | false | 自動核准所有工具權限請求 |
| --print-timeout | 5m | 等待回應的最長時間 |
| --sandbox | false | 在啟用終端機沙箱限制的情況下執行 |

## 範例：在 CI 中執行代理
[「範例：在 CI 中執行代理」章節](#example-run-the-agent-in-ci)
發生錯誤時讓工作失敗並儲存回應：

```
#!/usr/bin/env bash
set -euo pipefail

result=$(agy -p "Name three popular version control systems, comma-separated." \
  --output-format json \
  --print-timeout 10m)

status=$(echo "$result" | jq -r '.status')
if [[ "$status" != "SUCCESS" ]]; then
  echo "Agent run failed: $(echo "$result" | jq -r '.error')" >&2
  exit 1
fi

echo "$result" | jq -r '.response' > result.txt
```

## 後續步驟
[「後續步驟」章節](#next-steps)
探索下列指南以進一步了解 CLI 功能：

- [提示與互動](/docs/cli/prompting) ：為代理撰寫有效的提示詞。
- [權限](/docs/cli/permissions) ：設定允許、拒絕與詢問規則。
- [背景工作與子代理](/docs/cli/subagents) ：將工作委派給專門的代理。
- [參考](/docs/cli/reference) ：完整的指令與旗標參考。
[上一個  
執行模式](/docs/cli/modes/)[下一步  
狀態列自訂](/docs/cli/statusline/)
