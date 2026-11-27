隨用隨付
2-0
Antigravity 應用程式
開始使用
隨用隨付 Antigravity App 開始使用
Antigravity 應用程式
# 使用 Google Cloud 專案隨用隨付

標題為「使用 Google Cloud 專案隨用隨付」的區段

透過 **隨用隨付** 計費模式，Antigravity 會將要求傳送至您自己的 Google Cloud 專案中的 Gemini Enterprise Agent Platform。 您只需為使用的權杖付費，費用會計入專案的 Cloud Billing 帳戶，帳戶位於 [Agent Platform 生成式 AI 定價](https://cloud.google.com/gemini-enterprise-agent-platform/generative-ai/pricing)。 你不需要 Gemini Enterprise 授權。

您使用有權存取該專案的 Google 帳戶登入，例如 您的 [Google Workspace 帳戶](/docs/workspace).

## 預期內容

標題為「預期內容」的區段

- **定價**：你需為每次要求支付 API 定價，而非固定 訂閱費用，且不含任何配額。
- **條款**：用量受 Google Cloud 服務條款涵蓋，且 Antigravity 不會收集遙測資料。
- **模型**：Anthropic Claude 模型僅在已為你的專案啟用時才可使用。Antigravity 會隱藏你的專案無法存取的合作夥伴模型。

## 設定您的 Google Cloud 專案

標題為「設定你的 Google Cloud 專案」的區段

專案擁有者或管理員只需完成這些步驟一次。你可以登入 [Google Cloud 控制台](https://console.cloud.google.com) 使用與 Antigravity 相同的 帳戶。

1. **選取或建立專案**：選擇現有的 Google Cloud 專案，或 [建立新的](https://console.cloud.google.com/projectselector2).
2. **開啟計費功能**：確認專案已連結至有效的 [Cloud Billing 帳戶](https://console.cloud.google.com/billing).
3. **啟用 API**：啟用 [Gemini 企業版 API](https://console.cloud.google.com/apis/library/aiplatform.googleapis.com) (`aiplatform.googleapis.com`) 在專案中。
4. **授予存取權**：授予每位開發人員 **Agent Platform User** (`roles/aiplatform.user`) 專案上的 IAM 角色，或是包含以下內容的其他角色 `aiplatform.endpoints.predict` 權限。
5. **啟用合作夥伴模型（選用）**：如要使用 Anthropic Claude 模型， [在 Model Garden 中啟用](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/partner-models/use-partner-models) 適用於您的專案。

## 使用您的專案登入

標題為「使用你的專案登入」的區段

使用 Antigravity App `v2.31.0` 或更新版本，或 Antigravity CLI `v1.4.11` 或更新版本。

[Antigravity 應用程式](#tab-panel-248)[Antigravity CLI](#tab-panel-249)Antigravity 應用程式[「Antigravity App」章節](#sr-tab-1) 啟動 Antigravity App 並選取 **使用商務帳戶**。如果你先前已登入，請選取 **其他登入選項** 先。 選取 **使用 Google Cloud 繼續** 並在瀏覽器中使用您的帳戶登入。 於 **選取帳單模式**，選取 **隨用隨付**. 於 **提供 Google Cloud 專案**，輸入你的專案 ID。 於 **選擇區域**，選取 **全域**, **美國**，或 **歐洲**. Antigravity CLI[「Antigravity CLI」章節](#sr-tab-2) 執行 `agy`。如果你已登入，請執行 `/logout` 先。 於 **選取登入方式**，選取 **使用 Google Cloud 專案**. 選取 **使用 Google Cloud 繼續** 並在瀏覽器中使用您的帳戶登入。 於 **選取帳單模式**，選取 **隨用隨付**. 輸入你的專案 ID，然後選擇地區： `global`, `us`，或 `eu`.

若要稍後切換至其他專案或區域，請登出後再重新登入。 對於無介面環境，您可以使用下列方式進行驗證 [Application Default Credentials](/docs/enterprise#application-default-credentials-adc) 改為。

## 疑難排解

「疑難排解」章節

- **權限 `aiplatform.endpoints.predict` 拒絕**：你的帳戶在專案中沒有 Agent Platform 的存取權。請要求專案管理員授予你 **Agent Platform User** (`roles/aiplatform.user`) 角色，並確認帳單與 Gemini Enterprise API 已開啟。請參閱 [設定您的 Google Cloud 專案](#set-up-your-google-cloud-project).
- **所選模型在所選地區不受支援**：部分模型 並非在每個地區都提供。請登出並使用其他地區重新登入，或選擇其他模型。請參閱 [區域端點](/docs/enterprise#regional-endpoints).
- **缺少 Claude 模型**：Antigravity 只會顯示你的專案可存取的合作夥伴模型。請在 [Model Garden](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/partner-models/use-partner-models).

## 相關頁面

標題為「相關頁面」的章節

Google Workspace 帳號

比較個人 Google 帳戶、隨用隨付與適用於 Workspace 帳戶的 Gemini Enterprise。
Gemini Enterprise 中的 Antigravity

Gemini Enterprise 授權、管理員設定、BYOID 與網路需求。
上一個
Google Workspace 帳號

下一步
CLI AI 點數

您的下載已開始您如何得知我們？請選一個。這有助於我們接觸更多像您一樣的人。感謝您讓我們知道！
