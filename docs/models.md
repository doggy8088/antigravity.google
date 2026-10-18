# 選擇模型

選擇模型2-0Antigravity 應用程式開始使用選擇模型 Antigravity App 開始使用Antigravity 應用程式Antigravity CLIAntigravity IDE適用於：Antigravity 應用程式Antigravity CLIAntigravity IDE
# 選擇模型
[「選擇模型」章節](#choose-a-model)
Antigravity 讓您存取 Google DeepMind 與合作夥伴供應商的領先前沿推理模型。您可以隨時切換模型並選擇思考等級（`Low`, `Medium`，或 `High`）以在快速編輯的回應速度與複雜架構及偵錯任務的深度多步驟推理之間取得平衡。

## 選取模型
[「選擇模型」章節](#select-a-model)
您可以從對話提示框下方的模型選擇器選單，選擇要使用的推理模型：
 Plan Segmented Control Model View Usage Action  Usage Popout Gemini ModelsWeekly Limit Remaining100%Five Hour Limit Remaining100%Claude and GPT modelsWeekly Limit Remaining100%Five Hour Limit Remaining100%
您選擇的推理模型會在對話內的訊息之間保持不變。如果您在代理執行期間變更推理模型，它會繼續使用先前選擇的推理模型，直到完成該回合的步驟（或直到您取消目前的執行）。

## 推理模型
[「推理模型」章節](#reasoning-model)
對於核心推理模型，Antigravity 提供領先的前沿模型。可用性取決於你的方案：

| 模型 | 免費 & Google AI Plus | Google AI Pro | Google AI Ultra | 企業版 |
| --- | --- | --- | --- | --- |
| Gemini 4 Argon *** | ❌ | ✅ ** | ✅ | ✅ |
| Gemini 3.8 Flash | ✅ | ✅ | ✅ | ✅ |
| Gemini 3.7 Flash | ❌ | ❌ | ❌ | ✅ |
| Gemini 3.6 Flash | ❌ | ❌ | ❌ | ✅ |
| Gemini 3.1 Pro | ❌ | ❌ | ❌ | ✅ |
| Claude Sonnet 5.5（thinking） ** | ❌ | ✅ ** | ✅ | ✅ |
| Claude Opus 5.5（thinking） ** | ❌ | ✅ ** | ✅ | ✅ |
| Claude Sonnet 4.6（thinking） * | ✅ | ✅ | ❌ | ❌ |
| Claude Opus 4.6（thinking） * | ✅ | ✅ | ❌ | ❌ |
| GPT-OSS-120b * | ✅ | ✅ | ✅ | ❌ |

* 將於 2026 年 11 月 2 日移除。

** 僅限 Google AI Pro 非試用訂閱使用。若要從試用版切換為付費 Google AI Pro 方案， [提交升級請求](https://one.google.com/support).

*** Antigravity IDE 中不提供。適用於 Antigravity 應用程式、Antigravity CLI 與 IDE 擴充功能。

若要深入了解推理模型速率限制，請參閱 [計畫頁面](/docs/plans)。若您將 Antigravity 與 Gemini Enterprise 搭配使用，請參閱 [Gemini Enterprise 中支援的模型](/docs/enterprise#supported-models-in-gemini-enterprise).

## 其他模型
[「其他模型」章節](#additional-models)
Antigravity 在技術堆疊的各部分使用不可自訂的其他模型：

- [Nano Banana 2](/blog/nano-banana-pro) ：當代理產生 UI 模型、產生圖片以填充網頁或應用程式、建立系統或架構圖，或執行其他生成式圖片任務時，由生成式圖片工具使用。
[上一個  
驗證](/docs/install/)[下一步  
與 Google 攜手建置](/docs/build-with-google/)
