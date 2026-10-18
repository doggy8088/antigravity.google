# 輸出、輸入與串流

結構化輸出 - Antigravity SDKsdkAntigravity SDKAntigravity SDK結構化輸出 - Antigravity SDK Antigravity SDK Antigravity SDKAntigravity SDK
# 輸出、輸入與串流
[「輸出、輸入與串流」章節](#outputs-inputs-and-streaming)
SDK 支援多模態輸入附件、即時回應串流，以及 用於結構化 JSON 輸出的 Pydantic 結構描述驗證。

## 串流回應與推理
[「串流回應與推理」章節](#streaming-responses-and-reasoning)
在含延伸推理的對話回合中，模型會在產生文字回應 Token 之前先發出思考。您可以在發生時串流內部模型思考與文字 Token：

```
import sys
from google.antigravity import Agent, LocalAgentConfig

config = LocalAgentConfig()

async with Agent(config) as agent:
    response = await agent.chat("Solve this riddle and explain your reasoning:")

    # Stream internal model thoughts in real time
    print("Reasoning:")
    async for thought in response.thoughts:
        sys.stdout.write(thought)
        sys.stdout.flush()
    print("\n")

    # Stream conversational response tokens
    print("Response:")
    async for token in response:
        sys.stdout.write(token)
        sys.stdout.flush()
    print("\n")
```

## 多模態附件
[「多模態附件」章節](#multimodal-attachments)
若您正在建構多模態代理應用程式，也可在文字提示詞之外加入圖片與 PDF。

例如，你可以附加 PDF 規格與圖片，使用 `from_file()` 或 `Image.from_file()`:

```
from google.antigravity import Agent, LocalAgentConfig
from google.antigravity.types import Image, from_file

config = LocalAgentConfig()

async with Agent(config) as agent:
    pdf_spec = from_file("spec.pdf")
    chart_image = Image.from_file("chart.png")
    prompt = [
        "Analyze this chart against the specification:",
        chart_image,
        pdf_spec,
    ]
    response = await agent.chat(prompt)
    print(await response.text())
```

## 使用 Pydantic 的結構化輸出
[「使用 Pydantic 的結構化輸出」章節](#structured-output-with-pydantic)
某些情況下，您可能希望代理應用程式的回應永遠以特定格式輸出。

例如，你可以使用強制符合 Pydantic 結構描述的型別化 JSON 回應， 使用 `response_schema`:

```
import pydantic
from google.antigravity import Agent, LocalAgentConfig

class TaskSummary(pydantic.BaseModel):
    summary: str
    action_items: list[str]

config = LocalAgentConfig(response_schema=TaskSummary)

async with Agent(config) as agent:
    response = await agent.chat("Summarize the meeting notes.")
    data = await response.structured_output()
    print(data["action_items"])
```

## 範例程式碼
[「範例程式碼」章節](#sample-code)
關於完整的可運作程式碼範例，請查看 GitHub 儲存庫：

- `structured_output.py`
- `streaming.py`
- `multimodal.py`
[上一個  
子代理](/docs/sdk/subagents/)[下一步  
生命週期與掛鉤](/docs/sdk/lifecycle/)
