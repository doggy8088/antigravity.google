# Google Antigravity SDK

Antigravity SDK 總覽sdkAntigravity SDKAntigravity SDKAntigravity SDK 總覽 Antigravity SDK Antigravity SDKAntigravity SDK
# Google Antigravity SDK
[「Google Antigravity SDK」章節](#google-antigravity-sdk)
Google Antigravity SDK 是用於建置由 Antigravity 與 Gemini 驅動的自主 AI 代理的 Python SDK。它提供安全的具狀態執行期 框架，處理工具執行、上下文管理、安全政策 與子代理委派。

若您要找的是代管雲端 REST/gRPC API，而非本機 Python SDK 執行環境，請參閱 [Gemini API Antigravity 代理文件](https://ai.google.dev/gemini-api/docs/antigravity-agent).

## 快速入門
[「快速入門」章節](#quickstart)
使用安裝 SDK 套件 `pip` 並設定您的 API 金鑰以開始使用：

```
pip install google-antigravity
```

在您的環境中設定 Gemini API 金鑰：

```
export GEMINI_API_KEY="your_api_key_here"
```

初始化 `Agent` 並開始對話：

```
import asyncio
from google.antigravity import Agent, LocalAgentConfig

async def main():
    config = LocalAgentConfig()
    async with Agent(config) as agent:
        response = await agent.chat("What files are in the current directory?")
        print(await response.text())

if __name__ == "__main__":
    asyncio.run(main())
```

## Gemini 企業版
[「Gemini Enterprise」章節](#gemini-enterprise)
若要將 SDK 連接至 Gemini 企業版，請設定 `vertex=True` 於 `LocalAgentConfig` 與您的 GCP 並排 `project` 和 `location`:

```
from google.antigravity import Agent, LocalAgentConfig

config = LocalAgentConfig(
    vertex=True,
    project="your-gcp-project",
    location="us-central1",
)

async with Agent(config) as agent:
    response = await agent.chat("Hello!")
    print(await response.text())
```

也支援環境變數：

```
export GOOGLE_GENAI_USE_VERTEXAI=True
export GOOGLE_CLOUD_PROJECT="your-gcp-project"
export GOOGLE_CLOUD_LOCATION="us-central1"
gcloud auth application-default login
```

> 備註： 設定 vertex=True （或 GOOGLE_GENAI_USE_VERTEXAI=True ）
將 SDK 設定為透過 Gemini Enterprise API 路由傳送請求
（ aiplatform.googleapis.com ）使用 Google Cloud 憑證。

## 核心代理基礎
[「代理核心基礎」章節](#core-agent-foundations)
The `Agent` 類別在非同步情境管理器後方管理二進位探索、工具執行與工作階段生命週期。

例如，你可以設定具有自訂系統指示的代理， 以特定角色互動：

```
import asyncio
from google.antigravity import Agent, LocalAgentConfig

async def main():
    config = LocalAgentConfig(
        system_instructions=(
            "You are a helpful pirate assistant. Speak like a pirate."
        ),
    )
    async with Agent(config) as agent:
        response = await agent.chat("Explain the repository layout.")
        print(await response.text())

if __name__ == "__main__":
    asyncio.run(main())
```

## 後續步驟
[「後續步驟」章節](#next-steps)
探索下列指南，深入了解使用 Python SDK 建置與自訂代理：

- [本機模型](/docs/sdk/local-models) ： 使用 LiteRT 或本地 OpenAI 相容伺服器在裝置端執行代理。
- [角色](/docs/sdk/personas) ： 使用範本化或自訂系統指示自訂代理身分。
- [工具與技能](/docs/sdk/tools) ： 註冊自訂 Python 函式、使用內建工具，以及載入技能。
- [MCP](/docs/sdk/mcp) ： 將外部 Model Context Protocol (MCP) 伺服器連接至您的代理。
- [政策](/docs/sdk/policies) ： 強制執行明確的工具執行政策與互動式核准流程。
- [子代理](/docs/sdk/subagents) ： 使用動態自我複製或靜態子代理建構多代理系統。
- [結構化輸出](/docs/sdk/structured-output) ： 處理多模態輸入、串流模型思考過程，並驗證輸出。
- [生命週期與掛鉤](/docs/sdk/lifecycle) ： 管理背景事件觸發器、工作階段持久化與自訂掛鉤。

## 範例程式碼與範例
[「範例程式碼與範例」章節](#sample-code-and-examples)
您可以在以下位置找到每個 SDK 功能的完整可執行 Python 指令碼 [getting_started 目錄](https://github.com/google-antigravity/antigravity-sdk-python/tree/main/examples/getting_started) 於 GitHub：

- `hello_world.py` ： 基本代理設定與單輪對話。
- `local_models.py` ： 使用 LiteRT 與 OpenAI 相容本地伺服器在裝置端執行。
- `streaming.py` ： Token 串流與推理思考。
- `persona_config.py` ： 範本化與自訂系統指示。
- `policies.py` ： 宣告式工具存取政策。
- `human_in_the_loop.py` ： 互動式使用者核准。
- `multimodal.py` ： 圖片與 PDF 附件處理。
- `structured_output.py` ： Pydantic 結構描述驗證。
- `custom_tools.py` ： 自訂 Python 函式工具。
- `agent_skills.py` ： 檔案系統 SKILL.md 整合。
- `mcp_tools.py` ： Model Context Protocol 工具。
- `subagents.py` ： 多代理委派與隔離。
- `web_tools.py` ： 網路搜尋與 URL 上下文。
- `hooks.py` ： 生命週期與錯誤處理掛鉤。
- `triggers.py` ： 背景事件觸發器。
- `persistence.py` ： 儲存與還原工作階段狀態。
[上一個  
邊車](/docs/sidecars/)[下一步  
本機模型](/docs/sdk/local-models/)
