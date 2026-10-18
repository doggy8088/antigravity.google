# 終端機沙箱

終端機沙箱2-0Antigravity 應用程式功能終端機沙箱 Antigravity App 功能Antigravity 應用程式Antigravity CLI適用於：Antigravity 應用程式Antigravity CLI
# 終端機沙箱
[「終端機沙箱」章節](#terminal-sandbox)
終端機沙箱會將代理的殼層指令隔離在作業系統層級的容器 邊界內，以保護您的工作站與敏感檔案。

- Antigravity 應用程式
- Antigravity CLI

## Antigravity 應用程式
[「Antigravity App」章節](#sr-tab-1)
### macOS 與 Linux
[「macOS 與 Linux」章節](#macos-and-linux)
#### 總覽
[「總覽」章節](#overview)
Antigravity 包含 **終端機沙箱** 隔離代理執行的殼層命令。沙箱命令可寫入你的專案資料夾、暫存目錄與常用建置快取，並可讀取例如…的系統目錄 `/usr` 和 `/etc` 讓你的工具持續運作。敏感檔案例如 `~/.ssh` 和 `.env` 會被封鎖，未明確掛載的任何內容在沙箱內皆不可見，網路存取僅限於您核准的網域。

沙箱建置於原生作業系統原語之上，因此沒有虛擬機器或 Docker 映像需要管理，也沒有啟動延遲：

| 作業系統 | 技術 | 詳細資料 |
| --- | --- | --- |
| Linux | 命名空間 | 核心命名空間會隔離檔案系統、隱藏主機程序並切斷網路連線。 |
| macOS | sandbox-exec | Seatbelt 設定檔 (SBPL) 限制檔案系統存取與通訊端連線。 |

#### 設定
[「設定」章節](#configuration)
您的 **權限預設** 控制是否使用沙箱。請在以下位置設定您的預設值 **設定** > **一般** > **權限設定**:

| 預設集 | 沙箱 | 指令 |
| --- | --- | --- |
| 預設 | 開啟 | 沙箱內允許；沙箱外詢問 |
| 要求審查 | 關閉 | 一律詢問 |
| Turbo | 關閉 | 允許且不提示，無限制 |

您可以在以下位置覆寫個別專案的全域預設值 **設定** > **專案**。專案預設為 **繼承一般** 建立時，遵循你的全域預設。

請參閱 **代理權限** 查看完整預設行為，包含檔案存取、MCP 工具與網頁讀取。

#### 未經沙箱處理的指令
[「未受沙箱保護的指令」章節](#unsandboxed-commands)
部分指令無法在沙箱內運作——例如需要網路存取或與系統服務通訊的指令。代理可以請求在沙箱外執行這類指令，屆時指令會以完整權限在您的主機上執行。這些請求一律會暫停並等待您的核准，除非該指令已涵蓋於 `command` 允許或拒絕規則。

若要讓特定指令無需提示即可執行（無論在沙箱內外），請加入 `command` 允許規則：

```
command(git push)
command(regex:docker compose .*)
```

#### 權限整合
[「權限整合」章節](#permissions-integration)
沙箱會從您的…衍生其存取邊界 **權限** 設定：

- 檔案系統 ：您的專案資料夾以讀寫方式掛載。在以下項目下允許的路徑 read_file 以唯讀方式掛載，以下允許的路徑 write_file 以讀寫方式掛載於預設系統掛載之上。其餘一律無法存取。
- 網路 ：沙箱隔離的指令預設在無網路存取下執行。在以下項目下允許的網域 read_url 會加入沙箱的輸出允許清單。

### Windows
[「Windows」章節](#windows)
#### 總覽
[「總覽」章節](#overview-1)
Antigravity 包含 **終端機沙箱** 隔離代理執行的殼層命令。沙箱命令可寫入你的專案資料夾、暫存目錄與常用建置快取，並可讀取系統目錄，讓你的工具持續運作。敏感檔案例如 `.env` 會被封鎖，未明確掛載的任何內容在沙箱內皆不可見，網路存取僅限於您核准的網域。

#### 設定
[「設定」章節](#configuration-1)
您可以全域或按專案設定沙箱。

##### 全域設定
[「全域設定」章節](#global-settings)
於 **設定** > **一般**，於…之下 **代理設定**，設定下列選項：

- 啟用沙箱模式（預覽） ：在沙箱內執行代理終端機指令。
- 終端機指令自動執行 ：設為 在沙箱中繼續 讓沙箱命令無需核准即可執行；需要在沙箱外執行的命令仍會先詢問。其他選項包括 需要審查 和 一律繼續 .

##### 專案設定
[「專案設定」章節](#project-settings)
在下方選取專案 **設定** > **專案** 覆寫該專案的這些設定。每個設定會獲得 **繼承一般** 選項，以及 **啟用沙箱模式** 變為下拉式選單： **繼承一般**, **已啟用**，或 **已停用**.

#### 安全預設集
[「安全預設集」章節](#security-presets)
The **安全預設集** 同一設定區段中的下拉式選單綑綁了終端機與檔案存取政策：

| 預設集 | 終端機指令自動執行 | 資料夾外檔案存取 |
| --- | --- | --- |
| 預設 | 需要審查 | 一律詢問 |
| 完整機器 | 需要審查 | 允許 |
| Turbo 模式 | 一律繼續 | 允許 |

沒有預設值會開啟沙箱。啟用 **啟用沙箱模式** 將預設切換為 **自訂**，您自行設定每個選項—常見組合是沙箱搭配 **在沙箱中繼續**.

#### 未經沙箱處理的指令
[「未受沙箱保護的指令」章節](#unsandboxed-commands-1)
當指令需要在沙箱外執行（因為它符合 `unsandboxed(...)` 規則、代理要求，或沙箱已停用——命令將以完整權限在你的主機上執行。視你的執行政策而定，代理會先暫停並請求你的核准。

#### 權限整合
[「權限整合」章節](#permissions-integration-1)
沙箱會從您的…衍生其存取邊界 **權限** 設定：

- 檔案系統 ：您的專案資料夾以讀寫方式掛載。在以下項目下允許的路徑 read_file 以唯讀方式掛載，以下允許的路徑 write_file 以讀寫方式掛載於預設系統掛載之上。其餘一律無法存取。
- 網路 ：啟用網路存取時，在以下項目下允許的網域 read_url 會加入沙箱的輸出允許清單。
- 逃生艙（`unsandboxed`) ：若要讓特定指令在沙箱外執行而不完全停用沙箱，請新增 unsandboxed 允許規則： `unsandboxed(git push)unsandboxed(docker compose .*)`

## Antigravity CLI
[「Antigravity CLI」章節](#sr-tab-2)
### 運作方式
[「運作方式」章節](#how-it-works)
啟用終端機沙箱後，Antigravity CLI 會在作業系統層級的隔離邊界內執行指令。指令可以寫入您的工作區、暫存目錄與常見的建置快取，並讀取系統目錄，例如 `/usr` 和 `/etc` 讓你的工具持續運作。敏感檔案例如 `~/.ssh` 和 `.env` 會被封鎖，未明確掛載的任何內容在沙箱內皆不可見，網路存取僅限於您核准的網域。

沙箱建置於原生作業系統原語之上，因此沒有虛擬機器或 Docker 映像需要管理，也沒有啟動延遲：

| 作業系統 | 技術 | 詳細資料 |
| --- | --- | --- |
| Linux | 命名空間 | 核心命名空間會隔離檔案系統、隱藏主機程序並切斷網路連線。 |
| macOS | sandbox-exec | Seatbelt 設定檔 (SBPL) 限制檔案系統存取與通訊端連線。 |

### CLI 設定
[「CLI 設定」章節](#cli-configuration)
在 啟用沙箱 `~/.gemini/antigravity-cli/settings.json`，或使用…以互動方式 `/config`:

```
{
    "enableTerminalSandbox": true,
    "toolPermission": "proceed-in-sandbox"
}
```

該設定支援下列設定：

- `enableTerminalSandbox` （布林值，預設值： false ）：在沙箱內執行代理指令。
- `toolPermission` （字串，預設值： "request-review" ）：將此設為 "proceed-in-sandbox" 讓沙箱內的指令自動執行，而需要在沙箱外執行的指令仍會提示審閱。請參閱 設定 適用於其他模式。

#### CLI 旗標
[「CLI 旗標」章節](#cli-flags)
您也可以在啟動 CLI 時控制沙箱機制：

```
# Force the sandbox on for this session
antigravity --sandbox
```

CLI 支援下列沙箱旗標：

- `--sandbox` ：為工作階段開啟沙箱，覆寫 settings.json .

### CLI 權限整合
[「CLI 權限整合」章節](#cli-permissions-integration)
沙箱會從您的…衍生其存取邊界 **權限** 設定：

- 檔案系統 ：在以下項目下允許的工作區資料夾與路徑 write_file 以讀寫方式掛載。以下允許的路徑 read_file 以唯讀方式掛載於預設系統掛載之上。拒絕的路徑會被封鎖，其餘一律無法存取。
- 網路 ：沙箱隔離的指令預設在無網路存取下執行。在以下項目下允許的網域 read_url 會加入沙箱的輸出允許清單。
- 逃生艙（`unsandboxed`) ：符合以下項目的指令 unsandboxed 允許規則在沙箱外執行且不提示。這適用於無法在隔離邊界內運作的工具，例如 Docker 或與系統服務通訊的指令。

代理也可以自行請求在沙箱外執行指令——例如重試因沙箱限制而失敗的指令。除非該指令符合…，否則這些請求一律需要您的核准 `unsandboxed` 允許規則。

#### 範例
[「範例」章節](#example)
下列範例在…中設定沙箱允許與拒絕規則 `settings.json`:

```
{
    "permissions": {
        "allow": [
            "command(npm test)",
            "command(git diff)",
            "unsandboxed(git push)",
            "read_file(/var/log/app)",
            "write_file(src/)"
        ],
        "deny": [
            "command(rm -rf /)",
            "command(sudo *)",
            "write_file(/home/user/.ssh)"
        ]
    }
}
```

使用此設定：

- npm test 和 git diff 在沙箱內執行。
- git push 使用…在沙箱外執行 unsandboxed(git push) .
- rm -rf / 和 sudo 一律被封鎖。

### 互動式提示
[「互動式提示」章節](#interactive-prompts)
當指令需要審查時，您可以單次核准，或將核准轉為常設規則：

```
Do you want to proceed?
1. Yes
2. Yes, and always allow in this conversation for commands that start with 'npm test'
3. Yes, and always allow for commands that start with 'npm test' (Persist to settings.json)
4. No
```

當代理要求繞過沙箱時，提示會明確指出，讓您可以判斷風險：

```
🔓 Allow sandbox bypass for command execution?
⚠️ Confirm the command is safe to run outside of the sandbox with full network and disk access.
```

在此核准「一律允許」會記錄 `unsandboxed(...)` 規則，而非普通的 `command(...)` 規則。

## 相關資源
[「相關資源」章節](#related-resources)
探索相關文件與指南：

- [代理權限](/docs/permissions) ：設定允許、拒絕與詢問規則。
- [代理設定](/docs/agent-settings) ：指令執行政策與檔案存取控制。
- [設定](/docs/settings) ：全域應用程式與 CLI 偏好設定。
- [專案](/docs/projects) ：多資料夾組態與每專案設定。
[上一個  
外掛程式](/docs/plugins/)[下一步  
審查變更](/docs/ide/review-changes-editor/)
