# 狀態列自訂

狀態列自訂 - Antigravity CLIcliAntigravity CLI功能狀態列自訂 - Antigravity CLI Antigravity CLI 功能Antigravity CLI適用於：Antigravity CLI
# 狀態列自訂
[「狀態列自訂」章節](#status-line-customization)
定義自訂指令碼組態，並格式化動態 JSON 狀態負載以自訂您的 TUI 狀態列。

## 總覽
[「總覽」章節](#overview)
狀態列位於 TUI 提示詞面板底部，可一目了然地提供有關使用中代理週期、工作區環境、上下文權杖視窗用量，以及背景執行工作的上下文。

## 自訂狀態列指令碼
[「自訂狀態列指令碼」章節](#custom-status-line-scripting)
對於進階終端機版面或自訂狀態列顯示，你可以將使用中的代理中繼資料路由到自訂指令碼。

### 設定
[「設定」章節](#configuration)
新增 `statusLine` 設定區塊至您的 `~/.gemini/antigravity-cli/settings.json` 檔案：

```
{
    "statusLine": {
        "type": "command",
        "command": "~/.gemini/antigravity-cli/statusline.sh"
    }
}
```

每當代理狀態變更時，TUI 會執行您的指令指令碼，將詳細的狀態 JSON 承載直接透過管線傳至指令碼的 `stdin`，從…讀取您的格式化字串 `stdout`，並將結果渲染於提示詞的狀態列。支援完整的 ANSI 色碼。

該區塊接受另外三個可選鍵： `padding` 在狀態列上方加入空白行， `enabled` 設為 `false` 暫停指令碼但保留該命令，且 `stack_with_default` 設為 `true` 將你的指令碼呈現在內建列下方，而非取代它。

### 可用的 JSON 欄位
[「可用的 JSON 欄位」章節](#available-json-fields)
傳送至您指令碼的 JSON 承載包含下列頂層欄位：

| 欄位 | 類型 | 描述 |
| --- | --- | --- |
| cwd | 字串 | 啟動 CLI 時的目前工作目錄。 |
| session_id | 字串 | 向下相容別名，用於 conversation_id . |
| conversation_id | 字串 | 目前唯一的對話 ID。 |
| transcript_path | 字串 | 進行中對話逐字稿日誌檔的絕對路徑（選填）。 |
| model | 物件 | 包含 id 和 display_name 作用中模型的。 |
| workspace | 物件 | 包含 current_dir 和 project_dir 路徑。 |
| version | 字串 | CLI 版本字串。 |
| context_window | 物件 | 包含權杖使用量詳細資訊： total_input_tokens , total_output_tokens , context_window_size , used_percentage , remaining_percentage ，與 current_usage 子物件。 |
| exceeds_200k_tokens | bool | 若對話內容已超過 200k 個權杖則為 true（首次 API 呼叫前為 null）。 |
| product | 字串 | 應用程式名稱（例如 antigravity ). |
| quota | 物件 | 將模型/儲存桶 ID 對應至其配額狀態，包含 remaining_fraction , reset_time ，與 reset_in_seconds （選用）。 |
| agent_state | 字串 | 目前狀態： idle , thinking , working , tool_use , initializing . |
| vcs | 物件 | 版本控制資訊： type （git/jj/hg）， branch , client , dirty （選用）。 |
| sandbox | 物件 | 沙箱設定： enabled , allow_network （選用）。 |
| artifact_count | int | 對話中產生的產出物數量。 |
| plan_tier | 字串 | 已驗證使用者的訂閱層級（選填）。 |
| email | 字串 | 已驗證使用者的電子郵件/LDAP。 |
| pending_input_count | int | 排入佇列的使用者訊息數量。 |
| tool_confirmation_pending | bool | 當工具確認對話框顯示時為 true。 |
| task_count | int | 執行中的背景任務數量。 |
| terminal_width | int | 互動式終端機的即時寬度。 |
| execution_mode | 字串 | 目前作用中的提示詞執行模式（例如， planning , fast ). |
| vim | 物件 | Vim 編輯狀態： mode 是 NORMAL , INSERT , VISUAL ，或 VISUAL LINE 。僅在…時顯示 Vim 編輯器模式 已啟用。 |

### JSON 承載範例
[「JSON 承載範例」章節](#json-payload-example)
以下是傳送至狀態列指令碼的清理後典型 JSON 承載：

```
{
    "cwd": "/home/user/my-project",
    "session_id": "12345678-abcd-ef01-2345-6789abcdef01",
    "conversation_id": "12345678-abcd-ef01-2345-6789abcdef01",
    "transcript_path": "/home/user/.gemini/antigravity/brain/12345678-abcd-ef01-2345-6789abcdef01/.system_generated/logs/transcript.jsonl",
    "model": {
        "id": "Gemini 3.5 Flash (High)",
        "display_name": "Gemini 3.5 Flash (High)"
    },
    "workspace": {
        "current_dir": "/home/user/my-project",
        "project_dir": "/home/user/my-project"
    },
    "version": "1.0.13",
    "context_window": {
        "total_input_tokens": 88244,
        "total_output_tokens": 61074,
        "context_window_size": 1048576,
        "used_percentage": 14.24,
        "remaining_percentage": 85.76,
        "current_usage": {
            "input_tokens": 63382,
            "output_tokens": 346,
            "cache_creation_input_tokens": 0,
            "cache_read_input_tokens": 20857
        }
    },
    "exceeds_200k_tokens": false,
    "product": "antigravity",
    "quota": {
        "gemini-weekly": {
            "remaining_fraction": 0.9378,
            "reset_time": "2026-07-06T07:50:32Z",
            "reset_in_seconds": 560580
        }
    },
    "agent_state": "idle",
    "vcs": {
        "type": "git",
        "branch": "main",
        "dirty": false
    },
    "sandbox": {
        "enabled": false
    },
    "artifact_count": 2,
    "plan_tier": "Pro",
    "email": "developer@email.com",
    "task_count": 1,
    "terminal_width": 111,
    "execution_mode": "planning"
}
```

### 範例指令碼
[「指令碼範例」章節](#example-script)
您可以從官方網站下載完整且可適應版面的指令碼 [GitHub 上的 statusline.sh 範例](https://github.com/google-antigravity/antigravity-cli/blob/main/examples/statusline/statusline.sh)。此指令碼會渲染狀態徽章、處理作用中分支，並動態格式化內容視窗進度列。

將指令碼儲存至 `~/.gemini/antigravity-cli/statusline.sh` 並使其可執行：

```
chmod +x ~/.gemini/antigravity-cli/statusline.sh
```

## 另請參閱
[「另請參閱」章節](#see-also)
探索下列指南以自訂其他 CLI 元素：

- [狀態列指令](/docs/cli/commands/statusline) ：互動式切換狀態列元素。
- [終端機標題自訂](/docs/cli/title) ：設定動態視窗標題。
- [設定、算繪與按鍵繫結](/docs/cli/settings) ：自訂鍵盤快速鍵與緩衝區。
- [權限與沙箱](/docs/cli/sandbox) ：管理安全的目錄權限。
[上一個  
無頭模式](/docs/cli/headless/)[下一步  
終端機標題自訂](/docs/cli/title/)
