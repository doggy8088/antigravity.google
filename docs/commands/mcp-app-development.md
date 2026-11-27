MCP Apps 開發指令 (/mcp-app-development)
2-0
Antigravity 應用程式
指令
MCP Apps 開發指令 (/mcp-app-development) Antigravity App 指令
Antigravity 應用程式
適用於：
Antigravity 應用程式
# MCP Apps 開發指令 (/mcp-app-development)

標題為「MCP Apps 開發指令（/mcp-app-development）」的章節

在要求代理建置、設定主題、封裝或偵錯互動式之前，請先將內建的 MCP Apps 開發指南載入代理的上下文 [MCP App](/docs/mcp-apps) 外掛程式。

## 總覽

「總覽」章節

`/mcp-app-development` 執行內建的 [技能](/docs/skills) 在 Antigravity App 中。執行這個指令後，代理便能在對話的其餘部分取得完整的 Antigravity MCP Apps 參考資料，因此可依據確切的主機需求進行搭建與偵錯：

- **UI 資源與打包**：單一檔案 `ui://` HTML 資源（`text/html;profile=mcp-app`），預設拒絕的 CSP 允許清單，以及 `@modelcontextprotocol/ext-apps` 橋接線路。
- **Antigravity 進入點**：內嵌聊天卡片、側邊面板（`aux_pane`），以及全頁面（`global`）進入點，位於…下方 `_meta["com.google.antigravity/ui"]`.
- **佈景主題與主機動作**：主機 CSS 變數， `tools/call`, `ui/message`, `ui/update-model-context`，與 `com.google.antigravity/toggle-aux-pane`.
- **外掛程式封裝與偵錯**: `mcp_config.json` 與 `${PLUGIN_ROOT}` 和 `${PLUGIN_DATA}`, `plugin.json`，以及疑難排解空白畫面或 CSP 封鎖。

當您請代理建置或偵錯 MCP App 時，代理也可以自動載入這項技能。在提示詞開頭加上 `/mcp-app-development` 確保技能在第一回合即載入。

## 執行 `/mcp-app-development`

標題為「執行 /mcp-app-development」的章節

類型 `/mcp-app-development` 後接您在訊息方塊中的要求，或輸入 `/` 並選取 **mcp-app-development** 從選單：

```
/mcp-app-development Build an MCP App plugin for Antigravity that tracks release checklist items inline in chat and in a side panel board using @modelcontextprotocol/ext-apps.
```

```
/mcp-app-development Add a full-page global entrypoint and host theme CSS variables to my existing MCP App plugin.
```

```
/mcp-app-development Debug why my inline MCP App step renders blank and check my CSP resourceDomains and resources/read MIME type.
```

## 後續步驟

「後續步驟」章節

探索相關文件：

- **[MCP Apps](/docs/mcp-apps)**：MCP App 介面、Antigravity 擴充功能與主機限制總覽。
- **[MCP Apps 總覽](https://modelcontextprotocol.io/extensions/apps/overview)**：概念與架構，見 `modelcontextprotocol.io`.
- **[`@modelcontextprotocol/ext-apps` API 參考資料](https://apps.extensions.modelcontextprotocol.io/api/)**：用戶端與伺服器 SDK 文件。
- **[建置外掛](/docs/build-plugins)**：套件 `plugin.json`, `mcp_config.json`，以及技能，並發佈到 Marketplace。
- **[自訂指令（`/agy-customizations`)](/docs/commands/agy-customizations)**：載入規則、技能、外掛程式、掛鉤與 MCP 伺服器的一般自訂參考資料。
- **[斜線指令總覽](/docs/slash-commands)**：瀏覽所有可用的斜線指令。

上一個
/generative_ui

下一步
/agents

您的下載已開始您如何得知我們？請選一個。這有助於我們接觸更多像您一樣的人。感謝您讓我們知道！
