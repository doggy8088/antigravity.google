Google Workspace 帳號
2-0
Antigravity 應用程式
開始使用
Google Workspace 帳戶 Antigravity App 開始使用
Antigravity 應用程式
# 適用於 Google Workspace 帳戶的 Antigravity

標題為「適用於 Google Workspace 帳戶的 Antigravity」的區段

本頁面適用於 Google Workspace 帳戶：您自己網域上的電子郵件地址， 例如 `you@yourcompany.com`，透過 Google Workspace 或 Cloud Identity 管理的帳戶。這包括只有一人的公司。其中說明如何取得 Google Antigravity 的存取權，以及每個選項的費用。

## 檢查你是否有 Google Workspace 帳戶

標題為「檢查你是否有 Google Workspace 帳戶」的區段

如果符合下列任一情況，您的帳戶就是 Google Workspace 帳戶：

- 您的機構已為您的網域註冊 Google Workspace 或 Cloud Identity， 即使您是唯一使用者亦然。
- 您或貴公司的其他人員會在 Google 管理控制台中管理您網域的使用者（[admin.google.com](https://admin.google.com)).
- 您的 [Google 帳戶](https://myaccount.google.com) 頁面指出您的帳戶由 您的網域管理。

如果你使用現有的非 Gmail 地址建立個人 Google 帳戶， 且你的網域未使用 Google Workspace，你便擁有個人帳戶。你 可以使用 [Google AI Pro 與 Google AI Ultra](/pricing) 直接進行，且您不 需要本頁面。

## 選擇選項

標題為「選擇選項」的區段

| 選項 | 付款方式 | 條款與控制項 | 設定 |
| --- | --- | --- | --- |
| **[使用個人 Google 帳戶](#option-1-use-a-personal-google-account)** | 免費，或 Google AI Pro 或 Google AI Ultra 訂閱 | [Antigravity 服務條款](/terms)。沒有組織管理員控制。你可以自行關閉遙測。 | 幾分鐘 |
| **[連結 Google Cloud 專案](#option-2-connect-a-google-cloud-project)** | 依 Google Cloud API 定價，按權杖隨用隨付 | Google Cloud 服務條款。遙測一律關閉。 | 具備帳單功能的 Google Cloud 專案 |
| **[使用 Gemini Enterprise](#option-3-use-gemini-enterprise)** | Gemini Enterprise 席位授權或隨用隨付版本 | 具集中管理員控制的 Google Cloud 服務條款 | 管理員設定 Gemini Enterprise |

## 選項 1：使用個人 Google 帳戶

標題為「選項 1：使用個人 Google 帳戶」的區段

使用個人 Google 帳戶登入，例如 `@gmail.com` 地址， 而非您的 Workspace 帳戶。這是最快速的開始方式， 也是唯一適用於 [Google AI Pro 與 Google AI Ultra](/pricing) 訂閱方案。由於您的 網域由 Google Workspace 管理，請為個人帳戶使用另一個地址， 例如 Gmail 地址。

- **方案**：免費方案無須訂閱即可使用。如需較高的速率 限制、更多模型和 AI 額度，請使用你的個人帳戶訂閱 Google AI Pro 或 Google AI Ultra。請參閱 [方案](/docs/plans).
- **取捨**：個人帳戶使用 [Antigravity 服務條款](/terms) 而非 Google Cloud 服務條款，且您的機構無法 使用管理員控制項管理這些項目。
- **資料收集**：你可以隨時關閉遙測。在 Antigravity App 中，前往 **設定** > **帳戶** 並關閉 **啟用遙測**。在 Antigravity CLI 中，執行 `/config` 並設定 **啟用遙測** 關閉。請參閱 [資料收集設定](/docs/settings#data-collection-settings).

若要切換帳戶，請登出 Antigravity（執行 `/logout` 在 Antigravity CLI 中），然後重新登入並選取 **使用 Google 繼續** (**Google OAuth** 在 Antigravity CLI 中）使用您的個人帳戶。

## 選項 2：連結 Google Cloud 專案

標題為「選項 2：連結 Google Cloud 專案」的區段

使用您的 Workspace 帳戶登入，選擇 **隨用隨付** 計費模式， 並將 Antigravity 連線至 Google Cloud 專案。要求會傳送至您專案中的 Gemini Enterprise Agent Platform，您只需為使用的權杖付費。您不需要 Gemini Enterprise 訂閱。

- **取捨**：你需為每次要求支付 API 定價，而非固定 訂閱費用，且不含任何配額。
- **條款**：用量受 Google Cloud 服務條款涵蓋，且 Antigravity 不會收集遙測資料。
- **設定**：你需要一個具備帳單功能且已啟用 Gemini Enterprise API 的 Google Cloud 專案（`aiplatform.googleapis.com`) 已開啟。如果你是公司唯一的成員，你通常也是管理員，可以在 [Google Cloud 控制台](https://console.cloud.google.com) 使用您的 Workspace 帳戶。

如需專案設定與登入步驟，請參閱 [隨用隨付](/docs/pay-as-you-go).

## 選項 3：使用 Gemini Enterprise

標題為「選項 3：使用 Gemini Enterprise」的區段

如果你的組織希望採用席位式授權、內含配額與集中式管理控制，管理員可以透過 Gemini Enterprise 訂閱設定 Antigravity。此選項需要最多的設定：管理員必須購買 Gemini Enterprise、開啟 AI 開發人員工具，並在開發人員登入前指派授權。

Gemini Enterprise 中的 Antigravity

Gemini Enterprise 的管理員設定、授權指派、登入與網路需求。
比較方案與定價

透過 Google Cloud 查看每個個別方案與商務方案的內容。
## 常見問題

「常見問題」章節

### 如果我使用「使用 Google 繼續」以 Workspace 帳戶登入，會發生什麼事？

標題為「如果我使用 Workspace 帳戶透過「使用 Google 繼續」登入，會發生什麼事？」的區段

預設情況下，Antigravity 會為你的 Workspace 帳戶提供有限的入門配額， 顯示為 **Antigravity 入門配額**。如果你的 Workspace 管理員已 關閉個人存取權，Antigravity 會改為顯示你的帳戶不符合資格。入門配額不支援較高的速率限制或 AI 額度，也無法透過 Workspace 訂閱升級。如需更多用量， 請選擇下列其中一項 [上述選項](#choose-an-option).

### 本頁面涵蓋哪些 Antigravity 產品？

標題為「本頁涵蓋哪些 Antigravity 產品？」的區段

本頁面的登入步驟涵蓋 Antigravity App 與 Antigravity CLI。獨立版 Antigravity IDE 不支援商務帳戶。如需 Antigravity IDE 擴充功能，請參閱 [Gemini Enterprise 中的 Antigravity](/docs/enterprise).

上一個
企業版

下一步
隨用隨付

您的下載已開始您如何得知我們？請選一個。這有助於我們接觸更多像您一樣的人。感謝您讓我們知道！
