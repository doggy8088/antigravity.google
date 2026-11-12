代理設定
2-0
Antigravity 應用程式
功能
代理設定 Antigravity 應用程式功能
Antigravity 應用程式
Antigravity CLI
適用於：
Antigravity 應用程式
Antigravity CLI
# 代理設定

[「代理設定」章節](#agent-settings)

設定 Antigravity 代理如何在桌面應用程式與 CLI 中執行終端機指令、修改檔案並使用終端機沙箱。

- [Antigravity 應用程式](#tab-panel-130)
- [Antigravity CLI](#tab-panel-131)

## Antigravity 應用程式

[「Antigravity App」章節](#sr-tab-1)

### 已更新的權限設定

[標題為「Updated permission settings」的章節](#updated-permission-settings)

#### 權限設定

[「權限設定」章節](#permission-settings)

此設定控制代理動作——終端機指令、檔案存取、MCP 工具與網頁讀取——的核准方式，使用 **權限預設**:

- **要求審查** (*「每個指令都需要核准。」*）：沙箱關閉，且每個終端機指令都需要核准。代理可以讀寫工作區，其他任何操作都需要核准。
- **預設** (*「敏感操作前先詢問。」*；預設）：指令會在 [終端機沙箱](/docs/sandbox)；在沙箱外執行需要核准。代理可以讀寫工作區與暫存目錄，其他操作皆需要核准。
- **自動** (*「自動決定是否執行指令。」*）：指令在其中不經提示執行 [終端機沙箱](/docs/sandbox)，且代理可以不經詢問讀寫工作區與暫存目錄。當指令需要在沙箱外執行時，Antigravity 會自動評估它，讓安全且可還原的指令能不經提示直接進行，而具風險或不可逆的動作仍會暫停等待您的核准。
- **Turbo** (*「不受限制地執行所有指令。」*）：所有指令在不提示的情況下執行，沒有隔離或限制，且代理對您的檔案系統擁有完整的讀寫存取權。

您設定的允許、拒絕與詢問權限規則，會疊加在預設值之上並一律優先。如需深入了解，請參閱 **[代理權限](/docs/permissions)**.

#### 變更你的權限預設值

[標題為「Change your permission preset」的章節](#change-your-permission-preset)

您可以在三個位置變更預設：

- **針對所有專案**: 開啟 **設定** > **一般** > **全域權限** > **權限預設集** (**權限** > **這部電腦** 如果您可以使用遠端代理）。
- **針對單一專案**: 覆寫位於下列位置的全域預設： **設定** > **專案**。專案預設為 **繼承全域設定**，遵循您的全域預設。
- **從訊息框** (`v2.23.0+`）：從權限選取器中選擇預設。選取器會變更您的全域預設，或在專案覆寫時變更專案的預設。若要移除專案覆寫，請選擇 **使用全域設定**.

如需「設定」選擇器與訊息框選擇器的螢幕截圖，請參閱 **[變更你的權限預設值](/docs/permissions#change-your-permission-preset)**.

### 先前的權限設定

[標題為「Previous permission settings」的章節](#previous-permission-settings)

#### 終端機指令自動執行

[「終端機指令自動執行」章節](#terminal-command-auto-execution)

此設定控制代理執行生成的殼層指令的方式：

- **需要審查**：代理從不在未提示的情況下執行終端機指令（明確加入可設定 Allow 清單的除外）。
- **在沙箱中繼續**：指令在以下項目內執行時不經提示 [終端機沙箱](/docs/sandbox)；仍需在沙箱外執行的指令仍須經過審查。
- **一律繼續**：代理會執行指令而不提示（明確加入可設定 Deny 清單的除外）。

#### 代理非工作區檔案存取

[「代理非工作區檔案存取」章節](#agent-non-workspace-file-access)

此設定允許代理檢視與編輯使用中專案資料夾以外的檔案：

- 預設情況下，代理只能存取專案內的資料夾與應用程式的本機應用程式資料目錄 `~/.gemini/antigravity/` （其中包含產出物、知識項目等）。
- 強制執行此邊界可保護您的本機敏感資料。請謹慎啟用非工作區存取。

#### 終端機沙箱模式

[「終端機沙箱模式」章節](#terminal-sandbox-mode)

此設定會將代理的終端機指令限制在隔離的沙箱中：

- 啟用時，殼層指令會在沙箱內執行，無法存取敏感的系統路徑或未授權的網路。
- 您可以在應用程式偏好設定中全域設定此選項，或按專案覆寫。
- 若要深入了解，請參閱 **[終端機沙箱](/docs/sandbox)** 指南。

## Antigravity CLI

[「Antigravity CLI」章節](#sr-tab-2)

### Agent 執行與權限設定

[標題為「Agent execution and permission settings」的章節](#agent-execution-and-permission-settings)

Antigravity CLI 讓您透過下列方式，設定代理如何編輯檔案、執行 shell 指令，以及強制執行工作區邊界： `/config` (`/settings`), `~/.gemini/antigravity-cli/settings.json`, 或命令列旗標:

- **代理模式（`agentMode` / `--mode`)**: 控制工作階段執行模式（在工作階段期間以 Shift + Tab):  `default` （預設；選取 `default` 於 `/config`，或保留 `agentMode` 未設定或 `""` 於 `settings.json`）：在修改或建立檔案前提示進行互動式差異 審查，並遵循 `toolPermission` 適用於命令。 `auto`：自動核准工作區檔案編輯，在 [終端機沙箱](/docs/sandbox) （預設），並會自動評估需要在沙箱外執行的指令，讓安全、可逆的指令不經提示即執行，而有風險或不可逆的指令則暫停等待核准。啟用時，右下角狀態列會顯示 `auto` 且提示詞輸入框會顯示 `Auto mode: edits & safe commands auto-approved (shift+tab to cycle)`. `accept-edits`：自動核准工作區檔案編輯和建立，同時繼續遵循 `toolPermission` 適用於命令。 `plan`: 先分析程式碼庫並擬定計畫，然後才進行編輯.
- **工具權限（`toolPermission`)**：控制沙箱外工具的基準授權政策 `auto` 模式（以及 `strict` 和 `always-proceed` 覆寫）：  `request-review` （預設 `toolPermission` 值）：在執行寫入、Shell 或網頁工具之前提示核准。 `proceed-in-sandbox`: 自動執行沙箱化的終端機指令，當指令需要在沙箱外執行時會提示. `strict`: 在所有非讀取類工具呼叫前提示（覆寫 `auto` 模式）。 `always-proceed`: 執行所有工具且不提示（覆寫 `auto` 模式；也可透過以下方式啟用： `--dangerously-skip-permissions`).
- **沙箱模式（`enableTerminalSandbox` / `--sandbox`)**：將代理 Shell 指令限制在 OS 層級的容器邊界內（在 `auto` 模式； `false` 在其他模式中則為預設值）。
- **非 Workspace 存取（`allowNonWorkspaceAccess`)**: 控制代理是否能讀取或寫入您目前工作區目錄之外的檔案 (`false` 預設啟用）。

### 設定範例

[標題為「Example configuration」的章節](#example-configuration)

在下列位置設定你偏好的代理執行設定 `~/.gemini/antigravity-cli/settings.json` （例如，自動核准工作區編輯，同時在執行 Shell 指令前先提示）：

```
{
    "agentMode": "accept-edits"
}
```

若要深入了解，請參閱 **[選擇執行模式](/docs/cli/modes)**, **[設定](/docs/settings)**, **[代理權限](/docs/permissions)**，與 **[終端機沙箱](/docs/sandbox)**.

[上一個
總覽](/docs/settings/)

[下一步
產出物審查](/docs/artifact-review/)

您的下載已開始

## 您如何得知我們？

請選一個。這有助於我們接觸更多像您一樣的人。

感謝您讓我們知道！
