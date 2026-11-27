壓縮指令 (/compact)
2-0
Antigravity 應用程式
指令
壓縮指令 (/compact) Antigravity App 指令
Antigravity 應用程式
Antigravity CLI
適用於：
Antigravity 應用程式
Antigravity CLI
# 壓縮指令 (/compact)

標題為「壓縮指令（/compact）」的章節

將目前為止的對話摘要為結構化檢查點，讓代理從較小的情境視窗繼續，而無需開始新對話或等待自動壓縮。

## 總覽

「總覽」章節

隨著對話增長，每次檔案讀取、指令輸出與中間回合 都會累積在模型的脈絡視窗中。當對話接近模型的脈絡上限時，Antigravity 會自動壓縮 較舊的回合，且 `/compact` 可讓你視需要觸發相同的檢查點步驟，例如 在完成程式碼庫探索或達成里程碑之後：

- **依您的排程釋放上下文**：在過時的記錄或探索性 搜尋排擠你的下一個工作之前，以簡潔的接續檢查點取代先前的對話回合。
- **保留工作狀態**：保留關鍵決策、檔案路徑、錯誤與 修正、附加的媒體與檔案、進行中的背景工作、即時子代理，以及 工作階段 [產出物](/docs/artifacts).
- **不會變更工作區**：壓縮不會呼叫任何工具，也不會修改磁碟上的 檔案。
- **支援壓縮並停止或壓縮並繼續**：執行 `/compact` 自行壓縮並暫停，或在之後傳遞指示 `/compact` 先壓縮 並立即繼續工作。

## 執行 `/compact`

標題為「執行 /compact」的章節

您可以執行 `/compact` 單獨使用，或搭配後續指示。

### 壓縮並停止

標題為「壓縮並停止」的章節

如要摘要目前為止的對話並立即結束回合，請傳送不含其他內容的 `/compact`:

```
/compact
```

Antigravity 會寫入檢查點摘要並停止，不會再次呼叫代理， 因此你的下一則訊息將是第一則在壓縮後脈絡中執行的訊息。

### 壓縮並繼續

標題為「壓縮並繼續」的章節

如要先摘要對話，再讓代理在同一回合中處理您的下一個要求，請在以下項目後方加入訊息 `/compact`:

```
/compact Keep the OAuth token refresh findings, and now add unit tests for the new middleware.
```

您在以下項目後方的文字 `/compact` 引導摘要步驟—讓您可以指定要強調的發現或限制—接著由代理 使用新壓縮的情境回答。

## 介面行為

標題為「介面行為」的章節

