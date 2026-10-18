# 終端機標題自訂

終端機標題自訂 - Antigravity CLIcliAntigravity CLI功能終端機標題自訂 - Antigravity CLI Antigravity CLI 功能Antigravity CLI適用於：Antigravity CLI
# 終端機標題自訂
[「終端機標題自訂」章節](index.html#terminal-title-customization)
設定動態視窗標題、對應自訂指令碼設定，並格式化 JSON 狀態輸出以自訂終端機標題。

## 總覽
[「總覽」章節](index.html#overview)
終端機視窗標題功能會在終端機模擬器的標題列中顯示代理詳細資訊、使用中工作區的基底名稱，以及使用中對話的參數。即使終端機視窗最小化或失去焦點，您也能監控代理進度。

## 自訂標題指令碼
[「自訂標題指令碼」章節](index.html#custom-title-scripting)
對於自訂視窗標題格式，你可以將使用中的 TUI 狀態詳細資訊路由到自訂 shell 指令碼。

### 設定
[「設定」章節](index.html#configuration)
新增 `title` 設定區塊至您的 `~/.gemini/antigravity-cli/settings.json` 檔案：

```
{
    "title": {
        "type": "command",
        "command": "~/.gemini/antigravity-cli/title.sh"
    }
}
```

每當代理狀態變更時，TUI 會執行您的指令指令碼，將詳細的狀態 JSON 承載直接透過管線傳至指令碼的 `stdin`，從…讀取您的格式化字串 `stdout`，並更新您的終端機視窗標題。不可列印的字元與 ANSI 跳脫序列會在渲染前自動移除。

### JSON 狀態承載結構描述
[「JSON 狀態承載架構」章節](index.html#json-state-payload-schema)
JSON 狀態承載與傳送至自訂狀態列指令碼的內容相同。它包含代表…的詳細屬性 `cwd`, `conversation_id`, `agent_state`, `vcs` 詳細資訊等。請參閱 **狀態列結構描述** 查看完整屬性清單。

### 範例指令碼
[「指令碼範例」章節](index.html#example-script)
您可以從官方網站下載完整且可適應版面的指令碼 [GitHub 上的 title.sh 範例](https://github.com/google-antigravity/antigravity-cli/blob/main/examples/title/title.sh)。此指令碼會擷取作用中工作區資料夾的基本名稱，並渲染包含即時代理狀態與對話工作階段前綴的結構化終端機標題。

將指令碼儲存至 `~/.gemini/antigravity-cli/title.sh` 並使其可執行：

```
chmod +x ~/.gemini/antigravity-cli/title.sh
```

## 另請參閱
[「另請參閱」章節](index.html#see-also)
探索下列指南以自訂其他 CLI 元素：

- [視窗標題指令](https://antigravity.gh.miniasp.com/docs/cli/commands/title) ：互動式切換或設定終端機標題。
- [狀態列自訂](https://antigravity.gh.miniasp.com/docs/cli/statusline) ：自訂動態 TUI 狀態列。
- [設定、算繪與按鍵繫結](https://antigravity.gh.miniasp.com/docs/cli/settings) ：自訂鍵盤快速鍵與緩衝區。
- [權限與沙箱](https://antigravity.gh.miniasp.com/docs/cli/sandbox) ：管理安全的目錄權限。
[上一個  
狀態列自訂](../statusline/index.html.gz)[下一步  
總覽](../../ide/browser/index.html)
