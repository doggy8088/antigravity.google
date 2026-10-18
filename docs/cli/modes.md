# 選擇執行模式

選擇執行模式 - Antigravity CLIcliAntigravity CLI功能選擇執行模式 - Antigravity CLI Antigravity CLI 功能Antigravity CLI適用於：Antigravity CLI
# 選擇執行模式
[「選擇執行模式」章節](#choose-an-execution-mode)
控制 Antigravity CLI 在工作階段中修改檔案或執行指令前是否暫停詢問。

## 開始之前
[「開始之前」章節](#before-you-begin)
請確認您符合以下先決條件：

- 安裝 Antigravity CLI .
- 擁有可編輯原始碼的作用中專案儲存庫。

## 可用模式
[「可用模式」章節](#available-modes)
每種執行模式在對話自主性與開發人員監督之間做出不同的取捨。下表顯示 Antigravity CLI 在每種模式下如何處理檔案作業與規劃：

| 模式 | 行為 | 適用於 |
| --- | --- | --- |
| default | 在修改或建立檔案之前，暫停以進行互動式差異審查。 | 標準開發、審查敏感程式碼變更，以及謹慎的重構。 |
| accept-edits | 自動核准檔案編輯與建立（ mkdir , touch ，檔案寫入）。 | 快速原型製作、迭代受信任的程式碼，並減少提示中斷。 |
| plan | 在以下項目前方加上 /plan 指示前綴，用來在撰寫程式碼前分析並概述步驟。 | 探索不熟悉的架構或設計複雜的多步驟功能。 |

> 備註： 使用下列項目設定的工具權限規則 /permissions 或 --dangerously-skip-permissions 繼續管控殼層指令（ run_command ）橫跨所有執行模式。

## 在工作階段中循環切換執行模式
[「在工作階段中循環切換執行模式」章節](#cycle-execution-modes-during-a-session)
您可以在工作階段中切換執行模式，無需中斷進行中的任務或重新啟動終端機：

1. 按下 Shift+Tab 於提示詞方塊內部循環瀏覽作用中的序列： default > accept-edits > plan > default .
2. 觀察提示詞輸入下方狀態列指示器，確認您的使用中模式（ [accept-edits] 或 [plan] ).

> 提示： 當 Antigravity CLI 在下列項目中暫停等待檔案編輯確認時 default 模式，您可按下 Shift+Tab 立即切換至 accept-edits 模式並核准所有待處理的檔案修改。

## 在預設模式中審查修改
[「在預設模式中審查修改」章節](#review-modifications-in-default-mode)
於 `default` 模式 (`request-review`），Antigravity CLI 會在將任何檔案寫入套用至磁碟前暫停，並渲染行內、具語法醒目提示的差異預覽。

```
# Launch in default interactive review mode
agy
```

當系統提示有待處理的檔案修改時，您可以採取下列任一動作：

- 按下 y 接受變更並將檔案儲存至磁碟。
- 按下 n 拒絕這些編輯並保持現有檔案不變。
- 按下 f ( KeyViewDiff ）以開啟全螢幕、可捲動的差異檢視，包含三行內容行與區塊分隔符。
- 按下 Ctrl+G 在你的…內開啟檔案 $EDITOR 供手動調整使用。
- 在提示詞方塊中輸入指示並按下 Enter 拒絕該編輯並告訴代理應如何不同處理。

### 新檔案建立預覽
[「新檔案建立預覽」章節](#new-file-creation-previews)
當 Antigravity CLI 建立全新檔案時，確認面板會顯示僅含新增內容的差異預覽，並附有專用的 `"Create file"` 標頭與明確的允許/拒絕提示：

```
Create file: src/utils/formatter.ts
Allow create this file? [y/n/f]
```

## 使用 accept-edits 模式自動核准編輯
[「使用 accept-edits 模式自動核准編輯」章節](#auto-approve-edits-with-accept-edits-mode)
選取 `accept-edits` 當您希望 Antigravity CLI 在檔案系統中長時間不間斷工作、每個檔案修改不暫停時，使用 模式。

```
# Launch directly in accept-edits mode
agy --mode=accept-edits
```

在此模式中，所有標準檔案讀取、建立與取代操作（`write_to_file`, `replace_file_content`, `multi_replace_file_content`）自動執行。在工作階段期間產生的子代理也會繼承 `accept-edits` 設定，防止背景檔案寫入排入佇列等待手動核准。

## 使用規劃模式在編輯前分析任務
[「使用計畫模式在編輯前分析工作」章節](#analyze-tasks-before-editing-with-plan-mode)
使用 `plan` 在處理複雜重構、多檔案架構變更或不熟悉的程式碼庫調查時使用 模式。

```
# Launch directly in planning mode
agy --mode=plan
```

何時 `plan` 模式透過 啟用 `Shift+Tab` 循環或 `--mode` 旗標，CLI 會自動在前面加上 `/plan` 指示前綴，加入您的提示詞。代理會使用唯讀工具 ( 調查相關檔案`code_search`, `grep_search`, `view_file`），並在撰寫程式碼前呈現結構化的執行大綱供您核准。

## 保留或覆寫預設模式
[「保留或覆寫預設模式」章節](#persist-or-override-your-default-mode)
您可以跨工作階段永久設定偏好的啟動執行模式，或針對特定呼叫覆寫。

### 使用互動式設定面板
[「使用互動式設定面板」章節](#using-the-interactive-settings-panel)
在工作階段中途開啟互動式設定面板，以檢查或更新預設設定：

```
/settings
```

導覽至 **代理模式** 使用 `↑`/`↓`，按下 `Enter` 或 `Space` 選取你的預設值（`default`, `accept-edits`，或 `plan`），並按下 `Ctrl+S` 儲存。修改此選項會同步你的執行階段 `CycleMode` 立即。

### 設定 agentMode 於 settings.json
[「在 settings.json 中設定 agentMode」章節](#setting-agentmode-in-settingsjson)
設定 `agentMode` 直接寫入您的使用者或專案設定檔：

```
{
    "agentMode": "accept-edits"
}
```

CLI 會從…載入此檔案 `~/.gemini/antigravity-cli/settings.json` 在啟動時套用您選擇的基準執行模式。

### 命令列旗標覆寫
[「命令列旗標覆寫」章節](#command-line-flag-overrides)
傳遞 `--mode` 旗標，用來暫時覆寫單次終端機執行的持續預設模式：

```
# Override settings.json to run in planning mode
agy --mode=plan
```

## 常見錯誤
[「常見錯誤」章節](#common-mistakes)
| 錯誤 | 失敗的原因 | 修正 |
| --- | --- | --- |
| 預期 sandbox 於 Shift+Tab 循環 | sandbox 是作業系統隔離權限設定，而非執行模式 | 在以下項目中設定沙箱自動核准規則 /permissions |
| 使用舊版 /planning 或 /fast 指令 | 這些殘留指令已在…中移除 1.1.0 | 按下 Shift+Tab 循環切換模式或輸入 /plan 您的提示詞之前 |
| 通過中 --permission-mode | agy 使用 --mode ( --mode=accept-edits 或 --mode=plan ）用於執行覆寫 | 執行 agy --mode=accept-edits 或檢查 agy --help |

## 後續步驟
[「後續步驟」章節](#next-steps)
探索下列指南以進一步自訂您的 CLI 工作流程：

- [權限](/docs/cli/permissions) ：設定精細的工具核准規則與萬用字元比對。
- [設定、算繪與按鍵繫結](/docs/cli/settings) ：自訂組態覆寫與互動式偏好設定。
- [背景工作與子代理](/docs/cli/subagents) ：管理平行子代理執行與非同步任務佇列。
[上一個  
審查變更](/docs/ide/review-changes-editor/)[下一步  
無頭模式](/docs/cli/headless/)
