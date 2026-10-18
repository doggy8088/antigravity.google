# 驗證

驗證2-0Antigravity 應用程式開始使用驗證 Antigravity 應用程式開始使用Antigravity 應用程式Antigravity CLIIDE 擴充功能適用於：Antigravity 應用程式Antigravity CLIIDE 擴充功能
# 驗證
[「驗證身分」章節](#authenticate)
Antigravity 在以下範圍使用統一的驗證層 **Antigravity 應用程式**, **Antigravity CLI**, **適用於 IDE 的 Antigravity**，以及 **Antigravity SDK**。在一個本機介面登入，會將您的憑證共用至整個本機環境。

---

## 依介面登入
[「依介面登入」章節](#sign-in-by-surface)
在下方選取您的介面，以驗證帳戶、切換憑證，或設定無頭與企業版環境。

### 個人 Google 帳戶
[「個人 Google 帳戶」章節](#personal-google-account)
1. 啟動 Antigravity 應用程式 .
2. 按一下 登入 開啟瀏覽器驗證流程。
3. 使用您的個人 Google 帳戶（Free、Pro 或 Ultra 方案）完成以瀏覽器為基礎的 OAuth 流程。
4. 驗證後，瀏覽器會重新導向回 Antigravity 應用程式並初始化您的工作區。

### Gemini 企業版 & Google Cloud 帳戶
[「Gemini Enterprise」章節 & Google Cloud Account”"](#gemini-enterprise--google-cloud-account)
Google Antigravity 針對企業商務帳戶採用單一登入 (SSO) 流程，並自動偵測您獲指派的 Gemini 企業版授權層級：

1. 開始 Antigravity 應用程式 並選取 登入 開啟瀏覽器驗證流程。
2. 選擇 商業帳戶 （受 Google Cloud 服務條款約束） .
3. 選取 使用 Google Cloud 繼續 （或選取 進階 WIF 設定 並輸入您組織的 WIF 設定字串 適用於 Bring Your Own Identity / Workforce Identity Federation）。
4. 在瀏覽器中完成驗證。
5. 驗證後， 授權選擇器 顯示您被指派的授權。
6. 確認與您的授權連結的專案並選取它。或者，選取 其他 輸入你的 Google Cloud 專案 ID 並選取位置，自行指派授權（ global , us ，或 eu ).

### Application Default Credentials (ADC)
[「應用程式預設憑證（ADC）」章節](#application-default-credentials-adc)
對於自動化或無頭工作流程，你可以使用 Google Cloud 以 Antigravity 應用程式進行驗證 [Application Default Credentials](/docs/enterprise#application-default-credentials-adc):

1. 為你的專案產生本機應用程式預設憑證： `gcloudauthapplication-defaultlogin--project{GCP_PROJECT}`
2. 使用任一選項在 Antigravity 應用程式中啟用 ADC：
  - 從終端機啟動： export AGY_ADC_AUTH=true .
  - 或啟用 enableAdc 使用者設定，位於 ~/.gemini/config/config.json : `{"userSettings": {"enableAdc":true}}`

Antigravity CLI（`agy`）使用安全的憑證與權杖設定檔與共用代理框架通訊。

### 本機靜默金鑰圈登入
[「本機靜默金鑰圈登入」章節](#local-silent-keyring-sign-in)
啟動時 `agy` 於您的本機，CLI 會嘗試存取作業系統的原生安全鑰匙圈（例如 Apple 鑰匙圈、Linux Secret Service/dbus 或 Windows 認證管理員）。若找到有效的字符設定檔，CLI 會靜默驗證您的工作階段，無需開啟瀏覽器。

若找不到已儲存的工作階段：

1. CLI 會自動啟動您本機的預設網頁瀏覽器。
2. 使用您核准的帳號憑證登入（個人 Google 帳號，或選擇 商業帳戶 → 使用 Google Cloud 繼續 / 進階 WIF 設定 供 Gemini 企業版 ).

### 遠端 SSH OAuth 流程
[「遠端 SSH OAuth 流程」章節](#remote-ssh-oauth-flow)
透過 SSH 執行時，CLI 會偵測遠端連線環境。由於無法啟動本機網頁瀏覽器，CLI 會啟動手動 URL 迴圈：

1. 啟動 agy 於您的遠端終端機工作階段。
2. CLI 會偵測 SSH 環境，並列印唯一且安全的授權 URL。
3. 複製此 URL 並貼至本機的網頁瀏覽器。
4. 使用您核准的憑證登入並完成驗證。
5. 瀏覽器會顯示唯一的英數字授權碼。
6. 複製此程式碼，返回遠端 SSH 終端機並貼至提示詞。

### 使用 Gemini API 金鑰
[「使用 Gemini API 金鑰」章節](#using-a-gemini-api-key)
使用您自己的 Gemini API 金鑰執行 Antigravity CLI，而非使用登入的 Google 帳戶。模型要求會直接傳送至 Gemini API，CLI 不會建立帳戶工作階段。這適合無頭與 CI 執行，因為沒有瀏覽器可用來完成登入。在以下位置建立金鑰 [Google AI Studio](https://aistudio.google.com/app/api-keys).

若要使用 Gemini API 金鑰，您必須設定供應商及包含 API 金鑰的環境變數。僅設定 `GEMINI_API_KEY` 環境變數單獨使用時無效。

#### 啟用 Gemini API 金鑰
[「啟用 Gemini API 金鑰」章節](#enable-the-gemini-api-key)
1. 設定 `modelProvider` 至 `gemini` 於 `~/.gemini/antigravity-cli/settings.json`: `{"modelProvider":"gemini"}`
2. 將您的金鑰匯出為 `GEMINI_API_KEY`: `exportGEMINI_API_KEY="your-api-key"` 這僅適用於目前的殼層。請將同一行加入您的殼層設定檔，例如 `~/.zshrc` 或 `~/.bashrc`，以使其跨工作階段持續存在。
3. 啟動 CLI： `agy`

CLI 會略過登入畫面，直接開啟主介面。標頭會顯示 **Gemini API 金鑰** 而非您的帳號電子郵件：

> 備註： 當您使用下列項目的驗證時 GEMINI_API_KEY , /logout 沒有效果，因為沒有已儲存的工作階段可清除。

#### 將 CLI 指向自訂端點
[「將 CLI 指向自訂端點」章節](#point-the-cli-to-a-custom-endpoint)
若要將模型請求傳送至不同的 Gemini 相容端點，請設定 `GOOGLE_GEMINI_BASE_URL` 環境變數：

```
export GOOGLE_GEMINI_BASE_URL="https://your-endpoint.example.com"
```

#### 還原為預設驗證
[「還原為預設驗證」章節](#revert-to-default-authentication)
若您想恢復使用預設的帳戶型驗證：

1. 移除 modelProvider 來自 ~/.gemini/antigravity-cli/settings.json .
2. 重新啟動 CLI 以登入您的帳戶。

> 備註： 如果您取消設定…，CLI 將無法啟動 GEMINI_API_KEY 環境變數，但仍有 modelProvider 設為 gemini .

#### 疑難排解 API 金鑰驗證
[「API 金鑰驗證疑難排解」章節](#troubleshooting-api-key-authentication)
| 症狀 | 原因 | 解析度 |
| --- | --- | --- |
| CLI 在啟動時退出並回報 GEMINI_API_KEY 未設定 | modelProvider 是 gemini 但環境中缺少該金鑰 | 匯出 GEMINI_API_KEY ，或移除 modelProvider 使用預設驗證 |
| CLI 會正常登入並忽略該設定 | modelProvider 保留無法識別的值 | gemini 是唯一接受的值。請檢查拼字並重新啟動 CLI |
| 透過以下方式設定的金鑰 GOOGLE_API_KEY 或 .env 檔案沒有作用 | CLI 只會從…讀取憑證 GEMINI_API_KEY 於環境中，且不會載入 .env 檔案 | 匯出 GEMINI_API_KEY 於您的 shell 或 shell 設定檔 |
| 要求在工作階段中途失敗，並顯示通用模型錯誤 | 金鑰無效、已撤銷，或無權存取所請求的模型 | 在 Google AI Studio 中驗證金鑰。CLI 在啟動時僅檢查金鑰非空，因此無效的金鑰只會在第一次對話時才浮現 |

### Application Default Credentials (ADC)
[「應用程式預設憑證（ADC）」章節](#application-default-credentials-adc-1)
對於無頭企業版環境與自動化終端機工作流程，Antigravity CLI 支援 Google Cloud [Application Default Credentials](/docs/enterprise#application-default-credentials-adc) （ADC）：

1. 為你的專案產生本機 ADC 憑證： `gcloudauthapplication-defaultlogin--project{GCP_PROJECT}`
2. 透過設定 在 CLI 中啟用 ADC AGY_ADC_AUTH=true （以及選擇性地 GOOGLE_CLOUD_QUOTA_PROJECT 和 GOOGLE_CLOUD_LOCATION ): `exportAGY_ADC_AUTH=true`
3. 若要在 CLI 上登出 ADC，請取消設定環境變數（ unset AGY_ADC_AUTH ）並重新啟動終端機工作階段。

### 管理您的工作階段（登出）
[「管理工作階段（登出）」章節](#managing-your-session-logging-out)
終止工作階段會清除使用中的憑證與本機快取目錄。若要中斷帳號連線並從作業系統的鑰匙圈中清除已儲存的驗證設定檔，請在 CLI 提示詞方塊中執行下列指令：

```
/logout
```

### 安裝旗標
[「安裝旗標」章節](#installation-flags)
執行 CLI 安裝指令碼時（請參閱 [快速入門](/docs/getting-started?tab=cli#download-and-install)），您可以附加下列自訂旗標：

- --skip-aliases ：略過 shell 設定檔別名清除（防止指令碼清除或更新舊版 agy 或 antigravity 殼層別名）。
- --skip-path ：略過 shell 設定檔 PATH 附加（防止指令碼修改殼層設定檔的動態環境變數）。

### IDE 擴充功能間的統一登入
[「跨 IDE 擴充功能的統一登入」章節](#unified-sign-in-across-ide-extensions)
Antigravity 在以下範圍使用統一的驗證系統 [IDE 擴充功能](/docs/ide/extensions) ([Visual Studio Code](/docs/ide/extensions/vscode), [IntelliJ 架構 IDE](/docs/ide/extensions/jetbrains), [Visual Studio](/docs/ide/extensions/visual-studio), [Zed](/docs/ide/extensions/zed)，與 [Xcode](/docs/ide/extensions/xcode)），Antigravity CLI 與 Antigravity App。

- 個人開發者 ：按一下編輯器活動列或工具視窗中的 Antigravity 圖示（或選取 Antigravity 並使用 … 下方的按鈕 Xcode > 設定 > 智慧 於 Xcode）並按一下 登入 在你的預設網頁瀏覽器中完成驗證。
- 企業版團隊 & 組織 ：按一下 登入 並選取 使用 Gemini Enterprise 登入 （或選擇 商業帳戶 → 使用 Google Cloud 繼續 / BYOID），然後選取您的目標 Google Cloud 專案 和 區域 ( global , us ，或 eu ）。適用於 JetBrains IDE、Zed 與 Xcode 的 Gemini Enterprise 驗證目前處於 預覽 .

### 代理設定（ auth.type )
[「代理設定（auth.type）」章節](#agent-configuration-authtype)
在透過 JSON 設定設定外部代理的編輯器中（[IntelliJ 架構 IDE](/docs/ide/extensions/jetbrains), [Zed](/docs/ide/extensions/zed)，與 [Xcode](/docs/ide/extensions/xcode)），使用下列設定來設定您的驗證方法：
 Desktop / Tablet Segmented Control  Mobile / Narrow Dropdown Select Google 帳戶（個人）Gemini 企業版（OAuth - 預覽版）Gemini API（API 金鑰）Gemini 企業版（API 金鑰／ADC - 預覽版）
### Google 帳戶

適用於個人 Google AI 訂閱方案（包括免費、Pro 與 Ultra）：

```
{
  "auth": {
    "type": "oauth-personal"
  }
}
```

### Gemini 企業版

請聯繫您的雲端管理員，取得 GCP 專案 ID 與區域（JetBrains、Zed 與 Xcode 的企業版支援目前為預覽版）：

```
{
  "auth": {
    "type": "oauth-business"
  },
  "gcp": {
    "project": "<YOUR_GCP_PROJECT_ID>",
    "location": "<YOUR_GCP_REGION>"
  }
}
```

### Gemini API

使用 Gemini API 金鑰驗證：

```
{
  "auth": {
    "type": "gemini-api-key"
  }
}
```

### API / ADC

使用 API 金鑰或 Application Default Credentials (ADC) 驗證 Gemini Enterprise（預覽版）。使用 ADC 時，請指定您的 GCP 專案 ID 與區域：

```
{
  "auth": {
    "type": "agent-platform"
  },
  "gcp": {
    "project": "<YOUR_GCP_PROJECT_ID>",
    "location": "<YOUR_GCP_REGION>"
  }
}
```

### 程式化驗證
[「程式化驗證」章節](#programmatic-authentication)
The **Google Antigravity SDK** (`google-antigravity`）支援 Python 3.10 以上應用程式的下列驗證方法（請參閱 [SDK 概覽](/docs/sdk/overview)):

1. Gemini API 金鑰 ：在初始化之前，於環境中設定您的 Gemini API 金鑰 Agent : `exportGEMINI_API_KEY="your_api_key_here"`
2. Gemini 企業版（Google Cloud／Vertex AI） ：設定 vertex=True 於 LocalAgentConfig 與您的 GCP 並排 project 和 location 透過 Gemini Enterprise API 轉送請求（ aiplatform.googleapis.com ): `fromgoogle.antigravityimportAgent, LocalAgentConfigconfig=LocalAgentConfig(vertex=True,project="your-gcp-project",location="us-central1",)` 或透過環境變數與應用程式預設憑證設定 Gemini Enterprise： `exportGOOGLE_GENAI_USE_VERTEXAI=TrueexportGOOGLE_CLOUD_PROJECT="your-gcp-project"exportGOOGLE_CLOUD_LOCATION="us-central1"gcloudauthapplication-defaultlogin`
3. 本機模型（離線，無需 API 金鑰） ：使用以下項目直接在裝置端執行代理 LiteRTAgentConfig 或連線至本機 OpenAI 相容伺服器 ( Ollama , LM Studio , vLLM ）使用 LocalOpenAIAgentConfig 。請參閱 本機模型 .

---

## 後續步驟
[「後續步驟」章節](#next-steps)[rocket_launch開始使用快速入門安裝 Antigravity 並完成您的第一個端對端代理工作流程。](/docs/getting-started)[psychology模型選擇模型設定 Gemini 4 Argon、Gemini 3.1 Pro、Gemini 3.8 Flash、Claude 與推理努力層級。](/docs/models)[cloud雲端 & APIs與 Google 攜手建置連接 Vertex AI、Cloud Run、Firebase 與 Google Cloud MCP 工具。](/docs/build-with-google)[上一個  
快速入門](/docs/getting-started/)[下一步  
選擇模型](/docs/models/)
