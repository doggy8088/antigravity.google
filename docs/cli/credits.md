# CLI AI 點數

CLI AI 點數 - Antigravity CLIcliAntigravity CLI開始使用CLI AI 點數 - Antigravity CLI Antigravity CLI 開始使用Antigravity CLI
# CLI AI 點數
[「CLI AI 額度」章節](#cli-ai-credits)
Antigravity CLI 會與您的訂閱整合，以監控並管理您的 AI Premium 點數與用量配額。

關於基準配額、點數消耗方式與方案資格的詳細說明，請參閱主要 **方案** 頁面。

## 配額追蹤
[「配額追蹤」章節](#quota-tracking)
您可以直接在 CLI 中監控您的啟用中配額與點數消耗：

- 狀態列指示器 ：CLI 狀態列右側會顯示您的剩餘點數（例如， AI Credits: 42 ).
- 配額不足警示 ：當剩餘 AI 點數低於警告閾值時，狀態列指示器會突顯以警告您額度將盡。

## 斜線指令與餘額管理
[「斜線指令與餘額管理」章節](#slash-commands-and-managing-balance)
您可以直接從 CLI 查詢點數或購買額外配額：

- 查詢餘額 ：執行 [AI 點數指令](/docs/cli/commands/credits) 開啟專用的點數面板。此面板會顯示你的詳細點數使用統計。
- 管理點數 ：您可以購買 AI 點數或升級訂閱，這會開啟包含直接定價與訂閱入口連結的面板。

## 設定組態
[「設定組態」章節](#settings-configuration)
若要控制 AI 點數的使用時機與方式，您可以在下列項目中切換點數設定： `settings.json` 檔案：

```
{
    "useG1Credits": true
}
```

您也可以在 CLI 中以互動方式設定此選項：

- 使用 AI 點數選項 ：執行 /config 或 /settings 開啟 CLI 設定面板。設定 使用 G1 點數 欄位，以 於 允許 CLI 在方案配額用盡時使用你的個人點數，或將其設為 關閉 限制備援計費。深入了解請參閱 [方案](/docs/plans#overages) 超額區段。

## 另請參閱
[「另請參閱」章節](#see-also)
探索監控用量與點數的相關指令：

- [AI 點數指令](/docs/cli/commands/credits) ：在 TUI 中互動式檢視並管理您的點數。
- [模型配額指令](/docs/cli/commands/usage) ：監控您的模型專屬 API 配額。
[上一個  
CLI 最佳實務](/docs/cli/best-practices/)[下一步  
Gemini CLI](/docs/cli/gcli-migration/)
