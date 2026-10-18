# 角色與系統指令

角色 — Antigravity SDKsdkAntigravity SDKAntigravity SDK角色 — Antigravity SDK Antigravity SDK Antigravity SDKAntigravity SDK
# 角色與系統指令
[「角色與系統指示」章節](index.html#personas-and-system-instructions)
SDK 讓您能使用範本化或自訂系統指示，自訂代理的 身分、行為限制 與指示。

## 範本化系統指示
[「範本化系統指示」章節](index.html#templated-system-instructions)
範本化系統指示適用於大多數應用程式。此方法保留預設的 SDK 骨架與環境上下文，同時覆寫角色身分並附加自訂的結構化區段。

例如，你可以將系統指示模板化，以定義專注於審查拉取請求程式碼品質的代理：

```
from google.antigravity import Agent, LocalAgentConfig, types

identity = "You are an expert Code Quality Reviewer."
review_criteria = types.SystemInstructionSection(
    title="review_criteria",
    content="- Focus on readability and maintainability.",
)

templated_si = types.TemplatedSystemInstructions(
    identity=identity,
    sections=[review_criteria],
)

config = LocalAgentConfig(system_instructions=templated_si)

async with Agent(config) as agent:
    response = await agent.chat("Review the latest pull request.")
    print(await response.text())
```

## 自訂系統指示
[「自訂系統指示」章節](index.html#custom-system-instructions)
如需完整控制，自訂系統指示會略過所有預設 SDK 鷹架與環境內容，讓你直接傳遞原始系統提示詞。

例如，你可以自訂系統指示以設定「自訂程式碼審查者」的身分：

```
from google.antigravity import Agent, LocalAgentConfig, types

custom_si = types.CustomSystemInstructions(
    text="<identity>Custom Code Reviewer</identity>"
)

config = LocalAgentConfig(system_instructions=custom_si)

async with Agent(config) as agent:
    response = await agent.chat("Audit this file.")
    print(await response.text())
```

## 範例程式碼
[「範例程式碼」章節](index.html#sample-code)
關於完整的可運作程式碼範例，請查看 GitHub 儲存庫：

- `persona_config.py`
[上一個  
本機模型](../local-models/index.html)[下一步  
工具與技能](../tools/index.html)
