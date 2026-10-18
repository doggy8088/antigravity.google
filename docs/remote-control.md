# 遠端控制

遠端控制2-0Antigravity 應用程式功能遠端控制 Antigravity App 功能Antigravity 應用程式Antigravity CLI適用於：Antigravity 應用程式Antigravity CLI
# 遠端控制
[「遠端控制」章節](#remote-control)
Antigravity 遠端控制讓您可從任何網頁瀏覽器，安全地連線並駕駛跨機器執行的 Antigravity 桌面工作階段與 CLI 執行個體。

當 AI 代理承擔範圍更大的任務——例如完整的子系統重構、大規模測試套件執行，以及複雜的相依性遷移——操作可能持續很長時間。遠端控制讓您擺脫實體桌面的束縛，同時保留完整的本機開發環境。

- Antigravity 應用程式
- Antigravity CLI

## Antigravity 應用程式
[「Antigravity App」章節](#sr-tab-1)
### 在 Antigravity 應用程式中啟用遠端控制
[「在 Antigravity App 中啟用遠端控制」章節](#enabling-remote-control-in-the-antigravity-app)
您可以直接從 Antigravity 應用程式設定啟用遠端控制：

1. 開啟 設定 面板，按下 Cmd + , （或 Ctrl + , 於 Linux 與 Windows），或按一下 設定 於左側邊欄底部。
2. 導覽至 應用程式 區段。
3. 切換 啟用遠端控制 至 開啟 .
4. （選用） 設定自訂 暱稱 （例如， workstation-primary 或 server-machine ）以在您的執行個體清單中輕鬆識別此機器。

#### 從網頁瀏覽器連接
[「從網頁瀏覽器連線」章節](#connecting-from-a-web-browser)
若要存取您的遠端 Antigravity 執行個體：

1. 在任何裝置上開啟網頁瀏覽器並導覽至 Antigravity 遠端控制儀表板 。（提示：在行動裝置上，您可選擇將網頁應用程式安裝到主畫面，以便在代理完成任務或請求輸入時接收推播通知。）
2. 使用您在桌面應用程式中所用的同一個 Google 帳號登入。
3. 在執行個體切換器中，選取要控制的機器。
4. 您現在擁有完整存取權，可查看進行中的對話、開始新的代理任務、審查實作計畫，以及檢查產出物。

### 桌面版疑難排解
[「桌面版疑難排解」章節](#desktop-troubleshooting)
#### Antigravity 應用程式桌面版
[「Antigravity App 桌面版」章節](#antigravity-app-desktop)
若連線至桌面執行個體時遇到問題，請參閱以下疑難排解步驟：

- 機器未顯示在網頁 UI 中 :
  - 確保 啟用遠端控制 在主機上的 Antigravity 應用程式設定中已開啟。
  - 驗證您的主機有可用的網際網路連線，且未處於睡眠或暫停狀態。
  - 確認您在桌面應用程式與網頁瀏覽器中使用相同的 Google 帳戶登入。
- 重新連線與中斷連線 :
  - 若您的本機網路連線暫時中斷，網頁介面會自動嘗試重新連線。只要主機保持網際網路連線，任何執行中的背景代理工作與 Shell 指令都會在主機上不間斷地繼續執行。

## Antigravity CLI
[「Antigravity CLI」章節](#sr-tab-2)
### 總覽
[「總覽」章節](#overview)
遠端控制可讓您使用 Antigravity 桌面 UI 遠端與 CLI 執行個體互動。Antigravity CLI 支援兩種使用遠端控制的方式：

1. 互動模式 ：使用以下項目在作用中的 CLI 執行個體中啟動 Remote Control 連線 /remote-control 或以新的執行個體啟動，方式是使用 啟動 CLI --remote-control 旗標。通道僅在該 CLI 執行個體的生命週期內保持開啟。
2. 無頭背景常駐程式 ：使用以下項目啟動至常駐無頭 CLI 執行個體的連線 agy remote-control start 。只要執行它的機器開著，您就能遠端與此執行個體互動。

---

### 互動模式
[「互動模式」章節](#interactive-mode)
#### 在作用中的工作階段中啟用遠端控制（ /remote-control )
[「在進行中的工作階段啟用遠端控制（/remote-control）」章節](#enable-remote-control-in-an-active-session-remote-control)
您可以在互動式工作階段期間隨時開啟遠端控制 `agy` 終端機工作階段，無需重新啟動 CLI。

在提示詞方塊中，執行 `/remote-control` （或 `/remote-control on`):

```
/remote-control
```

CLI 會為目前工作階段建立反向通道，並列印工作階段的主機名稱，以及在另一部裝置上開啟使用中對話的連結：

```
Remote control on for this session.
Hostname: devbox-swift-falcon
Open https://antigravity.google.com/r/<instance-id>?p=c%2F<conversation-id> on another device to continue this conversation.
```

在使用相同 Google 帳戶登入的任何網頁瀏覽器（筆記型電腦、平板或手機）中開啟列印的 URL，以使用 Antigravity 桌面 UI 與工作階段互動。

若要中斷遠端通道並保持本機終端機工作階段執行，請執行：

```
/remote-control off
```

```
Remote control off. This machine is no longer reachable from other devices.
Hostname: devbox-swift-falcon
```

#### 使用 Remote Control 直接啟動（ --remote-control )
[「直接使用遠端控制啟動（--remote-control）」章節](#launch-directly-with-remote-control---remote-control)
若要在啟動互動式 CLI 工作階段時立即開始遠端連線，請使用 `--remote-control` 旗標：

```
agy --remote-control
```

#### 互動式遠端控制的運作方式
[「互動式遠端控制的運作方式」章節](#how-interactive-remote-control-works)
##### 工作階段生命週期
[「工作階段生命週期」章節](#session-lifecycle)
互動式遠端控制嚴格綁定於執行中的 `agy` 終端機處理程序：

- 結束時自動清理 ：當您結束互動式 CLI 時（ /exit , Ctrl+C ，或 Ctrl+D ）或關閉終端機視窗，遠端控制通道會自動終止，執行個體也會從儀表板消失。
- 並行終端機工作階段 ：由於每個互動式 CLI 處理程序都會產生自己的工作階段執行個體 ID 與工作階段主機名稱，您可以執行 agy --remote-control 同時跨多個終端機分頁或專案目錄。

##### 即時雙向同步
[「即時雙向同步」章節](#live-bidirectional-synchronization)
當您使用瀏覽器中的 Antigravity 桌面 UI 連接互動式 CLI 工作階段時，兩個介面會即時保持同步：

- 共用直播 ：從遠端裝置提交的提示詞會即時串流至本地終端機 TUI，而在終端機中產生的思考、工具執行與差異會即時出現在遠端 UI。
- 跨裝置工具核准與問題 ：當代理暫停以進行工具確認時（ y / n ）或提出互動式澄清問題時，您可以從本機終端機或遠端 UI 回應。
- 由 CLI 控制的設定 ：您無法從遠端網頁介面切換設定面板中的設定；若要變更設定，請使用 CLI。

---

### 遠端控制無頭常駐程式
[「遠端控制無頭常駐程序」章節](#remote-control-headless-daemon)
使用 `remote-control` 子命令，可註冊一個常駐的 headless CLI 執行個體，只要你的機器開機，它就會在背景自動啟動並保持連線：

```
agy remote-control start
```

常駐程式會註冊為作業系統服務（Linux 上的 systemd 使用者服務、macOS 上的 LaunchAgent，或 Windows 上的排程工作），並立即啟動，不需要開啟終端機視窗。

執行 `agy remote-control status` 檢視此機器的執行個體名稱，然後從…中選取它 [Antigravity 遠端控制儀表板](https://antigravity.google.com) 使用 Antigravity 桌面 UI 與之互動。

#### 管理 daemon
[「管理常駐程序」章節](#managing-the-daemon)
使用下列指令管理無頭常駐程式：

```
agy remote-control start     Register and start the daemon
agy remote-control status    Show the daemon's status and instance name
agy remote-control stop      Stop the daemon and unregister it
```

#### Windows 注意事項
[「Windows 注意事項」章節](#windows-notes)
在 Windows 上執行 daemon 時，請留意以下行為：

- 將常駐程式註冊至 開機時啟動 需要系統管理員提示字元。PowerShell 與命令提示字元皆可使用。
- 從一般提示詞， start 仍可運作，但如果你的機器被登出或重新啟動，精靈只會在你重新登入後恢復；它無法在開機時啟動。
- status 和 stop 從一般提示詞運作。

#### 登入
[「登入」章節](#sign-in)
常駐程式使用您登入 CLI 時的憑證進行驗證。此登入與同一台機器上的 Antigravity 編輯器是分開的。

#### 為機器命名（無頭 daemon）
[「為您的電腦命名（無頭常駐程序）」章節](#naming-your-machine-headless-daemon)
對於無頭常駐程式執行個體，執行個體名稱是該機器在遠端控制中的顯示名稱：

- 使用以下方式設定 `--name` 旗標： `agyremote-controlstart--name"my-workstation"` 重新執行 `start --name` 以新值重新命名機器。
- 若您從未設定名稱，常駐程式會產生一個友善的名稱（例如 `my-machine-distant-plume`）於首次啟動時。 `agy remote-control status` 顯示目前的名稱。
- 若要改用編輯設定檔的方式重新命名，請開啟 `~/.gemini/config/config.json` 於 Linux 或 macOS 或 `%USERPROFILE%\.gemini\config\config.json` 於 Windows，變更 的值 `cliRemoteControlHostname`，儲存並執行 `agy remote-control start` 再次執行以重新啟動常駐程式。服務重新啟動後，新名稱會出現在 Antigravity 遠端控制儀表板中；服務執行中時編輯無效。

#### 常駐程式的執行方式
[「常駐程序的運作方式」章節](#how-the-daemon-runs)
| 行為 | Linux | macOS | Windows |
| --- | --- | --- | --- |
| 啟動 | 開機時，無需任何人登入 | 當您登入時 | 開機時（管理員安裝）；否則為登入時 |
| 登出後仍繼續執行 | 是 | 否，下次登入時再顯示。 | 是，使用開機安裝 |
| 當機後自動恢復 | 是 | 是 | 是，最多重試三次，之後在下次開機時或透過執行 agy remote-control start 再次 |

---

### 互動模式 vs. 無頭背景常駐程式
[「互動模式與無頭背景常駐程序」章節](#interactive-mode-vs-headless-background-daemon)
使用下表在互動式 Remote Control 與持久性背景常駐程式之間選擇：

| 功能 | 互動模式（ /remote-control / agy --remote-control ) | 無頭背景常駐程式（ agy remote-control start ) |
| --- | --- | --- |
| 範圍 | 單一互動式終端機工作階段 | 整台機器（背景 OS 服務） |
| 生命週期 | 僅在終端機工作階段開啟且切換為開啟時生效 | 登出與系統重新啟動後依然保留 |
| 執行個體命名 | 每個工作階段的新名稱（例如， host-swift-falcon ) | 單一持久性機器名稱 ( --name 或 cliRemoteControlHostname ) |
| 並行 | 每台機器支援多個並行終端機工作階段 | 每台機器一個 daemon 服務 |
| 直接交接連結 | 將連結直接列印至使用中的對話串 | 使用以下位置的執行個體切換器存取 antigravity.google.com |
| 適用於 | 離開進行中的終端機工作，改在手機或網頁上繼續 | 隨時隨地對工作站或伺服器的常時遠端存取 |

---

### CLI 疑難排解
[「CLI 疑難排解」章節](#cli-troubleshooting)
#### 互動模式問題
[「互動模式問題」章節](#interactive-mode-issues)
審查以下常見互動模式問題的解決方案：

- `Remote control is not enabled for your account.` ：帳戶或組織政策尚未啟用 Remote Control 功能旗標。請聯繫您的工作區管理員，或確認您的帳戶方案支援 Remote Control。
- 執行個體從網頁儀表板消失 : /remote-control 和 agy --remote-control 建立在互動式終端機工作階段退出時自動斷開的通道（ /exit 或 Ctrl+C ），或當 /remote-control off 執行。若要在沒有開啟終端機時保持機器可連線，請執行 agy remote-control start 安裝 headless 精靈。
- 同一機器列出多個 CLI 執行個體 ：每個互動式 CLI 工作階段使用不同的工作階段主機名稱，讓您可以同時控制多個終端機視窗。

#### 無頭常駐程式問題
[「無頭常駐程序問題」章節](#headless-daemon-issues)
審查以下常見無頭常駐程式問題的解決方案：

- 機器未顯示在 Antigravity Remote Control 儀表板中 ：執行 agy remote-control status 。若它回報登入問題，請執行 agy ，登入，然後執行 agy remote-control start 再次。
- 檢查記錄 ：檢查您作業系統的常駐程式日誌：
  - Linux : journalctl --user -u antigravity-cli-daemon -n 50
  - macOS : ~/Library/Logs/antigravity-cli-daemon.log
  - Windows ：最新的 cli-*.log 下方 %USERPROFILE%\.gemini\antigravity-cli\log
- 重新命名未生效 ：名稱會在常駐程式啟動時讀取；執行 agy remote-control start 再次。
- Windows 常駐程式僅在登入時啟動，不會在開機時啟動 : start 是從非系統管理員提示字元執行。請重新執行 agy remote-control start 從提高權限的提示詞執行，以在開機時啟動。
- 連接不斷中斷並重新連接 ：舊的指令碼安裝常駐程式可能仍已註冊，並與此常駐程式競爭連線。執行 agy remote-control start 再次執行；它會自動移除舊服務。
- Antigravity Remote Control 儀表板中的兩個相似項目 ：一個是編輯器，一個是此常駐程式。它們刻意分開；請重新命名您想區分的任何一個。

---

## 後續步驟
[「後續步驟」章節](#next-steps)
探索相關文件與指南：

- 設定總覽 ：探索 Antigravity 的組態選項。
- 權限與安全性 ：設定權限預設集與工具存取規則。
[上一個  
總覽](/docs/features/)[下一步  
市集](/docs/marketplace/)
