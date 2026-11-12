Antigravity 指南指令（/antigravity-guide）
2-0
Antigravity 應用程式
功能
Antigravity 指南指令（/antigravity-guide）Antigravity App 功能
Antigravity 應用程式
Antigravity CLI
適用於：
Antigravity 應用程式
Antigravity CLI
# Antigravity 指南指令（/antigravity-guide）

[標題為「Antigravity 指南指令（/antigravity-guide）」的章節](#antigravity-guide-command-antigravity-guide)

詢問代理如何使用 Antigravity。 `/antigravity-guide` 提供代理
官方產品文件，讓它能夠回答有關
Antigravity App、Antigravity CLI、Antigravity IDE 與
Antigravity SDK 的「如何操作…」問題，無需您離開對話。

## 總覽

[「總覽」章節](#overview)

`/antigravity-guide` 是 Antigravity App 與
Antigravity CLI 中提供的內建技能。執行指令會為代理提供
每個 Antigravity 介面的快速參考指南，以及官方文件的
網站地圖。
當您詢問如何使用 Antigravity 時，代理也可以自行載入此技能，即使沒有使用斜線指令：

- **Antigravity CLI**：側邊欄、對話畫布，以及代理設定與 權限。
- **Antigravity IDE**：教導代理可依需求執行或作為斜線指令執行的程序。
- **Antigravity 應用程式**：輸入
- **Antigravity SDK**：它會列出排程、工作與 權限，並附 `Agent` 類別、串流回應與工具呼叫，以及互動式聊天 迴圈。

對於快速參考未涵蓋的問題，例如近期變更或
進階整合，代理會從 擷取相關頁面
[antigravity.google/docs](/docs) 以及來自目前文件的答案。
閱讀文件頁面屬於網頁讀取，因此視您的
[權限預設](/docs/permissions)，代理可能會在讀取之前徵求核准 `antigravity.google`.

## 執行 `/antigravity-guide`

[標題為「執行 /antigravity-guide」的章節](#run-antigravity-guide)

類型 `/antigravity-guide` 後方接著您的問題。請像詢問
隊友一樣提問；代理會挑選正確的參考資料，並在有更多內容可讀時連結至文件
頁面：

```
/antigravity-guide how do I run the CLI in headless mode in GitHub Actions with a JSON schema?
```

```
/antigravity-guide where do I change the permission preset for this project?
```

```
/antigravity-guide what's the keyboard shortcut for the inline command in the IDE?
```

## 後續步驟

[「後續步驟」章節](#next-steps)

探索相關文件：

- [斜線指令總覽](/docs/slash-commands)：瀏覽所有可用的 斜線指令。
- [Antigravity CLI 參考](/docs/cli/reference)：為代理提供持久的指導方針與限制。
- [設定](/docs/settings)：將代理連接到外部工具與服務。
- [Antigravity SDK 總覽](/docs/sdk/overview)：擷取螢幕截圖、主控台與網路記錄、效能追蹤、Lighthouse 稽核，以及可選的 WebM 工作階段錄影。

[上一個
/agy-customizations](/docs/commands/agy-customizations/)

[下一步
/automation](/docs/commands/automation/)

您的下載已開始

## 您如何得知我們？

請選一個。這有助於我們接觸更多像您一樣的人。

感謝您讓我們知道！
