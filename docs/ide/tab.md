# Antigravity IDE：分頁與導覽

Tab - Antigravity IDEantigravity-ideAntigravity IDE功能Tab - Antigravity IDE Antigravity IDE 功能Antigravity IDE適用於：Antigravity IDE
# Antigravity IDE：分頁與導覽
[「Antigravity IDE：Tab 與導覽」章節](#antigravity-ide-tab-and-navigation)
本指南涵蓋核心導覽與補全工具： **Supercomplete**, **Tab-to-Jump**，與 **Tab-to-Import**.

## Supercomplete
[「Supercomplete」章節](#supercomplete)
Supercomplete 會在您目前游標位置附近的區域提供程式碼建議。

### 運作方式
[「運作方式」章節](#how-it-works)
Supercomplete 包含下列功能：

- 全檔案建議 ：建議可修改整份文件中的程式碼，處理如變更變數名稱或同時更新不同函式定義等任務。
- 接受中 ：按下 Tab 接受變更。

## Tab-to-Jump
[「Tab-to-Jump」章節](#tab-to-jump)
Tab-to-Jump 是一種流暢的導覽工具，會建議您文件中游標下一個合理的移動位置。

### 運作方式
[「運作方式」章節](#how-it-works-1)
Tab-to-Jump 的運作方式如下：

- 導覽 ：A Tab 跳轉 圖示出現，提供將游標移至下一個邏輯編輯位置。按下 Tab 立即將游標移至該位置。
- 接受中 ：按下 Tab 接受跳轉。

## Tab-to-Import
[「Tab-to-Import」章節](#tab-to-import)
Tab-to-Import 可處理遺漏的相依性，不會打斷您的流程。

### 運作方式
[「運作方式」章節](#how-it-works-2)
Tab-to-Import 的運作方式如下：

- 偵測 ：若您輸入未匯入的類別或函式，Antigravity 會建議匯入。
- 動作 ：按下 Tab 完成該單字並立即在檔案頂端加入 import 陳述式。

## 設定
[「設定」章節](#settings)
在您的設定中，您可自訂這些功能的行為：

- 啟用或停用功能 ：您可以個別關閉 Autocomplete、Tab-to-Jump、Supercomplete 或 Tab-to-Import。
- Tab 速度 ：控制建議的回應速度：
  - Slow ：在建議前等待更多上下文。
  - Default ：提供平衡的步調。
  - Fast ：提供連發建議。
- 反白標示插入的文字 ：啟用時，使用 Tab 插入的文字會突顯，讓您輕鬆追蹤變更。
- 剪貼簿情境 ：啟用時，Antigravity 會使用剪貼簿內容以提升補全準確度。
- 允許 gitignored 檔案 ：在列於以下項目的檔案內啟用 Tab 功能（建議與跳轉） .gitignore 檔案。Tab 僅在已安裝 Git 時忽略被 gitignore 的檔案。
[上一個  
總覽](/docs/permissions/)[下一步  
代理側欄](/docs/ide/agent-side-panel/)
