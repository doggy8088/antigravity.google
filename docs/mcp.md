# Model Context Protocol (MCP)

MCP2-0Antigravity 應用程式功能MCP Antigravity 應用程式功能Antigravity 應用程式Antigravity CLIAntigravity IDE適用於：Antigravity 應用程式Antigravity CLIAntigravity IDE
# Model Context Protocol (MCP)
[「模型情境協定（MCP）」章節](index.html#model-context-protocol-mcp)
Antigravity 支援 [Model Context Protocol (MCP)](https://modelcontextprotocol.io)，開放標準，讓 AI 代理與編輯器能安全連接本機開發者工具、資料庫、檔案解析器與外部遠端 API。此整合為 AI 模型提供超越您目前工作區的即時內容與執行能力。

在本指南中，您將學會如何在 Antigravity 產品間連線與設定 MCP 伺服器。

## 什麼是 MCP？
[「什麼是 MCP？」章節](index.html#what-is-mcp)
MCP 是 Antigravity 與更廣泛開發環境之間的通用橋樑。您無需手動將資料庫結構描述、日誌或 API 規格複製貼上到提示詞或聊天面板，MCP 讓 Antigravity 在需要時直接擷取結構化內容或代表您執行安全動作。

### 新增上下文
[「新增上下文」章節](index.html#add-context)
透過 MCP，Antigravity 可以使用來自已連接 MCP 伺服器的即時資料，為其推理與建議提供依據：

- 撰寫 SQL 查詢時，Antigravity 可檢查您的即時 Neon、Supabase 或 AlloyDB 結構描述，以建議正確的資料表與資料行名稱。
- 在除錯部署失敗時，Antigravity 可直接從 Netlify 或 Heroku 提取近期的建置記錄。

### 新增自訂工具
[「新增自訂工具」章節](index.html#add-custom-tools)
透過 MCP，Antigravity 可以執行您已連接的伺服器所定義的特定安全動作：

- 為以下項目建立 Linear 問題 TODO 項目。
- 在 Notion 或 GitHub 上搜尋驗證模式。

## 依介面開始使用
[「依介面開始使用」章節](index.html#getting-started-by-surface)
- Antigravity 應用程式
- Antigravity CLI
- Antigravity IDE

### Antigravity 應用程式
[「Antigravity App」章節](index.html#sr-tab-1)
在 Antigravity 應用程式中，您可透過以下方式管理 MCP 伺服器 **已安裝的 MCP 伺服器** 你的…區段 **設定**.

若要檢視及更新 MCP 伺服器：

1. 按一下 設定 螢幕左下角的按鈕。
2. 選取 自訂項目 並審查 已安裝的 MCP 伺服器 區段。

若要從下列項目安裝 MCP 伺服器 **已安裝的 MCP 伺服器** 區段：

1. 按一下 新增 MCP 。這會將您連接至 MCP Store，即可搜尋的可用 MCP 伺服器清單。
2. 搜尋或向下捲動，找到您想安裝的 MCP 伺服器。
3. 按一下 新增 .

若要從此畫面管理 MCP 伺服器：

- 解除安裝 ：按一下清單中 MCP 伺服器旁的垃圾桶圖示。
- 停用或啟用 ：按一下清單中 MCP 伺服器旁的切換開關。
- 重新整理 ：按一下重新整理按鈕。

### Antigravity CLI
[「Antigravity CLI」章節](index.html#sr-tab-2)
Antigravity CLI 同時支援本機 `stdio` 行程與遠端主機 MCP 伺服器組態。於 Antigravity CLI 安裝 MCP 伺服器的最簡單路徑是使用 **互動式 MCP 管理員**。您也可以手動編輯全域伺服器設定或工作區層級的 `mcp_config.json`.

#### 互動式 MCP 管理員
[「互動式 MCP 管理員」章節](index.html#interactive-mcp-manager)
類型 `/mcp` 於提示詞面板內部並按下 Enter 開啟互動式 **MCP 管理員覆疊層**。此面板可讓您執行下列動作：

- 檢視使用中、已斷線或載入中伺服器的即時狀態環。
- 手動重新載入伺服器設定或檢查即時連線日誌。

#### 全域與工作區伺服器設定
[「全域與工作區伺服器設定」章節](index.html#global-and-workspace-server-configs)
與舊版設定不同，Antigravity CLI 將 MCP 定義分離為專用的精簡設定：

- 全域伺服器設定 ：在以下項目中設定 ~/.gemini/config/mcp_config.json .
- 工作區本機設定 ：在作用中專案的以下項目下設定 .agents/mcp_config.json .

您可以使用自訂內容直接修改這些檔案 [MCP 伺服器設定](https://antigravity.gh.miniasp.com/docs/mcp#mcp-configuration-structure).

### Antigravity IDE
[「Antigravity IDE」章節](index.html#sr-tab-3)
在 Antigravity IDE 中，管理 MCP 伺服器最簡單的方式是透過內建的 MCP 商店。在 MCP 商店中，您可以瀏覽、探索並安裝支援的 MCP 伺服器。您也可以透過更新您的來安裝自訂伺服器 `mcp_config.json`.

若要使用 MCP 商店：

1. 按一下 … 於編輯器代理側邊面板頂部並選取 MCP 伺服器 .
2. 將游標停留在任何支援的伺服器上並點選 安裝 （或按一下伺服器以檢視詳細資訊，然後按一下 安裝 ).
3. 依照螢幕上的提示操作。

安裝後，來自伺服器的資源與工具會自動提供給編輯器使用。

若要連接商店中未列出的自訂 MCP 伺服器：

1. 按一下 … 於編輯器代理側邊面板頂部並選取 MCP 伺服器 .
2. 按一下 管理 MCP 伺服器 .
3. 按一下 檢視原始設定 .
4. 修改 mcp_config.json 檔案含您的自訂 MCP 伺服器設定 .

設定檔全域位於 `~/.gemini/config/mcp_config.json` （或在本機工作區中的 `.agents/mcp_config.json`).

## MCP 設定結構
[「MCP 設定結構」章節](index.html#mcp-configuration-structure)
無論是為 Antigravity App、Antigravity IDE 或 Antigravity CLI 設定自訂伺服器，設定檔都遵循標準化格式。該檔案包含單一 `mcpServers` 定義要連線的每台伺服器的物件：

```
{
  "mcpServers": {
    "sqlite-explorer": {
      "command": "node",
      "args": ["/usr/local/bin/sqlite-mcp-server.js"],
      "env": {
        "SQLITE_DB_PATH": "/var/data/app.db"
      }
    },
    "my-remote-server": {
      "serverUrl": "https://api.example.com/mcp/",
      "headers": {
        "Authorization": "Bearer YOUR_API_TOKEN"
      }
    }
  }
}
```

### MCP 設定屬性
[「MCP 設定屬性」章節](index.html#mcp-configuration-properties)
每個伺服器項目，位於 `mcpServers` 支援下列屬性。

需要下列其中一個傳輸屬性：

- `command` （字串）：可執行檔的路徑，用於 stdio 傳輸。
- `serverUrl` （字串）：遠端的 URL，用於 Streamable HTTP 或 SSE 伺服器。

設定下列任何選用屬性：

- `args` （字串陣列）：命令列引數，用於 stdio 傳輸。
- `env` （物件）：環境變數，用於 stdio 伺服器處理程序。
- `cwd` （字串）：工作目錄，用於 stdio 伺服器。
- `headers` （物件）：遠端伺服器的自訂 HTTP 標頭。
- `authProviderType` （字串）：驗證提供者。支援 "google_credentials" 適用於 Google Application Default Credentials (ADC)。
- `oauth` （物件）：OAuth 用戶端憑證（ clientId , clientSecret ).
- `disabled` （布林值）：暫時停用伺服器而不移除其設定。
- `disabledTools` （字串陣列）：要對模型隱藏的工具名稱。

## MCP 驗證
[「MCP 驗證」章節](index.html#mcp-authentication)
已連接的 MCP 伺服器可使用內建 Google 憑證、自動 OAuth 流程或自訂 HTTP 標頭，對外部服務進行安全驗證。

### Google 憑證
[「Google 憑證」章節](index.html#google-credentials)
設定 `authProviderType` 至 `"google_credentials"` 使用 Google 應用程式預設憑證（ADC）：

```
{
  "mcpServers": {
    "my-gcp-service": {
      "serverUrl": "https://example.googleapis.com/mcp/",
      "authProviderType": "google_credentials"
    }
  }
}
```

這需要先在本機設定 Application Default Credentials。若要設定，請執行：

```
gcloud auth application-default login
```

若您先前已登入，請執行下列指令確認已設定配額專案：

```
gcloud auth application-default set-quota-project {QUOTA_PROJECT}
```

### OAuth
[「OAuth」章節](index.html#oauth)
Antigravity 會自動處理支援動態用戶端註冊 (DCR) 的伺服器的 OAuth。對於這些伺服器，無需額外設定：

```
{
  "mcpServers": {
    "oauth-server": {
      "serverUrl": "https://api.example.com/mcp/"
    }
  }
}
```

若伺服器不支援動態用戶端註冊，您可以手動提供用戶端憑證：

```
{
  "mcpServers": {
    "oauth-server": {
      "serverUrl": "https://api.example.com/mcp/",
      "oauth": {
        "clientId": "your-client-id",
        "clientSecret": "your-client-secret"
      }
    }
  }
}
```

若您手動提供用戶端憑證，請確保以下 URL 已在您的 OAuth 提供者註冊為重新導向 URI：

```
https://antigravity.google/oauth-callback
```

若要連接啟用 OAuth 的伺服器：

1. 開啟 [代理設定](https://antigravity.gh.miniasp.com/docs/settings) 與 Cmd + , （macOS）或 Ctrl + , （Windows 與 Linux）。
2. 導覽至 **自訂項目** 分頁並點選 **驗證** 伺服器旁邊。
3. 在瀏覽器中完成驗證並複製授權碼。
4. 將程式碼貼回設定面板並按一下 **提交**.

驗證後，伺服器會自動重新連線。

存取權杖儲存於 `~/.gemini/antigravity/mcp_oauth_tokens.json`。過期的權杖會自動重新整理，無效的權杖會被移除。

### 自訂標頭
[「自訂標頭」章節](index.html#custom-headers)
對於需要自訂 HTTP 標頭（如 API 金鑰或 bearer 權杖）的遠端伺服器，將其加入 `headers` 物件。例如：

```
{
  "mcpServers": {
    "my-remote-server": {
      "serverUrl": "https://api.example.com/mcp/",
      "headers": {
        "Authorization": "Bearer YOUR_API_TOKEN"
      }
    }
  }
}
```

## MCP 權限與存取控制
[「MCP 權限與存取控制」章節](index.html#mcp-permissions-and-access-control)
Model Context Protocol 工具與資源的存取受 Antigravity 的下列項目規範 [權限系統](https://antigravity.gh.miniasp.com/docs/permissions)。預設情況下，未設定的 MCP 工具在…中執行 **詢問** 模式，執行前需要您的核准。您可在政策組態中允許特定工具或整個伺服器：

- `mcp(server/tool)` ：比對特定伺服器上的特定工具。
- `mcp(server/*)` ：比對指定伺服器上的所有工具。
- `mcp(*)` ：比對所有已連接伺服器上任何 MCP 工具的全域萬用字元。

## 支援的 MCP 伺服器
[「支援的 MCP 伺服器」章節](index.html#supported-mcp-servers)
MCP 商店為各種開發者平台、資料庫與生產力服務提供直接整合：
資料庫與儲存空間（15 個伺服器）
- AlloyDB for PostgreSQL
- BigQuery
- Bigtable Admin 遠端 MCP
- ClickHouse
- Cloud SQL（MySQL、PostgreSQL、SQL Server、Managed）
- Dataplex
- MCP 資料庫工具箱
- MongoDB
- Neo4j
- Neon
- Pinecone
- Prisma
- Redis
- Spanner
- Supabase
開發人員工具與 CI/CD（17 台伺服器）
- Apigee MCP
- Atlassian
- 雲端 CLI 執行
- 鍛造
- GitHub
- GitLab Orbit
- GKE OneMCP
- 框架
- Heroku
- Home Developer MCP
- Linear
- mabl
- Netlify
- Opsera AI 代理
- Postman
- SonarQube
- Vercel
前端與設計（8 個伺服器）
- Canva
- Chrome DevTools
- Dart
- Figma Dev Mode MCP
- Locofy
- Lovable MCP
- Miro
- Mobbin MCP
安全性（4 部伺服器）
- CrowdStrike
- Endor Labs
- Splunk
- Wiz
分析、AI 與雲端（32 台伺服器）
- Airweave
- Antimetal
- Arize
- 雲端稽核管理員
- Courtroom5
- Daloopa
- Docusign
- Exa
- FactSet AI-Ready Data
- Finnhub
- Firebase
- Fiscal.ai
- Google Cloud 配額
- Grafana Cloud
- Guidepoint
- Harvey
- iManage
- LegalZoom
- Looker
- LSEG
- NetDocuments
- Notion
- 平行搜尋
- PayPal
- Perplexity Ask
- PostHog
- Relativity
- S&P 全域
- Salesforce
- 循序思考
- Stripe
- Windsor AI
[上一個  
語音聽寫 (/voice)](../cli/commands/voice/index.html.gz)[下一步  
代理技能](../skills/index.html)
