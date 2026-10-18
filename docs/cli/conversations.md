# 管理對話

管理對話 - Antigravity CLIcliAntigravity CLI功能管理對話 - Antigravity CLI Antigravity CLI 功能Antigravity CLI適用於：Antigravity CLI
# 管理對話
[「管理對話」章節](#managing-conversations)
恢復先前的開發線程、將使用中的歷史記錄範圍限於本機工作區，並分叉對話以實驗替代架構。

## 工作區範圍界定
[「工作區範圍設定」章節](#workspace-scoping)
為維持內容衛生，Antigravity CLI 會將對話歷程記錄範圍直接限定於目前的工作目錄。當您啟動 `agy` 從特定目錄執行時，代理僅顯示並繼續與該特定本機儲存庫或子目錄關聯的工作階段。

這可防止上下文污染，確保代理的語意記憶與權杖限制只聚焦於相關的程式碼庫。

## 恢復工作階段
[「恢復工作階段」章節](#resuming-sessions)
您可以隨時回到先前的對話，繼續實作、精煉解決方案，或從中斷的工作階段復原。

Antigravity CLI 同時支援互動式 **工作階段選擇器** TUI 覆蓋層與直接命令列旗標 (`agy -c` / `agy --continue`）根據作用中的工作區即時恢復執行緒。

關於互動式選擇器、鍵盤快速鍵，以及目錄範圍工作階段快取運作方式的完整導覽，請參閱專屬 **恢復指令指南**.

## 使用以下項目分支 /fork
[「使用 /fork 分支」章節](#branching-with-fork)
在開發複雜功能時，您可能想在不遺失進度的情況下探索多種設計方案。下列項目 `/fork` 指令可實現安全、平行的實驗。

```
/fork
```

*（別名： /branch )*

The `/fork` 指令將您截至目前回合的整個對話記錄複製到新的獨立工作階段。

### 分叉工作流程
[「分支出工作流程」章節](#forking-workflow)
若要將使用中的對話分支為新分支，請依照下列步驟操作：

1. 類型 /fork 於提示詞面板內部並按下 Enter .
2. CLI 會配置新的唯一工作階段 ID，並複製您現有的工作區狀態與代理執行緒。
3. 您的啟用中終端機會立即切換至新分支。
4. 若實驗失敗，請執行 /resume 還原你原本穩定的對話分支。

## 後續步驟
[「後續步驟」章節](#next-steps)
探索代理如何處理複雜的非同步作業與平行任務：

- [背景工作與子代理](/docs/cli/subagents) ：監控子代理並處理快速通道核准。
- [設定、算繪與按鍵繫結](/docs/cli/settings) ：設定算繪緩衝區並覆寫 JSON 偏好設定。
- [權限與沙箱](/docs/cli/sandbox) ：管理安全設定檔與系統指令清單。
[上一個  
提示與互動](/docs/cli/prompting/)[下一步  
總覽](/docs/permissions/)
