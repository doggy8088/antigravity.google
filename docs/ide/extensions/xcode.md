# Xcode

Xcode - IDE 擴充功能ideIDE 擴充功能開始使用Xcode - IDE 擴充功能 IDE 擴充功能開始使用IDE 擴充功能
# Xcode
[「Xcode」章節](#xcode)
您可以在 Apple 的以下產品中直接使用 Antigravity **Xcode** 跨 Apple 平台（包括 macOS、iOS、iPadOS、watchOS 與 visionOS）建構，無需離開你的原生開發環境。

---

## 先決條件
[「前置條件」章節](#prerequisites)
安裝擴充功能前，請確認符合下列必要條件：

- Xcode ：macOS 上的 Xcode 27 beta 6 或更新版本。
- Antigravity 權利 ：任何 Antigravity 方案（含免費方案）的 Google 帳戶，或 Gemini 企業版 （企業版支援目前處於預覽階段）。

---

## 安裝與設定
[「安裝與設定」章節](#installation-and-setup)
完成下列步驟以在 Xcode 中安裝 Antigravity：

1. 開啟 Xcode （Xcode 27 beta 6 或更新版本）。
2. 導覽至 Xcode > 設定 （或按下 Cmd+, ).
3. 選取 智慧 設定面板。
4. 點選安裝 Antigravity 取得 .
5. Antigravity 安裝完成後，選取 Antigravity 並按一下 … 開始驗證。

---

## 驗證與授權
[「驗證與授權」章節](#authentication-and-licensing) Desktop / Tablet Segmented Control  Mobile / Narrow Dropdown Select Google 帳戶（個人）Gemini 企業版（OAuth - 預覽版）Gemini API（API 金鑰）Gemini 企業版（API 金鑰／ADC - 預覽版）
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
[上一個  
Zed](/docs/ide/extensions/zed/)[下一步  
CLI 指令](/docs/cli/reference/)
