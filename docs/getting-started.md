# 開始使用

開始使用2-0Antigravity 應用程式開始使用開始使用 Antigravity 應用程式 開始使用Antigravity 應用程式
# 開始使用
[「開始使用」章節](#get-started)
歡迎使用 Google Antigravity！請依照本指南的指示，在您偏好的介面上開始使用。

## 選擇您的介面
[「選擇您的介面」章節](#choose-your-surface)
## 下載並安裝
[「下載並安裝」章節](#download-and-install)
1. 為您的作業系統下載 Google Antigravity 安裝程式（或前往 查看所有版本 [antigravity.google/download](/download)): macOSmacOS 12 (Monterey) 或更新版本（Apple Silicon 或 64 位元 Intel）[下載 Apple Silicon 版](https://storage.googleapis.com/antigravity-public/antigravity-hub/2.24.0-5780333019398144/darwin-arm/Antigravity.dmg)[下載 Intel 版](https://storage.googleapis.com/antigravity-public/antigravity-hub/2.24.0-5780333019398144/darwin-x64/Antigravity.dmg)開啟下載的 `Antigravity.dmg` 磁碟映像並拖曳 **Antigravity** 進入您的 **應用程式** 資料夾。若您要升級現有安裝，請選擇 **取代** 在提示時，而非 **兩者皆保留**.WindowsWindows 10 (64 位元) 或 Windows 11[下載 x64 版](https://storage.googleapis.com/antigravity-public/antigravity-hub/2.24.0-5780333019398144/windows-x64/Antigravity-x64.exe)[下載 ARM64 版](https://storage.googleapis.com/antigravity-public/antigravity-hub/2.24.0-5780333019398144/windows-arm/Antigravity-arm64.exe)執行下載的 `.exe` 安裝程式並依循引導設定精靈。Linuxglibc >= 2.28、glibcxx >= 3.4.25（Ubuntu 20+、Debian 10+、Fedora 36+、RHEL 8+）[下載 x64 版](https://storage.googleapis.com/antigravity-public/antigravity-hub/2.24.0-5780333019398144/linux-x64/Antigravity.tar.gz)[下載 ARM64 版](https://storage.googleapis.com/antigravity-public/antigravity-hub/2.24.0-5780333019398144/linux-arm/Antigravity.tar.gz)使用 解壓縮封存檔 `tar -xzf Antigravity.tar.gz` 並啟動 `./Antigravity`.GooglebookGooglebook OS（已預先安裝於 Googlebooks；請透過 Google Play 更新或重新安裝）[在 Google Play 下載](https://play.google.com/store/apps/details?id=com.google.android.apps.antigravity)Google Antigravity 已預先安裝於 Googlebooks。請開啟 Google Play 安裝更新或重新安裝應用程式。
2. 從應用程式啟動器或選單啟動 Google Antigravity。

1. 安裝 Antigravity CLI（`agy`）二進位檔，使用適用於您作業系統的自動安裝程式： [macOS / Linux / Googlebook](#tab-panel-75)[Windows (PowerShell)](#tab-panel-76)[Windows (CMD)](#tab-panel-77)`curl-fsSLhttps://antigravity.google/cli/install.sh|bash`預設二進位檔案位置： `~/.local/bin/agy``irm https://antigravity.google/cli/install.ps1|iex`預設二進位檔案位置： `C:\Users\<username>\AppData\Local\agy\bin``curl-fsSL https://antigravity.google/cli/install.cmd-o install.cmd&&install.cmd&&del install.cmd`預設二進位檔案位置： `C:\Users\<username>\AppData\Local\agy\bin`
2. 開啟終端機視窗並驗證安裝： `agy--version`
3. 在首次啟動時完成互動式終端機設定：
  - 色彩配置 ：選取您的視覺偏好（Dark、Solarized Dark、Solarized Light 或終端機預設）。
  - 轉譯模式 ：選擇 Alt-Screen 模式 (full-screen buffer) 或 內嵌 模式（終端機紀錄中的循序輸出）。
  - 工作區信任 ：在代理開始檔案索引前，確認您信任該儲存庫目錄。

1. 安裝您偏好編輯器的官方 Google Antigravity 擴充功能，或下載獨立 **Antigravity IDE**: [VS Code](#tab-panel-78)[JetBrains](#tab-panel-79)[Visual Studio](#tab-panel-80)[Zed](#tab-panel-81)[Xcode](#tab-panel-82)[Antigravity IDE](#tab-panel-83)[從 VS Code Marketplace 安裝](https://marketplace.visualstudio.com/items?itemName=Google.google-antigravity)**需求：** macOS、Linux 或 Windows 上的 Visual Studio Code 1.90 或更高版本。開啟擴充功能側邊欄（Cmd+Shift+X 於 macOS 或 Ctrl+Shift+X 於 Windows/Linux），搜尋 **Google Antigravity**，並按一下 **安裝**。請參閱 [VS Code 擴充功能指南](/docs/ide/extensions/vscode).**需求：** 任何 IntelliJ 系 IDE（IntelliJ IDEA、PyCharm、WebStorm、GoLand、CLion、Rider）2026.2.1 或更新版本。開啟 **JetBrains AI** > **設定** > **代理**，搜尋 **Antigravity**，並按一下 **安裝**。請參閱 [IntelliJ 架構 IDE 指南](/docs/ide/extensions/jetbrains).[從 Visual Studio Marketplace 下載](https://marketplace.visualstudio.com/items?itemName=Google.GoogleAntigravity)**需求：** Windows 10/11 上的 Visual Studio 2026（版本 17.8 或更高版本）。導覽至 **擴充功能** > **管理擴充功能**，搜尋 **Google Antigravity**，按一下 **下載**，並重新啟動 Visual Studio 以完成 VSIX 安裝。請參閱 [Visual Studio 指南](/docs/ide/extensions/visual-studio).**需求：** macOS 或 Linux 上的 Zed 0.140.0 或更新版本。開啟指令面板（Cmd+Shift+P / Ctrl+Shift+P），執行 `agent: open settings`，並導覽至 **外部代理** > **新增** > **從註冊表安裝** 安裝 **Antigravity**。請參閱 [Zed 指南](/docs/ide/extensions/zed).**需求：** macOS 上的 Xcode 27 beta 6 或更新版本。開啟 **Xcode** > **設定** (Cmd+,），選取 **智慧** 面板，並按一下 **取得** 旁邊 **Antigravity**。請參閱 [Xcode 指南](/docs/ide/extensions/xcode).[下載 Antigravity IDE](/download#antigravity-ide)**需求：** macOS 12 (Monterey)+、Windows 10（64 位元）+，或 Linux / Googlebook（glibc >= 2.28、glibcxx >= 3.4.25）。下載獨立版 **Antigravity IDE** 適用於您平台的安裝程式，來自 [antigravity.google/download](/download)。有新版本可用時，Antigravity IDE 會在背景下載並提示您按一下 **重新啟動以更新**:**基本導覽（編輯器 & 代理管理員）：** 使用頂端列上的按鈕或 從編輯器開啟代理管理員 Cmd+E (Ctrl+E 於 Windows/Linux）：從代理管理員，使用開啟任何工作區的編輯器 **聚焦編輯器** 於工作區下拉式選單， **開啟編輯器** 按鈕，或 Cmd+E (Ctrl+E 於 Windows/Linux）：**備註：** Gemini 4 Argon 與企業版設定在獨立 Antigravity IDE 中不可用。若要使用 Gemini 4 Argon 或 Gemini 企業版，請安裝 [Antigravity 應用程式](/download#antigravity-2), [Antigravity CLI](/docs/install?tab=cli)，或 [IDE 擴充功能](/docs/ide/extensions).
2. 使用您的個人 Google 帳號登入，或 **Gemini 企業版** 憑證（IDE 擴充功能提供企業版支援——VS Code 與 Visual Studio 已正式推出，以及 **預覽** 適用於 JetBrains、Zed 與 Xcode），於 Antigravity 面板或設定中出現提示時。

1. 在 Python 3.10+ 虛擬環境中安裝官方 Antigravity Python 套件： `pipinstallgoogle-antigravity` 若您使用 Poetry 或 uv 進行套件管理： `# Poetrypoetryaddgoogle-antigravity# uvuvaddgoogle-antigravity`
2. 驗證並設定您的環境： 在初始化代理工具之前，先在環境中設定您的 API 憑證： `exportGEMINI_API_KEY="your_api_key_here"`

## 開始專案
[「啟動專案」章節](#start-a-project)
代理在以下範圍內運作 **專案**，定義儲存庫邊界、檔案範圍與工作區的安全性權限。

1. 按一下 新專案 圖示（左側邊欄中含加號的資料夾）。
2. 按一下 新增資料夾 選取一或多個本機 Git 存放庫或工作目錄。
3. 按一下 建立 .
4. 在提示詞輸入中輸入您的指示（例如： Add unit tests for the authentication handlers ）並按下 Enter .
5. 選擇 模式 於設定模式啟動您的代理：
  - 本機模式 ：代理直接在您的作用中資料夾中運作。
  - 新 worktree 模式 ：代理在隔離的 Git worktree 中運作。

在終端機中導覽至任何程式碼庫目錄並開始工作階段：

1. 建立或前往專案目錄並啟動 TUI： `mkdiragy-demo&&cdagy-demoagy`
2. 輸入您的第一個任務提示詞，然後按下 Enter: `Write a simple python script to fetch web page text` 代理會索引工作區、制定實作計畫，並顯示提議的變更供您審查。
3. 開啟 **產出物審查** 畫面以檢視提議的程式碼： 按下 Ctrl + R 收到檢閱已產生產出物的通知時：
  - 導覽至新建立的 main.py 使用 ↑ / ↓ ，或按下 Tab 從主要提示詞檢視內嵌差異。
  - 按下 Y 核准建立 main.py .
  - 按下 Esc 關閉檢閱面板並返回主要提示詞。
4. 與代理一起執行測試指令以驗證輸出： `Run the python script and show me the output` 按下 Y 確認並執行 `python3 main.py`。完成後，按下 Ctrl + D （或輸入 `/exit`）以關閉 TUI 工作階段。

1. 在慣用編輯器中開啟您的工作區資料夾、儲存庫或解決方案。
2. 在 IDE 中開啟 Antigravity 面板或代理檢視（例如，按一下 VS Code 活動列中的 Antigravity 圖示，按 Ctrl+, Ctrl+A 於 Visual Studio，或在 JetBrains AI、Zed External Agents 或 Xcode Intelligence 中選擇 Antigravity）。
3. 在對話面板中輸入任務提示詞，啟動共享情境的代理工作階段 自訂 與 Antigravity 生態系的其他部分。
4. 在編輯器中直接檢查互動式實作計畫、審查細緻的內嵌 diff，並執行多步驟工程工作。

1. 建立名為以下項目的檔案 `hello_agent.py` 具現化並執行自主代理： `importasynciofromgoogle.antigravityimportAgent, LocalAgentConfigasyncdefmain():# Initialize the local agent harnessconfig=LocalAgentConfig()asyncwithAgent(config)asagent:response=awaitagent.chat("What files are in the current directory and what is their purpose?")print(awaitresponse.text())if__name__=="__main__":asyncio.run(main())`
2. 在終端機中執行代理指令碼： `pythonhello_agent.py`
3. 設定宣告式工具政策： 使用 `LocalAgentConfig` 和 `google.antigravity.hooks.policy` 定義明確的工具執行規則： `fromgoogle.antigravityimportLocalAgentConfigfromgoogle.antigravity.hooks.policyimportallow, denyconfig=LocalAgentConfig(policies=[deny("*"),allow("view_file"),])`

## 快速鍵與指令
[「快速鍵與指令」章節](#shortcuts-and-commands)
### 導覽快速鍵
[「導覽快速鍵」章節](#navigation-shortcuts)
| 動作 | macOS | Windows / Linux | 描述 |
| --- | --- | --- | --- |
| 對話選擇器 | ⌘K | Ctrl + K | 搜尋並切換使用中的代理線程 |
| 檔案搜尋 | ⌘P | Ctrl + P | 跨工作區模糊搜尋並瀏覽檔案 |
| 聚焦輸入 | ⌘L | Ctrl + L | 將游標焦點直接跳至代理提示詞方塊 |
| 新對話 | ⌘N | Ctrl + N | 開始新的自主代理工作階段 |
| 循環切換對話 | ⌥ Up / Down | Alt + Up / Down | 移至歷程記錄中的上一個或下一個對話 |

### 核心斜線指令
[「核心斜線指令」章節](#core-slash-commands)
| 指令 | 描述 |
| --- | --- |
| /goal | 自主執行任務直到完成，不會因中間輸入而暫停。 |
| /grill-me | 在開始實作之前，提示代理就需求對您進行訪談。 |
| /schedule | 將指令作為一次性延遲任務或定期 cron 排程執行。 |
| /browser | 在 Google Chrome 中啟動瀏覽器除錯與研究動作。 |
| /plugin | 管理已安裝的 市集 外掛或建立並設定自訂外掛套件。 |

### 常見 CLI 指令
[「常用 CLI 指令」章節](#common-cli-commands)
| 指令 | 描述 |
| --- | --- |
| agy | 在目前目錄中啟動互動式 TUI。 |
| agy "prompt" | 使用初始提示詞啟動工作階段。 |
| /agents | 在使用中的背景子代理之間切換。 |
| /statusline | 切換或設定終端機狀態列顯示。 |
| /usage | 顯示目前的模型點數消耗量與配額上限。 |
| /exit | 關閉 TUI 並還原您原本的殼層工作階段。 |

### 鍵盤快速鍵
[「鍵盤快速鍵」章節](#keyboard-shortcuts)
| 快速鍵 | 動作 |
| --- | --- |
| Ctrl + R | 開啟 產出物審查 畫面以檢視計畫與差異 |
| Tab | 檢查檔案 diff 與工具執行詳細資訊 |
| Ctrl + C | 中斷目前代理的產生 |
| Ctrl + O | 展開或收合作用中工具執行藥丸 |
| Ctrl + D | 離開作用中的 Antigravity CLI 工作階段 |
| Esc | 離開差異檢查器或關閉作用中覆蓋層 |

### 編輯器指令與快速鍵
[「編輯器指令與快速鍵」章節](#editor-commands-and-shortcuts)
| IDE | 快速鍵／指令 | 動作 |
| --- | --- | --- |
| VS Code | ⌘⇧X / Ctrl + Shift + X | 開啟擴充功能側邊欄以安裝或管理 Google Antigravity |
| Visual Studio | Ctrl+, Ctrl+A | 開啟 Antigravity 工具視窗 |
| Zed | ⌘⇧P / Ctrl + Shift + P → agent: open settings | 開啟代理設定以設定 外部代理 |
| JetBrains | JetBrains AI > 設定 > 代理 | 安裝或設定 Antigravity 代理 |
| Xcode | ⌘, → 智慧 | 管理與驗證 Antigravity 於 Xcode 設定 |

### 驗證設定
[「驗證設定」章節](#authentication-configuration)
| 驗證類型（ auth.type ) | 帳戶等級 | 描述 |
| --- | --- | --- |
| "oauth-personal" | 個人 Google 帳戶 | 驗證個人 Free、Pro 與 Ultra 方案。 |
| "oauth-business" | Gemini 企業版（Preview） | 使用以下項目驗證企業身分 gcp.project 和 gcp.location . |
| "gemini-api-key" | Gemini API | 使用 Gemini API 金鑰驗證。 |
| "agent-platform" | Agent Platform（預覽版） | 透過 API 金鑰或 ADC 驗證 Gemini Enterprise Agent Platform。 |

### 常見 SDK 方法與設定
[「常用 SDK 方法與設定」章節](#common-sdk-methods-and-configuration)
| 方法 / 指令 | 描述 |
| --- | --- |
| await agent.chat(prompt) | 將使用者提示詞傳送給代理，並傳回該輪回應。 |
| LocalAgentConfig(policies=...) | 設定宣告式工具執行政策（ allow , deny , ask_user ). |
| LocalAgentConfig(system_instructions=...) | 自訂代理角色與系統指示。 |
| export GEMINI_API_KEY="..." | 在環境中設定 Gemini API 憑證。 |

## 其他資源
[「其他資源」章節](#additional-resources)[smart_toy核心功能指南自主子代理、視覺產出物與工具整合。](/docs/features/)[security安全性權限本機安全邊界、沙箱與執行閘道。](/docs/permissions/)[tune設定設定專案、模型與代理行為的設定選項。](/docs/settings/)[psychology模型選擇模型推理投入層級、思考預算與支援的前沿模型。](/docs/models/)[tips_and_updates工作流程最佳實務驗證迴圈、規則檔案與工作階段檢查點。](/docs/cli/best-practices/)[build偵錯CLI 疑難排解路徑解析、金鑰圈驗證與 SSH 轉送。](/docs/cli/troubleshooting/)[terminal參考CLI 參考資料指令、快速鍵與 JSON 結構描述的目錄。](/docs/cli/reference/)[keyboard導覽Vim 編輯器模式終端機使用者介面中的模態導覽與按鍵綁定。](/docs/cli/vim-editor-mode/)[extension擴充功能IDE 擴充功能總覽支援的編輯器、統一驗證，以及跨 IDE 的企業授權。](/docs/ide/extensions/)[codeVS CodeVisual Studio Code從 VS Code Marketplace 安裝並設定本機工作區。](/docs/ide/extensions/vscode/)[integration_instructionsJetBrainsIntelliJ 架構 IDE在 IntelliJ IDEA、PyCharm、WebStorm、GoLand 與 Rider 中設定 Antigravity 代理。](/docs/ide/extensions/jetbrains/)[verified_user企業版企業版治理設定 Gemini Enterprise 登入、IAM 政策與 VPC Service Controls。](/docs/enterprise/)[code_blocks架構SDK 概覽Python 執行期測試框架與非同步工作階段管理員的架構總覽。](/docs/sdk/overview/)[badge代理 API角色與指令系統提示詞設定與專門代理角色。](/docs/sdk/personas/)[handyman可擴充性工具與技能 API註冊自訂 Python 工具、殼層執行器與技能。](/docs/sdk/tools/)[hubMCPModel Context Protocol將外部 MCP 伺服器與資源整合至 SDK 管線。](/docs/sdk/mcp/)[上一個  
總覽](/docs/overview/)[下一步  
驗證](/docs/install/)
