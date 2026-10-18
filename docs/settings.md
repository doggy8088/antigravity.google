# 設定

設定2-0Antigravity 應用程式功能設定 Antigravity App 功能Antigravity 應用程式Antigravity CLIAntigravity IDE適用於：Antigravity 應用程式Antigravity CLIAntigravity IDE
# 設定
[「設定」章節](#settings)
跨 Antigravity 介面設定偏好設定、執行邊界、指令權限與工具遙測。

- Antigravity 應用程式
- Antigravity CLI
- Antigravity IDE

## Antigravity 應用程式
[「Antigravity App」章節](#sr-tab-1)
### 設定架構
[「設定架構」章節](#settings-architecture)
Antigravity 採用階層式設定架構，讓您可以精細控制開發環境。設定分為全域應用程式偏好與隔離的專案層級邊界，以確保強健的安全性與靈活的工作區設定。

#### 存取設定
[「存取設定」章節](#accessing-settings)
您可以使用以下任一方法開啟「設定」面板：

- 鍵盤快速鍵 ：按下 Cmd + , 於應用程式內的任何作用中 介面。
- 側邊欄導覽 ：按一下 設定 於左側邊欄底部。
- 專案設定 ：按一下特定專案旁的齒輪圖示。

#### 四個設定類別
[「四種設定類別」章節](#the-four-settings-categories)
設定分為四個不同的範圍，以保持設定乾淨且彼此隔離：

##### 全域設定
[「全域設定」章節](#global-settings)
全域設定適用於所有工作區：

- 帳戶設定 ：管理驗證工作階段並切換遙測 （啟用或停用共用互動日誌以改善模型）。
- 全域權限 ：適用於所有 對話的集中式預設工具邊界。
- 外觀 ：自訂視覺主題與面板版面配置。
- 瀏覽器整合 ：設定代理與網頁介面的互動方式。
- 模型用量 ：選擇並設定預設推理模型。
- 自訂項目 ：管理 Model Context Protocol (MCP) 伺服器、自訂 技能與外掛程式。

##### 專案設定
[「專案設定」章節](#project-settings)
專案設定僅適用於特定專案的範圍：

- 資料夾 ：定義與專案關聯的本地資料夾清單。 Antigravity 會自動偵測這些資料夾的 Git 組態，以 處理對話目標：
  - 本機 ：在新對話檢視中選取此項，以直接在 現有資料夾中工作。
  - Worktree ：選取此項以在資料夾中啟動新的 worktree。若 資料夾沒有 Git，則改用現有本地資料夾。
- 代理設定 ：設定專案專屬的代理行為：
  - 權限設定 （macOS 與 Linux）：選擇專案的權限預設— 繼承一般 , 預設 , 要求審查 ，或 Turbo — 控制代理執行殼層命令、存取檔案與使用…的方式 終端機沙箱 （請參閱 [代理權限](/docs/permissions) ).
  - 終端機執行政策 （Windows）：控制代理執行 Shell 指令的方式。
  - 資料夾外檔案存取政策 （Windows）：定義代理存取專案邊界之外檔案的方式（Always Allow、Always Ask 或 Always Deny）。
  - 沙箱模式 （Windows）：在自訂安全性預設中開啟或關閉終端機沙箱容器（請參閱 [終端機沙箱](/docs/sandbox) ).
- 專案層級權限 ：在專案層級設定權限。當 您與代理互動時，會累積可自動加入專案權限的權限要求。
- 自訂項目 ：源自全域與專案專屬 自訂。您可以檢視加入專案之每個資料夾來源的所有技能。

##### 獨立對話
[「獨立對話」章節](#standalone-conversations)
您也可以在專案之外開始對話：

- 行為 ：獨立對話沒有可設定的資料夾， 改為在本地暫存目錄中執行。
- 設定 ：獨立對話可擁有自己的設定（例如 終端機執行、檔案存取政策與權限），類似於 專案，但獨立於任何專案結構運作。

##### 其他
[「其他」章節](#miscellaneous)
存取快速鍵與回饋工具：

- 快速鍵 ：檢視並自訂鍵盤快速鍵組態。
- 意見回饋 ：存取意見回饋表單，直接將報告傳送給團隊。

### 資料收集設定
[「資料收集設定」章節](#data-collection-settings)
The **啟用遙測** 設定位於「設定」面板的…下方 **帳戶** 區段。啟用後，Antigravity 會收集互動內容，用於評估、開發與改進 Antigravity 及支援 Antigravity 的模型。

## Antigravity CLI
[「Antigravity CLI」章節](#sr-tab-2)
設定永久偏好設定、自訂快速鍵、切換終端機顯示緩衝區，並管理執行階段 CLI 參數覆寫。

### 設定偏好設定
[「設定偏好設定」章節](#setting-up-preferences)
Antigravity CLI 將使用者偏好儲存於精簡、可向前相容的 JSON 設定檔中。

#### 設定檔位置
[「設定檔位置」章節](#configuration-file-location)
持久設定以純 JSON 格式儲存：

```
~/.gemini/antigravity-cli/settings.json
```

CLI 利用 **稀疏持久化** 僅將與系統預設值不同的值寫入磁碟。這讓您的設定檔保持乾淨、精簡，並與未來更新完全向前相容。

#### 互動式設定面板
[「互動式設定面板」章節](#the-interactive-settings-panel)
若要直接在使用中的終端機工作階段內編輯設定，而無需開啟原始 JSON 檔案：

1. 類型 /config （或其別名 /settings ）於提示詞面板內並按下 Enter .
2. 全螢幕 設定編輯器覆蓋層 開啟。
3. 使用 在可用選項之間導覽 ↑ / ↓ .
4. 按下 Enter 於突顯的參數以切換其狀態或開啟文字 插入欄位。
5. 按下 Esc 儲存你的修改並關閉編輯器。

### 命令列覆寫
[「命令列覆寫」章節](#command-line-overrides)
您可以使用 CLI 指令旗標，暫時覆寫個別終端機工作階段的持續性偏好設定：

```
agy --sandbox --model="Gemini 3.5 Flash"
```

當覆寫旗標啟用時，互動式 `/config` 選單顯示 警告指示器，伴隨修改後的設定：

```
! Tool Permission: strict (overridden by command flag)
```

在這些工作階段中，您仍可在磁碟上編輯持續性值，但 CLI 會強制執行啟用中的執行階段旗標覆寫，直到您關閉工作階段。

### 視覺呈現模式
[「視覺算繪模式」章節](#visual-rendering-modes)
TUI 會根據您的終端機 能力與連線延遲，以兩種視覺渲染模式之一運作。

#### Alt-screen 模式（ always )
[「備用畫面模式（永遠）」章節](#alt-screen-mode-always)
此模式使用終端機的備用 緩衝區開啟專屬顯示畫面，打造沉浸式的獨立應用程式介面：

- 主要功能 ：整合回捲、滑鼠滾輪捲動支援、 自訂算繪捲軸，以及結束時乾淨的終端機狀態還原。
- 最適合用於 ：進階終端機 模擬器（例如 iTerm2、Ghostty 或 WezTerm）中的標準本地開發工作階段。

#### 內嵌模式（ never )
[「內嵌模式（永不）」章節](#inline-mode-never)
此模式會在終端機的標準 stdout 管線中依序呈現輸出：

- 主要功能 ：將整個工作階段記錄保留在模擬器的 原生回捲緩衝區內，不擷取滑鼠輸入，並與標準指令輸出無縫協作。
- 最適合用於 ：遠端 SSH 終端機、終端機多工器，例如 tmux 或 screen ，以及低頻寬遠端工作階段。

### 設定選項參考
[「設定選項參考」章節](#configuration-options-reference)
互動式設定面板 (`/config`）與 `settings.json` 讓您自訂 CLI 在多個類別中的行為。

#### 安全與權限
[「安全性與權限」章節](#safety-and-permissions)
管理代理與您的系統及程式碼庫的互動方式：

- 工具權限（`toolPermission`) ：控制工具的 授權流程（例如執行終端機指令）：
  - request-review （預設值）：在執行寫入、bash 或網頁工具前徵求您的核准。
  - proceed-in-sandbox ：若終端機指令已 沙箱隔離則自動執行；否則提示審查。
  - strict ：對所有非讀取工具提示，確保最大控制力。
  - always-proceed ：執行所有工具而不提示（風險最高，請 謹慎使用）。
- 產出物審查（`artifactReviewPolicy`) ：控制代理在寫入磁碟前， 何時提示您審查產生的產出物（例如程式碼檔案）：
  - asks-for-review （預設值）：一律提示您檢閱變更。
  - agent-decides ：代理會根據變更的 複雜度決定是否提示。
  - always-proceed ：代理直接寫入變更而不提示 （最大化自主性，但增加未經審查覆寫程式碼的風險）。
- 沙箱模式（`enableTerminalSandbox`) ：啟用時（ on ），將 所有代理發起的終端機指令限制在安全的 OS 容器中。
- 非 Workspace 存取（`allowNonWorkspaceAccess`) ：控制代理是否 可讀寫作用中專案目錄外部的檔案。設為 off 預設開啟以策安全。

#### 顯示與轉譯
[「顯示與算繪」章節](#display-and-rendering)
自訂 TUI 的視覺體驗：

- 轉譯模式（`altScreenMode`) ：控制 TUI 如何使用您的 終端機緩衝區：
  - default ：調適模式。在進階本地終端機上使用 Alt-screen， 透過 SSH 時則降級為行內模式。
  - always ：強制使用 Alt-screen 模式，提供具滑鼠支援與捲軸的沉浸式、 頁面式介面。
  - never （可在 settings.json ）：強制使用行內模式， 依序渲染輸出，並在模擬器的捲動緩衝區中保留歷程記錄。
- 色彩配置（`colorScheme`) ：選取視覺主題。選項包括 terminal （繼承 Shell 色彩）， dark , light , solarized dark/light , tokyo night ，以及色盲友善變體。
- 動畫速度（`runningLightSpeed`) ：調整進度 指示器動畫的速度（ fast , medium , slow ，或 off ).
- 詳細程度（`verbosity`) ：控制詳細程度。 high 顯示完整的代理思考與工具步驟； low 僅顯示最少的進度指示。

#### 編輯器與通知
[「編輯器與通知」章節](#editor-and-notifications)
設定與主機環境的整合：

- 編輯器（`editor`) ：用於檢視產出物或撰寫 提示詞的文字編輯器（使用 Ctrl + G ）。預設為 auto （遵循 $EDITOR ），但可設為 vim , emacs ，或其他。
- 編輯器模式（`editorMode`) ：CLI 提示詞 本身內部使用的編輯模型。預設為 default （純文字編輯）；將其設為 vim 適用於模態 編輯。請參閱 Vim 編輯器模式 。這 獨立於 editor 上方的設定，僅用於選取外部程式。
- 通知（`notifications`) ：啟用時（ on ），在長時間執行的任務完成或需要您注意時，觸發系統 桌面通知與終端機鈴聲。

#### AI 點數與回饋
[「AI 額度與意見回饋」章節](#ai-credits-and-feedback)
管理用量、提示與遙測：

- 使用 AI 點數（`useG1Credits`) : 僅限外部版本。 啟用時（ on ），允許 CLI 在 您的方案標準配額用盡時，使用您的個人 AI 點數進行模型呼叫。
- 啟用遙測（`enableTelemetry`) ：透過傳送 匿名使用統計資料與當機報告，協助 Google 改善工具。
- 顯示提示（`showTips`) ：在代理產生回應時 切換實用提示的顯示。
- 顯示意見回饋問卷（`showFeedbackSurvey`) ：在任務完成後啟用定期簡短 問卷調查，以協助改善體驗。

### 自訂狀態列與終端機標題
[「自訂狀態列與終端機標題」章節](#custom-status-lines-and-terminal-titles)
對於進階 TUI 環境整合，你可以切換使用中的度量，或 部署自訂指令碼以產生動態狀態列並修改終端機 視窗標題：

- [狀態列自訂](/docs/cli/commands/statusline) ：了解如何 管理狀態指示器面板，並建構自訂格式的狀態列 shell 指令碼。
- [終端機標題自訂](/docs/cli/commands/title) ：了解如何 切換視窗標題輸出，並將即時代理狀態傳送至視窗 標頭。

### 按鍵綁定設定
[「按鍵繫結設定」章節](#keybindings-configuration)
您可以將按鍵對應至特定工作區指令，來自訂 TUI 中的幾乎所有快速鍵。

#### 按鍵綁定檔案位置
[「按鍵繫結檔案位置」章節](#keybindings-file-location)
自訂對應表會與您的主要設定設定檔一同儲存：

```
~/.gemini/antigravity-cli/keybindings.json
```

#### 格式與自訂
[「格式與自訂」章節](#format-and-customization)
JSON 結構會將單一 TUI 指令動作對應至快速鍵 序列陣列：

```
{
  "cli.clear_screen": ["ctrl+l"],
  "prompt.insert_newline": ["shift+enter", "ctrl+j"],
  "edit.open_editor": ["ctrl+g"]
}
```

若要完全停用預設快速鍵，請將其動作對應至空陣列 `[]`。 若您的 JSON 結構描述格式錯誤或無效，CLI 會對這些特定動作退回系統 預設值，並載入其餘有效的對應。

#### 正在還原預設值
[「還原預設值」章節](#restoring-defaults)
若要將所有按鍵還原為系統預設值，請刪除快速鍵設定檔：

```
rm ~/.gemini/antigravity-cli/keybindings.json
```

### 後續步驟
[「後續步驟」章節](#next-steps)
設定好環境後，請檢視安全控制與擴充性選項：

- [權限與沙箱](/docs/sandbox) ：管理安全執行 隔離邊界。
- [外掛程式與技能](/docs/plugins) ：建立您自己的自訂技能並 匯入舊版外掛程式。
- [CLI 參考資料](/docs/cli/reference) ：存取快速參考表， 列出所有組態選項、指令與預設按鍵對應。

## Antigravity IDE
[「Antigravity IDE」章節](#sr-tab-3)
設定 Antigravity 代理如何與您的環境互動、執行指令，以及保護您的工作區。

### 指令執行與檔案存取
[「指令執行與檔案存取」章節](#command-execution-and-file-access)
#### 終端機指令自動執行
[「終端機指令自動執行」章節](#terminal-command-auto-execution)
控制代理執行所產生殼層指令的方式：

- 要求審查 ：代理在執行任何終端機指令前一律 提示要求確認（明確加入可設定允許清單的除外）。
- 一律繼續 ：代理會自動執行指令而 不提示（明確加入可設定拒絕清單的除外）。高度自主，高度風險。

#### 代理非工作區檔案存取
[「代理非工作區檔案存取」章節](#agent-non-workspace-file-access)
允許代理檢視與編輯使用中專案資料夾之外的檔案：

- 預設情況下，代理只能存取專案內的資料夾與本機應用程式資料目錄 ~/.gemini/antigravity-ide/ （其中包含產出物、知識項目與設定檔）。
- 強制執行此邊界可保護您的本機敏感資料。請謹慎啟用非工作區存取。

### 嚴格模式
[「嚴格模式」章節](#strict-mode)
嚴格模式為代理提供增強的安全控制，讓您可以限制其對外部資源與敏感操作的存取。啟用嚴格模式時，會強制執行多項安全措施以保護您的環境。

#### 瀏覽器 URL 允許清單與拒絕清單
[「瀏覽器 URL 允許清單與拒絕清單」章節](#browser-url-allowlist-and-denylist)
在嚴格模式中，代理與外部網站互動的能力受瀏覽器允許清單與拒絕清單規範。這適用於：

- 外部 Markdown 圖片 ：代理僅算繪來自 允許 URL 的圖片。
- 讀取 URL 工具 ：Read URL 工具僅對允許的 URL 自動執行。

#### 終端機、瀏覽器與產出物審查政策
[「終端機、瀏覽器與產出物審查政策」章節](#terminal-browser-and-artifact-review-policies)
嚴格模式會對終端機、瀏覽器與產出物互動強制執行下列行為：

- 終端機自動執行 ：設為「Request Review」。代理在執行任何終端機指令前一律提示 要求許可。啟用嚴格模式時會忽略終端機允許清單。
- 瀏覽器 JavaScript 執行 ：設為「Request Review」。代理在瀏覽器中執行 JavaScript 前一律 提示要求許可。
- 產出物審查 ：設為「Request Review」。代理在依產出物中規劃的計畫行動前一律提示 要求確認。

#### 檔案系統存取
[「檔案系統存取」章節](#file-system-access)
嚴格模式會限制代理對檔案系統的存取，確保它只與授權的檔案互動：

- 遵守 .gitignore ：代理會遵守 .gitignore 規則，防止其存取被忽略的檔案。
- 工作區隔離 ：已停用對工作區外部檔案的存取。 代理只能檢視及編輯指定工作區內的檔案。

### 終端機沙箱化
[「終端機沙箱化」章節](#terminal-sandboxing)
沙箱為代理執行的終端機指令提供核心層級隔離。啟用後，指令會在受限環境中執行，檔案系統與網路存取有限， 保護您的系統免於意外 修改。

沙箱目前預設為停用，但未來 版本可能改變。macOS 與 Linux 支援沙箱。在 macOS 上，它運用 Seatbelt （`sandbox-exec`），Apple 的核心層級沙箱機制。在 Linux 上，它使用 `nsjail` 適用於行程隔離。

#### 啟用沙箱
[「啟用沙箱」章節](#enabling-sandboxing)
您可以在 Antigravity 使用者設定中啟用或停用沙箱機制。切換「啟用終端機沙箱」以開啟或關閉沙箱機制。啟用後，您還可以使用「沙箱允許網路」切換按鈕單獨控制網路存取。

#### 限制
[「限制」章節](#restrictions)
啟用沙箱時，代理的終端機指令受下列限制：

- **檔案系統**：指令只能寫入您指定的工作區 目錄與必要的系統位置。這可防止代理意外刪除或修改專案外部的檔案。
- **網路存取**：網路連線可獨立控制。使用 Antigravity 使用者設定中的「Sandbox Network Access」切換開關，在維持檔案系統限制的同時允許或 拒絕網路存取。

以下是一個因網路限制而被封鎖的指令範例：

#### 與嚴格模式互動
[「與嚴格模式互動」章節](#interaction-with-strict-mode)
啟用嚴格模式時，沙箱會自動啟用並拒絕網路存取。這確保在嚴格環境中運作時獲得最大保護。
[上一個  
任務群組](/docs/tools/)[下一步  
代理設定](/docs/agent-settings/)
