狀態列指令 (/statusline) - Antigravity CLI
cli
Antigravity CLI
功能
狀態列指令 (/statusline) - Antigravity CLI Antigravity CLI 功能
Antigravity CLI
適用於：
Antigravity CLI
# 狀態列指令 (/statusline)

[「狀態列指令（/statusline）」章節](#status-line-command-statusline)

切換 TUI 狀態列，或設定自訂呈現指令。

## 總覽

[「總覽」章節](#overview)

The `/statusline` 指令可讓您快速啟用或停用 TUI 底部的狀態列，或設定自訂殼層指令以動態轉譯它，無需手動編輯設定檔。

關於如何撰寫自訂狀態列指令碼與 JSON 狀態承載結構描述的詳細資訊，請參閱概念性 **[狀態列自訂指南](/docs/cli/statusline)**.

## 用量

[「用量」章節](#usage)

執行 `/statusline` 指令搭配以下引數以控制其行為。

### 切換狀態列

[「切換狀態列」章節](#toggle-status-line)

類型 `/statusline` 不帶引數以切換狀態列的開關：

```
/statusline
```

### 明確啟用或停用

[「明確啟用或停用」章節](#enable-or-disable-explicitly)

您可以明確啟用或停用狀態列：

- **啟用**: `/statusline on` 或 `/statusline enable`
- **停用**: `/statusline off` 或 `/statusline disable`

```
/statusline off
```

### 設定自訂指令

[「設定自訂指令」章節](#configure-a-custom-command)

若要將代理狀態 JSON 承載路由至自訂指令碼並在狀態列中呈現其輸出，請將指令作為引數傳遞：

```
/statusline ~/.gemini/antigravity-cli/statusline.sh
```

這會立即更新您的設定，並開始執行指令碼以呈現狀態列。

### 還原為預設值

[「還原為預設值」章節](#revert-to-default)

若要刪除自訂指令設定並還原為內建預設狀態列，請執行下列指令：

```
/statusline delete
```

*（備註： `/statusline reset` 亦支援。）*

### 顯示說明

[「顯示說明」章節](#show-help)

若要檢視快速指令參考，請執行下列指令：

```
/statusline help
```

## 後續步驟

[「後續步驟」章節](#next-steps)

探索下列指南以進一步自訂您的終端機顯示：

- **[狀態列指南](/docs/cli/statusline)**：了解如何撰寫自訂指令碼並處理 JSON 承載。
- **[視窗標題指令](/docs/cli/commands/title)**：設定動態終端機視窗標題。
- **[CLI 參考資料](/docs/cli/reference)**：檢視所有可用的斜線指令。

[上一個
/schedule](/docs/commands/schedule/)

[下一步
/swarm](/docs/swarm/)

您的下載已開始

## 您如何得知我們？

請選一個。這有助於我們接觸更多像您一樣的人。

感謝您讓我們知道！
