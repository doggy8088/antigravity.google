# 更新日誌指令（/changelog）

更新日誌指令（/changelog） - Antigravity CLIcliAntigravity CLI功能更新日誌指令（/changelog） - Antigravity CLI Antigravity CLI 功能Antigravity CLI適用於：Antigravity CLI
# 更新日誌指令（/changelog）
[「更新日誌指令（/changelog）」章節](#changelog-command-changelog)
直接在終端機中瀏覽版本化的 Antigravity CLI 版本資訊與近期變更。

## 總覽
[「總覽」章節](#overview)
The `/changelog` 指令會在 Antigravity CLI 中開啟可捲動的 Markdown 檢視器，顯示版本化版本資訊、新功能與錯誤修正。

當您執行 `/changelog`，CLI 會擷取最新發布的版本資訊 並將其快取於本機的 `~/.gemini/antigravity-cli/cache/CHANGELOG.md`。若您 在離線或受限網路後工作，CLI 會自動 退回您的快取副本或內嵌於已安裝…中的版本資訊 `agy` 二進位。

## 在 TUI 中檢視版本資訊
[「在 TUI 中檢視版本說明」章節](#view-release-notes-in-the-tui)
若要在 CLI 工作階段期間開啟互動式更新日誌檢視器，請執行下列指令：

```
/changelog
```

檢視器會按版本標題呈現版本說明， 最新版本在前：

```
## 1.3.2

- Added `/plugin`, an interactive manager for the official Antigravity plugin
  marketplace: browse and install plugins that bundle skills, MCP servers,
  subagents, rules, and hooks...
```

### 導覽控制項
[「導覽控制」章節](#navigation-controls)
使用下列鍵盤快捷鍵捲動版本歷程記錄：

| 金鑰 | 動作 |
| --- | --- |
| ↑ / ↓ （或 k / j ) | 以一行向上或向下捲動。 |
| PgUp / PgDn | 以一頁向上或向下捲動。 |
| Ctrl + U / Ctrl + D | 以半頁為單位向上或向下捲動。 |
| g / Shift + G | 跳至更新日誌的頂部或底部。 |
| Esc | 關閉更新日誌檢視器並返回提示詞。 |

## 在無頭模式中列印發行說明
[「在無頭模式中列印版本說明」章節](#print-release-notes-in-headless-mode)
您也可以執行 `/changelog` 在無頭模式下 (`-p` 或 `--print`）以將版本資訊直接輸出至 `stdout` 無需啟動互動式工作階段或消耗模型配額。

若要將 Markdown 更新日誌列印至終端機或透過管線傳至分頁程式，請執行下列指令：

```
agy -p "/changelog"
```

若要以結構化 JSON 格式擷取更新日誌供指令碼或自動化使用，請傳遞 `--output-format json`:

```
agy -p "/changelog" --output-format json
```

您也可以使用獨立版列印版本資訊 `changelog` 子命令，不需要提示詞：

```
agy changelog
```

## 後續步驟
[「後續步驟」章節](#next-steps)
探索下列資源，讓您的 CLI 安裝保持最新並探索更多指令：

- [安裝與驗證](/docs/cli/install) ：使用以下方式將您的 CLI 二進位檔更新至最新版本 agy update .
- [發行更新日誌](/docs/changelog) ：檢視 Google Antigravity 的完整網頁更新日誌。
- [CLI 參考資料](/docs/cli/reference) ：檢視所有可用的斜線指令與鍵盤快速鍵。
[上一個  
旁問（/btw）](/docs/cli/commands/btw/)[下一步  
程式碼搜尋（/codesearch）](/docs/cli/commands/codesearch/)
