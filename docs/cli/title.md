終端機標題自訂 - Antigravity CLI
cli
Antigravity CLI
功能
終端機標題自訂 - Antigravity CLI Antigravity CLI 功能
Antigravity CLI
適用於：
Antigravity CLI
# 終端機標題自訂

[「終端機標題自訂」章節](#terminal-title-customization)

設定動態視窗標題、對應自訂指令碼設定，並格式化 JSON 狀態輸出以自訂終端機標題。

## 總覽

[「總覽」章節](#overview)

當您設定 `title` 指令時，CLI 會根據該指令的輸出設定您的終端機視窗標題，讓您即使在終端機視窗最小化或未聚焦時，也能掌握代理的進度。若沒有 `title` 指令時，CLI 不會變更視窗標題。

## 自訂標題指令碼

[「自訂標題指令碼」章節](#custom-title-scripting)

對於自訂視窗標題格式，你可以將使用中的 TUI 狀態詳細資訊路由到自訂 shell 指令碼。

### 設定

[「設定」章節](#configuration)

新增 `title` 設定區塊至您的 `~/.gemini/antigravity-cli/settings.json` 檔案：

```
{
    "title": {
        "type": "command",
        "command": "~/.gemini/antigravity-cli/title.sh"
    }
}
```

每當代理狀態變更時，CLI 都會以下列方式執行您的指令： `sh -c` (`cmd /c` 在 Windows 上），會將工作階段狀態以 JSON 管道傳送至其 `stdin`，並從指令列印至下列位置的內容設定您的終端機視窗標題： `stdout`. 如果指令輸出多行，CLI 會以空格將它們連接起來。CLI 會移除控制字元，包括 Tab 與 Escape 字元，但不會解讀 ANSI 顏色碼，因此請輸出單行純文字.

The `title` 區塊接受以下屬性：

- **`command`** （string）：列印視窗標題的 Shell 指令。
- **`type`** （string，預設 `"command"`）：選用。 `"command"` 是唯一支援的類型。
- **`enabled`** （boolean，預設 `true`）：設定為 `false` 停止更新標題。該指令會保留在 `settings.json`.

設定 `title` 至物件，而非至 `true` 或 `false`. CLI 會將布林值讀取為不含以下內容的物件 `command`, 因此不會執行任何指令碼.

### JSON 狀態承載結構描述

[「JSON 狀態承載架構」章節](#json-state-payload-schema)

JSON 狀態承載與傳送至自訂狀態列指令碼的內容相同。它包含代表…的詳細屬性 `cwd`, `conversation_id`, `agent_state`, `vcs` 詳細資訊等。請參閱 **[狀態列結構描述](/docs/cli/statusline#available-json-fields)** 查看完整屬性清單。

### 範例指令碼

[「指令碼範例」章節](#example-script)

您可以從官方網站下載完整且可適應版面的指令碼 [GitHub 上的 title.sh 範例](https://github.com/google-antigravity/antigravity-cli/blob/main/examples/title/title.sh). 此指令碼會將標題設為代理狀態，加上相符的表情符號，後面接著您工作區資料夾的名稱.

將指令碼儲存至 `~/.gemini/antigravity-cli/title.sh` 並使其可執行：

```
chmod +x ~/.gemini/antigravity-cli/title.sh
```

## 另請參閱

[「另請參閱」章節](#see-also)

探索下列指南以自訂其他 CLI 元素：

- **[視窗標題指令](/docs/cli/commands/title)**: 開啟或關閉您的自訂標題。
- **[狀態列自訂](/docs/cli/statusline)**：自訂動態 TUI 狀態列。
- **[設定、算繪與按鍵繫結](/docs/settings?tab=cli)**: 自訂鍵盤快速鍵與緩衝區，並查看每個 `title` 屬性。
- **[CLI 參考資料](/docs/cli/reference)**: 斜線指令、按鍵綁定與設定鍵的快速參考。
- **[權限與沙箱](/docs/sandbox?tab=cli)**：管理安全的目錄權限。

[上一個
狀態列自訂](/docs/cli/statusline/)

[下一步
瀏覽器使用](/docs/browser/)

您的下載已開始

## 您如何得知我們？

請選一個。這有助於我們接觸更多像您一樣的人。

感謝您讓我們知道！
