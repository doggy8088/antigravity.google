# CLI 最佳實務

CLI 最佳實務 - Antigravity CLIcliAntigravity CLI開始使用CLI 最佳實務 - Antigravity CLI Antigravity CLI 開始使用Antigravity CLI
# CLI 最佳實務
[「CLI 最佳實務」章節](#cli-best-practices)
掌握工作流程、提示詞架構與本機設定選擇，在維持穩健控制的同時最大化代理速度。

## 建立驗證迴圈
[「建立驗證迴圈」章節](#establish-verification-loops)
要確保自主代理做出可靠且正確的修改，最有效的方法是為代理提供本機驗證機制（例如單元測試、建置指令或格式化指令碼）。

在要求代理實作程式碼變更之前，請依序執行下列步驟：

1. 確認您的工作區目錄已有可用的測試套件。
2. 若測試不存在，請指示代理撰寫標準測試區塊 第一 .
3. 代理提出程式碼後，請指示它執行本機測試指令以驗證其工作。
4. 觀看代理執行指令並自動反覆處理測試輸出。

```
> Implement feature X in main.py. Run npm test afterward to verify the build.
```

## 探索、規劃，再執行
[「探索、計畫，再執行」章節](#explore-plan-then-execute)
將複雜變更劃分為探索、規劃與執行三個明確階段時，自主本機代理的準確度最高：

- 探索 ：請代理在撰寫任何變更前，先說明目標程式碼庫如何解決特定問題，或介面定義於何處。
- 規劃 ：要求實作計畫。代理會在實作計畫產出物中列出目標檔案、必要相依性與邏輯覆寫。
- 執行 ：一旦您核准結構化計畫，請指示代理套用編輯。

```
> Explore how our router resolves `/docs/:page`. Write down an implementation plan to add `/docs/best-practices`.
```

## 豐富您的提示詞情境
[「豐富提示詞上下文」章節](#enrich-your-prompting-context)
為本機代理提供高保真指標，以縮小推理邊界並最小化權杖開銷。

### 目標檔案自動補全
[「目標檔案自動完成」章節](#target-file-autocompletion)
類型 `@` 在你的提示詞框內以觸發 **互動式路徑建議** 覆蓋層。突顯並選取路徑會將絕對工作區檔案路徑直接匯入您的提示詞。這有助於代理鎖定其程式碼搜尋。

### 附加視覺證據
[「附加視覺證據」章節](#attaching-visual-evidence)
若您正在除錯視覺 UI 問題、渲染錯誤或前端版面配置不一致，請擷取螢幕截圖或錄影，複製後按下 `ctrl+v` 於提示詞方塊內部以附加。代理會參考媒體檔案來診斷問題。

## 設定您的工作區環境
[「設定工作區環境」章節](#configure-your-workspace-environment)
最佳化本機工作站規則與安全邊界，以符合您的工程流程。

### 撰寫程式碼庫規則檔案
[「撰寫程式碼庫規則檔案」章節](#write-a-codebase-rule-file)
建立 `GEMINI.md` 或 `AGENTS.md` 檔案置於工作區根目錄，概述特定目錄標準、樣式典範、測試指令參數與棄用警告。代理在啟動時會自動解析這些規則，並在建議變更前參考它們。

### 建立結構化權限
[「建立結構化權限」章節](#establish-structured-permissions)
在下列項目中調整您的安全屏障 `~/.gemini/antigravity-cli/settings.json` 依您的專案風險等級：

- `request-review` （預設值）：在執行任何寫入操作、Bash 指令或遠端網路呼叫前提示您。
- `proceed-in-sandbox` ：將所有終端機執行限制於安全沙箱隔離環。安全的指令會自主執行，有風險的指令則提示審查。
- `strict` ：對所有非讀取作業一律提示，提供完整的逐行透明度。

```
{
    "toolPermission": "proceed-in-sandbox",
    "enableTerminalSandbox": true
}
```

## 主動管理 TUI 工作階段
[「主動管理 TUI 工作階段」章節](#manage-tui-sessions-proactively)
使用使用中的工作階段導覽工具，從工程死胡同中復原或修正中途的代理迴圈。

### 及早修正（ esc )
[「及早修正方向（esc）」章節](#course-correct-early-esc)
若您看到代理執行了錯誤的搜尋模式，或撰寫的程式碼偏離您的意圖，請按下全域逃生鍵 `esc` 立即中斷回合並將焦點回到乾淨的提示詞方塊。

### 使用以下方式回溯歷史記錄 /rewind
[「使用 /rewind 倒回歷程」章節](#rewind-history-with-rewind)
若代理連續多次變更導致建置錯誤，您無須捨棄工作階段。請輸入 `/rewind` （或 `/undo`）將對話執行緒回復到先前的穩定 checkout。

### 使用以下項目分支實驗 /fork
[「使用 /fork 分支出實驗」章節](#branch-experiments-with-fork)
若您不確定最佳實作路徑，請依下列步驟操作：

1. 達到穩定的基準線程。
2. 類型 /fork 啟動重複的平行工作階段。
3. 在分支工作階段中測試您的推測性程式碼修改。
4. 若方法失敗，請執行 /resume 切換回你穩定的主分支。

## 自動化與指令碼
[「自動化與指令碼」章節](#automate-and-script)
Antigravity CLI 的設計可在標準 shell 管線工具中無縫運作。

### 執行非互動指令（ -p )
[「執行非互動式指令（-p）」章節](#run-non-interactive-commands--p)
若要自動化快速查詢或將代理整合至 Git 掛鉤，請使用單次提示詞旗標 `-p`:

```
agy -p "Review this git diff and draft a conventional commit message" --cwd $(pwd)
```

### 使用平行子代理分散執行
[「使用平行子代理扇出」章節](#fan-out-using-parallel-subagents)
對於大規模掃描或多檔案重構，指示主要代理產生並行的背景子代理。代理管理員會自主處理背景執行緒，你則可在主要畫面上繼續工作。

## 相關資源
[「相關資源」章節](#related-resources)
了解如何設定設定值並自訂視覺版面配置：

- [設定、算繪與按鍵繫結](/docs/cli/settings) ：自訂鍵盤快速鍵與緩衝區。
- [權限與沙箱](/docs/cli/sandbox) ：強制執行檔案系統隔離。
- [外掛程式與技能](/docs/cli/plugins) ：建立您自己的自訂斜線指令。
[上一個  
CLI 疑難排解](/docs/cli/troubleshooting/)[下一步  
CLI AI 點數](/docs/cli/credits/)
