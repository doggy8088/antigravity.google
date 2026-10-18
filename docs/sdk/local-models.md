# 使用本機模型執行代理

本機模型 - Antigravity SDKsdkAntigravity SDKAntigravity SDK本機模型 - Antigravity SDK Antigravity SDK Antigravity SDKAntigravity SDK
# 使用本機模型執行代理
[「使用本機模型執行代理」章節](index.html#run-agents-with-local-models)
使用本機模型在您的機器上執行 Antigravity 代理，無需 API 金鑰或 網路連線。

根據您的設定，您可以使用下列類別設定本機模型執行：

- [LiteRTAgentConfig](index.html#on-device-execution-with-litert) ：執行 .litertlm 模型檢查點（例如 Gemma 4 26B A4B ） 直接在裝置上執行，使用 Google AI Edge 的 LiteRT 執行階段。
- [LocalOpenAIAgentConfig](index.html#external-openai-compatible-servers) ：連接 至具有 OpenAI 相容 API 的外部本地伺服器，例如 Ollama , LM Studio ，或 vLLM .

## 使用 LiteRT 在裝置端執行
[「使用 LiteRT 進行裝置端執行」章節](index.html#on-device-execution-with-litert)
`LiteRTAgentConfig` 使用 LiteRT 執行階段執行本機模型。代理啟動時，SDK 會啟動並管理由你的…支援的本機回送伺服器 `.litertlm` 檢查點。支援的硬體後端（`gpu` 適用於 Apple Silicon Metal 與 NVIDIA CUDA，或 `npu`）在啟動時自動偵測。

### 設定 LiteRT 與 Gemma 4 26B A4B
[「設定 LiteRT 與 Gemma 4 26B A4B」章節](index.html#set-up-litert-and-gemma-4-26b-a4b)
依照以下步驟安裝相依套件並匯入模型檢查點：

> 備註： 建議使用具備至少 24 GB VRAM 或統一記憶體的機器來執行 Gemma 4 26B A4B 檢查點（下載大小約 16.8 GB）。

1. 建立並啟用虛擬環境： `python3-mvenv.venvsource.venv/bin/activate`
2. 安裝 SDK 與 `litert-lm` 套件： `pipinstallgoogle-antigravitylitert-lm`
3. 使用 `litert-lm` 用於匯入 Gemma 4 26B A4B 檢查點的 CLI： `litert-lmimport\--from-huggingface-repo=litert-community/gemma-4-26B-A4B-it-litert-lm\gemma-4-26B-A4B-it-gpu.litertlm\gemma4-26b` 此指令會下載約 16.8 GB，並在…註冊檢查點 `~/.litert-lm/models/gemma4-26b/model.litertlm`. **備註：** 在 macOS 上，若 `litert-lm import` 因 SSL 憑證驗證錯誤而失敗，請安裝 `certifi` 並匯出 `SSL_CERT_FILE` 重試前： `pipinstallcertifiexportSSL_CERT_FILE=$(python3-c"import certifi; print(certifi.where())")`

### 執行本機 LiteRT 代理
[「執行本機 LiteRT 代理」章節](index.html#run-a-local-litert-agent)
設定 LiteRT 後，傳遞 即可執行本機 LiteRT 代理 `.litertlm` 模型檔案於 `LiteRTAgentConfig`。例如：

> 備註： 使用模型檔案的完整路徑，或使用 os.path.expanduser() 因為波浪號（ ~ ）不會自動展開。

```
import asyncio
import os

from google.antigravity import Agent, LiteRTAgentConfig

MODEL_PATH = os.path.expanduser(
    "~/.litert-lm/models/gemma4-26b/model.litertlm"
)

async def main():
    config = LiteRTAgentConfig(model_path=MODEL_PATH)

    async with Agent(config) as agent:
        response = await agent.chat("What files are in the current directory?")
        async for token in response:
            print(token, end="", flush=True)
        print()

if __name__ == "__main__":
    asyncio.run(main())
```

若您想讓本機代理在專案目錄中編輯檔案並執行 Shell 指令，請設定 `workspaces` 並附加工具政策。例如：

```
import asyncio
import os

from google.antigravity import Agent, LiteRTAgentConfig
from google.antigravity.hooks import policy

async def main():
    workspace = os.path.expanduser("~/my-local-project")
    os.makedirs(workspace, exist_ok=True)

    config = LiteRTAgentConfig(
        model_path=os.path.expanduser(
            "~/.litert-lm/models/gemma4-26b/model.litertlm"
        ),
        workspaces=[workspace],
        policies=[policy.allow_all()],
    )

    async with Agent(config) as agent:
        response = await agent.chat(
            "Create a static webpage index.html with a dark-mode toggle."
        )
        async for token in response:
            print(token, end="", flush=True)
        print()

if __name__ == "__main__":
    asyncio.run(main())
```

### LiteRT 設定選項
[「LiteRT 設定選項」章節](index.html#litert-configuration-options)
`LiteRTAgentConfig` 自動套用 `.lightweight()` 預設於 初始化。此預設將內建工具限縮為核心程式碼撰寫操作， 為較小的上下文視窗修剪系統指示，並設定預設 上下文壓縮閾值，大小配合 64k LiteRT KV 快取。

除了標準 [AgentConfig](https://github.com/google-antigravity/antigravity-sdk-python/blob/main/google/antigravity/connections/README.md#agentconfig) 欄位 (`tools`, `policies`, `hooks`, `mcp_servers`, `subagents`, `workspaces`， 與 `system_instructions`), [LiteRTAgentConfig](https://github.com/google-antigravity/antigravity-sdk-python/blob/main/google/antigravity/connections/local/litert_connection_config.py) 支援下列選項：

- model_path （字串，必填）：絕對路徑，指向 .litertlm 模型檔案。
- backend ( LiteRTBackend 或字串，選填）：推論的 硬體後端 ( 'gpu' , 'npu' ，或 'cpu' ）。預設為 LiteRTBackend.GPU .
- enable_speculative_decoding （布林值，選用）：啟用多權杖預測以加快生成速度。預設為 False .
- cache_dir （字串，選用）：跨啟動快取已編譯模型圖的目錄路徑。
- compaction_config ( CompactionConfig ，選用）：覆寫預設的 內容壓縮閾值。

## 外部 OpenAI 相容伺服器
[「外部 OpenAI 相容伺服器」章節](index.html#external-openai-compatible-servers)
若要連接提供 OpenAI 相容 API 的外部本機伺服器（例如 Ollama、LM Studio 或 vLLM），請使用 `LocalOpenAIAgentConfig`。呼叫 `.lightweight()` 於組態以視需要套用為本機模型設計的工具與提示詞 最佳化。

> 備註： 請勿使用 LocalOpenAIAgentConfig 連線至 litert-lm serve 。
使用 LiteRTAgentConfig 改為讓 SDK 為您
管理 LiteRT 伺服器生命週期。

例如，你可以將代理連接到執行 Gemma 4 的本機 Ollama 伺服器：

```
import asyncio
from google.antigravity import Agent, LocalOpenAIAgentConfig

async def main():
    config = LocalOpenAIAgentConfig(
        model="gemma4:26b",
        base_url="http://localhost:11434/v1",
    ).lightweight()

    async with Agent(config) as agent:
        response = await agent.chat("What files are in this directory?")
        async for token in response:
            print(token, end="", flush=True)
        print()

if __name__ == "__main__":
    asyncio.run(main())
```

[LocalOpenAIAgentConfig](https://github.com/google-antigravity/antigravity-sdk-python/blob/main/google/antigravity/connections/local/local_openai_connection_config.py) 支援所有標準 [AgentConfig](https://github.com/google-antigravity/antigravity-sdk-python/blob/main/google/antigravity/connections/README.md#agentconfig) 選項，搭配這些連線參數：

- model （字串或 ModelTarget ，選用）：註冊於 您本機伺服器上的模型識別碼（例如 "gemma4:26b" 或 "gemma-4-26B-A4B-it" ).
- base_url （字串，選用）：本機伺服器 OpenAI 相容端點的 URL（例如 "http://localhost:11434/v1" 適用於 Ollama 或 "http://localhost:1234/v1" 適用於 LM Studio）。

## 範例程式碼
[「範例程式碼」章節](index.html#sample-code)
若要探索完整可運作的程式碼範例，請參閱下列資源：

- `local_models.py` ： 入門指令碼（適用於 LiteRTAgentConfig 和 LocalOpenAIAgentConfig .
- Antigravity Hybrid Gauntlet ： 混合式工作流程，將雲端 Gemini 規劃器與本地 Gemma 4 26B 代理配對，用於裝置端程式碼稽核與修補。
[上一個  
總覽與快速入門](../overview/index.html.gz)[下一步  
角色](../personas/index.html)
