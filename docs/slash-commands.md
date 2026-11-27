斜線指令總覽
2-0
Antigravity 應用程式
指令
斜線指令總覽 Antigravity App 指令
Antigravity 應用程式
Antigravity CLI
IDE 擴充功能
Antigravity IDE
適用於：
Antigravity 應用程式
Antigravity CLI
IDE 擴充功能
Antigravity IDE
# 斜線指令總覽

「斜線指令總覽」章節

斜線指令是代理工作流程與工具的快速鍵。輸入 `/` 在 的提示詞方塊中 **Antigravity 應用程式** 或 **Antigravity CLI** 開啟 指令選單，並繼續輸入以篩選。

下列指令依您的操作目的分組，每個指令都連結至其指南。 **適用於** 列出你可以使用它的位置：Antigravity App（App）、 Antigravity CLI（CLI）或 IDE 擴充功能。IDE 擴充功能指的是 VS Code、 Visual Studio 與 Eclipse，除非另有說明。獨立的 Antigravity IDE 與 VS Code 擴充功能提供相同的指令。

適用於每個 CLI 指令，包括以下公用程式： `/clear`, `/help`，與 `/model`，請參閱 [CLI 指令](/docs/cli/reference).

## 先計畫再動工

標題為「先規劃再建置」的章節

在代理變更任何程式碼之前，先就做法達成共識。

| 指令 | 其功能 | 適用於 |
| --- | --- | --- |
| [`/plan`](/docs/plan) | 在進行任何編輯之前，探索程式碼庫、釐清需求，並草擬可審查的實作計畫。 | App、CLI、IDE 擴充功能（所有編輯器） |
| [`/grill-me`](/docs/commands/grill-me) | 在代理開始工作之前，一次向您詢問一個問題，每個問題都附有建議答案。 | App、CLI、IDE 擴充功能 |

例如：

```
/plan Refactor our authentication middleware to support OIDC token verification with JWKS caching
```

如要將訪談轉為計畫，請同時使用： `/plan /grill-me <task>`.

## 委派工作

標題為「委派工作」的章節

賦予代理更多自主權、更深入的推理、更多代理、瀏覽器或排程。

| 指令 | 其功能 | 適用於 |
| --- | --- | --- |
| [`/goal`](/docs/commands/goal) | 持續工作，不暫停等待確認，直到目標確認完成為止。 | App、CLI、IDE 擴充功能 |
| [`/boost`](/docs/boost) | 針對困難的錯誤、競爭條件與演算法執行多代理深度推理。僅適用於付費方案。 | App、CLI、IDE 擴充功能 |
| [`/swarm`](/docs/swarm) | 將任務分配給具名代理與驗證者，透過共用訊息板協調。所有計畫。 | App、CLI |
| [`/teamwork`](/docs/teamwork) | 為多日專案、遷移與研究啟動代理團隊。僅限付費方案。 | App、CLI、IDE 擴充功能 |
| [`/run-workflow`](/docs/dynamic-workflows) | 撰寫並執行指令碼，以平行與循序階段協調多個代理。所有計畫。 | App、CLI |
| [`/browser`](/docs/commands/browser) | 將 UI 測試、螢幕截圖與網站檢查交給瀏覽器子代理，在 App 的內建瀏覽器或 Chrome 中執行。 | App、CLI、IDE 擴充功能 |
| [`/automation`](/docs/commands/automation) | 設定定期背景任務，您可以在 Automations 分頁中管理。 | 應用程式 |
| [`/schedule`](/docs/commands/schedule) | 在同一對話中稍後喚醒代理，可單次或依定期排程。 | App、CLI、IDE 擴充功能 |

