提示與指示
全部
全部
學習
提示與指示 學習
全部
Antigravity 應用程式
Antigravity CLI
Antigravity IDE
IDE 擴充功能
Antigravity SDK
# 提示與指示

標題為「提示與指示」的章節

好的提示詞就是清晰的技術寫作。請先說明目標、限制條件與 完成定義。模型接著會將推理預算用於解決真正的問題，而非猜測您的意思。

如需超出程式碼代理範圍的模型層級指引，請參閱 [提示詞設計策略](https://ai.google.dev/gemini-api/docs/prompting-strategies) 和 [Vertex AI 提示詞設計入門](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/introduction-prompt-design).

---

## 有效提示詞的四個部分

標題為「有效提示詞的四個部分」的章節

您不需要為每則訊息使用僵化的範本。優質的任務提示詞通常 會回答四個問題：

| 元素 | 它告訴代理的內容 | 範例 |
| --- | --- | --- |
| **目標** | 您想要的確切結果。 | 為以下項目新增速率限制 `/api/export` 端點。 |
| **範圍與輸入** | 哪些檔案、模組或日誌重要。 | 編輯 `src/routes/export.ts` 並在以下位置重複使用輔助工具 `src/lib/limiter.ts`. |
| **限制條件** | 界限、應避免的程式庫或樣式規則。 | 請勿新增 npm 相依性。回應請保持 JSON 格式。 |
| **驗證** | 如何證明工作已完成。 | 為突發與視窗重設行為新增單元測試，然後執行 `npm test`. |

### 模糊的提示詞與具體的規格

標題為「模糊提示詞與具體規格的比較」的章節

模糊的提示詞會迫使代理猜測架構、檔案路徑與邊界情況：

```
Fix the search page so it works better on mobile.
```

具體的規格可縮小影響範圍，並新增代理可 自行執行的檢查：

```
Fix horizontal overflow on the search results table below 480px in src/styles/search.scss without changing desktop column widths, then verify at 390px viewport width with /browser.
```

試試可在任何存放區中使用的獨立提示詞：

```
Inspect this repository's build scripts, test runner, and code style config, then draft a concise AGENTS.md with our real commands and conventions without editing any other files.
```

---

## 分層撰寫指示

標題為「分層設定指示」的章節

在每個提示詞中重複專案慣例會浪費時間與脈絡。將 每項指示放在正確的層級，讓 Antigravity 自動載入：

- **工作區規則（`AGENTS.md`, `GEMINI.md`，或 `.agents/rules/*.md`)**：團隊 慣例、測試命令、禁用相依性與架構筆記。 Antigravity 會從你的工作區資料夾及上層資料夾載入這些內容，直到 存放區根目錄為止。請參閱 [規則](/docs/rules).
- **全域規則（`~/.gemini/AGENTS.md`, `~/.gemini/GEMINI.md`, `~/.gemini/config/AGENTS.md`, `~/.gemini/config/GEMINI.md`，或 `~/.gemini/config/rules/*.md`)**： 適用於每個專案的個人偏好設定。
- **規則啟用模式**：獨立 `AGENTS.md` 和 `GEMINI.md` 檔案保持 一律開啟。模組化檔案，位於 `rules/*.md` 使用 YAML frontmatter，搭配 `trigger` 金鑰。請選擇 `always_on` （每回合）， `glob` （符合的檔案模式）， `model_decision` （載入自其 `description`), or `manual` (`@`-提及 於 Antigravity App）。
- **可重複使用的技能（`SKILL.md`)**：按需載入的逐步程序， 於任務相符時載入，或透過以下方式明確執行 `/<skill-name>`。請參閱 [技能](/docs/skills).
- **使用以下方式記錄工作階段修正 [`/learn`](/docs/commands/learn)**：在 修正代理或解決棘手的設定問題後，執行 `/learn`。Antigravity 會草擬一份可審查的提案，將此經驗儲存為規則或技能。
- **轉換提示詞**：眼前任務的 具體目標、目標檔案與驗收標準。

---

## 撰寫限制條件與回饋迴圈

標題為「撰寫限制條件與回饋迴圈」的章節

四個習慣可在代理寫出錯誤的差異之前消除歧義：

- **明確陳述否定限制條件。** 告訴代理哪些內容不要 更動，例如保持資料庫遷移不變，或保留公開 函式簽章。
- **展示一個自訂格式的具體範例。** 請附上簡短的 JSON 結構描述、 日誌行或版面配置片段，而非以散文描述格式。
- **以可執行的檢查作結提示詞。** 包含 `npm test`, `pytest`，或 `/browser` 讓代理在回報前先發現並修正自己的錯誤。
- **及早修正方向。** 在輪次偏離時立即停止，而非等它 結束。在 Antigravity CLI 中，按下 Esc 並執行 `/rewind`。在 Antigravity App 中，按一下 **停止** 並按一下 **還原** 於較早的提示詞。

### 提示詞失敗模式

標題為「提示詞失敗模式」的章節

| 症狀 | 可能的缺口 | 修正 |
| --- | --- | --- |
| 代理編輯不相關的檔案 | 缺少範圍或否定限制 | 指明確切的目標檔案，並列出哪些檔案不要動。 |
| 代理猜測程式庫 API 或旗標 | 缺少第一手資料依據 | 指向工作區資訊清單（`package.json`, `pyproject.toml`） 或透過 MCP 取得文件。 |
| 代理在損壞狀態下回報完成 | 缺少驗證步驟 | 以可執行的測試指令作結提示詞，或 `/browser` 檢查。 |
| 您重複相同的修正 | 卡在對話中的既定慣例 | 移至 `AGENTS.md` 或執行 [`/learn`](/docs/commands/learn) 儲存它。 |

---

## 後續步驟

「後續步驟」章節

學習單元下一篇情境視窗與權杖看看提示詞大小、檔案提及與長時間工作階段如何影響準確度與速度。

Antigravity規則將持久的工作區與全域指示儲存在 AGENTS.md 與規則檔案中。

建置指南建置可遊玩的 3D 瀏覽器世界看看一個範圍明確的單一提示詞如何協調四個平行代理。

上一個
總覽

下一步
情境視窗與權杖

您的下載已開始您如何得知我們？請選一個。這有助於我們接觸更多像您一樣的人。感謝您讓我們知道！
