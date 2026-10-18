# 權限指令（/permissions）

權限指令（/permissions）— Antigravity CLIcliAntigravity CLI功能權限指令（/permissions）— Antigravity CLI Antigravity CLI 功能Antigravity CLI適用於：Antigravity CLI
# 權限指令（/permissions）
[「權限指令（/permissions）」章節](#permissions-command-permissions)
在 TUI 中互動式管理精細的代理權限規則。

## 總覽
[「總覽」章節](#overview)
Antigravity CLI 使用細粒度權限引擎來保護您的工作站。雖然您可以在設定檔中手動設定這些規則，但 `/permissions` 指令會開啟互動式 **權限管理員** 用於即時檢視、新增、編輯與刪除規則的 TUI 面板。

關於權限引擎運作方式、支援的動作與手動設定的詳細資訊，請參閱概念性 **權限指南**.

## 互動式管理權限
[「以互動方式管理權限」章節](#managing-permissions-interactively)
若要開啟權限管理員，請依照下列步驟操作：

1. 類型 /permissions 於提示詞方塊。
2. 按下 Enter .

```
/permissions
```

### 導覽與控制項
[「導覽與控制」章節](#navigation-and-controls)
權限管理員以三個面板運作：

1. **範圍選擇器**：選取您要編輯的組態範圍： 使用 ↑/↓ （或 J/K）以導覽， Enter 選取，且 Esc 離開。
  - 專案 ：僅適用於作用中專案的規則（若無開啟的專案則停用）。
  - 共用 ：跨所有 Antigravity 產品共用的規則。
  - 全域 ：適用於所有工作階段的全域規則。
2. **規則檢視器**：檢視為所選範圍設定的規則：
  - 在…之間切換 允許清單 , 拒絕清單 ，與 asklist 使用…的分頁 ← / → （或 Tab ).
  - 使用以下方式捲動瀏覽規則 ↑ / ↓ （或 J / K ).
  - 按下 A 新增規則。
  - 按下 E （或 Ctrl + G ）以編輯反白的規則。
  - 按下 D （或 Backspace ）以刪除反白的規則。
  - 按下 Esc 返回 範圍選擇器 .
3. **新增或編輯規則**：在輸入欄位中輸入或編輯規則：
  - 規則必須遵循 action(target) 格式 (例如， command(git) ).
  - 按下 Enter 驗證並儲存規則。
  - 按下 Esc 取消。

---

## 逐步導覽
[「逐步導覽」章節](#step-by-step-walkthrough)
以下是在 TUI 中即時檢視、新增、編輯與刪除規則的方法。

### 選取範圍並檢視規則
[「選擇範圍並檢視規則」章節](#selecting-a-scope-and-viewing-rules)
當您執行 `/permissions`，您先開啟 **範圍選擇器**。選取 **全域** 管理你的全域規則：

按下 Enter 開啟 **規則檢視器** 適用於所選範圍。您可以使用 ←/→ 在…之間切換 **允許**, **拒絕**，與 **詢問** 分頁：

### 新增權限規則
[「新增權限規則」章節](#adding-a-permission-rule)
若要允許代理執行 `git` 指令自動執行無需提示，請依照以下步驟：

1. 在 **規則檢視器**，按下 A。該 **新增規則** 面板開啟於底部：
2. 類型 `command(git)` 於輸入欄位：
3. 按下 Enter。規則會經過驗證並儲存，將您帶回 **規則檢視器** 其中 `command(git)` 現在出現於您的允許清單：

### 編輯權限規則
[「編輯權限規則」章節](#editing-a-permission-rule)
若您想限制代理僅能執行 `git diff` 自動執行，您可以編輯規則：

1. 在 規則檢視器 ，使用 ↑ / ↓ 反白 command(git) .
2. 按下 E （或 Ctrl + G ）。輸入面板開啟，預先填入 command(git) .
3. 將文字修改為 command(git diff) .
4. 按下 Enter 儲存。新規則會取代舊規則。

### 刪除權限規則
[「刪除權限規則」章節](#deleting-a-permission-rule)
若要移除規則並還原為針對這些動作顯示提示，請依照下列步驟操作：

1. 在 規則檢視器 ，反白您要刪除的規則（例如， command(git diff) ).
2. 按下 D （或 Backspace ).
3. 該規則會立即從清單中移除。

## 後續步驟
[「後續步驟」章節](#next-steps)
探索下列指南以進一步了解安全性與權限：

- [權限指南](/docs/cli/permissions) ：了解安全模型、動作類型與萬用字元比對。
- [沙箱與安全](/docs/cli/sandbox) ：設定用於執行指令的原生 OS 容器。
- [CLI 參考資料](/docs/cli/reference) ：檢視所有可用的斜線指令與按鍵綁定。
[上一個  
學習 (/learn)](/docs/commands/learn/)[下一步  
計畫（/plan）](/docs/plan/)
