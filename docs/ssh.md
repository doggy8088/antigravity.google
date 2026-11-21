透過 SSH 連線
2-0
Antigravity 應用程式
功能
透過 SSH 連線 Antigravity App 功能
Antigravity 應用程式
適用於：
Antigravity 應用程式
# 透過 SSH 連線

標題為「透過 SSH 連線」的章節

透過 SSH 將 Antigravity App 連線至遠端 Linux 電腦，並使用專屬視窗。Antigravity 會透過 OpenSSH 自動設定遠端伺服器，讓您的 [專案](/docs/projects)，代理、Git 工作樹、終端機與自訂設定 直接在主機上執行，即使你關閉 視窗或讓筆電進入睡眠，執行中的代理仍會繼續工作。

## 選擇遠端工作方式

標題為「選擇遠端工作方式」的章節

使用此表格比較 Antigravity 的遠端選項：

| 選項 | 代理的執行位置 | Client | 主機設定 |
| --- | --- | --- | --- |
| **透過 SSH 連線** | 您的遠端 Linux 電腦 | Antigravity 應用程式 | 無（透過 OpenSSH 自動處理） |
| **[遠端控制](/docs/remote-control)** | 您自己的桌面電腦或伺服器 | 網頁瀏覽器（[antigravity.google.com](https://antigravity.google.com)) | 安裝 App 或 CLI 並登入 |
| **[遠端代理](/docs/remote-agents)** *（Pro / Ultra）* | Google 代管環境 | App、CLI 或網頁瀏覽器 | 無（附加存放區或檔案） |

## 需求

標題為「需求」的章節

確認兩台機器都符合這些需求：

- **本機電腦**：Antigravity App（`v2.33.0+` 在 macOS、Windows 或 Linux 上） 以及 OpenSSH（`ssh` 或 `ssh.exe` 於 `PATH`，或設定 `ANTIGRAVITY_SSH_BIN`).
- **遠端作業系統**：64 位元 Linux（`x86_64` 或 `arm64`）搭配 `glibc` 2.26+（例如 Ubuntu 18.04+、Debian 10+ 或 RHEL 8+）。macOS、Windows 與 `musl` Linux （例如 Alpine）不受支援。
- **SSH 連接埠轉送**: `AllowTcpForwarding yes` （或 `local`) in `sshd_config` 在主機以及任何 `ProxyJump` 主機。
- **儲存空間與網路**：對外 HTTPS 存取權與可寫入、可執行的 `$HOME` 目錄（`~/.antigravity-hub-server/` 適用於伺服器與 `~/.gemini/` 適用於代理資料）。

## 連線至 SSH 主機

標題為「連線至 SSH 主機」的章節

從 Antigravity App 側邊欄連線至 SSH 主機、開啟遠端專案資料夾，並切換或停止遠端伺服器。

請依下列步驟開啟遠端主機：

1. 開啟 SSH 對話框：  **Sidebar** (**軟體工程** 版面配置）：點按 **建立新專案** 旁邊 **專案** 並選擇 **SSH 主機…**，或開啟 **選取專案** 在訊息方塊中，並在下方選取主機 **SSH 主機**. **指令面板**：按下 Cmd + Shift + P （macOS）或 Ctrl + Shift + P （Windows 與 Linux）並執行 **連線至 SSH 主機…**. **指令列**：使用…啟動 App `--ssh-host=<destination>`.
2. 從下列項目選取主機 **Recent** 或 **SSH 設定** （來自 `~/.ssh/config`），或 輸入 `Host` 別名， `[user@]host[:port]`，或 `ssh://[user@]host[:port]`。 按一下 **選擇檔案…** 使用替代設定檔（`ssh -F`），或將滑鼠停留在 某一列上以 **從最近項目中移除** 或 **從此清單中隱藏**.
3. 按一下 **Connect** 並進行驗證。Antigravity 會使用您的 OpenSSH 金鑰， `ssh-agent`，與 `ProxyJump` 設定。在 macOS 和 Linux 上， 主機金鑰檢查、密語、密碼、2FA 代碼與安全性金鑰觸碰 會顯示在應用程式中；在 Windows 上，如果未顯示互動式提示，請將你的 金鑰載入 `ssh-agent` 並執行 `ssh <host>` 在終端機中執行一次以記錄 `known_hosts`.
4. 在以下情況登入 **`(SSH: <host>)`** 視窗開啟。你的本機瀏覽器 會完成 OAuth 流程並將憑證儲存在 `<host>` （支援 個人 Google 帳戶， [Google Workspace](/docs/workspace), [隨用隨付](/docs/pay-as-you-go)，與 [Gemini 企業版](/docs/enterprise)).

