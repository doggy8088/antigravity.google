# 程式碼搜尋指令（/codesearch）

程式碼搜尋指令（/codesearch） - Antigravity CLIcliAntigravity CLI功能程式碼搜尋指令（/codesearch） - Antigravity CLI Antigravity CLI 功能Antigravity CLI適用於：Antigravity CLI
# 程式碼搜尋指令（/codesearch）
[「程式碼搜尋指令（/codesearch）」章節](index.html#code-search-command-codesearch)
在 TUI 中直接以互動方式搜尋工作區中的程式碼，無須離開工作階段或中斷代理。

## 總覽
[「總覽」章節](index.html#overview)
The `/codesearch` 指令會開啟全螢幕 **程式碼搜尋** 面板，執行 搜尋橫跨目前工作區，並依檔案顯示相符結果， 附周圍上下文與突顯的相符文字。便於快速 定位符號、字串或模式，再直接跳到 相符行的檔案。 `/codesearch` 直接查詢您的工作區並即時傳回結果。

該指令有兩個別名： `/cs` 和 `/search`.

## 正在執行搜尋
[「執行搜尋」章節](index.html#running-a-search)
若要從 TUI 搜尋工作區，請依照下列步驟操作：

1. 類型 /codesearch 後接您的查詢，輸入於提示詞方塊。
2. 按下 Enter .

```
/codesearch UserSession
```

The **程式碼搜尋** 面板開啟，結果依檔案分組。標頭顯示您的查詢與相符數，每個相符顯示上下各一行上下文。相符的文字會突顯：

### 導覽與控制項
[「導覽與控制」章節](index.html#navigation-and-controls)
該面板由鍵盤驅動：

| 金鑰 | 動作 |
| --- | --- |
| ↑ / ↓ | 在個別比對之間移動 |
| ← / → | 跳至上一個 / 下一個檔案群組 |
| Enter | 在檔案檢視器中開啟反白結果的比對行 |
| Ctrl + G | 在外部編輯器中開啟反白結果的比對行 |
| Esc | 關閉面板並返回提示詞 |

## 查詢語法
[「查詢語法」章節](index.html#query-syntax)
預設情況下，查詢會被解讀為 **正規表示式** 比對不區分大小寫，除非您的查詢包含大寫字母（智慧大小寫）。

### 字面（固定字串）比對
[「字面（固定字串）比對」章節](index.html#literal-fixed-string-matching)
新增 `-F` （或 `--literal`）於查詢中的任何位置，以停用規則運算式並逐字比對文字。當查詢包含 regex 元字元（例如 `.`, `(`，或 `*`:

```
/codesearch -F map[string]*UserSession
```

### 依檔案路徑篩選
[「依檔案路徑篩選」章節](index.html#filtering-by-file-path)
使用以下方式將搜尋限制為特定檔案 `f:` （別名（複數） `file:` 和 `path:`）後接 glob。請為篩選器加上前綴 `-` 至 *排除* 改為比對檔案：

```
/codesearch f:store.go Session
```

```
/codesearch -f:*_test.go NewUserSession
```

## 開啟檔案並在行上留言
[「開啟檔案並針對行加註」章節](index.html#opening-a-file-and-commenting-on-lines)
程式碼搜尋不僅是檢視器，您可以開啟任何結果並給予代理精確的行級回饋，無需離開 CLI。

### 開啟結果
[「開啟結果」章節](index.html#open-a-result)
使用反白標示相符項目 ↑ / ↓ 並按下 Enter 在內建檔案檢視器中開啟該檔案，並捲動至相符的行。使用 Ctrl + G 改為在外部編輯器中開啟。

在檔案檢視器中，頁尾顯示可用動作：

```
↑/↓ scroll · pgup/pgdown page · shift+g bottom · g top · c comment · ctrl+g editor · / search
```

### 在特定行加上註解
[「針對特定行加註」章節](index.html#comment-on-a-specific-line)
若要在檔案檢視器中針對特定行附加註解，請依照下列步驟操作：

1. 移動游標（ ↑ / ↓ ）至您要加註的行。
2. 按下 C 開啟該行的行內留言編輯器。
3. 輸入您的備註。使用 Shift + Enter （或 Alt + Enter ）以換行，並按下 Enter 儲存它。

已儲存的留言會記錄在該行，並在行號欄以 💬 圖示標示。可依需要重複套用至多行。若要移除留言，請將游標移至該行並按下刪除鍵（D).

### 將您的意見傳送給代理
[「將您的意見傳送給代理」章節](index.html#send-your-comments-to-the-agent)
當您使用下列項目離開檔案檢視器時 Esc，會收集所有待處理註解，CLI 會詢問是否傳送它們：

- Y （傳送並關閉） ：您的註解會作為您的下一則訊息傳遞給代理，格式為 <file>:<line>: <comment> 讓模型知道你指的是哪些行。
- N （捨棄並關閉） ：不傳送並結束。
- Esc ：取消並繼續編輯。

這讓程式碼搜尋成為快速找到相關程式碼，並在單一流程中交給代理精準、錨定行號的指示的好方法。

## 後續步驟
[「後續步驟」章節](index.html#next-steps)
探索下列指南以進一步了解互動式 CLI 工作流程：

- [CLI 功能](https://antigravity.gh.miniasp.com/docs/cli/features) ：探索其餘的互動式 TUI 功能。
- [提示指南](https://antigravity.gh.miniasp.com/docs/cli/prompting) ：了解如何指示代理為您搜尋並編輯程式碼。
- [恢復指令（/resume）](https://antigravity.gh.miniasp.com/docs/cli/commands/resume) ：導覽並管理您過去的對話。
[上一個  
更新日誌（/changelog）](../changelog/index.html.gz)[下一步  
情境（/context）](../context/index.html.gz)
