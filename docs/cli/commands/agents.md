# 代理指令 (/agents)

代理指令 (/agents) - Antigravity CLIcliAntigravity CLI功能代理指令 (/agents) - Antigravity CLI Antigravity CLI 功能Antigravity CLI適用於：Antigravity CLI
# 代理指令 (/agents)
[「代理指令（/agents）」章節](index.html#agents-command-agents)
瀏覽、選取並切換自訂代理，或直接在互動式 TUI 面板中監控執行中與已完成的背景子代理。

## 開始之前
[「開始之前」章節](index.html#before-you-begin)
請確認您符合以下先決條件：

- 安裝 Antigravity CLI .
- 了解 非同步執行模型 .

## 總覽
[「總覽」章節](index.html#overview)
The `/agents` 指令會開啟互動式 **代理管理員** 面板。此介面有兩種不同用途：

1. 自訂代理選取與探索 ：在預設代理與自訂工作流程專用代理之間選擇，或探索在本機與全域定義新代理的位置。
2. 子代理監控與控制 ：追蹤、檢查或終止在作用中工作階段期間同時執行的背景子代理。

若要在 TUI 中開啟面板，請輸入 `/agents` 並按下 Enter:

```
/agents
```

---

## 自訂代理選取與探索
[「自訂代理選擇與探索」章節](index.html#custom-agent-selection-and-discovery)
Antigravity CLI 支援載入具備專門系統指令與工具權限的自訂代理定義。 **可用代理** 區段列出目前工作階段中所有可用的代理。

### 在代理之間切換
[「在代理之間切換」章節](index.html#switching-between-agents)
若要在面板中切換代理，請使用下列控制項：

- 選取 ：使用 ↑ / ↓ 反白代理（ Default agent 或自訂代理）於 下 可用代理 ，然後按下 Enter .
- 狀態指示器 ：綠色圓圈（ ● ）表示作用中或已準備好的代理。
- 套用並結束 ：按下 Esc 關閉面板並套用你的選取。

### 建立自訂代理
[「建立自訂代理」章節](index.html#creating-custom-agents)
…的標頭 `/agents` 面板顯示建立新自訂代理的範本位置：

```
Create New Agents
  Workspace: {workspace}/.agents/agents/{agent_name}/agent.md
  Global: ~/.gemini/config/agents/{agent_name}/agent.md
```

若要建立可在所有工作區與專案中使用的自訂代理，請將其放置於全域自訂目錄下（`~/.gemini/config/agents/`）。建立與您的代理名稱相符的目錄，並新增 `agent.md` 檔案含 YAML frontmatter：

```
mkdir -p ~/.gemini/config/agents/code-reviewer
cat << 'EOF' > ~/.gemini/config/agents/code-reviewer/agent.md
---
name: code-reviewer
description: Rigorous code review specialist focusing on edge cases and security.
---
You are an expert code reviewer. Analyze diffs carefully and verify edge cases.
EOF
```

當您重新開啟 `/agents`，CLI 會自動探索 `code-reviewer` 並列於 **可用代理**。若您需要嚴格限定於單一專案儲存庫的代理，請將其置於該工作區的…內 `.agents/agents/` 目錄（例如 `/home/user/projects/my-app/.agents/agents/code-reviewer/agent.md`）。您也可以在…內封裝並散佈自訂代理 [外掛](https://antigravity.gh.miniasp.com/docs/cli/plugins).

---

## 子代理監控與控制
[「子代理監控與控制」章節](index.html#subagent-monitoring-and-control)
當您的主代理委派任務（例如執行測試或查詢大型程式碼庫）時，產生的執行緒會出現在 `/agents` 面板，於 下 **子代理**，依觸發它們的提示詞分組。

### 檢查子代理進度
[「檢視子代理進度」章節](index.html#inspecting-subagent-progress)
使用下列控制項監控子代理狀態與記錄：

- 群組切換 ：按下 Enter 於子代理群組標頭 ( ▸ Subagents (1 running, 2 done) ）以展開或摺疊（ ▾ ）該群組。
- 狀態指示器 ：每個子代理列會顯示即時生命週期狀態：
  - running ：正在執行工具或產生推理步驟。
  - done ：已完成指派的背景任務。
  - error ：執行期間遇到終端機失敗。
  - killed ：由您或父處理程序手動終止。
- 詳細資訊檢視 ：突顯特定子代理列並按下 Enter 開啟全螢幕 子代理詳細檢視 。此檢視會顯示子代理完整的內部思考、工具呼叫與執行 stdout。按下 Esc 返回清單。

### 終止使用中的子代理
[「終止進行中的子代理」章節](index.html#terminating-active-subagents)
若背景子代理陷入迴圈或執行時間超過所需，您可立即終止它，無須離開工作階段：

1. 開啟 /agents 並反白標示執行中的子代理列。
2. 按下 K 終止使用中的子代理及其所有子執行緒。

### 內嵌工具核准
[「內嵌工具核准」章節](index.html#inline-tool-approvals)
若子代理嘗試執行受保護的操作（例如修改檔案或在沙箱環境中執行 Shell 指令），授權提示會內嵌顯示於 `/agents` 面板。您可以按下 A 核准或 D 直接從清單拒絕。

---

## 面板快速鍵參考
[「面板按鍵繫結參考」章節](index.html#panel-keybindings-reference)
當焦點位於下列項目中時 `/agents` 面板，適用以下快速鍵：

| 金鑰 | 動作 | 行為 |
| --- | --- | --- |
| ↑ / ↓ | 導覽 | 在標頭、子代理與可用代理之間移動游標。 |
| Enter | 選取／切換 | 展開/收合群組、開啟子代理詳細資訊檢視，或選取自訂代理。 |
| K | 終止使用中的子代理 | 即時取消（ CancelSubagent ）反白的執行中子代理。 |
| Esc | 返回 | 離開面板，返回提示詞方塊，並套用任何已準備好的代理切換。 |

---

## 常見錯誤
[「常見錯誤」章節](index.html#common-mistakes)
| 錯誤 | 失敗的原因 | 修正 |
| --- | --- | --- |
| 預期自訂代理切換會修改回合紀錄 | 切換代理會分岔對話，以保留歷史完整性 | 在新分支出工作階段中繼續您的工作流程 |
| 將代理檔案直接放在設定根目錄 | 掃描器專門在以下內部尋找 agents/ 目錄 | 將定義移至 .agents/agents/<name>/agent.md |
| 按下 K 於已完成的子代理 | 僅針對使用中的（ running ）子代理處理程序 | 按下 Enter 改為檢視已完成的記錄 |

---

## 後續步驟
[「後續步驟」章節](index.html#next-steps)
探索下列指南以進一步了解子代理與權限：

- [背景工作與子代理](https://antigravity.gh.miniasp.com/docs/cli/subagents) ：深入了解多執行緒非同步執行架構。
- [外掛程式與技能](https://antigravity.gh.miniasp.com/docs/cli/plugins) ：深入了解如何將自訂代理、技能與 MCP 組態封裝為可共用的外掛程式。
- [權限與沙箱](https://antigravity.gh.miniasp.com/docs/cli/sandbox) ：為背景子代理設定安全護欄與核准規則。
[上一個  
總覽](../../../slash-commands/index.html)[下一步  
提升（/boost）](../../../boost/index.html)
