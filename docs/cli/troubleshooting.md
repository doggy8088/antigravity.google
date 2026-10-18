# CLI 疑難排解

CLI 疑難排解 - Antigravity CLIcliAntigravity CLI開始使用CLI 疑難排解 - Antigravity CLI Antigravity CLI 開始使用Antigravity CLI
# CLI 疑難排解
[「CLI 疑難排解」章節](#cli-troubleshooting)
診斷並解決安裝 PATH 異常、本機自我更新鎖定、金鑰圈存取權限與 SSH 剪貼簿轉送等常見問題。

## 快速參考
[「快速參考」章節](#quick-reference)
掃描以下對照表以識別症狀並立即取得解決方案：

| 錯誤症狀 | 潛在原因 | 目標解析度 |
| --- | --- | --- |
| agy: command not found | 殼層環境中缺少二進位目錄。 | 設定您的殼層 PATH |
| keyring: secure lock out | 缺少系統服務權限或有效的鎖定。 | 授權鑰匙圈權限 |
| SSH Clipboard paste failures | 協定串流遭到阻擋或缺少轉送設定。 | 啟用模擬器剪貼簿轉送 |
| Advisory lock / update failures | 鎖定的自我更新執行緒或唯讀目錄路徑。 | 解決自我更新鎖定與失敗 |

---

## 設定您的殼層 PATH
[「設定 Shell PATH」章節](#configure-your-shell-path)
### 症狀
[「症狀」章節](#symptom)
執行中 `agy` 傳回殼層終端機錯誤：

```
bash: agy: command not found
```

### 原因
[「原因」章節](#cause)
安裝公用程式會將二進位檔下載至 `~/.local/bin` （或 `C:\Users\<username>\AppData\Local\agy\bin`），但您的 Shell 作用中的 `$PATH` 環境不會索引此目錄。

### 解析度
[「解決方式」章節](#resolution)
確認您的終端機工作階段已載入二進位檔案路徑。

**macOS 與 Linux**:

若要在 macOS 或 Linux 上將二進位目錄加入路徑，請依照下列步驟操作：

1. 開啟您的 shell 設定檔（ ~/.bashrc 或 ~/.zshrc ).
2. 驗證或在檔案結尾附加下列這行： `exportPATH="~/.local/bin:$PATH"`
3. 重新載入您的設定檔組態： `source~/.zshrc`

**Windows (PowerShell)**:

若要在 Windows 上將二進位目錄加入路徑，請依照下列步驟操作：

1. 以系統管理員身分開啟 PowerShell 終端機並執行以下指令： `[System.Environment]::SetEnvironmentVariable("Path",[System.Environment]::GetEnvironmentVariable("Path","User")+";C:\Program Files\Google\antigravity-cli","User")`
2. 重新啟動您的終端機模擬器，讓系統登錄環境重新整理。

---

## 授權鑰匙圈權限
[「授權金鑰圈權限」章節](#authorize-keyring-permissions)
### 症狀
[「症狀」章節](#symptom-1)
啟動時，CLI 卡住、印出 D-Bus 警告，或擲出鑰匙圈存取例外：

```
Error: failed to retrieve token: secret keyring is locked
```

### 原因
[「原因」章節](#cause-1)
Antigravity CLI 使用安全的鑰匙圈程式庫（Apple Keychain、透過 D-Bus 的 Linux secret-service，或 Windows Credential Manager）來加密您的工作階段權杖。如果背景 Daemon 被鎖定或為無頭模式，CLI 無法讀取憑證。

### 解析度
[「解決方式」章節](#resolution-1)
**macOS**:

若要在 macOS 上授權鑰匙圈存取，請依照下列步驟操作：

1. 開啟 鑰匙圈存取 應用程式。
2. 搜尋 Antigravity CLI 安全性項目。
3. 右鍵按一下，選取 取得資訊 ，選擇 存取控制 分頁，並確認 agy 位於允許的應用程式清單。
4. 若您在 macOS 的無頭 SSH 工作階段中執行，請強制設定自動鎖定閒置逾時（例如 5 分鐘），並以互動方式解鎖鑰匙圈： `securityset-keychain-settings-l-u-t300~/Library/Keychains/login.keychain-dbsecurityunlock-keychain~/Library/Keychains/login.keychain-db` 工作階段結束後，可選擇立即重新鎖定鑰匙圈： `securitylock-keychain~/Library/Keychains/login.keychain-db`

**Linux**:

確認您的系統金鑰圈（如 GNOME Keyring 或 KWallet）已解鎖且可存取。

若您在無頭環境或透過 SSH 執行，請確保 D-Bus 工作階段為作用中，且金鑰圈常駐程式正在執行。您通常可執行下列指令初始化 D-Bus 工作階段：

```
export $(dbus-launch)
```

若您仍遇到存取問題，請確認您的使用者帳戶具備存取金鑰圈服務的必要權限，或聯繫支援。

---

## 啟用模擬器剪貼簿轉送
[「啟用模擬器剪貼簿轉送」章節](#enable-emulator-clipboard-forwarding)
### 症狀
[「症狀」章節](#symptom-2)
使用以下方式貼上螢幕截圖或媒體檔案 `Ctrl+V` 在 SSH 終端機內傳回失敗通知：

```
Error: local pasteboard is empty or unreachable over SSH connection
```

### 原因
[「原因」章節](#cause-2)
標準 SSH 串流不會轉發圖形剪貼簿。圖形上傳需要特定的終端機多工器通訊協定。

### 解析度
[「解決方式」章節](#resolution-2)
驗證您使用的是支援的終端機模擬器與設定：

1. 使用 iTerm2 或 Ghostty ：這些模擬器支援進階 clip 通道。
2. 設定 iTerm2 轉發 ：在終端機設定中啟用剪貼簿存取：
  - 開啟 iTerm2 偏好設定（ Cmd+, ).
  - 前往 一般 > 選取範圍 .
  - 選取 終端機中的應用程式可存取剪貼簿 （啟用 OSC 52 寫入通道）。
3. 繞過多工器 ：若在以下項目內執行 tmux ，確保您的作用中設定對應標準貼上片段： `set -s set-clipboard on`

---

## 解決自我更新鎖定與失敗
[「解決自我更新程式鎖定與失敗」章節](#resolve-self-updater-locks-and-failures)
### 症狀
[「症狀」章節](#symptom-3)
啟動中 `agy` 卡住、無法套用升級，或傳回諮詢鎖定警告：

```
Warning: another background updater process is already active (update.lock)
```

### 原因
[「原因」章節](#cause-3)
Antigravity CLI 內含原生、靜態連結的自我更新器，會在背景執行。它使用 15 分鐘存活時間 (TTL) 去抖動標記（`last_check.timestamp`）與諮詢鎖定（`update.lock`）內部 `~/.gemini/antigravity-cli/updater/` 防止並行處理程序衝突。若背景更新處理程序停滯、未釋放鎖定就當機，或在可執行檔目錄內的使用者檔案系統權限不足，後續更新會被阻擋。

### 解析度
[「解決方式」章節](#resolution-3)
請嘗試下列任一項步驟以解除更新程式鎖定：

- 釋放諮詢鎖定 ：手動清除背景鎖定檔案： `rm-f~/.gemini/antigravity-cli/updater/update.lock`
- 退出或停用自動更新 ：設定 AGY_CLI_DISABLE_AUTO_UPDATE 環境變數至 true 於您的 shell 設定檔內部 ( ~/.bashrc 或 ~/.zshrc ): `exportAGY_CLI_DISABLE_AUTO_UPDATE=true`
- 驗證目錄寫入權限 ：確保您的使用者設定檔擁有目標安裝目錄（ ~/.local/bin/ 於 Unix，或 %LOCALAPPDATA%\agy\bin 於 Windows）。

---

## 後續步驟
[「後續步驟」章節](#next-steps)
存取速查表或設定進階權限：

- [CLI 參考資料](/docs/cli/reference) ：列出所有斜線指令與視覺設定鍵的參考表。
- [權限](/docs/cli/permissions) ：設定精細的允許與拒絕動作政策。
- [沙箱](/docs/cli/sandbox) ：強制執行 OS 層級容器隔離邊界。
- [外掛程式與技能](/docs/cli/plugins) ：建立您自己的自訂技能。
[上一個  
CLI 設定與技巧](/docs/cli/using/)[下一步  
CLI 最佳實務](/docs/cli/best-practices/)
