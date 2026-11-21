本機模型 - Antigravity SDK
sdk
Antigravity SDK
Antigravity SDK
本機模型 - Antigravity SDK Antigravity SDK Antigravity SDK
Antigravity SDK
# 使用本機模型執行代理

「使用本機模型執行代理」章節

使用本機模型在您的機器上執行 Antigravity 代理，無需 API 金鑰或 網路連線。

根據您的設定，您可以使用下列類別設定本機模型執行：

- **[`LiteRTAgentConfig`](#on-device-execution-with-litert)**：執行 `.litertlm` 模型檢查點（例如 [Gemma 4 26B A4B](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/)） 直接在裝置上執行，使用 Google AI Edge 的 [LiteRT](https://developers.google.com/edge/litert-lm/overview) 執行階段。
- **[`LocalOpenAIAgentConfig`](#external-openai-compatible-servers)**：連接 至具有 OpenAI 相容 API 的外部本地伺服器，例如 [Ollama](https://ollama.com), [LM Studio](https://lmstudio.ai)，或 [vLLM](https://docs.vllm.ai).

## 使用 LiteRT 在裝置端執行

「使用 LiteRT 進行裝置端執行」章節

`LiteRTAgentConfig` 使用 LiteRT 執行階段執行本機模型。代理啟動時，SDK 會啟動並管理由你的…支援的本機回送伺服器 `.litertlm` 檢查點。支援的硬體後端（`gpu` 適用於 Apple Silicon Metal 與 NVIDIA CUDA，或 `npu`）在啟動時自動偵測。

### 設定 LiteRT 與 Gemma 4 26B A4B

「設定 LiteRT 與 Gemma 4 26B A4B」章節

依照以下步驟安裝相依套件並匯入模型檢查點：

> **備註：** 建議使用具備至少 24 GB VRAM 或統一記憶體的機器來執行 Gemma 4 26B A4B 檢查點（下載大小約 16.8 GB）。

1. 建立並啟用虛擬環境： `python3 -m venv .venv
source .venv/bin/activate`
2. 安裝 SDK 與 `litert-lm` 套件： `pip install google-antigravity litert-lm`
3. 使用 `litert-lm` 用於匯入 Gemma 4 26B A4B 檢查點的 CLI： `litert-lm import \
  --from-huggingface-repo=litert-community/gemma-4-26B-A4B-it-litert-lm \
  gemma-4-26B-A4B-it-gpu.litertlm \
  gemma4-26b` 此指令會下載約 16.8 GB，並在…註冊檢查點 `~/.litert-lm/models/gemma4-26b/model.litertlm`.  **備註：** 在 macOS 上，若 `litert-lm import` 因 SSL 憑證驗證錯誤而失敗，請安裝 `certifi` 並匯出 `SSL_CERT_FILE` 重試前： `pip install certifi
export SSL_CERT_FILE=$(python3 -c "import certifi; print(certifi.where())")`

### 執行本機 LiteRT 代理

「執行本機 LiteRT 代理」章節

設定 LiteRT 後，傳遞 即可執行本機 LiteRT 代理 `.litertlm` 模型檔案於 `LiteRTAgentConfig`。例如：

> **備註：** 使用模型檔案的完整路徑，或使用 `os.path.expanduser()` 因為波浪號（`~`）不會自動展開。

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

### 視覺支援

標題為「視覺支援」的章節

使用 `LiteRTAgentConfig` 使用具備視覺功能的以下裝置端功能分析圖片 `.litertlm` 檢查點（例如 Gemma 4 26B A4B）。這支援離線與 混合視覺工作流程，例如 UI 驗證、螢幕截圖偵錯與圖表分析。

啟動時， `LiteRTAgentConfig` 使用以下方式檢查你的檢查點 `litert_lm.ModelInfo` 偵測視覺支援並選取預設硬體 後端（`"gpu"` 或 `"cpu"`）。你也可以傳入明確的 `vision_backend` 覆寫。在以下位置將圖片與文字提示詞一併傳遞 `agent.chat()` 使用 `from_file()` 或 `Image` （請參閱 [多模態附件](/docs/sdk/structured-output#multimodal-attachments)):

```
import asyncio
import os

from google.antigravity import Agent, LiteRTAgentConfig, from_file

MODEL_PATH = os.path.expanduser(
    "~/.litert-lm/models/gemma4-26b/model.litertlm"
)

async def main():
    config = LiteRTAgentConfig(
        model_path=MODEL_PATH,
        # Optional: override the auto-detected vision backend ("gpu" or "cpu")
        # vision_backend="gpu",
    )

    async with Agent(config) as agent:
        response = await agent.chat([
            "Inspect this UI screenshot and check for layout issues:",
            from_file("screenshot.png"),
        ])
        async for token in response:
            print(token, end="", flush=True)
        print()

if __name__ == "__main__":
    asyncio.run(main())
```

### 前置快取

標題為「前置快取」的章節

`LiteRTAgentConfig` 自動在連續的代理回合間快取對話前置內容，無需變更任何設定。 當對話前置內容與工具結構描述與上一個回合相符時，受管理的 LiteRT-LM 工作階段會重複使用記憶體中的 KV 快取，而非重新計算靜態系統指示、工具結構描述與先前的記錄。LiteRT-LM 僅會預先填入新加入的提示詞與工具輸出，降低多步驟工具呼叫期間的延遲。

LiteRT-LM 會將編譯後的模型圖形保存於以下位置旁邊： `model_path` 預設情況下。如要 覆寫磁碟上的編譯快取目錄，請先建立該目錄， 再透過以下方式傳遞其展開後的路徑 `cache_dir`。LiteRT-LM 不會展開波浪號 （`~`）自動，且 `litert_lm.Engine` 需要目錄已 存在：

```
cache_dir = os.path.expanduser("~/.litert-lm/cache")
os.makedirs(cache_dir, exist_ok=True)

config = LiteRTAgentConfig(
    model_path=MODEL_PATH,
    cache_dir=cache_dir,
)
```

### LiteRT 設定選項

「LiteRT 設定選項」章節

`LiteRTAgentConfig` 自動套用 `.lightweight()` 預設於 初始化。此預設將內建工具限縮為核心程式碼撰寫操作， 為較小的上下文視窗修剪系統指示，並設定預設 上下文壓縮閾值，大小配合 64k LiteRT KV 快取。

除了標準 [`AgentConfig`](https://github.com/google-antigravity/antigravity-sdk-python/blob/main/google/antigravity/connections/README.md#agentconfig) 欄位 (`tools`, `policies`, `hooks`, `mcp_servers`, `subagents`, `workspaces`， 與 `system_instructions`), [`LiteRTAgentConfig`](https://github.com/google-antigravity/antigravity-sdk-python/blob/main/google/antigravity/connections/local/litert_connection_config.py) 支援下列選項：

| 金鑰 | 類型 | 預設 | 允許的值 | 描述 |
| --- | --- | --- | --- | --- |
| **`model_path`** | `str` | *必要* | Absolute `.litertlm` 檔案路徑 | 本機的路徑 `.litertlm` 模型檢查點檔案。 |
| **`backend`** | `LiteRTBackend` 或 `str` | `LiteRTBackend.GPU` | `'gpu'`, `'npu'`, `'cpu'` | 用於模型推論的硬體後端。 |
| **`vision_backend`** | `LiteRTBackend`, `str`，或 `None` | `None` （自動偵測） | `'gpu'`, `'npu'`, `'cpu'`, `None` | 視覺處理的硬體後端覆寫。當 `None`, `LiteRTAgentConfig` 檢查 `litert_lm.ModelInfo` 並選取 `'gpu'` 或 `'cpu'`. |
| **`audio_backend`** | `LiteRTBackend`, `str`，或 `None` | `None` | `'gpu'`, `'npu'`, `'cpu'`, `None` | 音訊處理的硬體後端覆寫。 |
| **`enable_speculative_decoding`** | `bool` | `False` | `True`, `False` | 啟用多權杖預測以加快生成速度。 |
| **`cache_dir`** | `str` 或 `None` | `None` | 現有的已展開目錄路徑或 `None` | 覆寫預設的磁碟上編譯快取位置（當 `None`，LiteRT-LM 會將編譯後的產出物保留在…旁邊 `model_path`）。波浪號（`~`）不會自動展開，且目錄必須已存在於磁碟上（請使用 `os.path.expanduser()` 和 `os.makedirs(..., exist_ok=True)`). |
| **`port`** | `int` | `0` | `0` 或 TCP 連接埠 | 代管 LiteRT 伺服器的本機回送連接埠（`0` 自動選取可用的連接埠）。 |
| **`compaction_config`** | `CompactionConfig` 或 `None` | `token_threshold=40960` | `CompactionConfig` 或 `None` | 覆寫從 64k LiteRT KV 快取衍生的預設上下文壓縮閾值。 |

## 外部 OpenAI 相容伺服器

「外部 OpenAI 相容伺服器」章節

若要連接提供 OpenAI 相容 API 的外部本機伺服器（例如 Ollama、LM Studio 或 vLLM），請使用 `LocalOpenAIAgentConfig`。呼叫 `.lightweight()` 於組態以視需要套用為本機模型設計的工具與提示詞 最佳化。

> **備註：** 請勿使用 `LocalOpenAIAgentConfig` 連線至 `litert-lm serve`。 使用 `LiteRTAgentConfig` 改為讓 SDK 為您 管理 LiteRT 伺服器生命週期。

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

[`LocalOpenAIAgentConfig`](https://github.com/google-antigravity/antigravity-sdk-python/blob/main/google/antigravity/connections/local/local_openai_connection_config.py) 支援所有標準 [`AgentConfig`](https://github.com/google-antigravity/antigravity-sdk-python/blob/main/google/antigravity/connections/README.md#agentconfig) 選項，搭配這些連線參數：

- `model` （字串或 `ModelTarget`，選用）：註冊於 您本機伺服器上的模型識別碼（例如 `"gemma4:26b"` 或 `"gemma-4-26B-A4B-it"`).
- `base_url` （字串，選用）：本機伺服器 OpenAI 相容端點的 URL（例如 `"http://localhost:11434/v1"` 適用於 Ollama 或 `"http://localhost:1234/v1"` 適用於 LM Studio）。

## 範例程式碼

「範例程式碼」章節

若要探索完整可運作的程式碼範例，請參閱下列資源：

- [`local_models.py`](https://github.com/google-antigravity/antigravity-sdk-python/blob/main/examples/getting_started/local_models.py)： 入門指令碼（適用於 `LiteRTAgentConfig` 和 `LocalOpenAIAgentConfig`.
- [`multimodal.py`](https://github.com/google-antigravity/antigravity-sdk-python/blob/main/examples/getting_started/multimodal.py)： 使用…附加圖片、文件與音訊 `Image.from_file()`, `Document.from_file()`，與 `Audio.from_file()`.
- [Antigravity Hybrid Gauntlet](https://goo.gle/47cKYyV)： 混合式工作流程，將雲端 Gemini 規劃器與本地 Gemma 4 26B 代理配對，用於裝置端程式碼稽核與修補。

上一個
總覽與快速入門

下一步
角色

您的下載已開始您如何得知我們？請選一個。這有助於我們接觸更多像您一樣的人。感謝您讓我們知道！
