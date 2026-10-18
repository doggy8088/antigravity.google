# Model Context Protocol (MCP) 整合

MCP - Antigravity SDKsdkAntigravity SDKAntigravity SDKMCP - Antigravity SDK Antigravity SDK Antigravity SDKAntigravity SDK
# Model Context Protocol (MCP) 整合
[「模型情境協定（MCP）整合」章節](#model-context-protocol-mcp-integration)
將外部 Model Context Protocol（MCP）伺服器連接至您的 Antigravity SDK 代理。

在以 Antigravity SDK 建構的 Python 應用程式中，MCP 伺服器（`stdio` 或 `Streamable HTTP`）在統一的執行管線下以程式化方式連接，與內建工具及自訂 Python 函式並列。

## 程式化的 MCP 伺服器設定
[「程式化 MCP 伺服器設定」章節](#programmatic-mcp-server-setup)
您可以在應用程式的以下位置以程式設計方式定義 MCP 伺服器 `LocalAgentConfig` 使用 `McpStdioServer` 或 `McpStreamableHttpServer`.

例如，你可以設定代理連接到外部 SQLite MCP 伺服器，使用 `stdio`:

```
import asyncio
from google.antigravity import Agent, LocalAgentConfig
from google.antigravity.types import McpStdioServer

config = LocalAgentConfig(
    mcp_servers=[
        McpStdioServer(
            name="sqlite-explorer",
            command="node",
            args=["/usr/local/bin/sqlite-mcp-server.js"],
            env={"SQLITE_DB_PATH": "/var/data/app.db"},
        )
    ]
)

async def main():
    async with Agent(config) as agent:
        response = await agent.chat("Query database metrics.")
        print(await response.text())

if __name__ == "__main__":
    asyncio.run(main())
```

關於 Antigravity 全系列的 MCP 協定功能，請 查看中央 [Model Context Protocol 指南](/docs/mcp).

## 範例程式碼
[「範例程式碼」章節](#sample-code)
關於完整的可運作程式碼範例，請查看 GitHub 儲存庫：

- `mcp_tools.py`
[上一個  
工具與技能](/docs/sdk/tools/)[下一步  
政策](/docs/sdk/policies/)
