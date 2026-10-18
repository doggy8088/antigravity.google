# Firebase Studio 移轉

Firebase Studio 移轉2-0Antigravity 應用程式開始使用Firebase Studio 移轉 Antigravity 應用程式開始使用Antigravity 應用程式
# Firebase Studio 移轉
[「Firebase Studio 移轉」章節](index.html#firebase-studio-migration)
Antigravity 是 Google 的新一代代理優先平台，專為高速、自主開發工作流程打造，是其主要歸屬。它不依賴雲端網頁編輯器，而是將 AI 的力量直接帶入您的本機開發環境。

## 為何使用 Antigravity？
[「為何選擇 Antigravity？」章節](index.html#why-antigravity)
相較於 Firebase Studio 中的網頁版 Code 檢視，Antigravity 帶來顯著強化：

- 本機環境控制 ：Antigravity 在您的本機上執行，這表示您對檔案系統、版本與終端機擁有完整控制權。
- 真正的代理開發 ：超越基本的程式碼補全。Antigravity 提供代理式開發工作流程，可在您的程式碼庫中自主格式化、測試並實作完整任務。
- 無縫的 Firebase 支援 ：您仍可輕鬆將專案部署至 Firebase、使用 Firebase CLI 與 Firebase 服務通訊，並一如既往在本機測試函式。

## 了解如何操作 Antigravity
[「學習如何導覽 Antigravity」章節](index.html#learn-how-to-navigate-antigravity)
為了協助您快速上手，以下是您在 Antigravity 中可找到喜愛的 Firebase Studio 功能的位置：

雲端 IDE 程式碼檢視

享受熟悉的 VS Code 介面，結合 AI 增強功能，並在本機硬體上執行。

代理式聊天

您在 Firebase Studio 中使用的 AI 聊天現已原生整合至您的 IDE，能對本機檔案採取自主行動。

App Hosting 部署

您可以繼續使用 Firebase CLI 或內建 IDE 整合，無縫部署並管理您的 App Hosting 網址。

以瀏覽器為基礎的模擬器

直接在您的機器上執行 Firebase 本機模擬器套件，進行更快、離線的測試。

## 將您的 Firebase Studio 專案遷移至 Antigravity
[「將 Firebase Studio 專案移轉至 Antigravity」章節](index.html#migrate-your-firebase-studio-project-to-antigravity)
Antigravity 是本機代理優先 IDE，將 AI 的力量帶入您的本機開發環境。

### 先決條件
[「前置條件」章節](index.html#prerequisites)
確認您已在本機安裝下列項目且均為最新版本：

- Google Antigravity IDE
- Node.js （20 或更新版本）
- Firebase CLI （15.10.0 或更新版本）

### 匯出並初始化您的應用程式
[「匯出並初始化您的應用程式」章節](index.html#export-and-initialize-your-app)
**選項 1：自動遷移**

此工作流程使用 Antigravity 代理自動處理專案轉換：

1. 在 Firebase Studio 中，點選 **立即移動** 工作區頂部的按鈕。
2. 依照出現的視窗選擇匯出方式：
  - 如果 壓縮並下載 按鈕出現時，按一下它。
  - 否則，請開啟指令面板（ Cmd+Shift+P 於 macOS 或 Ctrl+Shift+P 於 ChromeOS、Windows 或 Linux）並執行 Firebase Studio：Zip & 下載 指令。
3. 在本機解壓縮資料夾，並在 Antigravity 中開啟。
4. 在 Antigravity 的代理面板中輸入以下提示詞。為了最佳化工作流程並節省 Token，建議選取 **Gemini Flash** 模型，專為高速率轉換任務（如檔案轉換）的速度與效率設計： `@fbs-to-agy-export` Antigravity 代理開始專案遷移，過程中會請求您的協助。請依照代理的指引完成遷移流程。如果遇到錯誤，請提示代理再試一次。

**選項 2：手動匯出**

若您偏好自行處理遷移而不使用 AI Token，可使用 Firebase CLI 手動匯出專案。此方法直接，且無需代理互動。

開啟終端機並執行以下指令，取代 `<path>` 使用你解壓縮的專案資料夾或原始…的檔案路徑 `.zip` 檔案：

```
npx firebase-tools@latest studio:export <path>
```

### 預覽您的應用程式
[「預覽您的應用程式」章節](index.html#preview-your-app)
擷取專案並在 Antigravity 中開啟後，您可以在本機查看應用程式：

1. 在 Antigravity 中，導覽至 執行與除錯 選單，於左側邊欄。
2. 按一下播放按鈕以啟動本機開發伺服器。
3. 依照終端機中的指示預覽你的應用程式。

### 發布您的應用程式
[「發佈您的應用程式」章節](index.html#publish-your-app)
Antigravity 使用代理技能，依 Firebase 最佳實務發布您的應用程式：

1. 在對話面板中輸入以下提示詞： `Publish my app`
2. 當提示執行 `firebase deploy`，選擇 **是**。若您先前已發布至 App Hosting，代理會發布至您現有的 URL。若您是第一次發布至 App Hosting，代理會引導您完成流程。
3. 關於未來的更新，指示代理 `publish my app` 於 Antigravity 聊天面板。

## 繼續您的工作
[「繼續您的工作」章節](index.html#continue-your-work)
在 Antigravity 中繼續開發有幾種方式：

- 執行工作流程 ：在 Antigravity 中，您可以輸入以下內容，無縫執行工作流程並繼續與模型協作 @workflows <workflow_name> 進入代理式聊天面板。
- App Hosting 部署 ：您可以透過代理使用代理技能直接無縫部署應用程式，或使用平台無關的 Firebase CLI 與 GitHub。
- 疑難排解 ：若遇到部署問題，請嘗試使用 Firebase CLI 重新驗證，或驗證您的專案密鑰。

感謝您參與 Firebase Studio 的旅程。您的原型與回饋直接形塑了 Google 的 AI 工具，我們期待看到您接下來在 Antigravity 中打造的成果！

## 需要協助？
[「需要協助嗎？」章節](index.html#need-help)
在我們的 提交任何移轉錯誤 [GitHub Issues](https://github.com/firebase/firebase-tools/issues).
[上一個  
Gemini CLI](../cli/gcli-migration/index.html.gz)[下一步  
從工作流程遷移至技能](../migration/workflows-to-skills/index.html.gz)
