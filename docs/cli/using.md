# CLI 設定與技巧

CLI 設定與技巧 - Antigravity CLIcliAntigravity CLI開始使用CLI 設定與技巧 - Antigravity CLI Antigravity CLI 開始使用Antigravity CLI
# CLI 設定與技巧
[「CLI 設定與技巧」章節](#cli-settings-and-tips)
### 設定
[「設定」章節](#settings)
Antigravity CLI 提供靈活的設定系統，可自訂工作區行為、安全限制、編輯器偏好、視覺風格與效能：

- 設定檔 ：儲存於以下位置的純 JSON 檔案 ~/.gemini/antigravity-cli/settings.json .
- 設定面板 ：輸入 /config 或 /settings 開啟列出所有可用選項的全螢幕覆蓋層選單：
  - 選取設定以開啟其選項清單或文字輸入欄位。
  - 立即將您的選取儲存至磁碟並返回主清單。
- 覆寫 ：特定設定可在啟動時使用 CLI 旗標覆寫（例如 --sandbox 或 --dangerously-skip-permissions ):
  - 設定選單會顯示指示覆寫來源的指示器（例如， 沙箱模式開啟被以下項目覆寫 `--sandbox` ).
  - 您仍可在磁碟上編輯持續性設定，但目前的工作階段會強制執行命令列覆寫，直到重新啟動。

### 快速提示
[「快速技巧」章節](#quick-tips)
下表彙整常見的捷徑與指令：

| 動作／功能 | 提示/指令 |
| --- | --- |
| 自動完成至檔案路徑 | @ 觸發路徑建議 |
| 清除提示詞 | 類型 esc esc 清除你的提示詞框（未進行串流時） |
| 終端機指令 | 使用 ! 於提示詞開頭，直接執行終端機指令 |
| 說明 | 類型 ? 取得說明並列出所有斜線命令 |
| 減少工具呼叫的雜訊 | 將詳細程度設為 低 於 /config 最小化眾多工具呼叫的輸出 |
| 管理權限 | 使用以下項目控制權限 /config 或 /permissions |
| 返回對話 | 使用 /rewind 或 /undo 倒轉對話歷史記錄 |
| 分叉對話 | 使用 /fork 啟動獨立的工作區，並從較早的時間點分支對話 |
| 清除對話 | 使用 /clear 清除提示詞並開始新的對話工作階段 |
| 恢復對話 | 使用 /resume 列出並恢復先前的對話記錄 |
| 自動儲存履歷 | 當您關閉 CLI 時，它會自動印出繼續該特定工作階段所需的確切指令 |

### 按鍵綁定
[「按鍵繫結」章節](#keybindings)
Antigravity CLI 支援自訂按鍵繫結。您可以輸入以下內容進行編輯 `/keybindings` 或直接修改 JSON 檔案：

- 檔案位置 : ~/.gemini/antigravity-cli/keybindings.json .
- 重設 ：若要重設為預設值，請刪除 keybindings.json 檔案。

**預設快速鍵繫結**

| 動作／指令 | 金鑰 | 目的 |
| --- | --- | --- |
| 清除 TUI 畫面 | ctrl+l | 清除終端機輸出 |
| 輸入 / 送出 | enter | 提交提示詞或選項 |
| Escape / 取消 | ctrl+c , esc | 停止串流、關閉選單或清除提示詞 |
| 離開 CLI | ctrl+d | 終止 CLI TUI 工作階段 |
| 暫停 CLI | ctrl+z | 將 CLI 工作階段推至終端機背景 |
| 編輯指令 | e | 開啟編輯器以編輯建議的終端機指令 |
| 確認否 | n | 拒絕終端機指令執行 |
| 確認是 | y | 核准終端機指令執行 |
| 開啟編輯器 | ctrl+g | 在預設殼層編輯器內編輯提示詞 |
| 貼上文字 | ctrl+v | 從剪貼簿貼上文字 |
| 重做文字編輯 | ctrl+shift+z | 重做上一個復原的文字變更 |
| 復原文字編輯 | ctrl+_ , ctrl+shift+- | 復原上次文字變更 |
| 提取（複製） | ctrl+y | 提取/複製所選文字 |
| 向下導覽 | down | 在選單清單中向下捲動 |
| 移至底部 | ctrl+end | 將 TUI 檢視直接跳至底部 |
| 移至頂部 | ctrl+home | 將 TUI 檢視直接跳至頂部 |
| 向左導覽 | left | 將提示詞游標左移 |
| 向下捲頁 | pgdown , shift+down | 向下捲動 TUI 頁面 |
| 向上捲頁 | pgup , shift+up | 向上捲動 TUI 頁面 |
| 向右導覽 | right | 將提示詞游標右移 |
| Tab / 焦點 | tab | 自動完成選項或切換元件焦點 |
| 向上導覽 | up | 在選單清單中向上捲動 |
| 插入換行 | alt+enter , ctrl+j , shift+enter | 在提示詞中換行而不送出 |

您可以在 JSON 檔案中將單一動作對應至多個按鍵綁定。若要停用按鍵綁定，請將清單設為空（例如 `[]`）。若檔案格式錯誤，CLI 會使用有效的部分，並對損毀的動作退回預設值。
[上一個  
CLI 功能](/docs/cli/features/)[下一步  
CLI 疑難排解](/docs/cli/troubleshooting/)