如要在以下項目之間選擇 `/boost`, `/swarm`，與 `/teamwork`，請參閱 [在 Swarm、Teamwork、Boost 與子代理之間選擇](/docs/swarm#choose-between-swarm-teamwork-boost-and-subagents).

例如：

```
/schedule "0 9 * * 1-5" Run git fetch, prune stale local branches, and summarize pending PR reviews.
```

```
/browser Open http://localhost:3000/dashboard, verify that the analytics charts render, and capture a screenshot.
```

## 取得協助

標題為「取得協助」的章節

提出附帶問題、搜尋你的程式碼、與代理交談或口述、取得 視覺化說明，或詢問如何使用 Antigravity。

| 指令 | 其功能 | 適用於 |
| --- | --- | --- |
| [`/btw`](/docs/commands/btw) | 在對話的唯讀分支中回答附帶問題，不會打斷代理，也不會加入其記錄。 | App、CLI、IDE 擴充功能 |
| [`/codesearch`](/docs/cli/commands/codesearch) | 搜尋工作區中的程式碼，無須離開工作階段。 | CLI |
| [`/voice`](/docs/cli/commands/voice) | 在語音模式中以語音與代理交談，或透過即時逐字稿口述提示詞。 | CLI |
| [`/generative_ui`](/docs/commands/generative-ui) | 在側邊面板或對話內嵌位置建置互動式小工具，例如圖表、圖解或說明。 | 應用程式 |
| [`/antigravity-guide`](/docs/commands/antigravity-guide) | 根據官方文件回答有關使用與設定 Antigravity 的問題。 | App、CLI |

例如：

```
/btw Which file did you say defines the UserSession interface?
```

## 審查並管理工作階段

標題為「檢閱與管理工作階段」的章節

檢查變更、壓縮或檢視脈絡用量、重新開啟過去的對話，以及 監控執行中的代理。

| 指令 | 其功能 | 適用於 |
| --- | --- | --- |
| [`/diff`](/docs/cli/commands/diff) | 在互動式 diff 檢視器中顯示工作區變更、提交記錄與代理的回合。 | CLI |
| [`/compact`](/docs/commands/compact) | 將目前為止的對話摘要為檢查點，以釋放模型情境視窗中的空間。 | App、CLI |
| [`/context`](/docs/cli/commands/context) | 顯示對話使用了多少模型的情境視窗。 | CLI |
| [`/resume`](/docs/cli/commands/resume) | 尋找並重新開啟過去的對話。 | CLI |
| [`/agents`](/docs/cli/commands/agents) | 在自訂代理之間切換，並監控背景子代理。 | CLI |

例如：

```
/compact Keep the API schema findings, and now add integration tests for the handler.
```

## 自訂代理

標題為「自訂代理」的章節

教導代理您的工作方式，並新增功能。

| 指令 | 其功能 | 適用於 |
| --- | --- | --- |
| [`/learn`](/docs/commands/learn) | 透過您核准的提案，將工作階段中的修正轉為規則或技能。 | App、CLI、IDE 擴充功能 |
| [`/agy-customizations`](/docs/commands/agy-customizations) | 載入自訂參照，讓代理能夠建立、修正或說明規則、技能、外掛程式、掛鉤與 MCP 伺服器。 | App、CLI、IDE 擴充功能 |
| [`/mcp-app-development`](/docs/commands/mcp-app-development) | 載入 MCP Apps 開發指南，讓代理能夠建置、設定主題、封裝或偵錯互動式 MCP App 外掛程式。 | 應用程式 |
| [`/plugin`](/docs/plugins) | 管理您的外掛程式並瀏覽 Marketplace。 | App、CLI、IDE 擴充功能 |

## 設定 CLI

標題為「設定 CLI」的章節

調整 Antigravity CLI 的推理方式、權限詢問方式與外觀。

| 指令 | 其功能 | 適用於 |
| --- | --- | --- |
| [`/permissions`](/docs/cli/commands/permissions) | 在互動式面板中管理代理的權限規則。 | CLI |
| [`/effort`](/docs/cli/commands/effort) | 設定模型花費的推理量，以速度換取深度。 | CLI |
| [`/statusline`](/docs/cli/commands/statusline) | 開啟或關閉狀態列，或設定用來顯示狀態列的指令。 | CLI |
| [`/title`](/docs/cli/commands/title) | 開啟或關閉即時終端機視窗標題。 | CLI |

## 帳戶與更新

標題為「帳戶與更新」的章節

查看你的配額與點數，並了解 CLI 的新功能。

| 指令 | 其功能 | 適用於 |
| --- | --- | --- |
| [`/usage`](/docs/cli/commands/usage) | 顯示您已使用的模型配額。 | CLI、IDE 擴充功能（JetBrains、Android Studio、Zed、Xcode） |
| [`/credits`](/docs/cli/commands/credits) | 顯示您的 AI 點數餘額，並附上購買更多點數的連結。 | CLI |
| [`/changelog`](/docs/cli/commands/changelog) | 在終端機中開啟 Antigravity CLI 版本資訊。 | CLI |

## 後續步驟

「後續步驟」章節

- [CLI 指令](/docs/cli/reference)：每個 CLI 斜線指令、鍵盤 快速鍵與命令列旗標。
- [實作計畫](/docs/implementation-plan)：審查並核准 …的計畫 `/plan` 建立。
- [規則](/docs/rules) 和 [技能](/docs/skills)：在何處 `/learn` 儲存代理 學到的內容。
- [外掛程式](/docs/plugins) 和 [市集](/docs/marketplace)：使用…尋找並 安裝擴充功能 `/plugin`.

上一個
IDE 工作流程

下一步
CLI 參考資料

您的下載已開始您如何得知我們？請選一個。這有助於我們接觸更多像您一樣的人。感謝您讓我們知道！
