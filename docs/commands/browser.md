# 瀏覽器指令（/browser）

瀏覽器指令（/browser）2-0Antigravity 應用程式功能瀏覽器指令（/browser）Antigravity App 功能Antigravity 應用程式Antigravity CLI適用於：Antigravity 應用程式Antigravity CLI
# 瀏覽器指令（/browser）
[「瀏覽器指令（/browser）」章節](#browser-command-browser)
將網頁工作交給內建 **browser 子代理**，驅動 Google Chrome 瀏覽頁面、與您執行中的應用程式互動、檢查主控台 與網路，並擷取螢幕截圖與錄製。

## 總覽
[「總覽」章節](#overview)
許多開發任務最終都落在瀏覽器中：確認版面配置修正已呈現、重現主控台錯誤、端到端填寫表單，或閱讀一頁文件。而 `/browser` 指令告訴主代理將您的請求委派給專門化 `browser` 透過其…的子代理 `invoke_subagent` 工具。

The `browser` 子代理專為此工作打造：

- 真正的 Chrome，真正的 DevTools ：子代理透過 Chrome DevTools MCP 伺服器控制 Google Chrome，Antigravity 會在呼叫子代理時自動啟動該伺服器，無需手動設定。
- 隔離的情境 ：如同其他 子代理 ，它會在 擁有乾淨內容視窗的獨立對話中執行，因此長頁面快照與 主控台記錄不會擠佔您的主要對話。
- 錄製的工作階段 ：每個瀏覽器工作階段都會錄製並儲存至對話的 產出物，格式為 WebM 影片。錄影會 非同步產生，代理會在可用時通知您。
- 僅依需求 ：the browser 子代理會從代理的一般子代理清單中隱藏。只有在你呼叫…時，主代理才會使用它 /browser .

## 執行瀏覽器任務
[「執行瀏覽器工作」章節](#run-a-browser-task)
類型 `/browser` 後接任務。描述清楚的結束條件，讓 子代理知道何時回傳，例如「回報 X 是否渲染」或「擷取 Y 的螢幕截圖」。

- Antigravity 應用程式
- Antigravity CLI

### Antigravity 應用程式
[「Antigravity App」章節](#sr-tab-1)
在撰寫器中輸入指令：

```
/browser Open http://localhost:3000, resize to a 390px-wide mobile viewport, verify the navigation drawer opens and closes, and capture a screenshot of each state
```

子代理的進度會顯示在子代理面板中。工作完成後，螢幕截圖與 工作階段錄影會加入對話的產出物。

### Antigravity CLI
[「Antigravity CLI」章節](#sr-tab-2)
在互動式提示中輸入指令：

```
/browser Open http://localhost:3000/dashboard, verify that the analytics charts render, and report any console errors
```

按下 Alt+J 或執行 `/agents` 切換至子代理的對話並觀看它工作。

子代理首次連線時，Chrome 會要求您允許遠端 除錯。請接受提示，讓子代理能附加至瀏覽器。

## 瀏覽器子代理能做什麼
[「瀏覽器子代理可執行的作業」章節](#what-the-browser-subagent-can-do)
子代理可存取一組聚焦的 Chrome DevTools 工具：

| 功能 | 範例 |
| --- | --- |
| 導覽與管理分頁 | 開啟 URL、建立或關閉頁面、在分頁之間切換、等待元素或文字出現。 |
| 與頁面互動 | 按一下、懸停、拖曳、按鍵、輸入文字、填寫個別欄位或整個表單、上傳檔案、處理對話框。 |
| 檢查狀態 | 擷取頁面的無障礙快照、擷取螢幕截圖、列出或擷取主控台訊息與網路請求。 |
| 偵錯與剖析 | 在頁面中執行 JavaScript、啟動與停止效能追蹤、分析效能洞見、執行 Lighthouse 稽核、擷取堆積快照。 |
| 模擬條件 | 調整檢視區大小，並模擬裝置與網路條件，例如節流連線與 CPU 降速。 |

在頁面中執行 JavaScript（`evaluate_script`）預設會徵求您的核准。所有其他瀏覽器工具會自動允許子代理使用。您可以在…中調整此設定 [工具權限](/docs/permissions).

## 範例任務
[「工作範例」章節](#example-tasks)
下列提示詞顯示典型的 `/browser` 工作流程：

- **驗證 UI 修正**: `/browser Reload http://localhost:5173/settings and confirm the save button is no longer disabled after editing the display name`
- **重現主控台錯誤**: `/browser Go to http://localhost:3000/checkout, add any item to the cart, and report the full text and stack of any console errors`
- **檢查回應式與低速網路行為**: `/browser Load http://localhost:3000 with a Slow 3G network profile and a 375px viewport, then screenshot the hero section once it finishes loading`
- **研究文件**: `/browser Open the Astro docs for content collections and summarize how to define a schema with zod`

## 後續步驟
[「後續步驟」章節](#next-steps)
探索相關文件：

- 子代理 ：了解內建與自訂子代理如何在 隔離上下文中執行。
- 權限 ：控制哪些瀏覽器工具 自動執行，哪些先詢問。
- 產出物 ：尋找子代理產生的 螢幕截圖與工作階段錄影。
- 斜線指令總覽 ：瀏覽所有可用的 斜線指令。
[上一個  
提升（/boost）](/docs/boost/)[下一步  
旁問（/btw）](/docs/cli/commands/btw/)
