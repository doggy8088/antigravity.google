# 安全政策與權限

政策 — Antigravity SDKsdkAntigravity SDKAntigravity SDK政策 — Antigravity SDK Antigravity SDK Antigravity SDKAntigravity SDK
# 安全政策與權限
[「安全政策與權限」章節](#safety-policies-and-permissions)
SDK 提供宣告式政策引擎，用於控制工具執行並請求人工核准。

預設情況下，允許自訂 Python 函式與標準唯讀工具，而高風險系統操作（例如使用以下方式執行殼層指令 `run_command`）需要明確的權限或政策規則。

## 宣告式政策引擎
[「宣告式政策引擎」章節](#declarative-policy-engine)
定義明確的規則以允許、拒絕工具呼叫，或要求人工核准。

例如，你可以設定 SDK，在代理 嘗試執行 shell 指令時要求核准：

```
from google.antigravity import LocalAgentConfig
from google.antigravity.hooks.policy import deny, allow, ask_user

async def my_handler(tool_call):
    print(f"Tool approval requested for: {tool_call.name}")
    return True

policies = [
    deny("*"),                                     # Deny all tools by default
    allow("view_file"),                            # Allow file viewing
    ask_user("run_command", handler=my_handler),   # Ask approval for shell
]

config = LocalAgentConfig(policies=policies)
```

## 具人為核准的互動迴圈
[「含人員核准的互動迴圈」章節](#interactive-loop-with-human-approval)
在 CLI 應用程式中，您可以在高風險工具執行前以互動方式提示使用者。

例如，使用 `run_interactive_loop` 結合 `policy.safe_defaults` 啟動主控台工作階段，每當請求任何寫入工具（檔案建立、編輯或殼層執行）時都會提示使用者核准：

```
import asyncio
from google.antigravity import LocalAgentConfig
from google.antigravity.hooks import policy
from google.antigravity.utils import interactive
from google.antigravity.utils.interactive import run_interactive_loop

# safe_defaults allows read-only tools and asks user for write operations
policies = policy.safe_defaults(handler=interactive.ask_user_handler)
config = LocalAgentConfig(policies=policies)

if __name__ == "__main__":
    asyncio.run(run_interactive_loop(config))
```

執行期間，主控台會顯示互動式核准提示：

```
Starting interactive loop. Type 'exit' or 'quit' to end.
User: Run the 'ls' command to see what is in this directory.

Policy check: Tool execution requested: run_command
Arguments: {'CommandLine': 'ls -la'}
Allow execution? (y/n) [n]:
```

## 範例程式碼
[「範例程式碼」章節](#sample-code)
關於完整的可運作程式碼範例，請查看 GitHub 儲存庫：

- `policies.py`
- `human_in_the_loop.py`
[上一個  
MCP](/docs/sdk/mcp/)[下一步  
子代理](/docs/sdk/subagents/)
