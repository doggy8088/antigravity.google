# Vim 編輯器模式

Vim 編輯器模式 - Antigravity CLIcliAntigravity CLI功能Vim 編輯器模式 - Antigravity CLI Antigravity CLI 功能Antigravity CLI適用於：Antigravity CLI
# Vim 編輯器模式
[「Vim 編輯器模式」章節](index.html#vim-editor-mode)
使用模態 Vim 鍵盤繫結編輯提示詞，而非預設的純文字編輯器。

Vim 編輯器模式會取代 CLI 中每個多行輸入介面的編輯模型：

| 介面 | 您在那裡編輯的內容 |
| --- | --- |
| 提示詞方塊 | 您傳送給代理的訊息，包括多行提示詞與斜線指令。 |
| …中的註解編輯器 /diff | 您在變更的檔案上留下的審查留言。 |
| 產出物審查面板中的註解編輯器 | 對產生的 意見回饋 產出物 您接受之前。 |

它也新增了 `vim` 分頁至說明覆蓋層，以及模式徽章至 [狀態列](https://antigravity.gh.miniasp.com/docs/cli/statusline).

## 啟用 Vim 編輯器模式
[「啟用 Vim 編輯器模式」章節](index.html#enable-vim-editor-mode)
Vim 編輯器模式預設為關閉。請從互動式設定面板開啟，或直接在下列項目中開啟 `settings.json`.

### 使用設定面板
[「使用設定面板」章節](index.html#using-the-settings-panel)
若要在設定面板中啟用 Vim 編輯器模式，請依照下列步驟操作：

1. 類型 /settings 於提示詞面板內部並按下 Enter .
2. 導覽至 編輯器模式 使用 ↑ / ↓ .
3. 按下 Enter 選取 vim .
4. 設定 編輯器模式 > 插入優先 選擇每個提示詞起始的模式。保持 off 在 Normal 模式啟動，或將其設為 on 以裸…在 Insert 模式啟動 Enter 提交。請參閱 以插入模式啟動 .
5. 按下 Esc 儲存並關閉編輯器。

### 使用 settings.json
[「使用 settings.json」章節](index.html#using-settingsjson)
設定 `editorMode` 於您的組態設定檔：

```
{
    "editorMode": "vim",
    "vimInsertFirst": false
}
```

CLI 會從…載入此檔案 `~/.gemini/antigravity-cli/settings.json` 在啟動時。 `editorMode` 接受 `"default"` 和 `"vim"`. `vimInsertFirst` 控制每個新提示詞啟動時的模式，僅在以下情況適用 `editorMode` 是 `"vim"`；請參閱 [以插入模式啟動](index.html#start-in-insert-mode).

> 備註： editorMode 與 無關 editor 設定 . editor 選擇外部程式
，使其 Ctrl+G 啟動，因此設定 editor 至 "vim" 在單獨的
視窗開啟 Vim，對提示詞不做任何事。 editorMode 是控制
CLI 提示詞內部模態編輯的項目。

## 切換模式
[「在模式之間切換」章節](index.html#switch-between-modes)
Vim 編輯器模式從 NORMAL 開始。請按下 `i` 輸入，且 `Esc` 返回 NORMAL。

| 指令 | 動作 | 從模式 |
| --- | --- | --- |
| Esc , Ctrl+C | 進入 NORMAL 模式 | INSERT、VISUAL |
| i | 在游標前插入 | 一般 |
| I | 在第一個非空白字元插入 | 一般 |
| a | 在游標後插入 | 一般 |
| A | 在行尾插入 | 一般 |
| o | 在下方開啟一行並插入 | 一般 |
| O | 在上方開啟一行並插入 | 一般 |
| v | 開始字元選取 | 一般 |
| V | 開始行選取 | 一般 |

狀態列會回報目前模式：

| 模式 | 徽章 |
| --- | --- |
| 一般 | 無 |
| INSERT | -- INSERT -- |
| VISUAL | -- VISUAL -- |
| VISUAL LINE | -- V-LINE -- |

空白的徽章區表示您處於 NORMAL 模式。如果您執行 [自訂狀態列](index.html#show-the-mode-in-a-custom-status-line)，除非您將它與預設值疊加，否則它會取代此徽章。

> 提示： 按下 ? 在一般模式下開啟快速鍵覆蓋層，或執行 /help 並選取 vim 分頁以查看完整速查表。

## 提交您的提示詞
[「送出您的提示詞」章節](index.html#submit-your-prompt)
在每種模式下，Enter 的行為各不相同，因此您可以撰寫多行提示詞而不必擔心誤送。

| 情境 | Enter | Ctrl+S / Ctrl+Enter | ZZ |
| --- | --- | --- | --- |
| 一般模式 | 提交 | 提交 | 提交 |
| INSERT 模式 | 插入換行 | 提交 | — |
| INSERT 模式，插入優先開啟 | 提交 | 提交 | — |

`ZZ` 在 NORMAL 與 VISUAL 模式下提交，符合寫入並離開緩衝區的肌肉記憶。

### 以插入模式啟動
[「以插入模式啟動」章節](index.html#start-in-insert-mode)
設定 `vimInsertFirst` 當你希望每個新提示詞都在裸…處以 INSERT 模式開始時 `Enter` 提交。這保留了預設的輸入體驗，同時讓 NORMAL 模式只需 `Esc` 離開。

```
{
    "editorMode": "vim",
    "vimInsertFirst": true
}
```

The **編輯器模式** > **插入優先** 選項出現於 `/settings` 僅當 **編輯器模式** 設為 `vim`。在預設模式下無作用。

## 移動游標
[「移動游標」章節](index.html#move-the-cursor)
所有移動在 NORMAL 與 VISUAL 模式中皆可獨立運作，並可作為運算子的目標。

| 金鑰 | 動作 |
| --- | --- |
| h l | 左，右 |
| j k | 下、上 |
| 0 $ | 行首、行尾 |
| ^ | 行上第一個非空白字元 |
| w b e | 下一個單字、上一個單字、單字結尾 |
| W B E | 相同，將以空白分隔的區塊視為單字 |
| gg G | 輸入開頭、輸入結尾 |
| f{char} F{char} | 跳至下一個或上一個 {char} |
| t{char} T{char} | 停在下一個或上一個字元之前一格 {char} |
| ; , | 重複上一個 f / F / t / T 向前、向後 |

## 編輯文字
[「編輯文字」章節](index.html#edit-text)
編輯指令分為三類：立即執行的單鍵、等待移動指令的運算子，以及選取分隔區域的文字物件。

### 單鍵指令
[「單鍵指令」章節](index.html#single-key-commands)
| 金鑰 | 動作 |
| --- | --- |
| x | 刪除游標下方的字元 |
| r{char} | 將游標下的字元取代為 {char} |
| D C | 從游標刪除或變更至行尾 |
| o O | 在下方或上方開啟新行並進入插入模式 |
| p P | 在游標之後或之前貼上 |
| u U | 復原、重做。 Ctrl+R 不會重做；它會開啟產出物審查 |

指令不接受計數前綴，因此 `3dd` 刪除一行。若要一次處理多行，請使用以下方式選取 `V` 並按下運算子。也沒有 `.` 重複上一次變更。

只有一個未命名暫存器，而不是通常的 `"a`–`"z` 集合。刪除會填入它，因此 `x`, `D`, `C`, `d`，與 `c` 皆留下可使用以下方式貼回的文字 `p`.

貼上具備行感知功能。以以下方式複製的文字 `dd` 或 `yy` 貼上至新行下方 (`p`）或以上版本（`P`）。其他所有內容皆以行內貼上。

### 運算子與移動
[「運算子與移動」章節](index.html#operators-and-motions)
將運算子與任何動作結合，對其涵蓋的範圍執行操作。

| 運算子 | 動作 | 字形 | 整行 |
| --- | --- | --- | --- |
| d | 刪除 | dw de db | dd |
| c | 變更（刪除，然後進入 INSERT 模式） | cw ce cb | cc |
| y | 提取 | yw ye yb | yy |

```
dw     Delete to the start of the next word
d$     Delete to the end of the line
c^     Change back to the first non-blank character
yG     Yank to the end of the input
dfx    Delete forward through the next "x"
```

`cw` 變更至目前單字結尾，與真正的 Vim 一致。

### 文字物件
[「文字物件」章節](index.html#text-objects)
將操作員與以下項目配對 `i` （內部）或 `a` （環繞）與分隔符號。

| 物件 | 選取 |
| --- | --- |
| iw aw | 一個單字，無論前後是否有空白 |
| iW aW | 以空白分隔的區塊 |
| i" a" i' a' | 單引號或雙引號中的文字 |
| i( a( i) a) | 括號中的文字 |
| i[ a[ i] a] | 方括號中的文字 |
| i{ a{ i} a} | 大括號中的文字 |

反引號的使用方式相同：成對 `i` 或 `a` 使用反引號選取行內程式碼。

```
ci"    Change the text inside the nearest quotes
da(    Delete a parenthesized group, parentheses included
yiw    Yank the word under the cursor
```

## 處理選取範圍
[「使用選取範圍」章節](index.html#work-with-selections)
按下 `v` 或 `V` 選取、以任何移動方式移動，然後套用命令。按 `v` 或 `V` 再次，或 `Esc`，以離開。

| 金鑰 | 對選取項目執行動作 |
| --- | --- |
| d x | 刪除 |
| c | 變更 |
| y | 提取 |
| r{char} | 將每個選取的字元取代為 {char} |
| ~ | 切換大小寫 |
| u U | 小寫，大寫 |

> 備註： ~ , u ，與 U 僅在 VISUAL 模式下變更大小寫。在 NORMAL 模式下， u 和 U 是復原與重做。

## 執行斜線與殼層指令
[「執行斜線與 Shell 指令」章節](index.html#run-slash-and-shell-commands)
按下 `/` 或 `!` 在一般模式下。CLI 會插入字元並切換至插入模式，因此斜線指令與 shell 指令無需按下 即可使用 `i` 先。

```
/settings     Open the settings panel from NORMAL mode
!ls -la       Run a shell command from NORMAL mode
```

## 自訂提交與換行按鍵
[「自訂送出鍵與換行鍵」章節](index.html#customize-the-submit-and-newline-keys)
三個 Vim 動作可在下列項目中重新對應 `~/.gemini/antigravity-cli/keybindings.json`。以下是預設值：

```
{
    "vim.insert.insert_newline": ["alt+enter", "ctrl+j", "enter", "shift+enter"],
    "vim.insert.submit": ["ctrl+enter", "ctrl+s"],
    "vim.normal.submit": ["ctrl+enter", "ctrl+s"]
}
```

移動、運算子與文字物件皆固定，無法重新對應。

### 僅在一般模式下可用 Enter 提交
[「僅在 NORMAL 模式中以 Enter 送出」章節](index.html#submit-with-enter-in-normal-mode-only)
這是預設值。 `Enter` 在 NORMAL 模式下提交，在 INSERT 模式下插入換行，讓你可以自由輸入並以單一…提交 `Esc` `Enter`。無需設定。保留 `vimInsertFirst` 關閉：

```
{
    "editorMode": "vim",
    "vimInsertFirst": false
}
```

### 在插入模式下也可用 Enter 提交
[「在 INSERT 模式中也以 Enter 送出」章節](index.html#submit-with-enter-in-insert-mode-too)
移動 `enter` 的 `vim.insert.insert_newline` 並進入 `vim.insert.submit`. `Shift+Enter`, `Alt+Enter`，與 `Ctrl+J` 仍插入換行：

```
{
    "vim.insert.insert_newline": ["alt+enter", "ctrl+j", "shift+enter"],
    "vim.insert.submit": ["ctrl+enter", "ctrl+s", "enter"]
}
```

設定 `vimInsertFirst` 至 `true` 無需編輯按鍵綁定即可達到相同的送出行為，但這也會改變每個新提示詞啟動時的模式。

> 警告： Enter 一律在 NORMAL 模式下送出。重新對應 vim.normal.submit 只會新增按鍵，絕不移除 Enter .

## 在自訂狀態列中顯示模式
[「在自訂狀態列中顯示模式」章節](index.html#show-the-mode-in-a-custom-status-line)
A [自訂狀態列](https://antigravity.gh.miniasp.com/docs/cli/statusline) 取代內建的項目，模式徽章也會一併移除。你有兩種方式可以取回該模式。

保留內建行，並將您的指令碼堆疊在其下方：

```
{
    "statusLine": {
        "type": "command",
        "command": "~/.gemini/antigravity-cli/statusline.sh",
        "stack_with_default": true
    }
}
```

或自行呈現模式。當 `editorMode` 是 `"vim"`，透過管線傳送至您指令碼的 JSON 承載帶有 `vim` 物件：

```
{
    "vim": {
        "mode": "INSERT"
    }
}
```

`mode` 是 `NORMAL`, `INSERT`, `VISUAL`，或 `VISUAL LINE`。當 Vim 編輯器模式關閉時，該欄位會完全消失，因此指令碼可將其存在與否作為啟用檢查：

```
#!/bin/bash
input=$(cat)
mode=$(echo "$input" | jq -r '.vim.mode // empty')
[ -n "$mode" ] && printf -- '-- %s -- ' "$mode"
echo "$input" | jq -r '.model.display_name'
```

> 備註： vim.mode 回報 NORMAL ，與內建徽章不同，後者在
該模式下不渲染任何內容。列印每個模式的指令碼會顯示 -- NORMAL -- 內建行永不顯示的徽章。

## 後續步驟
[「後續步驟」章節](index.html#next-steps)
探索下列指南以進一步自訂您的編輯體驗：

- [設定、算繪與按鍵繫結](https://antigravity.gh.miniasp.com/docs/cli/settings) ：設定其餘偏好設定並重新對應按鍵。
- [狀態列自訂](https://antigravity.gh.miniasp.com/docs/cli/statusline) ：控制狀態列在 Vim 模式徽章旁回報的內容。
- [CLI 參考資料](https://antigravity.gh.miniasp.com/docs/cli/reference) ：查詢每個組態鍵與預設按鍵綁定。
[上一個  
產出物審查](../../artifact-review/index.html.gz)[下一步  
總覽](../../slash-commands/index.html)
