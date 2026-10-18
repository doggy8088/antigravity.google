# 差異指令（/diff）

差異指令（/diff） - Antigravity CLIcliAntigravity CLI功能差異指令（/diff） - Antigravity CLI Antigravity CLI 功能Antigravity CLI適用於：Antigravity CLI
# 差異指令（/diff）
[「差異指令（/diff）」章節](index.html#diff-command-diff)
在 TUI 中以互動方式檢視及審查工作區變更、提交歷程記錄與代理回合差異。

## 總覽
[「總覽」章節](index.html#overview)
The `/diff` 指令會開啟 **互動式 Diff 檢視器**，全螢幕面板，讓您檢查工作區與對話記錄中的變更。它支援三種不同的模式（VCS、Turn 與 Commit），並提供互動式審查工作流程，您可逐行新增註解以引導代理的後續步驟。

## 互動式 diff 檢視器面板
[「互動式差異檢視器面板」章節](index.html#interactive-diff-viewer-panels)
若要開啟差異檢視器，請依照下列步驟操作：

1. 類型 /diff 於提示詞方塊。
2. 按下 Enter .

```
/diff
```

### 導覽與控制項
[「導覽與控制」章節](index.html#navigation-and-controls)
差異檢視器以三種模式運作，您可以使用…在它們之間循環切換 Tab （或 → / ← 方向鍵）：

- VCS 模式 ：顯示作用中工作區中所有已修改與未追蹤檔案的清單：
  - 自動支援 Git、Mercurial (Hg) 與 Jujutsu (JJ)。
  - 使用 ↑ / ↓ 瀏覽檔案清單，且 Enter 開啟詳細資料檢視。
- 回合模式 ：顯示代理在目前對話每一輪中引入的變更：
  - 適合逐步審查代理的工作。
  - 使用 ↑ / ↓ 瀏覽，且 Enter 檢視詳細資料。
- 提交模式 ：算繪儲存庫的互動式提交圖/樹：
  - 使用 ↑ / ↓ 瀏覽提交鏈。
  - 使用 ← / → 瀏覽圖形中的相鄰分支。
  - 按下 Enter 載入所選提交的差異。

---

## 逐步導覽
[「逐步導覽」章節](index.html#step-by-step-walkthrough)
以下是如何使用 diff 檢視器審查變更、新增註解並引導代理。

### 審查工作區變更（VCS 模式）
[「審查工作區變更（VCS 模式）」章節](index.html#reviewing-workspace-changes-vcs-mode)
當您執行 `/diff`，它會在…中開啟 **VCS 模式** 預設（若您有未提交的變更）並顯示已修改與未追蹤檔案的清單：

按下 Enter 於檔案以開啟其 **詳細資訊檢視**，顯示統一差異：

- 使用 ↑ / ↓ （方向鍵）捲動差異。
- 使用 J / K （或 ← / → ）以在檔案間快速切換，無需返回清單。
- 使用 N / Shift + N 跳至下一個/上一個差異區塊。

### 新增留言與引導代理
[「新增留言並引導代理」章節](index.html#adding-comments-and-steering-the-agent)
在下列項目中時 **詳細資訊檢視**，您可以審查程式碼並將意見回饋直接寫在特定行上：

1. 找到該行 ：捲動至您要註解的行。
2. 開啟註解輸入 ：按下 C 。該 註解輸入 覆蓋層開啟於底部：

1. 撰寫您的意見回饋 ：輸入您的意見回饋並按下 Enter 儲存（或 Esc 取消）。
2. 管理您的註解 ：已儲存的註解會在差異中標記。您可以突顯該行並按下以下按鍵來刪除註解 D .
3. 離開並送出 ：按下 Esc 返回檔案清單。按 Esc 再次按下以退出 /diff 。若您有未儲存的註解，會出現確認畫面：

- 按下 Shift + Y 核准並離開。你的留言會經過格式化並作為下一個提示詞傳送給代理，讓你引導它的下一輪。
- 按下 Shift + N 拒絕並離開，捨棄留言。

### 審查回合記錄（回合模式）
[「審查對話歷程（Turn 模式）」章節](index.html#reviewing-turn-history-turn-mode)
按下 Tab 切換至 **回合模式**。這會依引入變更的對話回合分組，讓您檢查代理在先前步驟中的作為：

### 導覽提交樹狀結構（提交模式）
[「導覽提交樹（Commit 模式）」章節](index.html#navigating-the-commit-tree-commit-mode)
按下 Tab 再次按下以切換至 **提交模式**。這會將儲存庫的提交記錄渲染為互動式圖表。您可上下瀏覽鏈結，或使用…在分支間跳轉 ←/→:

反白標示任何提交並按下 Enter 載入並檢閱其差異：

---

## 鍵盤快速鍵參考
[「鍵盤快速鍵參考」章節](index.html#keyboard-shortcuts-reference)
### 檔案清單檢視（VCS 與回合模式）
[「檔案清單檢視（VCS 與 Turn 模式）」章節](index.html#file-list-view-vcs-and-turn-modes)
| 金鑰 | 動作 |
| --- | --- |
| Tab / → / ← | 循環切換模式（VCS > Turn > Commit） |
| ↑ / ↓ （或 J / K ) | 導覽檔案清單 |
| Enter | 開啟所選檔案的詳細檢視 |
| Esc | 離開差異檢視器 |

### 檔案詳細資訊檢視
[「檔案詳細檢視」章節](index.html#file-detail-view)
| 金鑰 | 動作 |
| --- | --- |
| ↑ / ↓ | 捲動差異內容 |
| PgUp / PgDn | 以頁面為單位捲動差異 |
| J / K （或 → / ← ) | 切換至下一個/上一個檔案 |
| N / Shift + N | 跳至上一個 / 下一個 diff 區塊 |
| C | 在目前行新增／編輯留言 |
| D | 刪除目前行的註解 |
| Esc | 返回檔案清單檢視 |

### Commit tree 檢視（提交模式）
[「提交樹狀檢視（Commit 模式）」章節](index.html#commit-tree-view-commit-mode)
| 金鑰 | 動作 |
| --- | --- |
| ↑ / ↓ | 導覽提交歷程 |
| ← / → | 導覽至圖中的相鄰分支 |
| Enter | 載入所選提交的差異 |
| Esc | 離開差異檢視器 |

### 離開確認畫面
[「結束確認畫面」章節](index.html#exit-confirmation-screen)
| 金鑰 | 動作 |
| --- | --- |
| Shift + Y | 離開並將註解傳送給代理 |
| Shift + N | 離開並捨棄註解 |
| Esc | 返回檔案清單檢視 |

## 另請參閱
[「另請參閱」章節](index.html#see-also)
探索下列指南以進一步了解 CLI 自訂與對話管理：

- [設定、算繪與按鍵繫結](https://antigravity.gh.miniasp.com/docs/cli/settings) ：自訂 TUI 主題、alt-screen 偏好設定與按鍵綁定。
- [對話](https://antigravity.gh.miniasp.com/docs/cli/conversations) ：了解如何管理、分叉與倒帶對話執行緒。
- [CLI 參考資料](https://antigravity.gh.miniasp.com/docs/cli/reference) ：所有斜線指令與預設快速鍵的快速參考。
[上一個  
AI 點數 (/credits)](../credits/index.html.gz)[下一步  
推理投入（/effort）](../effort/index.html.gz)
