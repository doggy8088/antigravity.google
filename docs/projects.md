# 專案

專案2-0Antigravity 應用程式功能專案 Antigravity App 功能Antigravity 應用程式Antigravity CLI適用於：Antigravity 應用程式Antigravity CLI
# 專案
[「專案」章節](#projects)
專案組織多資料夾工作區組態、隔離的代理 設定，以及跨 Antigravity 介面的對話記錄。

- Antigravity 應用程式
- Antigravity CLI

## Antigravity 應用程式
[「Antigravity App」章節](#sr-tab-1)
### 什麼是專案？
[「什麼是專案？」章節](#what-is-a-project)
A **專案** 是定義代理環境與範圍的資料夾組態。不強迫代理在單一資料夾內運作，專案可使用一個或多個資料夾（例如前端與後端儲存庫），為代理提供程式碼庫所需的所有上下文。所有專案都有各自隔離的代理設定，讓您獨立自訂每個專案的安全性設定。

### 主要差異：工作區與專案
[「主要差異：工作區與專案」章節](#key-differences-workspace-vs-projects)
| 功能 | 原始模型（工作區） | 新模型（專案） |
| --- | --- | --- |
| 組織範圍 | 與單一本機存放庫緊密耦合。 | 專案是您的代理應該使用的所有情境與資料夾的組態。 |
| 目錄邊界 | 代理被嚴格限制在單一資料夾結構內。 | 單一專案可橫跨 多個資料夾 一次。 |
| 設定隔離 | 從本機全域繼承的設定。 | 專案有各自的設定。專案中的代理使用該專案的設定。 |
| 權限 | 廣泛的全域權限。 | 全域權限會被繼承。專案除了全域權限外，還可以有自己的權限。 |
| 自訂項目 | 全域或依工作區管理的技能/MCP。 | 可重複使用的技能、MCP 與掛鉤在全域管理。 |

### 核心專案概念
[「專案核心概念」章節](#core-project-concepts)
#### 資料夾
[「資料夾」章節](#folders)
專案由以下組成： **資料夾**，定義代理可存取的目錄與 儲存庫：

- 本機資料夾 ：未設定 Git 的資料夾。
- 本機 Git 提取 ：Git 儲存庫的簽出資料夾。

#### Worktree 選擇（本機 vs. 新建 worktree）
[「工作樹選擇（本機與新工作樹）」章節](#worktree-selection-local-vs-new-worktree)
在專案中開始新對話時，您可以使用工作樹選取器，選擇代理與資料夾的互動方式：

- 本機模式 ：代理直接在您的作用中本地資料夾或 Git 簽出中工作。最適合在目前工作資料夾中進行快速的互動式編輯。
- 新 worktree 模式 ：為對話建立新的 Git worktree。最適合複雜任務，可保持作用中工作資料夾不變，並防止平行子代理衝突。

#### 範圍化設定與權限
[「範圍設定與權限」章節](#scoped-settings-and-permissions)
設定與權限皆以專案為範圍：

- 設定 ：建立專案時，會以以下項目開始 繼承一般 權限預設，遵循您的全域權限設定，具備專案所有資料夾的讀寫存取。於 macOS 與 Linux， 預設 預設，終端機指令在 無提示執行 終端機沙箱 在沙箱外執行時需要核准；在 Windows 上，代理會請求執行終端機指令的權限。這些設定可以修改，並適用於此專案內的所有代理。
- 權限 ：專案會繼承全域權限，您可以在專案層級擴充，讓代理僅擁有該特定專案任務所需的確切存取權。

#### 使用專案的工作流程
[「使用專案的工作流程」章節](#workflows-using-projects)
您可以設定專案以支援數種常見的開發工作流程：

- 在單一資料夾中工作 ：使用資料夾建立專案，然後設定其設定。
- 在多個資料夾中工作 ：將所有相關資料夾加入單一專案，讓代理在您的程式碼庫中擁有完整上下文。
- 在同一資料夾上執行平行代理 ：選擇 本機模式 啟動代理時，讓你所有的代理都在相同的使用中資料夾工作。
- 隔離並行代理 ：選擇 新 Worktree 模式 啟動代理時，為每個代理工作階段佈建獨立、隔離的 Git worktree，避免代理之間的衝突。
- 混合提取與本機資料夾 ：本地工作直接在現有資料夾中運作。使用 新 Worktree 模式 為所有使用中的 Git checkout 建立新的 Git worktree，讓代理能同時在新 worktree 與現有的非 Git 本機資料夾中運作。

## Antigravity CLI
[「Antigravity CLI」章節](#sr-tab-2)
### 使用專案啟動工作階段
[「使用專案啟動工作階段」章節](#launching-sessions-with-projects)
#### 預設專案執行
[「預設專案執行」章節](#default-project-execution)
在未使用任何專案旗標的情況下啟動 CLI 時，工作階段中的所有對話都會在下列項目中執行 `default-cli-project`:

```
agy
```

#### 在特定專案中開啟工作階段
[「在特定專案中開啟工作階段」章節](#opening-a-session-in-a-specific-project)
若要開啟附加至特定現有專案的工作階段，請傳遞 `--project` 旗標，搭配目標專案 ID：

```
agy --project=<project_id>
```

#### 啟動時建立新專案
[「啟動時建立新專案」章節](#creating-a-new-project-on-startup)
若要建立新專案並在其內初始化 CLI 工作階段，請傳遞 `--new-project` 旗標：

```
agy --new-project
```

#### 恢復現有對話
[「恢復現有對話」章節](#resuming-an-existing-conversation)
若您恢復對話（不論在啟動時使用 `--conversation=<conv_id>` 或於工作階段期間使用 `/resume`），CLI 會自動使用對話關聯的專案。

### 在專案之間移動對話（ /fork )
[「在專案之間移動對話（/fork）」章節](#moving-conversations-between-projects-fork)
在使用中的工作階段互動期間，您可以使用下列項目，將目前的對話複製並在另一個專案中繼續 `/fork` 斜線命令：

```
/fork <project_id>
```

執行時，CLI 會分支您目前的對話，並將新建立的對話與下列項目關聯 `<project_id>`.
[上一個  
審查產出物（CLI）](/docs/cli/artifacts/)[下一步  
提示與互動](/docs/cli/prompting/)
