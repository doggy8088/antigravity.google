代理用戶端通訊協定 (ACP) - Antigravity CLI
cli
Antigravity CLI
功能
代理用戶端通訊協定 (ACP) - Antigravity CLI Antigravity CLI 功能
Antigravity CLI
適用於：
Antigravity CLI
# 代理用戶端通訊協定 (ACP)

[標題為「Agent Client Protocol (ACP)」的章節](#agent-client-protocol-acp)

在編輯器內使用 Antigravity CLI 作為程式設計代理。 `agy acp` 命令會啟動 [代理用戶端通訊協定](https://agentclientprotocol.com) （ACP）伺服器，因此支援 ACP 的編輯器（例如 Zed、JetBrains IDE、Android Studio 和 Xcode）可以在自己的聊天面板中執行代理。

```
agy acp [flags]
```

您的編輯器會啟動 `agy acp` 作為子程序，並透過 JSON-RPC 與其溝通，透過 `stdin` 和 `stdout`。您不需要自行執行指令。代理、其工具、您的登入資訊和設定都來自 Antigravity CLI，因此代理在編輯器中的行為與在終端機中相同。

這段影片示範說明如何在 Zed 編輯器中設定 ACP：

## 快速入門

[標題為「快速入門」的章節](#quick-start)

1. [安裝 Antigravity CLI](/docs/install?tab=cli) 並確認您的版本包含 ACP： `agy acp --help`
2. 使用互動式⋯登入一次 `agy` 工作階段，或執行 `agy acp --login`. `agy acp` 會重複使用快取的憑證。
3. Register `agy` 搭配該引數 `acp` 作為編輯器中的自訂代理。例如，在 Zed 的 `settings.json`: `{   "agent_servers": {     "Antigravity": {       "type": "custom",       "command": "agy",       "args": ["acp"]     }   } }`
4. 使用⋯開始新的討論串 **Antigravity** 在您編輯器的代理面板中。

如需各編輯器的設定步驟、權限、驗證方法、旗標與疑難排解，請參閱完整指南：

[其他編輯器 (ACP)](/docs/ide/extensions/acp)

將 VS Code、Zed、JetBrains IDE、Android Studio、Xcode 及其他 ACP 用戶端連結至 Antigravity CLI。
## 後續步驟

[「後續步驟」章節](#next-steps)

- **[無頭模式](/docs/cli/headless)**：在指令碼和 CI 中以非互動方式執行代理。
- **[權限](/docs/permissions)**：設定代理無需詢問即可執行的動作。
- **[參考](/docs/cli/reference)**：完整的指令與旗標參考。

[上一個
無頭模式](/docs/cli/headless/)

[下一步
狀態列自訂](/docs/cli/statusline/)

您的下載已開始

## 您如何得知我們？

請選一個。這有助於我們接觸更多像您一樣的人。

感謝您讓我們知道！