## 在 SSH 視窗中工作

標題為「在 SSH 視窗中工作」的章節

每部主機都會在自己的視窗中開啟，並標示為 **`(SSH: <host>)`** 在標題列中 和 **`SSH: <host>`** 位於左側邊欄底部：

- **專案與工作樹**：按一下 **建立新專案** 旁邊 **專案** 瀏覽遠端檔案系統，並在以下位置執行代理 **本機模式** 或 **新的 工作樹模式**.
- **工具、終端機與沙箱**：代理工具、Shell 指令、Linux [終端機沙箱](/docs/sandbox), [權限](/docs/permissions)，以及 側邊面板終端機（Cmd + J 於 macOS， Ctrl + J 在 Windows 和 Linux 上）在主機上執行。
- **自訂項目**: [技能](/docs/skills), [規則](/docs/rules), [掛鉤](/docs/hooks), [MCP 伺服器](/docs/mcp)，與 [外掛](/docs/plugins) 從以下位置載入 `~/.gemini/` 以及主機上的專案資料夾，並附 [側邊面板](/docs/sidecars) 以及透過 SSH 轉送的外掛程式或 MCP OAuth 登入。
- **Shell 環境**：啟動時，伺服器會從…載入你的環境 `$SHELL -l -i` （10 秒逾時）。執行 **停止 SSH 伺服器…** 並在 編輯後重新連線 `~/.bashrc` 或 `~/.zshrc`，在…時略過緩慢的提示詞 `ANTIGRAVITY_RESOLVING_ENVIRONMENT=1` 已設定，並防護 `exec zsh` 與 `[ -t 0 ]`.

### 與本機視窗的差異

標題為「與本機視窗的差異」的章節

在 SSH 視窗中，少數本機桌面功能有所不同：

- **連結與內建瀏覽器**：不會顯示側邊面板瀏覽器； `http` 和 `https` 連結會在你的本機預設瀏覽器中開啟。
- **`/browser` 指令**: [`/browser`](/docs/commands/browser) 附加至執行中的 Google Chrome **在遠端主機上** 啟用遠端偵錯時 （`chrome://inspect/#remote-debugging`），而非在你的本機電腦上。
- **語音與媒體**: [語音模式](/docs/voice-mode) 與聽寫提示詞 **允許 `<host>` 使用你的麥克風？** 適用於目前的應用程式工作階段；相機 與螢幕存取保持停用。
- **本機檔案操作**: **在 IDE 中開啟**, **在 Finder 中顯示** （或檔案 總管），且本機外部編輯器連結會隱藏。

## 切換視窗並停止伺服器

標題為「切換視窗並停止伺服器」的章節

如要在不斷線的情況下開啟本機視窗，請點按 **`SSH: <host>`** 在 側邊欄中並選取 **這部電腦** (或執行 **切換至這部電腦** 從 指令面板）。

關閉視窗後，遠端伺服器與代理仍會繼續執行：

| 動作 | 視窗與 SSH 通道 | 遠端伺服器與代理 |
| --- | --- | --- |
| **關閉視窗** | 關閉並中斷 SSH 連線。 | 在以下位置持續執行 `<host>`；隨時重新連線。 |
| **重新啟動或更新 App** | 重新開啟已開啟的 SSH 視窗並重新連線；提示 **Restart** 或 **Later** 在更新忙碌的伺服器之前。 | 持續執行，除非為了更新而重新啟動。 |
| **睡眠或網路中斷** | 自動重試（**重新連線至 `<host>`…**），或按一下 **Reconnect**. | 持續執行，並在重新上線時重新附加。 |
| **停止 SSH 伺服器…** *（側邊欄、命令選擇區，或 **工作區** 在 Windows 和 Linux 上的選單）* | 關閉並中斷 SSH 連線。 | 停止以下項目上的代理、sidecar 與伺服器 `<host>`. |

## 設定 OpenSSH

標題為「設定 OpenSSH」的章節

標準 OpenSSH 設定位於 `~/.ssh/config` 直接運作：

```
Host devbox
  HostName 203.0.113.10
  User alice
  Port 2222
  IdentityFile ~/.ssh/id_ed25519
  ProxyJump jump.example.com
```

請記住下列細節：

- Concrete `Host` 別名（不含 `*`, `?`，或 `!`）顯示於…下方 **SSH 設定**；萬用字元規則，例如 `Host *` 在連線時仍適用。
- Antigravity 覆寫 `ForwardAgent=no`, `ForwardX11=no`, `ControlMaster=no`, `ControlPath=none`, `RemoteCommand=none`, `ServerAliveInterval=15`，與 `ServerAliveCountMax=3` 上的 `ssh` 指令列。
- 自訂設定檔（**選擇檔案…**, `ssh -F`）略過系統 `ssh_config` 且不得由其他人寫入（`chmod 600` 在 macOS 和 Linux 上；在 Windows 上，使用不含空格的本機路徑 `ProxyJump`).

