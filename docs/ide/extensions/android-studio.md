Android Studio - IDE Extensions
ide
IDE 擴充功能
開始使用
Android Studio - IDE Extensions IDE Extensions 開始使用
IDE 擴充功能
# Android Studio

標題為「Android Studio」的章節

於 **Android Studio**，Antigravity 可直接透過 [ACP Registry](https://agentclientprotocol.com/get-started/registry).

---

## 先決條件

「前置條件」章節

安裝代理前，請確認你符合下列先決條件：

- **Android Studio**：包含 [自備代理](https://developer.android.com/studio/releases#bring-your-own-agent) （ACP）支援。
- **Antigravity 權利**：任何 Antigravity 方案（含免費方案）的 Google 帳戶，或 **Gemini 企業版** （企業版支援目前處於預覽階段）。

---

## 安裝與設定

「安裝與設定」章節

如要開始工作階段：

1. 開啟 **代理** 工具視窗。
2. 按一下面板頂端的代理挑選器，然後選擇 **Google Antigravity**。如果尚未安裝，Android Studio 會為您安裝。
3. 出現提示時登入。
4. 輸入提示詞。模型與思考層級選擇器會顯示在提示詞方塊下方。

你也可以在以下位置安裝與管理代理 **設定 > 工具 > AI > 代理**，在 **市集** 分頁。若要深入了解，請參閱 [自備代理](https://developer.android.com/studio/releases#bring-your-own-agent) 在 Android Studio 文件中。

---

## 驗證與授權

「驗證與授權」章節

Desktop / Tablet Segmented Control
Mobile / Narrow Dropdown Select
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

請聯絡您的雲端管理員以取得 GCP 專案 ID 與區域：

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

上一個
JetBrains IDEs

下一步
Zed

您的下載已開始您如何得知我們？請選一個。這有助於我們接觸更多像您一樣的人。感謝您讓我們知道！
