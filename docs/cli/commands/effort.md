# Effort 指令（/effort）

Effort 指令（/effort） - Antigravity CLIcliAntigravity CLI功能Effort 指令（/effort） - Antigravity CLI Antigravity CLI 功能Antigravity CLI適用於：Antigravity CLI
# Effort 指令（/effort）
[「投入程度指令（/effort）」章節](#effort-command-effort)
調整使用中模型的推理努力預算，以平衡回應速度與推理深度。

## 總覽
[「總覽」章節](#overview)
The `/effort` 指令控制目前所選模型在 Antigravity CLI 中每個回合投入的思考與推理量。當您選擇新的投入層級時，CLI 會為目前工作階段切換至該模型變體，並將您的選擇儲存為未來工作階段的預設值。

CLI 狀態列會在您選擇的模型名稱旁顯示使用中的工作投入等級，讓您一目了然地監控設定。

## 支援的工作投入等級
[「支援的投入程度」章節](#supported-effort-levels)
CLI 可識別下列工作投入等級，由輕至重排序：

- `low` ：更快的回應與更輕的推理，非常適合快速 查詢、語法檢查與簡單編輯。
- `medium` ：平衡的速度與推理品質，適用於日常軟體 工程任務。
- `high` ：更深入的推理，適用於複雜架構、細微錯誤 調查與多檔案重構。
- `xhigh` ：超高推理，僅適用於發布以下項目的模型 xhigh 變體。
- `max` ：最高的推理預算，僅適用於發布 以下項目的模型 max 變體。

## 以互動方式變更推理努力層級
[「以互動方式變更投入程度」章節](#change-effort-interactively)
執行 `/effort` 不帶引數以開啟互動式 **設定投入程度** 時間軸量表，預先定位在你目前的強度等級：

```
/effort
```

### 導覽控制項
[「導覽控制」章節](#navigation-controls)
使用下列按鍵調整時間軸量測器：

| 金鑰 | 動作 |
| --- | --- |
| ← / → | 在模型可用的工作投入等級之間滑動選擇器。 |
| Enter | 確認醒目提示的推理努力層級並儲存為預設值。 |
| Esc | 取消並返回提示詞，不變更推理努力層級。 |

## 直接設定投入程度
[「直接設定投入程度」章節](#set-effort-directly)
若要在不開啟互動式選擇器的情況下立即切換投入程度，請將目標等級作為引數傳遞：

```
/effort low
/effort medium
/effort high
```

CLI 會分兩個階段驗證引數：

- 若層級不是可辨識的努力程度名稱，CLI 會列出有效名稱（例如 Invalid effort "turbo" (valid: low, medium, high, xhigh, max) ).
- 若層級有效，但目前模型不提供該層級，CLI 會列出該模型可用的層級（例如 <model> has no "max" effort (available: low, medium, high) ).

## 在無頭模式中檢查或覆寫努力程度
[「在無頭模式中檢視或覆寫投入程度」章節](#inspect-or-override-effort-in-headless-mode)
在無頭模式（`-p` 或 `--print`），您可以檢查作用中模型的 推理 effort 設定，或覆寫單次執行的 effort 層級：

- **檢查目前努力程度**：執行 `agy -p "/effort"` （或新增 `--output-format json`）以列印作用中模型的 effort 是否可調整，以及目前與可用的 effort 層級： `agy-p"/effort"agy-p"/effort"--output-formatjson` 在無頭模式中， `/effort` 為唯讀且不接受引數。執行 `agy -p "/effort low"` 失敗，原因為 `/effort takes no arguments`.
- **覆寫單次執行的用力度**：傳遞 `--effort` 旗標，用來從您的 shell 執行 提示詞： `agy-p"Summarize the changes in the last commit"--effortlow`

## 後續步驟
[「後續步驟」章節](#next-steps)
探索模型選取與狀態列自訂的相關文件：

- [模型](/docs/models) ：了解支援的模型與推理 功能。
- [狀態列指令 ( /statusline )](/docs/cli/commands/statusline) ： 自訂模型與工作量指示器在狀態列中的顯示方式。
- [CLI 參考資料](/docs/cli/reference) ：檢視所有可用的斜線指令與鍵盤快速鍵。
[上一個  
差異（/diff）](/docs/cli/commands/diff/)[下一步  
目標（/goal）](/docs/commands/goal/)