## 疑難排解

「疑難排解」章節

如果背景連線失敗，請點按 **顯示詳細資料** 上的 **`Couldn't connect to <host>`** 通知。伺服器記錄位於 `~/.antigravity-hub-server/data/ls-*.log` 在主機上。若要解除安裝，請執行 **停止 SSH 伺服器…** 並刪除 `~/.antigravity-hub-server` 在主機上（加上 `~/.gemini` 刪除已儲存的對話與設定）。

使用此表格解決錯誤代碼：

| 錯誤碼 | 原因與修正 |
| --- | --- |
| `INVALID_DESTINATION` | 主機格式無效或 IPv6 連接埠未加方括號。請使用 `[user@]host[:port]`, `user@[ipv6]:port`, `ssh://...` (`%40` 供 `@` 在使用名稱中），或 `Host` 別名。 |
| `SSH_CONFIG_INVALID` | `ssh` 拒絕設定檔（無效選項、不安全的權限、UTF-8 BOM/UTF-16 編碼，或非設定檔的檔案，例如 `known_hosts`）。修正回報的那一行，或選擇另一個檔案。 |
| `AUTH_FAILED` | SSH 驗證失敗。請測試 `ssh <host>` 在終端機中並檢查 `IdentityFile` 或 `ssh-add -l`. |
| `HOSTKEY_REJECTED` | 以下位置缺少或已變更項目： `~/.ssh/known_hosts`。執行前請確認主機變更 `ssh-keygen -R <host>`. |
| `CONNECTION_FAILED` / `CONNECTION_CLOSED` | `ssh` 二進位檔遺失、主機無法連線或通道中斷。請檢查 `ssh -V`, `ssh <host>`，或 `ANTIGRAVITY_SSH_BIN`，然後按一下 **Reconnect**. |
| `FORWARDING_PROHIBITED` | 連接埠轉送已停用。請設定 `AllowTcpForwarding yes` （或 `local`) in `sshd_config` 在主機以及任何跳板主機上。 |
| `UNSUPPORTED_HOST` | 主機不是 64 位元 Linux（`x86_64`/`arm64`）搭配 `glibc` 2.26+，或使用 `musl` （例如 Alpine）。 |
| `SHARED_HOME_UNSUPPORTED` | 另一台共用相同網路 `$HOME` 正在執行伺服器。連線到該主機，點按 **接管** 在提示將伺服器移至此處時（停止該處的代理），或分開 `$HOME` 每部主機。 |
| `INSTALL_FAILED` | 安裝於 `~/.antigravity-hub-server/` 失敗。請檢查磁碟空間（`df -h ~`），驗證 `$HOME` 不是 `noexec`，安裝 `gzip` if `curl`/`wget` 不存在，並保留 `~/.bashrc` 在非互動式殼層中保持靜默。 |
| `LS_START_FAILED` / `LS_STOPPED` | 遠端伺服器啟動失敗或已結束。請檢查 `~/.antigravity-hub-server/data/ls-*.log` 並重新連線。 |

## 後續步驟

「後續步驟」章節

探索相關文件：

- [專案](/docs/projects)：整理遠端資料夾、Git 工作樹與 範圍設定。
- [遠端控制](/docs/remote-control)：從任何網頁瀏覽器控制 Antigravity App 與 CLI 工作階段。
- [遠端代理](/docs/remote-agents)：在 Google 代管的遠端 環境中執行工作。
- [權限](/docs/permissions) 和 [終端機沙箱](/docs/sandbox)： 設定核准與 Linux 指令隔離。

上一個
遠端控制

下一步
遠端代理

您的下載已開始您如何得知我們？請選一個。這有助於我們接觸更多像您一樣的人。感謝您讓我們知道！
