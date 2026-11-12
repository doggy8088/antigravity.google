終端機沙箱
2-0
Antigravity 應用程式
功能
終端機沙箱 Antigravity App 功能
Antigravity 應用程式
Antigravity CLI
適用於：
Antigravity 應用程式
Antigravity CLI
# 終端機沙箱

[「終端機沙箱」章節](#terminal-sandbox)

終端機沙箱會將代理的殼層指令隔離在作業系統層級的容器
邊界內，以保護您的工作站與敏感檔案。

- [Antigravity 應用程式](#tab-panel-222)
- [Antigravity CLI](#tab-panel-223)

## Antigravity 應用程式

[「Antigravity App」章節](#sr-tab-1)

### 已更新的權限設定

[標題為「Updated permission settings」的章節](#updated-permission-settings)

#### 總覽

[「總覽」章節](#overview)

Antigravity 包含 **終端機沙箱**，預設啟用，用於隔離代理執行的 shell 指令。沙箱內的指令可以寫入您的專案資料夾、暫存目錄與常見的建置快取，並讀取系統目錄，例如 `/usr` 和 `/etc` 讓你的工具持續運作。敏感檔案例如 `~/.ssh` 和 `.env` 會被封鎖，未明確掛載的任何內容在沙箱內皆不可見，網路存取僅限於您核准的網域。

沙箱建置於原生作業系統原語之上，因此沒有虛擬機器或 Docker 映像需要管理，也沒有啟動延遲：

| 作業系統 | 技術 | 詳細資料 |
| --- | --- | --- |
| **Linux** | 命名空間 | 核心命名空間會隔離檔案系統、隱藏主機程序並切斷網路連線。 |
| **macOS** | `sandbox-exec` | Seatbelt 設定檔 (SBPL) 限制檔案系統存取與通訊端連線。 |

#### 設定

[「設定」章節](#configuration)

您的 **權限預設** 控制是否使用沙箱：

| 預設集 | 沙箱 | 指令 |
| --- | --- | --- |
| **要求審查** | 關閉 | 一律詢問 |
| **預設** *（預設）* | 開啟 | 沙箱內允許；沙箱外詢問 |
| **自動** | 開啟 | 在沙箱內允許；安全、可還原的指令在外部允許 |
| **Turbo** | 關閉 | 允許且不提示，無限制 |

您可以在三個位置變更您的預設：

- **針對所有專案**: 開啟 **設定** > **一般** > **全域權限** > **權限預設集** (**權限** > **這部電腦** 如果您可以使用遠端代理）。
- **針對單一專案**: 覆寫位於下列位置的全域預設： **設定** > **專案**。專案預設為 **繼承全域設定** 建立時，遵循你的全域預設。
- **從訊息框** (`v2.23.0+`）：從權限選取器中選擇預設。選取器會變更您的全域預設，或在專案覆寫時變更專案的預設。若要移除專案覆寫，請選擇 **使用全域設定**.

請參閱 **[代理權限](/docs/permissions)** 查看完整預設行為，包含檔案存取、MCP 工具與網頁讀取。

#### 未經沙箱處理的指令

[「未受沙箱保護的指令」章節](#unsandboxed-commands)

有些指令無法在沙箱內運作——例如需要網路存取或與系統服務通訊的指令。代理可要求在沙箱外執行這類指令，它們會在您的主機上以完整權限執行：

- **預設**: 在沙箱外執行的要求一律會暫停等待您的核准，除非該指令已包含在 `command` 允許或拒絕規則。
- **自動** (`v2.23.0+` 在 macOS 與 Linux 上， `v2.26.0+` 在 Windows 上）：Antigravity 會自動檢查需要在沙箱外執行的命令，讓安全、可還原的命令無須提示即可執行，而具風險或不可還原的命令仍會暫停並等待您的核准（除非涵蓋於 `command` 允許或拒絕規則）。

若要讓特定指令無需提示即可執行（無論在沙箱內外），請加入 `command` 允許規則：

```
command(git push)
command(regex:docker compose .*)
```

#### 權限整合

[「權限整合」章節](#permissions-integration)

沙箱會從您的…衍生其存取邊界 **[權限](/docs/permissions)** 設定：

- **檔案系統**：您的專案資料夾以讀寫方式掛載。在以下項目下允許的路徑 `read_file` 以唯讀方式掛載，以下允許的路徑 `write_file` 以讀寫方式掛載於預設系統掛載之上。其餘一律無法存取。
- **網路**：沙箱隔離的指令預設在無網路存取下執行。在以下項目下允許的網域 `read_url` 會加入沙箱的輸出允許清單。

### 先前的權限設定

[標題為「Previous permission settings」的章節](#previous-permission-settings)

#### 總覽

[「總覽」章節](#overview-1)

Antigravity 包含 **終端機沙箱** 隔離代理執行的殼層命令。沙箱命令可寫入你的專案資料夾、暫存目錄與常用建置快取，並可讀取系統目錄，讓你的工具持續運作。敏感檔案例如 `.env` 會遭到封鎖，且網路存取僅限於您已核准的網域。在 macOS 和 Linux 上，任何未明確掛載的內容在沙箱內都不可見。在 Windows 上，沙箱需要 Windows 11 24H2 或更新版本，並需安裝 2026 年 8 月或之後的更新，且使用者設定檔以外的資料夾在其中可讀取但不可寫入。

#### 設定

[「設定」章節](#configuration-1)

您可以全域或按專案設定沙箱。

##### 全域設定

[「全域設定」章節](#global-settings)

於 **設定** > **一般**，於…之下 **代理設定**，設定下列選項：

- **啟用沙箱模式（預覽）**：在沙箱內執行代理終端機指令。
- **終端機指令自動執行**：設為 **在沙箱中繼續** 讓沙箱命令無需核准即可執行；需要在沙箱外執行的命令仍會先詢問。其他選項包括 **需要審查** 和 **一律繼續**.

##### 專案設定

[「專案設定」章節](#project-settings)

在下方選取專案 **設定** > **專案** 覆寫該專案的這些設定。每個設定會獲得 **繼承全域設定** 選項，以及 **啟用沙箱模式** 變為下拉式選單： **繼承全域設定**, **已啟用**，或 **已停用**.

#### 安全預設集

[「安全預設集」章節](#security-presets)

The **安全預設集** 同一設定區段中的下拉式選單綑綁了終端機與檔案存取政策：

| 預設集 | 終端機指令自動執行 | 資料夾外檔案存取 |
| --- | --- | --- |
| **預設** | 需要審查 | 一律詢問 |
| **完整機器** | 需要審查 | 允許 |
| **Turbo 模式** | 一律繼續 | 允許 |

沒有預設值會開啟沙箱。啟用 **啟用沙箱模式** 將預設切換為 **自訂**，您自行設定每個選項—常見組合是沙箱搭配 **在沙箱中繼續**.

#### 未經沙箱處理的指令

[「未受沙箱保護的指令」章節](#unsandboxed-commands-1)

當指令需要在沙箱外執行（因為它符合 `unsandboxed(...)` 規則、代理要求，或沙箱已停用——命令將以完整權限在你的主機上執行。視你的執行政策而定，代理會先暫停並請求你的核准。

#### 權限整合

[「權限整合」章節](#permissions-integration-1)

沙箱會從您的…衍生其存取邊界 **[權限](/docs/permissions)** 設定：

- **檔案系統**：您的專案資料夾以讀寫方式掛載。在以下項目下允許的路徑 `read_file` 以唯讀方式掛載，以下允許的路徑 `write_file` 會以可讀寫方式掛載，疊加在預設系統掛載之上。其餘一切皆無法存取，但在 Windows 上例外：使用者設定檔以外的資料夾仍可讀取。
- **網路**：啟用網路存取時，在以下項目下允許的網域 `read_url` 會加入沙箱的輸出允許清單。
- **逃生艙（`unsandboxed`)**：若要讓特定指令在沙箱外執行而不完全停用沙箱，請新增 `unsandboxed` 允許規則： `unsandboxed(git push) unsandboxed(docker compose .*)`

## Antigravity CLI

[「Antigravity CLI」章節](#sr-tab-2)

### 運作方式

[「運作方式」章節](#how-it-works)

啟用終端機沙箱後，Antigravity CLI 會在作業系統層級的隔離邊界內執行指令。指令可以寫入您的工作區、暫存目錄與常見的建置快取，並讀取系統目錄（例如 `/usr` 和 `/etc` 在 macOS 與 Linux 上），讓您的工具持續運作。敏感檔案，例如 `~/.ssh` 和 `.env` 會遭到封鎖，且網路存取僅限於您已核准的網域。在 macOS 和 Linux 上，任何未明確掛載的內容在沙箱內都不可見。在 Windows 上，使用者設定檔以外的資料夾在沙箱內可讀取但不可寫入，而您使用者設定檔中的其他檔案以及其他使用者的設定檔則保持隱藏。

沙箱建置於原生作業系統原語之上，因此沒有虛擬機器或 Docker 映像需要管理，也沒有啟動延遲：

| 作業系統 | 技術 | 詳細資料 |
| --- | --- | --- |
| **Linux** | 命名空間 | 核心命名空間會隔離檔案系統、隱藏主機程序並切斷網路連線。 |
| **macOS** | `sandbox-exec` | Seatbelt 設定檔 (SBPL) 限制檔案系統存取與通訊端連線。 |
| **Windows** | 程序安全環境 | 指令會在程序安全環境內的 AppContainer 中執行，該環境會限制檔案系統和網路存取。需要 Windows 11 24H2 或更新版本，且需安裝 2026 年 8 月或更新的更新。 |

### CLI 設定

[「CLI 設定」章節](#cli-configuration)

`auto` 模式會自動啟用終端機沙箱。在其他模式中，包括 `default` 模式，請在以下位置啟用沙箱 `~/.gemini/antigravity-cli/settings.json` 或使用以下方式以互動方式執行 `/config`:

```
{
    "enableTerminalSandbox": true,
    "toolPermission": "proceed-in-sandbox"
}
```

該設定支援下列設定：

- **`agentMode`** （字串，預設值： `""`, 也就是 `default` 模式）：設定 `"agentMode": "auto"` 會自動啟用終端機沙箱，讓命令預設在沙箱內執行，並自動評估需要在沙箱外執行的命令，使安全、可還原的命令無須提示即可執行，而具風險或不可還原的命令則會暫停以等待核准。請參閱 [選擇執行模式](/docs/cli/modes).
- **`enableTerminalSandbox`** （布林值，預設值： `false`）：在沙箱內執行代理指令。 `auto` 模式會自動將其開啟。
- **`toolPermission`** （字串，預設值： `"request-review"`）：外部 `auto` 模式，將此設定為 `"proceed-in-sandbox"` 讓沙箱內的指令自動執行，而需要在沙箱外執行的指令仍會提示審閱。請參閱 [設定](/docs/settings) 適用於其他模式。

#### CLI 旗標

[「CLI 旗標」章節](#cli-flags)

您也可以在啟動 CLI 時控制沙箱機制：

```
# Force the sandbox on for this session
agy --sandbox

# Launch in auto mode (enables the sandbox and automatically evaluates commands that need to run outside it)
agy --mode=auto
```

CLI 支援下列沙箱與執行旗標：

- **`--sandbox`**：為工作階段開啟沙箱，覆寫 `settings.json`.
- **`--mode=auto`**: 預設在沙箱內執行指令，並自動檢查需要在沙箱外執行的指令，讓安全且可還原的指令無需提示即可繼續。

#### 若沙箱無法使用

[標題為「If the sandbox isn’t available」的章節](#if-the-sandbox-isnt-available)

自以下時間起 `v1.4.4`, 若您的電腦無法使用沙箱，則適用以下說明（例如 Windows 10、較舊的 Windows 11 版本，或封鎖非特權使用者命名空間的 Linux 主機與部分容器）:

- `enableTerminalSandbox` 和 `--sandbox` 不會生效。
- `proceed-in-sandbox` 行為類似 `request-review`.
- `auto` 模式未提供。
- `/config` 隱藏 **沙箱模式**, `proceed-in-sandbox`，與 `auto`.

您已儲存的設定不會變更，因此會在沙箱可用時生效。

### CLI 權限整合

[「CLI 權限整合」章節](#cli-permissions-integration)

沙箱會從您的…衍生其存取邊界 **[權限](/docs/permissions)** 設定：

- **檔案系統**：在以下項目下允許的工作區資料夾與路徑 `write_file` 以讀寫方式掛載。以下允許的路徑 `read_file` 會以唯讀方式掛載，疊加在預設系統掛載之上。被拒絕的路徑會遭到封鎖，其餘一切皆無法存取，但在 Windows 上例外：使用者設定檔以外的資料夾仍可讀取。
- **網路**：沙箱隔離的指令預設在無網路存取下執行。在以下項目下允許的網域 `read_url` 會加入沙箱的輸出允許清單。
- **沙箱之外的指令**：A `command` 允許規則可讓符合的指令不經提示即執行，無論在沙箱內或沙箱外。這對無法在隔離邊界內運作的工具很有用，例如 Docker 或與系統服務溝通的指令。商業版與企業版帳戶則使用 `unsandboxed` 允許規則來代替。

代理也可以自行請求在沙箱外執行指令，例如重試因沙箱限制而失敗的指令。在 Windows 上，這包括某些套件安裝，以及連線至沙箱外執行之伺服器的指令。Antigravity CLI 如何處理這些請求，取決於您的模式：

- **`auto` 模式** (`v1.3.5+` 在 macOS 與 Linux 上， `v1.4.4+` 在 Windows 上）：Antigravity CLI 會自動評估需要在沙箱外執行的指令，讓安全、可逆的指令無需提示即可執行，而不可逆的指令仍會提示確認。
- **下列以外的模式 `auto`**: 這些要求一律需要您的核准，除非指令符合 `command` 允許規則（一個 `unsandboxed` 允許規則，適用於商業版與企業版帳戶）。

#### 範例

[「範例」章節](#example)

下列範例在…中設定沙箱允許與拒絕規則 `settings.json`:

```
{
    "permissions": {
        "allow": [
            "command(npm test)",
            "command(git diff)",
            "command(git push)",
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

- `npm test` 和 `git diff` 在沙箱內執行。
- `git push` 執行時不會提示，即使需要在沙箱外執行亦然，透過 `command(git push)`.
- `rm -rf /` 和 `sudo` 一律被封鎖。

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

對於商務與企業版帳號，當代理要求繞過沙箱時，提示會明確指出，讓您能判斷風險：

```
🔓 Allow sandbox bypass for command execution?
⚠️ Confirm the command is safe to run outside of the sandbox with full network and disk access.
```

在此核准「一律允許」會記錄 `unsandboxed(...)` 規則，而非普通的 `command(...)` 規則。

對於其他帳號，這些要求會使用標準指令提示，且「一律允許」會記錄 `command(...)` 規則。

## 相關資源

[「相關資源」章節](#related-resources)

探索相關文件與指南：

- **[代理權限](/docs/permissions)**：設定允許、拒絕與詢問規則。
- **[代理設定](/docs/agent-settings)**：指令執行政策與檔案存取控制。
- **[設定](/docs/settings)**：全域應用程式與 CLI 偏好設定。
- **[專案](/docs/projects)**：多資料夾組態與每專案設定。

[上一個
市集](/docs/marketplace/)

[下一步
審查變更](/docs/review-changes/)

您的下載已開始

## 您如何得知我們？

請選一個。這有助於我們接觸更多像您一樣的人。

感謝您讓我們知道！
