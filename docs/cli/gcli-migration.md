# 從 Gemini CLI 遷移

遷移 - Antigravity CLIcliAntigravity CLI開始使用遷移 - Antigravity CLI Antigravity CLI 開始使用Antigravity CLI
# 從 Gemini CLI 遷移
[「從 Gemini CLI 移轉」章節](#migrating-from-gemini-cli)
轉換您的舊版設定、將 Gemini CLI 擴充功能匯入為原生外掛程式、調整自訂技能路徑，並重新格式化 Model Context Protocol 設定。

## 總覽
[「總覽」章節](#overview)
Antigravity CLI 保留與 Gemini CLI 推廣的核心開發者體驗架構的向下相容。為確保無縫升級，CLI 提供自動上線轉換，以及明確的 CLI 遷移指令序列。

## 首次啟動入門
[「首次啟動導覽」章節](#first-launch-onboarding)
當您執行 `agy` 首次在含有舊版組態的環境中使用時，CLI 會自動偵測您現有的設定檔。互動式核取清單會提示您選擇要移轉的資產：

1. 自動轉換 ：選取您要轉換的擴充功能與全域組態。
2. 金鑰圈儲存 ：CLI 會將作用中工作階段 Token 安全地遷移至作業系統的原生 keyring 儲存。
3. 設定對齊 ：預設視覺參數與算繪緩衝區會自動對應至新的設定設定檔。

## 將擴充功能轉換為外掛程式
[「將擴充功能轉換為外掛」章節](#converting-extensions-to-plugins)
自 Gemini CLI 推出以來，業界已將下列術語標準化 **外掛**。您可執行下列指令，手動將舊版 Gemini 擴充功能轉換為原生 Antigravity 外掛程式：

```
agy plugin import gemini
```

這支工具會搜尋您的舊版本地目錄、解析擴充功能資訊清單，並將檔案轉換為原生版面配置區塊。

### 預期的匯入輸出
[「預期的匯入輸出」章節](#expected-import-output)
```
[ok]   conductor-tools
       - skills     : skipped (none detected)
       - agents     : skipped (none detected)
       ✔ commands   : 4 legacy commands converted to skills
       - mcpServers : skipped (none detected)
[ok]   google-workspace
       ✔ skills     : 5 skills processed
       - agents     : skipped (none detected)
       ✔ commands   : 2 legacy commands converted to skills
       ✔ mcpServers : 1 server definition migrated to mcp_config.json
```

## 情境檔案與工作區規則
[「上下文檔案與工作區規則」章節](#context-files-and-workspace-rules)
兩個 CLI 平台使用相同的工作區情境規則。您現有的規則文件無需修改：

- 工作區本機情境 ：代理會繼續解析並強制執行定義於作用中目錄之以下項目內的規則限制 GEMINI.md 和 AGENTS.md 檔案。
- 全域開發人員內容 ：代理會自動諮詢並強制執行位於以下位置的全域限制 ~/.gemini/GEMINI.md .

## 已更新技能路徑
[「更新的技能路徑」章節](#updated-skills-paths)
雖然全域共用技能仍保留在家目錄中，但本機工作區專屬技能的目標資料夾路徑已更新。

| 設定 | Gemini CLI | Antigravity CLI |
| --- | --- | --- |
| 全域共用路徑 | ~/.gemini/skills/ | ~/.gemini/antigravity-cli/skills/ |
| 工作區專案路徑 | .gemini/skills/ | .agents/skills/ |

## MCP 設定格式變更
[「MCP 設定格式變更」章節](#mcp-config-formatting-changes)
Antigravity CLI 將 Model Context Protocol 伺服器分離為專屬、輕量的 JSON 設定檔，而非巢狀於您的主要偏好設定中。

### 目錄對應
[「目錄對應」章節](#directory-mapping)
下列路徑比較舊版與目前的 MCP 設定檔：

- 舊版 Gemini 設定 ：伺服器宣告於以下項目內嵌 ~/.gemini/settings.json .
- Antigravity CLI 設定 ：伺服器定義於獨立的以下項目內 mcp_config.json 設定檔：
  - 全域伺服器 : ~/.gemini/config/mcp_config.json
  - 工作區伺服器 : .agents/mcp_config.json

### 必要的結構描述更新
[「必要的架構更新」章節](#required-schema-updates)
手動遷移遠端 WebSocket 或 SSE 伺服器定義時，請更新 URI 鍵參數以符合目前的標準：

- 舊版結構描述金鑰 : url 或 httpUrl
- 現代結構描述金鑰 : serverUrl

```
{
    "mcpServers": {
        "remote-indexer": {
            "serverUrl": "https://mcp.internal.enterprise.com/sse",
            "env": {
                "AUTH_TOKEN": "secure_alpha_token"
            }
        }
    }
}
```

## 後續步驟
[「後續步驟」章節](#next-steps)
開始設定新的視覺參數並排解任何設定異常：

- [設定、算繪與按鍵繫結](/docs/cli/settings) ：自訂鍵盤快速鍵、主題與螢幕緩衝區。
- [疑難排解](/docs/cli/troubleshooting) ：了解如何解決驗證鎖定或路徑問題。
- [CLI 參考資料](/docs/cli/reference) ：存取標準參數清單與斜線指令對應。
[上一個  
CLI AI 點數](/docs/cli/credits/)[下一步  
Firebase Studio](/docs/firebase-studio-migration/)
