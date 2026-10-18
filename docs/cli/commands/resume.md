# 恢復指令（/resume）

恢復指令（/resume）— Antigravity CLIcliAntigravity CLI功能恢復指令（/resume）— Antigravity CLI Antigravity CLI 功能Antigravity CLI適用於：Antigravity CLI
# 恢復指令（/resume）
[「恢復指令（/resume）」章節](#resume-command-resume)
瀏覽、搜尋並接續先前的對話串，或從命令列即時復原您最近的工作階段。

## 總覽
[「總覽」章節](#overview)
Antigravity CLI 讓您可以維持多個進行中的開發執行緒。 `/resume` 指令會開啟互動式 **工作階段選擇器** 用於瀏覽並載入歷程記錄的 TUI 面板。您也可以使用命令列旗標，直接從主機終端機繼續工作階段。

---

## 互動式工作階段選擇器
[「互動式工作階段選擇器」章節](#interactive-session-picker)
若要開啟 **工作階段選擇器** 於 TUI 內部，請依下列步驟操作：

1. 類型 /resume （或別名（複數） /switch , /conversation ）於提示方塊中。
2. 按下 Enter .

```
/resume
```

### 導覽與搜尋對話
[「導覽與搜尋對話」章節](#navigating-and-searching-conversations)
The **工作階段選擇器** 顯示依新舊排序（最新優先）的過去對話清單。使用以下控制項與清單互動：

- 搜尋 ：開始輸入以依標題、預覽文字或唯一 ID 即時篩選對話。
- 導覽 ：使用 ↑ / ↓ 捲動篩選後的清單。
- 頁面 ：使用 ← / → 向前與向後翻閱較舊的歷史記錄區塊。
- 選取 ：突顯目標工作階段並按下 Enter 載入它。
- 離開 ：按下 Esc 關閉選取器並返回使用中的提示詞。

### 重新命名對話
[「重新命名對話」章節](#renaming-a-conversation)
為維持歷程記錄井然有序，您可直接在選擇器中重新命名對話：

1. 使用 ↑ / ↓ 反白你想重新命名的對話。
2. 按下 F2 。輸入欄位會在面板底部開啟，並預先填入目前的標題。
3. 輸入新名稱並按下 Enter 儲存，或 Esc 取消。

### 刪除對話
[「刪除對話」章節](#deleting-a-conversation)
若要清理過時的執行緒，請依照下列步驟操作：

1. 在清單中反白標示目標對話。
2. 按下 Ctrl + Delete 。會出現確認提示。
3. 按下 Enter （或 Y ）以確認刪除，或 Esc （或 N ）以取消。

### 從 Antigravity 應用程式匯入
[「從 Antigravity App 匯入」章節](#importing-from-the-antigravity-app)
您可以匯入並繼續在 Antigravity 應用程式中發起的進行中對話串：

1. 透過 工作階段選擇器 開啟，按下 Tab 從…切換 CLI 分頁至 Antigravity 分頁。
2. 反白標示要匯入的桌面對話。
3. 按下 Enter 。確認提示 [Import this? (y/n)] 出現。
4. 按下 Enter （或 Y ）以確認。CLI 會將歷程記錄、內容與工具軌跡複製到您的終端機工作階段。

---

## 命令列快速鍵
[「命令列快速鍵」章節](#command-line-shortcuts)
啟動時，您可以略過 TUI 選擇器，直接繼續工作階段 `agy` 從您的主機 shell。

### 快速恢復上一個工作階段（ -c / --continue )
[「快速恢復上一個工作階段（-c / --continue）」章節](#quick-resume-last-session--c----continue)
若要立即繼續與目前工作區相關的最新單一對話，請執行下列指令：

```
agy -c
```

*（替代方案： agy --continue )*

### 恢復特定工作階段（ --conversation )
[「恢復特定工作階段（--conversation）」章節](#resume-specific-session---conversation)
若要直接依唯一 ID 載入特定對話，請執行下列指令：

```
agy --conversation <conversation-id>
```

---

## 幕後花絮：工作階段快取
[「幕後原理：工作階段快取」章節](#under-the-hood-the-session-cache)
當您使用 `-c` / `--continue` 旗標，CLI 會使用本機工作區鍵控快取解析目標工作階段。

### 快取檔
[「快取檔案」章節](#the-cache-file)
工作階段快取檔具有下列屬性：

- 位置 : ~/.gemini/antigravity-cli/cache/last_conversations.json
- 格式 ：JSON 對應表，將工作區目錄的絕對路徑與其最近使用的工作階段 ID 關聯： `{"/usr/local/google/home/username/Develop/my-project":"a1b2c3d4-e5f6-7890-abcd-ef1234567890","/usr/local/google/home/username/Develop/another-repo":"f9e8d7c6-b5a4-3210-fedc-ba9876543210"}`

### 解決工作流程
[「解決工作流程」章節](#resolution-workflow)
CLI 會依下列順序解析工作階段：

1. 啟動 ：您執行 agy -c 來自 /path/to/workspace .
2. 查閱 ：CLI 會讀取 last_conversations.json 並查閱該金鑰 /path/to/workspace .
3. 驗證 ：若找到 ID，CLI 會查詢後端以驗證對話仍存在。
4. 載入 ：載入適當的工作階段：
  - 若驗證通過，會載入工作階段。
  - 若對話已刪除或金鑰遺失，會為該工作區啟動全新的工作階段。

---

## 另請參閱
[「另請參閱」章節](#see-also)
探索下列指南以進一步了解工作階段與設定管理：

- [管理對話](/docs/cli/conversations) ：透過以下項目了解工作區範圍界定與分支 /fork .
- [CLI 參考資料](/docs/cli/reference) ：檢視所有可用的斜線指令與預設按鍵綁定。
- [設定、算繪與按鍵繫結](/docs/cli/settings) ：設定算繪模式並自訂鍵盤快速鍵。
[上一個  
計畫（/plan）](/docs/plan/)[下一步  
排程（/schedule）](/docs/commands/schedule/)
