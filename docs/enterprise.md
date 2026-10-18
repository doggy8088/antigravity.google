# Gemini Enterprise 中的 Antigravity

企業版2-0Antigravity 應用程式開始使用企業版 Antigravity 應用程式開始使用Antigravity 應用程式
# Gemini Enterprise 中的 Antigravity
[「Gemini Enterprise 中的 Antigravity」章節](#antigravity-in-gemini-enterprise)
若要在組織自身的 Google Cloud 基礎架構中部署使用直接託管模型的 Google Antigravity，您可以與 Gemini 企業版整合。每個工作階段皆在 Google Cloud 的企業安全控制、資料落地保證及 Google Cloud 服務條款之下執行。

支援的產品： [Antigravity 應用程式](/product/antigravity-2) [Antigravity CLI](/product/antigravity-cli) [Visual Studio Code](/docs/ide/extensions/vscode) [Visual Studio](/docs/ide/extensions/visual-studio) [JetBrains（預覽版）](/docs/ide/extensions/jetbrains) [Zed (Preview)](/docs/ide/extensions/zed) [Xcode (Preview)](/docs/ide/extensions/xcode)
[開發人員登入與模型](#sign-in-and-license-selection)使用 Google Cloud SSO、Workforce Identity Federation (WIF) 或 ADC 登入，並選擇企業版模型。[管理員與網路設定](#administrator-setup-guide)佈建 Google Cloud 專案、啟用第三方模型，並設定防火牆與 mTLS 允許清單。
## 總覽與主要優點
[「總覽與主要優點」章節](#overview-and-key-benefits)
您可以透過兩種方式將 Antigravity 連接至 Gemini Enterprise：

- Google Cloud 專案與 API ：使用具有帳單 Cloud Billing 帳戶的 Google Cloud 專案直接連接，以及 roles/discoveryengine.agentspaceUser 用量計費的身分與存取權管理 (IAM) 角色。
- Gemini 企業版授權 ：使用您的以下項目連接 Gemini 企業版 Standard 或 Gemini 企業版 Plus 席次授權，以取得內含的第一方配額、受管理的超額用量，以及跨 Antigravity 應用程式、Antigravity CLI（的集中式管理控制 agy ），以及 Antigravity IDE 擴充功能。無需個別的使用者 Antigravity 授權。

將 Google Antigravity 連接至您的 Google Cloud 專案後，您的組織可獲得：

企業版治理

在現有 Google Cloud 服務條款下運作，搭配集中式管理控制。

資料落地與安全

滿足私有網路（VPC Service Controls）。區域資料落地限制適用於第一方 Gemini 模型；第三方模型推論在以下位置執行 `global`, `us`，與 `eu` 位置（不支援境內區域；請參閱 Anthropic 的 [支援的國家與地區](https://www.anthropic.com/supported-countries)).

## 登入與授權選擇
[「登入與授權選擇」章節](#sign-in-and-license-selection)
安裝以下項目後 [Antigravity 應用程式](/docs/getting-started)， [Antigravity CLI（ agy )](/docs/cli/install)，或受支援的 [IDE 擴充功能](/docs/ide/extensions)，選擇您組織的驗證方法以連接 Gemini Enterprise：

- Google Cloud 單一登入
- BYOID 與 WIF
- ADC (Headless)

### Google Cloud 單一登入
[「Google Cloud SSO」章節](#sr-tab-1)
### 登入流程
[「登入流程」章節](#sign-in-workflow)
Google Antigravity 採用單一登入 (SSO) 流程，可自動偵測您獲指派的授權層級：

1. 啟動 Antigravity 應用程式 ，執行 agy （或 /login ）於 Antigravity CLI ，或開啟您的 [IDE 擴充功能](/docs/ide/extensions) .
2. 選取 登入 開啟瀏覽器驗證流程。
3. 選擇 商業帳戶 （受 Google Cloud 服務條款約束） .
4. 選取 使用 Google Cloud 繼續 並在瀏覽器中完成驗證。
5. 在 授權選擇器 ，確認連結至您授權的 Google Cloud 專案並選取它。或者，選取 其他 輸入你的專案 ID 並選取位置，自行指派授權（ global , us ，或 eu ；已儲存至 ~/.gemini/antigravity-cli/settings.json 於 CLI)，或傳入 agy --project PROJECT_ID 啟動 CLI 時。

### BYOID 與 WIF
[「BYOID 與 WIF」章節](#sr-tab-2)
### 設定 Bring Your Own Identity（BYOID）
[「設定自備身分（BYOID）」章節](#configuring-bring-your-own-identity-byoid)
Bring Your Own Identity（BYOID）使用 Workforce Identity Federation（WIF），讓您的組織可透過外部身分識別提供者（例如 Okta）進行驗證，而非使用標準 Google 帳戶：

1. 在 Antigravity 中，選取 商業帳戶 .
2. 選取 進階 WIF 設定 .
3. 輸入 WIF 設定字串 （例如， locations/global/workforcePools/POOL_ID/providers/PROVIDER_ID ）由您組織的管理員提供。
4. 透過您的聯邦身分識別提供者完成登入。
5. 從下方選取或自行指派授權 授權選擇器 .

### ADC (Headless)
[「ADC（Headless）」章節](#sr-tab-3)
### 設定應用程式預設憑證（ADC）
[「設定應用程式預設憑證（ADC）」章節](#setting-up-application-default-credentials-adc)
對於無頭環境與自動化終端機工作流程，Antigravity 支援使用 Google Cloud 進行驗證 [Application Default Credentials](https://docs.cloud.google.com/docs/authentication/application-default-credentials) （ADC）橫跨 **Antigravity CLI**, **Antigravity 應用程式**，與 **Antigravity IDE**.

1. 使用 Google Cloud SDK 為你的專案產生本機應用程式預設憑證： `gcloudauthapplication-defaultlogin--project{GCP_PROJECT}`
2. 驗證您的憑證檔案存在（在 Linux 與 macOS 上， `~/.config/gcloud/application_default_credentials.json`).
3. 為您的介面啟用 ADC：
  - Antigravity CLI ：匯出 AGY_ADC_AUTH=true 執行前 agy （執行 unset AGY_ADC_AUTH 登出）： `exportAGY_ADC_AUTH=true`
  - Antigravity 應用程式與 IDE ：從終端機使用以下項目啟動 AGY_ADC_AUTH=true ，或設定 "enableAdc": true 於 ~/.gemini/config/config.json : `{"userSettings": {"enableAdc":true}}`

### ADC 如何解析憑證、專案與位置
[「ADC 解析憑證、專案與位置的方式」章節](#how-adc-resolves-credentials-project-and-location)
- 憑證 ：使用以下項目解決 標準 ADC 搜尋順序 .
- 專案 ID ：依序從 (1) 解析 quota_project_id 於 ADC 檔案中，(2) GOOGLE_CLOUD_QUOTA_PROJECT 環境變數 （僅限 CLI） ，或 (3) 中繼資料伺服器專案 ID（適用於服務帳戶）。
- 位置 ：從以下項目解析 GOOGLE_CLOUD_LOCATION （CLI） 或 location ADC 檔案中的欄位 （Antigravity App / IDE） ，預設為 global .

## Gemini Enterprise 中支援的模型
[「Gemini Enterprise 支援的模型」章節](#supported-models-in-gemini-enterprise)
Gemini Enterprise 中的 Antigravity 支援內含的第一方 Gemini 模型，以及管理員啟用的第三方合作夥伴模型：

| 模型 | CLI / API 識別碼 | 企業版 |
| --- | --- | --- |
| Gemini 4 Argon | gemini-4-argon | ✅ |
| Gemini 3.8 Flash | gemini-3.8-flash | ✅ |
| Gemini 3.7 Flash | gemini-3.7-flash | ✅ |
| Gemini 3.6 Flash | gemini-3.6-flash | ✅ |
| Gemini 3.1 Pro | gemini-3.1-pro-preview | ✅ |
| Claude Sonnet 5.5（thinking） | claude-sonnet-5-5-<level> * | ✅ ** |
| Claude Opus 5.5（thinking） | claude-opus-5-5-<level> * | ✅ ** |
| Claude Sonnet 4.6（thinking） | — | ❌ |
| Claude Opus 4.6（thinking） | — | ❌ |
| GPT-OSS-120b | — | ❌ |

* 提供四種思考層級（<層級>）：low、medium（預設值）、high 與 max（例如 claude-opus-5-5-high 或 claude-sonnet-5-5-max）。

** 第三方合作夥伴模型需要 [管理員選擇加入](https://cloud.google.com/gemini/enterprise/docs/ai-developer-tools-settings#enable-third-party-models) 於 Google Cloud Console，並依字符消耗計費。第一方 Gemini 模型預設啟用，從彙總的版本座位點數扣款（標準版 $10/月、Plus 版 $15/月）。

### 選取模型與思考層級
[「選擇模型與思考層級」章節](#selecting-models-and-thinking-levels)
為您的專案啟用後，管理員啟用後不久，模型就會出現在您的用戶端中：

- Antigravity 應用程式與 IDE 擴充功能 ：開啟 模型選擇器 於聊天撰寫器選擇您偏好的模型（第三方模型顯示於 下） 其他模型 ). Anthropic Claude Opus 5.5 和 Anthropic Claude Sonnet 5.5 提供四種思考層級—— Low , Medium （預設值）， High ，與 Max — 且每個等級在模型選取器中顯示為獨立項目（例如， Claude Opus 5.5（High） ）。較高的層級讓模型在複雜任務上有更多推理空間，但會使用更多權杖。
- Antigravity CLI（`agy`) ：使用以下項目啟動工作階段 --model 或於工作階段中途切換，搭配 /model 斜線命令： `agy--modelclaude-opus-5-5-mediumagy--modelclaude-sonnet-5-5-medium` 您也可以指定基礎模型 ID 並使用 --effort 旗標 (或 /effort 會話中途，需要 agy v1.2.11 或更新版本）以設定推理層級 ( low , medium , high , max ): `agy--modelclaude-opus-5-5-medium--efforthighagy--modelclaude-sonnet-5-5-medium--effortmax`

### 架構透明度：混合執行
[「架構透明化：混合執行」章節](#architectural-transparency-hybrid-execution)
當您選取 **Anthropic Claude Opus 5.5** 或 **Anthropic Claude Sonnet 5.5** 於 Antigravity，選定的第三方模型會執行所有主要推理、 規劃、工具協調與程式碼生成回合。

Antigravity 採用混合執行架構：輕量的第一方 Gemini 模型持續在背景執行，處理高頻的用戶端協調——例如上下文管理與摘要。這些背景模型會消耗第一方權杖，可能產生費用。

## 自主工具權限與人機協同控制
[「自主工具權限與人員介入控制」章節](#autonomous-tool-permissions-and-human-in-the-loop-controls)
Google Antigravity 中的自主工具執行支援 **人機迴圈** 使用第一方 Gemini 模型或管理員啟用的第三方 Anthropic 模型時的確認（`claude-opus-5-5` 和 `claude-sonnet-5-5`):

- Antigravity 應用程式 ：保留 預設 （隔離的終端機沙箱）或 要求審查 在以下位置啟用 設定 > 一般 > 權限設定 讓未經沙箱的殼層命令、外部檔案修改與 MCP 工具呼叫都需要開發者的明確核准。使用不受限制的自動核准（ Turbo / 一律繼續 ）僅於隔離的開發容器或可拋棄分支中。
- Antigravity CLI（`agy`) ：保留互動式工具權限與 --sandbox=true 已啟用（ seatbelt 於 macOS， bubblewrap 於 Linux），或使用唯讀計畫模式 ( --mode plan ）於核准編輯前。使用以下項目設定政策 /permissions 或 /config .
[代理權限](/docs/permissions)在 Antigravity App 與 CLI 中設定允許、詢問與拒絕規則及權限預設。[終端機沙箱](/docs/sandbox)了解作業系統層級沙箱如何隔離 shell 指令與網路存取。
## 管理員設定指南
[「管理員設定指南」章節](#administrator-setup-guide)
### Gemini 企業版訂閱設定
[「Gemini Enterprise 訂閱設定」章節](#gemini-enterprise-subscription-setup)
若要設定 Gemini 企業版訂閱，請遵循官方 Google Cloud 上線指南。
[Gemini 企業版文件](https://docs.cloud.google.com/gemini/enterprise/docs/ai-developer-tools-overview)
### Google Cloud 專案與 API 設定
[「Google Cloud 專案與 API 設定」章節](#google-cloud-project-and-api-setup)
完成下列步驟以佈建您的 Google Cloud 專案並啟用 API 存取：

1. **選取或建立 Google Cloud 專案**：選取現有專案，或為團隊的 Antigravity 工作負載建立專屬專案。 前往 GCP 專案選擇器
2. **驗證 Cloud Billing**：確保所選 Google Cloud 專案的 Cloud Billing 處於作用中。您可以在 Google Cloud Console 中檢查專案的帳單狀態。 開啟 Google Cloud 帳單主控台
3. **啟用 API**：啟用 Gemini Enterprise API（`aiplatform.googleapis.com`）以允許 Antigravity 用戶端連線到您專案的模型端點。 在 Cloud Console 中啟用 API
4. **啟用第三方合作夥伴模型（選用）**：為了讓開發人員使用 **Anthropic Claude Opus 5.5** 或 **Anthropic Claude Sonnet 5.5**, [啟用第三方模型](https://cloud.google.com/gemini/enterprise/docs/ai-developer-tools-settings#enable-third-party-models) 於 **Gemini 企業版 > 設定 > AI 開發人員工具** 於 Google Cloud Console。

## 區域端點與網路允許清單
[「區域端點與網路允許清單」章節](#regional-endpoints-and-network-allowlists)
### 區域端點
[「區域端點」章節](#regional-endpoints)
Antigravity CLI、Antigravity 應用程式與 IDE 擴充功能支援多區域部署端點，以滿足區域資料落地需求：

| 區域 | 位置 ID | 支援的功能 |
| --- | --- | --- |
| 全域 | global | 文字生成、程式碼推論、多模態、圖像生成 |
| 美國 （多區域） | us | 文字生成、程式碼推論、多模態 |
| EU （多區域） | eu | 文字生成、程式碼推論、多模態 |

關於完整的端點規格，請參閱 [部署端點文件](https://docs.cloud.google.com/gemini-enterprise-agent-platform/resources/locations#global).

### 網路允許清單與 mTLS 端點
[「網路允許清單與 mTLS 端點」章節](#network-allowlists-and-mtls-endpoints)
若您的組織使用企業防火牆、Proxy 或情境感知存取規則限制對外開發者流量，請在 TCP 連接埠上將以下端點加入允許清單 `443` 適用於 Antigravity 應用程式、Antigravity CLI (`agy`），以及適用於 IDE 的 Antigravity：

| 服務與協定 | 允許的主機名稱（TCP 連接埠 443） |
| --- | --- |
| AI 開發者工具編排 （標準 HTTPS） | businessaicode.googleapis.com |
| AI 開發者工具編排 （雙向 TLS） | businessaicode.mtls.googleapis.com |
| Discovery Engine — 全球、美國、歐盟 （標準 HTTPS） | discoveryengine.googleapis.com us-discoveryengine.googleapis.com eu-discoveryengine.googleapis.com |
| Discovery Engine — 全球、美國、歐盟 （雙向 TLS） | discoveryengine.mtls.googleapis.com us-discoveryengine.mtls.googleapis.com eu-discoveryengine.mtls.googleapis.com |

## 安全性與治理
[「安全性與治理」章節](#security-and-governance)
要求與回應記錄

稽核模型互動，並為您的 Gemini Enterprise 執行個體維護企業合規記錄。 [深入了解](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/capabilities/request-response-logging)

VPC Service Controls (VPC-SC)

透過新增 Gemini 企業版 API（ 強制執行私人網路安全邊界`aiplatform.googleapis.com`）至您的 VPC-SC 邊界。 [深入了解](https://docs.cloud.google.com/gemini-enterprise-agent-platform/machine-learning/general/vpc-service-controls)

## 疑難排解與診斷
[「疑難排解與診斷」章節](#troubleshooting-and-diagnostics)
### 常見登入與授權問題
[「常見登入與授權問題」章節](#common-sign-in-and-license-issues)
審查以下常見登入與授權問題的解決方案：

- 設定期間未出現授權 ：授權由您組織的 Google Cloud 管理員指派。若 License Selector 為空，請聯繫管理員，確保您的帳戶已獲授 Gemini Enterprise Standard 或 Plus 授權。
- 缺少 BYOID 登入選項 ：確保您正在執行以下項目的最新版本 [Antigravity 應用程式](/download) ， [Antigravity CLI](/docs/cli/install) ，或您的 [IDE 擴充功能](/docs/ide/extensions) ，因為所有近期版本都原生包含企業驗證與 BYOID 支援。

### 重要 API 佈建建議
[「重要 API 佈建公告」章節](#important-api-provisioning-advisory)
### 與支援團隊分享診斷資訊
[「與支援團隊分享診斷資訊」章節](#sharing-diagnostics-with-support)
聯絡 Google Cloud 支援時，請附上最新工作階段的診斷記錄檔：

- Antigravity CLI (Linux 與 macOS) : `~/.gemini/antigravity-cli/cli.log`
- Antigravity 應用程式 (macOS) : `~/Library/Logs/Antigravity/language_server.log`

## 後續規劃
[「後續發展」章節](#whats-next)
探索下列資源以深入了解：

- 在 探索支援的模型架構 模型指南 .
- 深入了解企業隱私權與法規遵循： 安全性與治理 .
- 檢查 Antigravity CLI 參考 適用於無頭自動化指令。
[上一個  
方案](/docs/plans/)[下一步  
常見問題](/docs/faq/)
