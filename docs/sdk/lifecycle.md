# 生命週期掛鉤、觸發條件與工作階段持久化

生命週期與掛鉤 - Antigravity SDKsdkAntigravity SDKAntigravity SDK生命週期與掛鉤 - Antigravity SDK Antigravity SDK Antigravity SDKAntigravity SDK
# 生命週期掛鉤、觸發條件與工作階段持久化
[「生命週期掛鉤、觸發器與工作階段持續性」章節](#lifecycle-hooks-triggers-and-session-persistence)
SDK 為背景事件排程、工作階段狀態 持久化、生命週期掛鉤與權杖成本稽核提供機制。

## 生命週期掛鉤與成本稽核
[「生命週期掛鉤與成本稽核」章節](#lifecycle-hooks-and-cost-auditing)
您可以使用生命週期掛鉤裝飾器來攔截代理回合、處理工具錯誤，以及稽核權杖用量。

例如，你可以設定掛鉤，在執行前記錄使用者提示詞、 攔截或修改訊息，或優雅地處理例外而不使代理當機：

```
from google.antigravity import Agent, LocalAgentConfig, hooks, types

@hooks.pre_turn
async def log_turn(prompt: str) -> types.HookResult:
    print(f"User prompt: {prompt}")
    return types.HookResult(allow=True)

@hooks.on_tool_error
async def handle_error(err: Exception) -> None:
    print(f"Tool execution failed: {err}")

config = LocalAgentConfig(hooks=[log_turn, handle_error])

async with Agent(config) as agent:
    response = await agent.chat("Analyze repository status.")
    print(await response.text())

    # Token usage auditing
    if response.usage_metadata:
        print(f"Turn tokens: {response.usage_metadata.total_token_count}")
```

## 觸發條件
[「觸發器」章節](#triggers)
觸發條件可讓您依據特定排程或事件自動執行任務。

例如，你可以設定觸發器每 60 秒監控服務狀態：

```
import asyncio
from google.antigravity import Agent, LocalAgentConfig
from google.antigravity.triggers import every

async def check_status(ctx):
    print("Checking background service status...")

config = LocalAgentConfig(triggers=[every(60, check_status)])

async def main():
    async with Agent(config) as agent:
        print("Agent running. Monitoring status every 60 seconds...")
        await asyncio.sleep(120)

if __name__ == "__main__":
    asyncio.run(main())
```

## 工作階段持續性
[「工作階段持續性」章節](#session-persistence)
工作階段持續性可讓您在應用程式重新啟動後保留並還原具狀態的工作階段。請注意， `conversation_id` 至少 32 個字元長，僅由英數字元與連字號組成 （不允許底線）。

若要設定儲存或載入工作階段所需的儲存目錄與工作階段識別碼：

```
from google.antigravity import LocalAgentConfig

# conversation_id persists or restores an existing session
conversation_id = "session-12345678901234567890123456789012"

config = LocalAgentConfig(
    save_dir="./sessions",
    conversation_id=conversation_id,
    app_data_dir="/path/to/custom/storage",
)
```

## 範例程式碼
[「範例程式碼」章節](#sample-code)
關於完整的可運作程式碼範例，請查看 GitHub 儲存庫：

- `triggers.py`
- `hooks.py`
- `persistence.py`
[上一個  
結構化輸出](/docs/sdk/structured-output/)
