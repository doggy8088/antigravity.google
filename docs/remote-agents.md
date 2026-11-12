遠端代理
2-0
Antigravity 應用程式
功能
遠端代理 Antigravity 應用程式功能
Antigravity 應用程式
Antigravity CLI
適用於：
Antigravity 應用程式
Antigravity CLI
# 遠端代理

[標題為「遠端代理」的章節](#remote-agents)

Antigravity 遠端代理會在隔離的、
Google 代管遠端環境中執行您的代理工作階段與工具，而非在本機上執行。

由於執行作業是在遠端進行，遠端代理會繼續處理
長時間執行的任務並執行指令，即使您關閉瀏覽器、讓筆記型
電腦進入睡眠，或在桌機與行動裝置之間切換。

## 遠端代理與遠端控制

[標題為「遠端代理與遠端控制」的章節](#remote-agents-vs-remote-control)

Antigravity 會依您的程式碼與工具所在位置
提供兩種遠端使用代理的方式。請使用下表進行比較 **遠端代理**
和 **[遠端控制](/docs/remote-control)**:

| 功能 | 遠端代理 | [遠端控制](/docs/remote-control) |
| --- | --- | --- |
| **執行環境** | 隔離的 Google 代管遠端環境 | 您自己的桌上型工作站或伺服器 |
| **主機需求** | 獨立執行；無需讓本機保持開機 | 需要主機保持開機並連線 |
| **工作區與檔案** | Remote **資源** （GitHub 存放區、Google Drive 檔案和已上傳的檔案） | 本機檔案系統資料夾、本機工具鏈與 Git 工作樹 |
| **適用於** | 存放區工作、行動工作流程，以及離開時的背景執行 | 需要本機硬體、本機開發伺服器或未提交的本機簽出內容的工作 |

## 開始使用

[標題為「開始使用」的章節](#getting-started)

您可以從以下位置啟動及管理 Remote Agents **Antigravity 應用程式** 在您的
桌面上，從 **Antigravity CLI** 在您的終端機中，或直接從任何網頁
瀏覽器前往 [antigravity.google.com](https://https://antigravity.google.com).

- [Antigravity 應用程式](#tab-panel-213)
- [Antigravity CLI](#tab-panel-214)

### Antigravity 應用程式

[「Antigravity App」章節](#sr-tab-1)

### 在 Antigravity 應用程式中開始

[標題為「在 Antigravity 應用程式中開始」的章節](#start-in-the-antigravity-app)

如要在 Antigravity App 中於本機專案旁建立遠端專案，
請執行下列操作：

1. 在左側邊欄中，點擊 **+** 旁邊 **專案** （或開啟訊息方塊中的專案 選擇器）並選取 **新增遠端專案**.
2. *（選用）* 按一下 **新增資源** 附加 GitHub 存放區、Google Drive 檔案或從電腦上傳的檔案，然後按一下 **下一步** （或 **Skip** 如果您尚未新增任何資源）。
3. 在以下位置輸入名稱 **設定專案名稱** 並按一下 **建立**.
4. 選取您的遠端專案，並在訊息方塊中傳送提示詞，以開始 遠端對話。

您也可以直接在訊息框
中從 GitHub 儲存庫啟動遠端專案：

1. 在訊息方塊中，按一下專案選取器下拉式選單。
2. 選取 **Remote** > **GitHub 存放區**。如果您尚未連結 GitHub 帳戶，請按一下 **連結 GitHub** 授權存取。
3. 從清單中選擇存放區。Antigravity 會自動為該存放區選取現有 的遠端專案，或建立新的遠端專案。

### 在網頁上開始

[標題為「在網頁上開始」的章節](#start-on-the-web)

如要透過桌機或行動瀏覽器使用 Remote Agents，而無須安裝本機
應用程式，請執行下列操作：

1. 開啟瀏覽器並前往 [antigravity.google.com](https://https://antigravity.google.com).
2. 使用符合資格方案（Google AI Pro 或 Google AI Ultra）的個人 Google 帳戶登入。
3. 在訊息方塊中輸入提示詞以開始獨立的遠端對話， 或按一下 **建立專案** 旁邊 **專案** 在左側邊欄中 設定一個使用 GitHub 存放區、Google Drive 檔案或 已上傳檔案的專案。

### 在遠端代理與遠端控制之間切換

[標題為「在遠端代理與遠端控制之間切換」的章節](#switch-between-remote-agents-and-remote-control)

如果您也使用 [遠端控制](/docs/remote-control) 連接至本機
Antigravity 應用程式或 Antigravity CLI 執行個體，請使用以下位置的執行個體切換器：
[antigravity.google.com](https://https://antigravity.google.com) （在左側邊欄
上方 **設定** 在桌機瀏覽器上，或在行動裝置上的頂端列中）切換
 **遠端對話** 以及您任何已連線的主機。

### Antigravity CLI

[「Antigravity CLI」章節](#sr-tab-2)

### 啟動遠端代理工作階段

[標題為「啟動遠端代理工作階段」的章節](#start-a-remote-agent-session)

如要在 Remote Agents 上執行 Antigravity CLI 對話，請執行下列操作：

1. 請確認您執行的是 Antigravity CLI 1.4.12 以上版本。如要更新 CLI，請執行 `agy update`.
2. 使用符合資格方案的個人 Google 帳戶登入 CLI（請參閱 **可用性**）。CLI 啟動時會顯示已登入的帳戶及其方案，在 `/help`.
3. 使用⋯啟動 CLI `--remote-agent` 旗標： `agy --remote-agent`
4. 輸入提示詞以開始遠端對話。

您在工作階段中開始的每個對話都會在遠端代理上執行，
狀態列會顯示 `remote` 以及遠端專案的名稱。由於代理
是遠端執行，即使您的電腦進入睡眠或失去
連線，它仍會繼續處理工作，之後您可以從 CLI、Antigravity App 或網頁繼續對話。

### 選擇遠端專案

[標題為「選擇遠端專案」的章節](#choose-a-remote-project)

首次在某台電腦上啟動遠端代理工作階段時，CLI 會
建立名為⋯的遠端專案 `CLI Project (<hostname>)` 適用於該機器，並
在其中開啟新對話。同一機器
與帳戶上的後續遠端代理工作階段會重複使用該專案。

如要在其他遠端專案（例如您在 Antigravity App 或網頁上建立
的專案）中開啟對話，請搭配專案名稱或 ID 傳遞
`--project`:

```
agy --remote-agent --project="My remote project"
```

如果沒有遠端專案具有該名稱或 ID，CLI 會顯示警告，並改用機器
的預設遠端專案。

如要建立以目前目錄命名的新遠端專案，請傳遞
`--new-project`:

```
agy --remote-agent --new-project
```

如要在工作階段期間切換專案，請執行 `/projects`，選取專案，按下
Enter，選擇 **切換到專案**，然後確認。CLI 會在該專案中開始新的
對話。

### 附加存放區與檔案

[標題為「附加存放區與檔案」的章節](#attach-repositories-and-files)

遠端代理會使用其遠端專案所附加的資源。若要
透過 CLI 建立具有資源的遠端專案，請執行下列步驟：

1. 執行 `/projects` 並選取 **+ 新增專案…** 位於清單頂部。
2. 輸入專案名稱，然後按下向右鍵選擇 其資源。
3. 附加下列任何資源：  **GitHub**：選取 GitHub 並按下 Enter。如果您尚未連結 GitHub， 請在瀏覽器中登入。然後選取要附加的存放區。 **Google 雲端硬碟**：選取 Google Drive 並按下 Enter，如果您尚未 連結，請先登入。然後選取 **+ 透過連結新增 Drive 檔案…** 並貼上 Google Docs、Sheets、Slides 或 Drive 檔案的連結。 **已上傳的檔案**：選取 **上傳檔案**，然後 **+ 新增本機檔案…**，然後輸入您電腦上某個檔案的路徑。
4. 按下 Ctrl + S 建立專案。

如要變更現有遠端專案的資源，請執行 `/projects`，選取
專案，按下 Enter，然後選擇 **編輯**。這些資源與您可以在 Antigravity App 和網頁上管理的資源相同。詳情請參閱
[遠端專案與資源](#remote-projects-and-resources).

### 繼續遠端對話

[標題為「繼續遠端對話」的章節](#resume-remote-conversations)

遠端代理對話會與您的遠端專案一起儲存，而非儲存在
您的電腦上。若要繼續最近一次的遠端代理對話，請執行
下列指令：

```
agy --remote-agent -c
```

如要繼續特定的遠端代理對話，請傳遞其 ID：

```
agy --remote-agent --conversation=<conversation_id>
```

結束遠端代理工作階段時，CLI 會印出繼續
您對話的命令。在工作階段期間，請執行 `/resume` 從您的遠端
代理對話中選擇。

### 遠端代理設定

[標題為「遠端代理設定」的章節](#remote-agent-settings)

遠端代理工作階段會使用您的 [CLI 設定](/docs/settings?tab=cli) 來自
`settings.json`，例如色彩配置、詳細程度和編輯器模式，但
權限除外。就權限而言，遠端代理會遵循您的遠端代理
設定，該設定適用於您的所有遠端代理工作階段。

在遠端代理工作階段中， `/config` 會將您的設定分割為兩個分頁。按下
Tab 在它們之間切換：

- **TUI**：您的 CLI 設定。此分頁會隱藏您的遠端代理 設定所取代的設定： **代理模式**, **工具權限**, **產出物審查**, **沙箱模式**，與 **非 Workspace 存取**.
- **遠端代理**：您的遠端代理設定：  **權限預設集**：控制代理可以執行的動作。 `default` 會在執行敏感操作前詢問， `request review` 會在每個 命令執行前詢問，且 `always-proceed (turbo)` 會執行所有命令，不受 限制。 **計畫審查政策**：控制代理是否要求您審查其 文件，例如實作計畫： `always ask` 或 `always proceed`.

如要管理遠端代理遵循的允許、拒絕與詢問規則，請執行
`/permissions`。在遠端代理工作階段中，它會顯示您的遠端代理規則，
而非本機規則。

除非您變更，否則權限預設值為 `always-proceed (turbo)`，因此
遠端代理執行指令時不需徵求核准。遠端代理工作階段
一律使用預設 [執行模式](/docs/cli/modes)，因此計畫模式、
接受編輯模式和自動模式皆無法使用。

### 遠端代理工作階段中不提供的功能

[標題為「遠端代理工作階段中不提供的功能」的章節](#features-not-available-in-remote-agent-sessions)

以下 CLI 功能目前尚無法在遠端代理工作階段中使用：

- 列印模式（`--print`)
- 程式碼搜尋（`/codesearch`)
- `/diff`, `/fork`, `/rewind`，與 `/btw`
- 語音聽寫（`/voice`)
- 使用⋯自行執行終端機指令 `!`
- 使用⋯向子代理傳送訊息 `@`
- 您電腦上安裝的 MCP 伺服器、外掛程式與代理技能

如果您執行無法使用的斜線指令，CLI 會回報該指令在遠端代理工作階段中
無法使用。

### CLI 疑難排解

[「CLI 疑難排解」章節](#cli-troubleshooting)

請參閱以下針對遠端代理工作階段常見問題的解決方法：

- **遠端對話不會啟動**：請確認您已使用符合資格方案的個人 Google 帳戶登入 CLI（請參閱 **可用性**）。 執行 `/help` 查看已登入的帳戶。
- **`Project Not Found` warning**：沒有任何遠端專案具有您使用 `--project`，因此 CLI 會改用這部電腦的預設遠端專案。 執行 `/projects` 查看您遠端專案的名稱。
- **`is a local conversation` warning**：您使用 `--conversation` 屬於本機對話。啟動 CLI 時請勿使用 `--remote-agent` 繼續執行。
- **`@` 建議先傳送訊息**：遠端代理的環境始於 對話。在您傳送第一則訊息後， `@` 建議來自遠端代理環境的檔案 。
- **`Not available in remote agent sessions.`**：遠端代理工作階段尚不支援此指令。完整清單請參閱 [遠端代理工作階段中 不提供的功能](#features-not-available-in-remote-agent-sessions).

## 遠端專案與資源

[標題為「遠端專案與資源」的章節](#remote-projects-and-resources)

在本機 [專案](/docs/projects) 掛載工作站上的目錄
於 **資料夾**，遠端專案會在 **資源**。
建立遠端專案時，或在任何
時候，您都可以在 **專案設定** > **資源** 按一下 **新增資源**:

- **GitHub**：使用 OAuth 授權 GitHub，並選取一或多個存放區以 附加到專案。對話會自動將您已連結的存放區複製並掛載到遠端工作區以進行開發。同一個專案內的所有私人 存放區必須屬於同一個 GitHub 使用者或機構擁有者；若要使用來自多個擁有者的私人存放區， 請為每個擁有者建立各自的遠端專案。
- **Google 雲端硬碟**：從您的 Google Drive 選取檔案或資料夾（使用網頁介面上的 Google Drive 選擇器，或 Antigravity App 中的 Drive 檔案清單），例如 Google 文件、試算表、簡報、PDF 或資料夾。 遠端代理會在對話期間依需求讀取已附加的 Drive 檔案。
- **已上傳的檔案**：從您的裝置上傳本機檔案（每個檔案最多 8 MiB、 每個專案 50 個檔案和 100 MiB，帳戶總計 2 GiB）， 包括原始碼、文字和資料檔案、圖片、PDF，以及 `.zip` 封存檔。 已上傳的檔案會在專案中的對話之間保留，並暫存 於 `/home/antigravity/upload`.

在 Antigravity CLI 中，執行 `/projects` 附加和移除資源。如需
詳細資訊，請參閱 [附加存放區與檔案](#attach-repositories-and-files).

## 外掛程式與憑證

[標題為「外掛程式與憑證」的章節](#plugins-and-credentials)

遠端代理支援 [外掛](/docs/plugins) 可將您的代理連接至
外部工具和服務：

1. 開啟 **自訂項目** 在左側邊欄中，然後選取 **市集** 分頁（位於以下位置） **Apps**，或 **已安裝** 連線後）。
2. 瀏覽可用的外掛程式，例如 **GitHub**, **Google 雲端硬碟**, **Google 文件**, **Google 試算表**, **Google 簡報**，與 **Google 日曆**.
3. 按一下 **Connect** 在外掛程式旁邊，以透過 OAuth 授權您的帳戶。

在 Antigravity CLI 的遠端代理工作階段中，執行 `/plugin` 從以下位置連接
外掛程式： **探索** 分頁，並在以下位置管理它們： **已安裝** 分頁。

您的 OAuth 憑證在靜態時會加密，權杖則在遠端代理向授權服務發出請求時安全地注入。

---

## 後續步驟

[「後續步驟」章節](#next-steps)

探索相關文件與指南：

- [遠端控制](/docs/remote-control)：連線並控制在您自己的電腦上執行的本機 Antigravity App 和 CLI 工作階段。
- [專案](/docs/projects)：了解專案如何組織工作區、範圍 設定和對話。
- [外掛程式](/docs/plugins)：設定各個 Antigravity 介面上的外掛程式和外部整合。
- [權限與安全性](/docs/permissions)：設定權限預設值 和精細的工具存取規則。

[上一個
遠端控制](/docs/remote-control/)

[下一步
搜尋與指令面板](/docs/search/)

您的下載已開始

## 您如何得知我們？

請選一個。這有助於我們接觸更多像您一樣的人。

感謝您讓我們知道！
