# 自訂工具與代理技能

工具與技能 - Antigravity SDKsdkAntigravity SDKAntigravity SDK工具與技能 - Antigravity SDK Antigravity SDK Antigravity SDKAntigravity SDK
# 自訂工具與代理技能
[「自訂工具與代理技能」章節](index.html#custom-tools-and-agent-skills)
SDK 讓您能使用…擴展代理的能力 [自訂 Python 函式](index.html#custom-python-functions)，內建網頁工具、 內建系統工具與代理技能。

關於模型內容協定（MCP）伺服器設定，請參閱 [MCP 文件](https://antigravity.gh.miniasp.com/docs/sdk/mcp).

## 內建工具參考
[「內建工具參考」章節](index.html#built-in-tools-reference)
SDK 透過…提供內建系統工具的識別碼 [BuiltinTools enum](https://github.com/google-antigravity/antigravity-sdk-python/blob/main/google/antigravity/types.py#L235-L338) (`google.antigravity.types.BuiltinTools`).

| 識別碼 | 列舉常數 | 描述 |
| --- | --- | --- |
| list_directory | BuiltinTools.LIST_DIR | 列出目錄內容。 |
| search_directory | BuiltinTools.SEARCH_DIR | 在檔案內搜尋。 |
| find_file | BuiltinTools.FIND_FILE | 依模式尋找檔案。 |
| view_file | BuiltinTools.VIEW_FILE | 讀取檔案內容。 |
| create_file | BuiltinTools.CREATE_FILE | 建立新檔案。 |
| edit_file | BuiltinTools.EDIT_FILE | 編輯現有檔案。 |
| run_command | BuiltinTools.RUN_COMMAND | 執行殼層指令。 |
| ask_question | BuiltinTools.ASK_QUESTION | 提示使用者輸入。 |
| start_subagent | BuiltinTools.START_SUBAGENT | 呼叫子子代理。 |
| generate_image | BuiltinTools.GENERATE_IMAGE | 產生或編輯圖片。 |
| search_web | BuiltinTools.SEARCH_WEB | 執行 Google 搜尋。 |
| read_url_content | BuiltinTools.READ_URL_CONTENT | 擷取 URL 內容。 |
| finish | BuiltinTools.FINISH | 傳回最終輸出。 |

### 工具群組輔助程式與篩選
[「工具群組協助程式與篩選」章節](index.html#tool-group-helpers-and-filtering)
某些情況下，您可能想限制代理可存取的工具。您可以在控制代理的作用中工具 `CapabilitiesConfig` 與 `enabled_tools` 或 `disabled_tools`.

例如，你可以設定代理使其僅能存取 `read_only` 內建工具：

```
from google.antigravity import LocalAgentConfig, CapabilitiesConfig
from google.antigravity.types import BuiltinTools

config = LocalAgentConfig(
    capabilities=CapabilitiesConfig(
        enabled_tools=BuiltinTools.read_only()
    )
)
```

## 自訂 Python 函式
[「自訂 Python 函式」章節](index.html#custom-python-functions)
某些情況下，您可能想建立代理可運用的自訂 Python 函式。您可以在註冊自訂 Python 函式 `LocalAgentConfig` 作為您代理的工具。

例如，你可以設定代理以利用自訂 `get_weather` 函式：

```
from google.antigravity import Agent, LocalAgentConfig

def get_weather(city: str) -> str:
    """Returns the current weather for a city."""
    return f"It's sunny in {city}."

config = LocalAgentConfig(tools=[get_weather])

async with Agent(config) as agent:
    response = await agent.chat("What's the weather in Tokyo?")
    print(await response.text())
```

## 內建網路工具
[「內建網路工具」章節](index.html#built-in-web-tools)
網頁搜尋（`SEARCH_WEB`）與 URL 擷取（`READ_URL_CONTENT`）工具預設啟用。

例如，你可以要求代理執行 Google 搜尋或閱讀網頁：

```
from google.antigravity import Agent, LocalAgentConfig

config = LocalAgentConfig()

async with Agent(config) as agent:
    response = await agent.chat("Search for latest updates on Gemini.")
    print(await response.text())
```

## 代理技能
[「代理技能」章節](index.html#agent-skills)
於 `LocalAgentConfig`, `skills_paths` 接受指向個別技能目錄的路徑，該目錄包含 `SKILL.md` 檔案，以及包含多個技能子目錄的 父目錄。

例如，你可以設定代理以利用自訂 `code-review` 技能：

```
from google.antigravity import Agent, LocalAgentConfig

config = LocalAgentConfig(
    skills_paths=["/path/to/skills/code-review"],
)

async with Agent(config) as agent:
    response = await agent.chat("Run a code quality audit.")
    print(await response.text())
```

## 範例程式碼
[「範例程式碼」章節](index.html#sample-code)
關於完整的可運作程式碼範例，請查看 GitHub 儲存庫：

- `custom_tools.py`
- `web_tools.py`
- `agent_skills.py`
[上一個  
角色](../personas/index.html)[下一步  
MCP](../mcp/index.html.gz)
