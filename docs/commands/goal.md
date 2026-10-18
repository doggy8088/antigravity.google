# 目標指令（/goal）

目標指令（/goal）2-0Antigravity 應用程式功能目標指令（/goal）Antigravity 應用程式功能Antigravity 應用程式Antigravity CLIAntigravity IDE適用於：Antigravity 應用程式Antigravity CLIAntigravity IDE
# 目標指令（/goal）
[「目標指令（/goal）」章節](#goal-command-goal)
自主執行複雜的長時程工程目標。代理 會持續工作、驗證與修正，直到確信目標已 完全達成，而非在每個中間 步驟後就交回給您。

## 總覽
[「總覽」章節](#overview)
預設情況下，代理會在認為已回答您的請求時結束該輪。對於長時間任務（例如整夜遷移或修正所有失敗測試的掃描），這表示代理可能提早停止、回報部分進度，並等待您說「繼續」。

The `/goal` 指令將代理置於 **目標模式** 適用於目前的請求：

- 無提前停止 ：每當代理試圖在目標完成前結束其回合，Antigravity 會阻擋停止動作，並提示代理審查自己的工作後繼續。
- 以證據為基礎的完成 ：在總結前，代理會被指示將 原始要求中的每個交付項目對應至具體證據，例如 檔案內容、測試結果與建置日誌。
- 執行直到完成或取消 ：沒有迭代次數上限。目標只在代理宣告完成，或您要求代理停止時才會結束。
- 等待輔助程式 ：目標模式不會在代理所依賴的 子代理或背景任務仍在執行時強制代理繼續，因此委派的 工作可正常完成。

目標模式只會改變代理的停止行為。它不會改變你的 [工具權限](/docs/permissions) 或 [產出物審查政策](/docs/artifact-review)，因此您通常 會被要求的所有核准仍然適用。

## 開始目標
[「開始目標」章節](#start-a-goal)
類型 `/goal` 後接您希望代理追求的目標。撰寫 目標時請使用明確、可驗證的完成條件，讓代理在 結束前知道應檢查哪些證據。

- Antigravity 應用程式
- Antigravity CLI

### Antigravity 應用程式
[「Antigravity App」章節](#sr-tab-1)
在撰寫器中輸入指令：

```
/goal Migrate the auth package from session cookies to OAuth2 and make sure all unit and integration tests pass
```

An **進行中目標** 指示器顯示於撰寫器上方，目標執行 時。對話中較早的目標列於側邊面板 並附其 **使用中**, **已完成**，或 **已取消** 狀態。

### Antigravity CLI
[「Antigravity CLI」章節](#sr-tab-2)
在互動式提示中輸入指令：

```
/goal Migrate the auth package from session cookies to OAuth2 and make sure all unit and integration tests pass
```

代理會在終端機中跨回合持續工作。使用 `/tasks` 監控它沿途啟動的任何背景殼層命令、計時器或子代理。

## 目標模式的運作方式
[「目標模式的運作方式」章節](#how-goal-mode-works)
當您開始一個目標時，Antigravity 會在每個回合追蹤它，直到結束：

1. 您的目標已記錄。 之後的文字 /goal 成為目標，且代理被告知該任務預計長時間執行，無需進一步輸入。
2. 停止動作會被攔截。 每次代理嘗試完成時， 目標停止掛鉤 檢查目標是否仍在進行中。若是，代理會收到提醒，包含已花費時間、繼續次數與原始請求。
3. 代理會稽核自己的工作。 提醒會指示代理重新閱讀 請求、建立交付項目檢查清單，並依據實際輸出逐一確認，而不是假設投入等於完成。
4. 目標結束。 代理會在每個交付項目 都驗證通過時發出完成訊號；如果您明確要求停止，則會取消目標。

## 取消目標
[「取消目標」章節](#cancel-a-goal)
若要停止執行中的目標，請在後續訊息中告知代理停止或取消，例如：

```
Stop the current goal. I'll take it from here.
```

代理會標記目標 **已取消** 並正常結束其回合。開始新的 `/goal` 也會取消啟用中的那個。

## 撰寫有效的目標
[「撰寫有效的目標」章節](#write-effective-goals)
目標模式的好壞取決於你給的完成條件。 以下模式可協助代理判斷何時真正完成：

- 為證據命名 ：「位於下列位置的所有測試： packages/api 傳入」，「 npm run build 以零錯誤退出」或「基準測試中的 p95 延遲低於 50 ms。」
- 劃定工作範圍 ：列出範圍內的套件、服務或檔案，讓代理 不會過早停止或無限擴展。
- 大幅變更先擬定計畫 ：執行 `/plan` 或 /grill-me 之前 /goal 就做法達成共識，然後將核准的計畫交給目標模式執行。
- 與計時器配對 ：若要在長期目標期間進行循環簽到，請使用 `/schedule` 讓代理定期回報進度。

## 後續步驟
[「後續步驟」章節](#next-steps)
探索相關文件：

- 計畫指令（`/plan`) ：在執行長期目標前， 草擬可審查的實作計畫。
- 排程指令（`/schedule`) ：在長期工作中設定計時器與 循環簽到。
- 子代理 ：了解代理如何委派目標 模式等待的工作。
- 斜線指令總覽 ：瀏覽所有可用的 斜線指令。
[上一個  
推理投入（/effort）](/docs/cli/commands/effort/)[下一步  
學習 (/learn)](/docs/commands/learn/)
