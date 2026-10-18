# 多代理子代理委派

子代理 - Antigravity SDKsdkAntigravity SDKAntigravity SDK子代理 - Antigravity SDK Antigravity SDK Antigravity SDKAntigravity SDK
# 多代理子代理委派
[「多代理子代理委派」章節](index.html#multi-agent-subagent-delegation)
跨越具備隔離工具集與執行內容的專業子代理，協調複雜任務。

子代理可以協助您的主代理處理複雜任務。主代理可以 將任務拆解，並將子任務委派給子代理，每個子代理都有其 獨立的上下文視窗。

根據您的使用案例，您可以運用 [動態自我複製子代理](index.html#dynamic-self-cloning-subagents) 或 [靜態自訂子代理](index.html#static-custom-subagents).

## 動態自我複製子代理
[「動態自我複製子代理」章節](index.html#dynamic-self-cloning-subagents)
您的主代理可以建立繼承其權限與工具集的子代理。

例如，你可以啟用執行期間的動態子代理建立，使 主代理能按需產生子代理：

```
from google.antigravity import Agent, LocalAgentConfig, types

config = LocalAgentConfig(
    capabilities=types.CapabilitiesConfig(enable_subagents=True)
)

async with Agent(config) as agent:
    response = await agent.chat("Decompose and audit this codebase.")
    print(await response.text())
```

## 靜態自訂子代理
[「靜態自訂子代理」章節](index.html#static-custom-subagents)
您可以利用 SDK 定義擁有專屬工具或與主代理不同系統指令的子代理。請注意，指派給子代理的任何自訂工具，也必須在父代理的以下位置註冊 `tools` 清單。

例如，你可以設定專精於程式碼審查的子代理：

```
from google.antigravity import Agent, LocalAgentConfig, types

def my_custom_reviewer_tool(file_path: str) -> str:
    """Audits docstrings in a python file."""
    # Add your custom tool logic here
    return f"Verified {file_path}"

reviewer = types.SubagentConfig(
    name="code_reviewer",
    description="Audits source code for style compliance.",
    system_instructions="Check function docstrings in Python files.",
    tools=[my_custom_reviewer_tool],
)

config = LocalAgentConfig(
    tools=[my_custom_reviewer_tool],
    subagents=[reviewer],
)

async with Agent(config) as agent:
    response = await agent.chat(
        "Check function docstrings in Python files under src/."
    )
    print(await response.text())
```

## 範例程式碼
[「範例程式碼」章節](index.html#sample-code)
關於完整的可運作程式碼範例，請查看 GitHub 儲存庫：

- `subagents.py`
[上一個  
政策](../policies/index.html.gz)[下一步  
結構化輸出](../structured-output/index.html.gz)
