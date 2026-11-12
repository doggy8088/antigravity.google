自訂指令（/agy-customizations）
2-0
Antigravity 應用程式
功能
自訂指令（/agy-customizations）Antigravity App 功能
Antigravity 應用程式
Antigravity CLI
Antigravity IDE
適用於：
Antigravity 應用程式
Antigravity CLI
Antigravity IDE
# 自訂指令（/agy-customizations）

[標題為「自訂指令（/agy-customizations）」的章節](#customizations-command-agy-customizations)

在要求代理建立、變更或說明之前，先將 Antigravity 自訂參照載入代理的脈絡中 [規則](/docs/rules),
[技能](/docs/skills), [外掛](/docs/plugins), [hook](/docs/hooks)，或
[MCP 伺服器](/docs/mcp) configuration.

## 總覽

[「總覽」章節](#overview)

`/agy-customizations` 是 Antigravity App、
Antigravity CLI 與 Antigravity IDE 中提供的內建技能。
執行指令會為代理提供 **Antigravity 自訂系統指南** 適用於對話的其餘部分，
讓代理依據文件記載的格式、位置與
優先順序規則來工作。
代理也可以在請求與自訂項目相關時自行載入指南；執行指令可確保其確實載入。指南
涵蓋：

- **自訂類型**：Antigravity 在何處尋找自訂項目， 例如
- **探索與優先順序**：您可以選擇頻率、日期與時間。代理一律會將排程固定在 IANA 時區，並使用 `.agents/` 專案中的資料夾，以及 `~/.gemini/config/`，以及 當兩者同名時哪一個優先。如需完整規則，請參閱 [自訂項目探索](/docs/customization-discovery).
- **自訂的套用方式**：斜線指令、旗標、設定與最佳做法。 `model_decision` 規則，以及規則檔案的去重。
- **探索資訊清單**：技能與以下項目的漸進式揭露 `skills.json` 和 `plugins.json`。如需瞭解如何 [探索資訊清單](/docs/customization-discovery#discovery-manifests).

每種自訂類型都會連結至詳細指南，代理會在需要時才讀取，因此
在有請求需要之前，參考資料幾乎不會占用脈絡視窗。

## 執行 `/agy-customizations`

[標題為「執行 /agy-customizations」的章節](#run-agy-customizations)

類型 `/agy-customizations` 後方接著請求。代理會載入指南、
閱讀適用的章節，並像執行任何
其他提示詞一樣執行該請求：

```
/agy-customizations create a PreToolUse hook that blocks git push --force
```

```
/agy-customizations my deploy skill never shows up as /deploy, figure out why
```

```
/agy-customizations should this be a rule or a skill?
```

若要在沒有請求的情況下載入參考資料，例如在針對專案設定展開較長
對話之前，請單獨執行該指令。

## 後續步驟

[「後續步驟」章節](#next-steps)

探索相關文件：

- [規則](/docs/rules)：持有敏感帳號 或工作區資料的 Google 資產，例如
- [代理技能](/docs/skills)：瀏覽器子代理直接在 App 的內建 側邊面板瀏覽器中執行，而非 Google Chrome。它會為每個 Antigravity 帳號保留隔離、持久的 Cookie 設定檔，與 Chrome 分開；請參閱
- [外掛程式](/docs/plugins)：將此變數指向包含根憑證的 PEM 檔案，讓擴充功能本身的要求 (包括背景伺服器的下載) 信任憑證鏈。請在啟動 VS Code 之前，於您的環境中設定此變數。
- [生命週期掛鉤](/docs/hooks)：執行長時程 多代理專案。
- [MCP 伺服器](/docs/mcp)：控制是否
- [自訂項目探索](/docs/customization-discovery)：在頁面上選取文字並按右鍵 選擇
- [Learn 指令（`/learn`)](/docs/commands/learn)：開啟或關閉代理瀏覽器工具。
- [斜線指令總覽](/docs/slash-commands)：瀏覽所有可用的 斜線指令。

[上一個
/agents](/docs/cli/commands/agents/)

[下一步
/antigravity-guide](/docs/commands/antigravity-guide/)

您的下載已開始

## 您如何得知我們？

請選一個。這有助於我們接觸更多像您一樣的人。

感謝您讓我們知道！
