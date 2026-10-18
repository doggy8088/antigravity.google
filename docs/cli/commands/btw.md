# 旁問指令（/btw）

旁問指令（/btw）- Antigravity CLIcliAntigravity CLI功能旁問指令（/btw）- Antigravity CLI Antigravity CLI 功能Antigravity CLI適用於：Antigravity 應用程式Antigravity CLI
# 旁問指令（/btw）
[「旁問指令（/btw）」章節](#side-question-command-btw)
提出快速的情境問題，而不中斷進行中的代理回合，也不向主要對話紀錄新增訊息。

## 總覽
[「總覽」章節](#overview)
當您正在執行多步驟任務時，可能需要快速提醒代理先前討論過的內容，例如它讀過的函式簽章、它做出的決定，或它使用過的指令旗標。在主聊天中提出該問題會為對話軌跡增加額外回合，並在每個後續回合消耗內容視窗容量。

The `/btw` 指令會在背景執行短暫、單回合的附帶查詢：

- 繼承您的對話情境 ：旁邊的查詢是從您目前的對話分支而出，因此它可以回答在進行中的工作階段中已討論過的任何問題。
- 無工具的回答 ：旁邊的查詢已停用工具，因此無法讀取檔案、執行指令或搜尋您的工作區。它會根據對話上下文與模型自身的知識，在一次回覆中作答。
- 串流時詢問 ：您可以呼叫 /btw 即使主代理正積極產生回應、執行測試或執行長時間工具。
- 對話歷程無增長 ：您的以下項目皆非 /btw 問題與答案都不會加入主對話，因此後續對話輪次不會為其消耗配額。收到答案後，臨時分支即被刪除。

## 提出旁邊的提問
[「提出附帶問題」章節](#ask-a-side-question)
您可以跨 Antigravity 介面提出附帶問題。

- Antigravity 應用程式
- Antigravity CLI

### Antigravity 應用程式
[「Antigravity App」章節](#sr-tab-1)
對話啟用後（即傳送第一則訊息後），請輸入 `/btw` 後接您的問題，輸入於撰寫器：

```
/btw Which file did you say defines the UserSession interface?
```

答案會在浮動…中開啟 **旁問** 面板，位於撰寫器上方，且 不會加入您的對話。從面板您可以：

- 使用上一個 ( 瀏覽先前的側邊問題 < ）與下一個（ > ） 歷程記錄控制項，顯示為 1/N .
- 複製 將問題與答案複製到你的剪貼簿。
- 刪除 目前的旁支問題。
- 最小化 面板。最小化的旁支問題會顯示為 N 個側面問題 撰寫器頁尾的藥丸；選取以重新開啟 面板。

### Antigravity CLI
[「Antigravity CLI」章節](#sr-tab-2)
類型 `/btw` 後接您的問題，輸入於提示詞方塊。若尚未 開始對話，CLI 會為您建立一個：

```
/btw Which file did you say defines the UserSession interface?
```

回應會顯示在可摺疊的…中 `/btw` 在提示框上方顯示卡片，同時主對話不受中斷地繼續。一次僅 `/btw` 同一時間只能有一個問題在處理中；如果在第一個問題完成前又問了另一個問題，CLI 會請你稍候。

## 瀏覽並管理 /btw CLI 中的卡片
[「在 CLI 中瀏覽與管理 /btw 卡片」章節](#browse-and-manage-btw-cards-in-the-cli)
在 Antigravity CLI 中， `/btw` 回應儲存在短暫的工作階段歷史記錄中，讓你在對話期間隨時回顧先前的旁支答案。

### 重新開啟先前的 /btw 答案
[「重新開啟先前的 /btw 回應」章節](#reopen-previous-btw-answers)
若要重新開啟最新的 `/btw` 在不提出新問題的情況下顯示卡片，執行 `/btw` 不帶引數：

```
/btw
```

### 卡片導覽控制項
[「卡片導覽控制」章節](#card-navigation-controls)
當 `/btw` 在 CLI 中可見卡片時，使用以下快速鍵：

| 金鑰 | 動作 |
| --- | --- |
| Tab | 展開截斷的答案或收合展開的卡片。 |
| ↑ / ↓ | 當答案超過檢視區高度時，在展開的卡片內以一行向上或向下捲動。否則，這些按鍵保留其一般的提示詞記錄行為。 |
| PgUp / PgDn | 在展開的卡片內以一頁向上或向下捲動。 |
| ← / → | 循環切換上一個與下一個 /btw 目前工作階段中的回應。 |
| Esc | 關閉 /btw 卡片，或取消進行中的 /btw 生成。 |
| Enter | 關閉 /btw 在提示框為空時顯示卡片。如果您已輸入提示詞， Enter 照常提交。 |

## 複製 /btw 回應複製到剪貼簿
[「將 /btw 回應複製到剪貼簿」章節](#copy-a-btw-response-to-the-clipboard)
在 Antigravity CLI 中，您可複製最新的 `/btw` 直接回答至您的系統剪貼簿，無需複製主代理的最後回應。

執行 `/copy` 指令搭配 `btw` 引數：

```
/copy btw
```

CLI 會複製下列項目的完整 Markdown 文字 `/btw` 目前顯示在螢幕上的答案（或若您已關閉卡片，則為最近的答案），即使卡片已收合或捲動，仍會顯示，並顯示確認訊息。

## 後續步驟
[「後續步驟」章節](#next-steps)
探索管理對話情境與工作流程的相關指令：

- [情境指令（ /context )](/docs/cli/commands/context) ：以視覺化方式呈現您的主要對話如何使用模型的上下文視窗。
- [斜線指令總覽](/docs/slash-commands) ：瀏覽 Google Antigravity 中所有跨介面 斜線指令。
- [CLI 參考資料](/docs/cli/reference) ：檢視所有可用的 CLI 斜線指令與鍵盤快速鍵。
[上一個  
瀏覽器（/browser）](/docs/commands/browser/)[下一步  
更新日誌（/changelog）](/docs/cli/commands/changelog/)
