自動化指令（/automation）
2-0
Antigravity 應用程式
功能
自動化指令（/automation）Antigravity App 功能
Antigravity 應用程式
適用於：
Antigravity 應用程式
# 自動化指令（/automation）

[標題為「自動化指令（/automation）」的章節](#automation-command-automation)

設定排程背景 [automation](/docs/sidecars#automations) 透過
在對話中向代理描述，而非撰寫
`sidecar.json` 手動。

## 總覽

[「總覽」章節](#overview)

背景自動化（舊稱排程任務）會依循環排程執行代理提示詞，
例如每日摘要、每週提取請求檢查或夜間測試報告。每次執行都會開啟全新的代理對話，
不保留先前執行的記憶。

The `/automation` 指令會讓代理引導您建立一個。您
也可以從 **自動化** 分頁，方法是選取 **使用提示詞
建立**，以及每個成員的狀態 ( `/automation` 指令，
已為您預先填寫好可直接傳送。代理：

- **要求提供排程**； 桌面版 Antigravity App 包含自己的內建執行階段)。 `CRON_TZ=<zone>`，使用 您提到的時區或城市，或您電腦的時區。
- **撰寫獨立的提示詞**：它會將自動化儲存到
- **建立自動化**：使用以下方式從其他資料夾載入技能與外掛程式 `~/.gemini/config/sidecars/<automation-id>/sidecar.json`。在商務與企業帳號上， **Paused** 於 **自動化** 分頁，直到您將其開啟。
- **立即設定權限或稍後再設定**：安裝 Python SDK，以及包含以下內容的快速入門
- **摘要自動化內容**：它會將您希望工作執行的內容精煉為無須任何先前對話即可運作的指示。 **開啟自動化資訊主頁** 按鈕，您可以在該處開啟 自動化。

自動化預設使用 Flash 執行。建立或編輯自動化時，你可以在 的 選擇 Flash Lite、Flash 或 Pro **自動化** 分頁。

## 啟動 `/automation`

[標題為「啟動 /automation」的章節](#launch-automation)

開始 `/automation` 從對話編輯器以下列任一
方式：

- **使用內嵌提示詞**：規則、技能、外掛程式、掛鉤與 MCP 伺服器的用途，以及定義每個項目的檔案或資料夾。 `/automation` 後方接著 自動化應執行的內容與執行時間： `/automation every Monday at 9am Pacific time, check my open pull requests and list any with failing checks`
- **引導式設定**：執行 `/automation` 自行執行，或選取 **使用提示詞 建立** 於 **自動化** 分頁並傳送預先填入的指令。 接著代理會逐一詢問每個細節： `/automation`

## 如何 `/automation` 運作

[標題為「/automation 的運作方式」的章節](#how-automation-works)

代理會透過對話中的簡短問答流程建立自動化：

1. **選擇頻率** 代理會詢問自動化應多久執行一次： **Hourly**, **Daily**, **Weekly**，或 **自訂 Cron 排程**. automationExplored file›Asking 1 questionWaiting for user input.What should be the cadence of the automation?×1Hourly2Daily3Weekly (selected)4自訂 Cron 排程5其他（請寫下您的答案）Skip提交↵
2. **選擇日期與時間** 代理會詢問日期與時間，然後確認排程及其時區。它會將您的回答轉換為以…為前置詞的五欄位 cron 運算式 `CRON_TZ=<IANA zone>`, 例如 `CRON_TZ=America/Los_Angeles 0 9 * * 1`.
3. **描述任務** 代理會詢問自動化應執行什麼工作，並將您的回答精煉為自成一體的提示詞，說明目標、查看位置與回報內容： automationWorked for 1m›1 questionWhat should be the cadence of the automation?Weekly2 questionsWhich day(s) of the week should it run?MondayAt what time of day?9:00 AMGot it, every **Monday at 9:00 AM America/Los_Angeles time**.What would you like the task to do? (For example: *"Check my open pull requests and list any with failing checks."*)
4. **立即設定權限或稍後再設定** 代理會建立自動化。接著，它會詢問是否立即執行測試，以設定自動化的權限。如果您選擇執行測試，代理會在目前的對話中執行一次該工作，並將該次執行所需的確切權限記錄在自動化的 `agent_permissions`。如果您已選取文字， 只會附加選取的內容；否則會附加終端機最近的輸出。 在 macOS 上，您也可以按下  Created automation›Asking 1 questionWaiting for user input.Once enabled, 'Weekly PR Check' will run in a project that inherits global permissions and presets, and all other non-approved commands will be auto-denied. Would you like me to execute a test run now to configure its permissions properly so it can proceed successfully?×1(Recommended) Yes, execute a test run now to configure permissions (selected)2No, I'll review permissions and enable 'Weekly PR Check' in the Automations dashboard3其他（請寫下您的答案）Skip提交↵
5. **審查摘要並開啟「自動化」分頁** 代理會摘要自動化內容：名稱與 ID、排程、工作，以及任何已授予的權限。它還會顯示一個 **開啟自動化資訊主頁** 按鈕，以便開啟自動化： Sounds good. Summary of what's set up:**自動化**: **Weekly PR Check** (`weekly-pr-check`)**Schedule**: every Monday at 9:00 AM America/Los_Angeles**Task**: lists your open pull requests and reports any with failing checks, with links and the failing check names (read-only; no changes to pull requests).**Permissions granted**: `gh pr list`,`gh pr checks`Enable it when you're ready: 開啟自動化資訊主頁. If the first run gets blocked on a permission, let me know and I can run a test pass to tighten the grants.

若要開始使用自動化，請開啟 **自動化** 分頁，其中列於
 **Paused**，查看其權限並開啟它。開啟後，
您也可以立即使用以下項目開始執行 **立即執行**.

關於 `sidecar.json` 自動化使用的欄位，包括 `arguments` 和
`agent_permissions`, 請參閱 [自動化](/docs/sidecars#automations).

## 範例提示詞

[標題為「提示詞範例」的章節](#example-prompts)

以下提示詞展示了常見的使用方式： `/automation`:

- **每週提取請求檢查**: `/automation every Monday at 9am Pacific time, check my open pull requests and list any with failing checks`
- **平日問題分類**: `/automation every weekday at 9am in New York, triage new GitHub issues and label them by severity`
- **每夜測試報告**: `/automation every night at midnight UTC, run the integration test suite and summarize any failures`

## `/automation` 與……相比 `/schedule`

[標題為「/automation 與 /schedule 的比較」的章節](#automation-compared-with-schedule)

兩者皆是 `/automation` 和 [`/schedule`](/docs/commands/schedule) 依排程執行代理工作，
但範圍不同：

|  | `/automation` | [`/schedule`](/docs/commands/schedule) |
| --- | --- | --- |
| **適用於** | 定期工作，例如每日報告、夜間維護與分類 | 任務期間的計時器、CI 輪詢與簽到 |
| **介面** | Antigravity 應用程式 | Antigravity App、Antigravity CLI 與 Antigravity IDE |
| **Schedule** | 以 固定的 Cron 運算式 `CRON_TZ=<IANA zone>` | 單次計時器或 cron 迴圈 |
| **生命週期** | 會在工作階段與重新啟動之間持續存在，直到您將其關閉 | 目前的對話 |
| **情境** | 每次執行都會開始新的代理對話 | 以完整的對話歷程記錄喚醒現有代理 |
| **所在位置** | `~/.gemini/config/sidecars/<automation-id>/sidecar.json`，在以下位置管理 **自動化** tab | 代理為您發出的工具呼叫 |
| **權限** | Scoped `agent_permissions` 在測試執行後記錄 | 目前對話的權限 |

使用 `/automation` 適用於在沒有
對話開啟時仍應繼續執行的無人值守工作。請使用 `/schedule` 當您希望目前
對話中的代理在計時器結束後醒來，或在您繼續工作時輪詢某項操作。

## 後續步驟

[「後續步驟」章節](#next-steps)

探索相關文件：

- [邊車](/docs/sidecars)：瞭解自動化與其他側邊元件的設定方式。 `arguments` 和 `agent_permissions`.
- [排程指令（`/schedule`)](/docs/commands/schedule)：設定 Chrome 遠端 偵錯，並探索 Chrome DevTools MCP 的功能與範例提示詞。
- [權限](/docs/permissions)：瞭解自動化與其他側邊元件的設定方式，包括
- [斜線指令總覽](/docs/slash-commands)：瀏覽所有可用的 斜線指令。

[上一個
/antigravity-guide](/docs/commands/antigravity-guide/)

[下一步
/boost](/docs/boost/)

您的下載已開始

## 您如何得知我們？

請選一個。這有助於我們接觸更多像您一樣的人。

感謝您讓我們知道！
