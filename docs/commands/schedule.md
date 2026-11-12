排程指令（/schedule）
2-0
Antigravity 應用程式
功能
排程指令（/schedule）Antigravity App 功能
Antigravity 應用程式
Antigravity CLI
Antigravity IDE
適用於：
Antigravity 應用程式
Antigravity CLI
Antigravity IDE
# 排程指令（/schedule）

[「排程指令（/schedule）」章節](#schedule-command-schedule)

設定單次計時器或重複執行的 cron 排程，透過指示喚醒代理，而不會在等待期間阻擋對話。

## 總覽

[「總覽」章節](#overview)

有些任務需要代理稍後回來處理：檢查 CI 執行是否完成、
每隔幾分鐘輪詢部署狀態，或在指定時間傳送狀態摘要。
 `/schedule` 指令要求代理使用其內建功能建立該計時器或排程 `schedule` 工具。

排程會作為目前對話中的背景任務執行：

- **非阻塞**：代理在建立排程後即結束其回合，而非 在 shell 中閒置 `sleep`，讓您可以繼續聊天或讓它處理 其他步驟。
- **喚醒提示詞**：計時器觸發或 cron 排程觸發時，代理會以高優先順序通知收到您的指令，並據此執行。
- **對話範圍**：計時器與排程屬於建立它們的對話。若要建立會跨越工作階段的長期工作，請使用常駐型 [sidecar](/docs/sidecars) 或 [automation](/docs/commands/automation) 改為。

## 建立排程

[「建立排程」章節](#create-a-schedule)

類型 `/schedule` 後接代理應喚醒的時間與應執行的
事項。代理會解讀自然語言、持續時間或五欄位 cron
運算式，並為您填入工具參數。

- [Antigravity 應用程式](#tab-panel-148)
- [Antigravity CLI](#tab-panel-149)

### Antigravity 應用程式

[「Antigravity App」章節](#sr-tab-1)

在撰寫器中輸入指令：

```
/schedule in 10 minutes, check whether the deploy to staging finished and summarize any errors
```

排程會在對話中以…的形式顯示 **計時** 或 **已排程** 其狀態從…更新的步驟 **待處理** 至 **已觸發**，或來自 **使用中** 至
**已完成**，在其執行時。

### Antigravity CLI

[「Antigravity CLI」章節](#sr-tab-2)

在互動式提示中輸入指令：

```
/schedule every weekday at 9am, run git fetch, list stale local branches, and summarize open PR reviews
```

排程計時器與定期工作會與背景殼層指令並列顯示
在 `/tasks` 面板與狀態列的任務計數。

## 排程類型

[「排程類型」章節](#schedule-types)

The `schedule` 工具支援兩種互斥模式。代理會根據你的指示選擇模式，但若你想要精確控制，也可以直接指定參數。

### 單次計時器

[「單次計時器」章節](#one-shot-timers)

計時器會等待固定時長，然後觸發一次：

| 參數 | 描述 |
| --- | --- |
| `DurationSeconds` | 觸發前等待的秒數。 |
| `Prompt` | 計時器觸發時傳遞給代理的指示。 |
| `TimerCondition` | 選用的提前取消條件： `never` （預設值）， `any` （任何傳入訊息），或特定子代理或背景任務的 ID。 |

計時器適用於『N 分鐘後再回來查看』類型的工作流程。搭配
`TimerCondition`，當比對的訊息
到達時（例如子代理完成），計時器會提前取消，且該訊息本身會喚醒
代理，因此無需等待完整的時間。

```
/schedule wait up to 5 minutes for the test subagent to report back, then check its results either way
```

### 定期 cron 排程

[「重複執行的 Cron 排程」章節](#recurring-cron-schedules)

cron 排程會依據標準的五欄位 cron 運算式重複觸發：

| 參數 | 描述 |
| --- | --- |
| `CronExpression` | 標準的五欄位 cron 運算式，例如 `*/5 * * * *` 每五分鐘。 |
| `Prompt` | 每次觸發時傳遞的指示，後綴迭代編號。 |
| `MaxIterations` | 觸發條件數量的選用上限。預設為無限制。 |
| `IsDaemon` | 選用。當 `true`，排程會在代理目前的任務完成後繼續觸發。 |

設定 `IsDaemon` 僅適用於獨立的常駐工作。非守護行程式排程
繫結至建立它們的任務。當 `MaxIterations` 達到時，代理
會收到排程完成的通知。

```
/schedule every 2 minutes for the next 30 minutes, poll the CI status for PR #482 and tell me when it goes green
```

## 管理使用中的排程

[「管理進行中的排程」章節](#manage-active-schedules)

您可以從任一介面檢視並取消排程：

- **詢問代理**：指示代理列出或取消其排程。它會使用 其任務管理工具顯示作用中的計時器與工作，並終止您指定的項目。
- **CLI 工作面板**：執行 `/tasks` 開啟任務管理員。使用方向鍵選取計時器或週期性工作，按 k 若要終止它，請按 x 移除已完成的項目，按 Enter 參閱 詳情。

## `/schedule` 與自動化相比

[「/schedule 與 Automations 的比較」章節](#schedule-compared-with-automations)

`/schedule` 在您仍於目前對話中工作時執行工作。
若是無人值守、需要於沒有對話
開啟時持續執行的週期性工作，請使用 [`/automation`](/docs/commands/automation) 以讓代理設定
背景自動化。如需並排比較，請參閱
[`/automation` 與……相比 `/schedule`](/docs/commands/automation#automation-compared-with-schedule).

## 後續步驟

[「後續步驟」章節](#next-steps)

探索相關文件：

- [自動化指令（`/automation`)](/docs/commands/automation)：在代理的協助下設定 持久的排程自動化。
- [邊車](/docs/sidecars)：瞭解權限預設值，
- [目標指令（`/goal`)](/docs/commands/goal)：將計時器與 長期自主目標結合。
- [子代理](/docs/subagents)：了解以下項目所做的背景工作 `TimerCondition` 可以等待。
- [斜線指令總覽](/docs/slash-commands)：瀏覽所有可用的 斜線指令。

[上一個
/resume](/docs/cli/commands/resume/)

[下一步
/statusline](/docs/cli/commands/statusline/)

您的下載已開始

## 您如何得知我們？

請選一個。這有助於我們接觸更多像您一樣的人。

感謝您讓我們知道！
