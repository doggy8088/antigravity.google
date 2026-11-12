提示與互動 — Antigravity CLI
cli
Antigravity CLI
功能
提示與互動 — Antigravity CLI Antigravity CLI 功能
Antigravity CLI
適用於：
Antigravity CLI
# 提示與互動

[「提示與互動」章節](#prompting-and-interaction)

掌握主要互動模式、多行撰寫工作流程、工作階段中斷控制，以及終端機媒體貼上。

## 提示詞方塊

[「提示詞方塊」章節](#the-prompt-box)

Antigravity CLI 具備固定在終端機畫面底部的提示詞面板。此面板可處理標準使用者輸入、多行指令碼，以及直接貼上媒體。

```
───────────────────────────────────────────────────────────────────────────
> Describe your next engineering task here...
───────────────────────────────────────────────────────────────────────────
```

### 提交提示詞

[「送出提示詞」章節](#submitting-prompts)

若要啟動代理回合，請在提示詞面板中輸入指示並按下 Enter。代理會立即分析您目前的目錄工作區、讀取必要的設定，並開始擬定執行計畫。

### 中斷作用中工作階段

[「中斷進行中的工作階段」章節](#interrupting-active-sessions)

若代理啟動了非預期的工作，或在指令執行期間陷入迴圈，請按下 Esc 立即停止工作階段。

## 多行撰寫

[「多行撰寫」章節](#multiline-composition)

對於複雜的指示、結構化測試情境或多段落說明，請使用內建的多行功能。

### 簡寫換行插入

[「簡寫換行插入」章節](#shorthand-newline-insertions)

您可以使用以下任一快速鍵插入換行：

- **標準**：按下 Shift + Enter 或 Ctrl + J 在使用中的提示詞視窗內插入乾淨的換行而不提交。
- **macOS 終端機備援**：若您使用 Apple Terminal（其不會轉送 Shift + Enter 預設），按下 Option + Enter。請務必檢查 **將 Option 鍵作為 Meta 鍵** 於您的終端機偏好設定設定檔。
- **通用斜線逸出**：輸入結尾反斜線 `\` 於啟用中行的結尾並按下 Enter。CLI 會自動移除反斜線並插入換行。

### 編輯提示詞，位於 `$EDITOR`

[「在 $EDITOR 中編輯提示詞」章節](#editing-prompts-in-editor)

若要在主要開發編輯器中撰寫或編輯大型提示詞結構，請依照下列步驟操作：

1. 按下 Ctrl + G 於空白提示詞面板內。
2. CLI 會啟動您系統的預設文字編輯器（例如 `vim`, `nano`，或 `code`，使用…設定 `/config` 或您的環境的 `$EDITOR` 變數）。
3. 在暫存編輯器緩衝區內撰寫您的多行指令。
4. 儲存並結束編輯器。CLI 會自動將編輯後的緩衝區直接匯回終端機提示詞。

## 提及檔案與子代理

[標題為「Mentioning files and subagents」的章節](#mentioning-files-and-subagents)

類型 `@` 在提示詞框中，將檔案或目錄新增至您的提示詞，或讓您的提示詞以 `@` 以及子代理的名稱，即可直接傳送訊息給該子代理。詳情請參閱 [提及與引用](/docs/at-mentions?tab=cli).

## 附加媒體

[「附加媒體」章節](#attaching-media)

Antigravity CLI 支援直接從系統剪貼簿貼上富媒體格式。按下 Ctrl + V （或原生終端機貼上）於提示詞面板內，以附加螢幕截圖樣稿或影片錄製。

### 支援的檔案類型

[「支援的檔案類型」章節](#supported-file-types)

提示詞方塊支援下列媒體檔案格式：

- **圖片**：PNG、JPEG、GIF、WebP、BMP、TIFF 與 SVG。
- **影片**：MP4、MOV、WebM 與 AVI。

## 後續步驟

[「後續步驟」章節](#next-steps)

熟悉互動模式後，探索代理如何呈現動作並請求驗證：

- **[審查產出物](/docs/cli/artifacts)**：學習檢查與管理檔案編輯、計畫與測試執行。
- **[管理對話](/docs/cli/conversations)**：恢復先前的執行緒並分叉作用中的工作階段。
- **[背景工作與子代理](/docs/cli/subagents)**：監控非同步背景代理。

[上一個
總覽](/docs/projects/)

[下一步
管理對話](/docs/cli/conversations/)

您的下載已開始

## 您如何得知我們？

請選一個。這有助於我們接觸更多像您一樣的人。

感謝您讓我們知道！