[Antigravity 應用程式](#tab-panel-171)[Antigravity CLI](#tab-panel-172)Antigravity 應用程式[「Antigravity App」章節](#sr-tab-1)在 Antigravity 應用程式中 (`v2.21.0+`)，輸入 `/compact` 或 `/compact <message>` 在 撰寫器中並按下 Enter:`/compact` **即時狀態**：產生檢查點摘要期間，你的訊息下方的狀態 列會顯示 **壓縮中** （附經過時間計時器，例如 `Compacting · 45s` 在較長的對話中）。 **取消**: 點擊 **停止** 在壓縮執行期間取消它。已取消的 壓縮不會寫入檢查點，你現有的對話 情境維持不變。 Antigravity CLI[「Antigravity CLI」章節](#sr-tab-2)在 Antigravity CLI 中（`v1.2.15+`)，輸入 `/compact` 或 `/compact <message>` 在 提示詞方塊中並按下 Enter:`/compact`  **即時進度與取消**：壓縮執行期間，待處理行會顯示 `Compacting conversation… (<elapsed> · esc to cancel)`. 按下 Esc / Ctrl + C 取消；CLI 會印出 `Compaction cancelled. Conversation was not compacted.` 並讓您的 情境保持不變。   **壓縮標記與權杖節省**：壓縮完成時， 逐字稿會算繪 `Conversation compacted` 分隔線規則，後接 摘要行： `─────────────────────────── Conversation compacted ────────────────────────────
   142 steps summarized · context 182.4k → ~31.2k (5.1k summary) · took 48s` 壓縮後預估值（`~31.2k` 在此範例中）同時包含新的 檢查點摘要與無法縮減的系統負擔——系統指示、 工具定義與已載入的自訂設定——因此與以下內容相符 [`/context`](/docs/cli/commands/context) 報告。   **空白對話**：如果你直接執行 `/compact` 在代理 完成至少一個回應之前，CLI 會列印 `Nothing to compact yet.` 無需發出模型請求。執行 `/compact <message>` 在任何 回應傳送之前 `<message>` 照常交給代理。   **檢查已更新的使用量**：執行 [`/context`](/docs/cli/commands/context) 在 壓縮後檢視更新後的情境視窗格線、可用空間與 **檢查點** 數量。   **無頭模式**: `/compact` 在以下情境恢復對話時也適用 [無頭模式](/docs/cli/headless) （例如， `agy -c -p "/compact Now run the integration test suite"`），除非 `--disable-slash-commands` （或 `"disableSlashCommands": true` 於 `settings.json`）已設定。

## 壓縮會保留哪些內容

標題為「壓縮會保留哪些內容」的章節

何時 `/compact` 執行時，Antigravity 會以結合結構化摘要與確定性 工作階段狀態的檢查點，取代作用中模型 情境中的較舊原始步驟：

1. **結構化接續摘要**：記錄你的工作概覽與成功 標準、已完成的進度（檔案路徑、已執行的指令與驗證 結果）、關鍵技術發現與決策、遇到的錯誤及其修正方式（包括已嘗試並放棄的方法）、目前 脈絡、剩餘的後續步驟，以及常駐規則或限制。
2. **確定性工作階段快照**：保留最近的使用者請求與 附加的圖片、PDF 與檔案、進行中的背景工作、即時 [子代理](/docs/subagents)，以及工作階段 [產出物](/docs/artifacts) （例如實作計畫與導覽）與文字摘要一併呈現。
3. **工作區與自訂設定**：你磁碟上的檔案與你已載入的 [規則](/docs/rules), [技能](/docs/skills)，工具，以及 [MCP 伺服器](/docs/mcp) 如常維持作用中。

較早的訊息仍會顯示在對話捲動記錄與已儲存的工作階段記錄中；壓縮只會縮短未來模型請求中傳送的內容。

## 選擇正確的上下文指令

標題為「選擇合適的情境指令」的章節

使用 `/compact` 搭配 Antigravity 的其他工作階段與情境工具，取決於 您想保留的內容：

| 目標 | 指令或動作 | 情境會發生什麼變化 |
| --- | --- | --- |
| 使用較小的上下文視窗繼續處理相同工作 | `/compact [message]` | 將先前的回合摘要為檢查點，並在同一對話中繼續。 |
| 提出快速的附帶問題，而不加入記錄 | [`/btw <question>`](/docs/commands/btw) | 在唯讀分支中回答，讓問題與其工具呼叫都不會進入主要對話。 |
| 依類別檢查目前的權杖使用量 (CLI) | [`/context`](/docs/cli/commands/context) | 開啟上下文使用量網格、權杖細目與檢查點數量，不會修改記錄。 |
| 復原錯誤的回合或失敗的分支 | `/rewind` （CLI）或 **還原** 在較早的提示詞上（App） | 將對話回復至較早的訊息，而非將失敗的嘗試保留在上下文中。 |
| 平行嘗試替代做法 | `/fork` （CLI）或 **分叉** （App） | 將截至該時間點的對話複製到另一個工作階段。 |
| 切換至完全不相關的任務 | `/clear` / `/new` （CLI）或 **新對話** （App） | 以空白記錄開始新的對話。 |

## 後續步驟

「後續步驟」章節

- **[情境視窗與權杖](/docs/learn/context-and-tokens)**：了解權杖的 運作方式、聚焦上下文為何勝過傾倒整個存放區，以及何時 壓縮。
- **[情境指令（`/context`)](/docs/cli/commands/context)**：以視覺化方式呈現你的對話在 Antigravity CLI 中如何耗用模型的脈絡視窗。
- **[旁問指令（`/btw`)](/docs/commands/btw)**：提出快速問題， 而不會為你目前的對話增加回合。
- **[管理對話](/docs/cli/conversations)**：繼續、建立分支並 整理 CLI 工作階段。
- **[斜線指令總覽](/docs/slash-commands)**：瀏覽 Google Antigravity 中所有跨介面 斜線指令。
- **[CLI 指令](/docs/cli/reference)**：查看所有 CLI 斜線指令、 鍵盤快速鍵與旗標。

上一個
/btw

下一步
/goal

您的下載已開始您如何得知我們？請選一個。這有助於我們接觸更多像您一樣的人。感謝您讓我們知道！
