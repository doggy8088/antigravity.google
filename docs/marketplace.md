# 市集

市集2-0Antigravity 應用程式功能市集 Antigravity 應用程式功能Antigravity 應用程式Antigravity CLI適用於：Antigravity 應用程式Antigravity CLI
# 市集
[「市集」章節](index.html#marketplace)
Marketplace 讓您可以探索、安裝與管理精選的 [外掛](https://antigravity.gh.miniasp.com/docs/plugins) 以可重複使用的…擴充你的代理 [技能](https://antigravity.gh.miniasp.com/docs/skills), [MCP 伺服器](https://antigravity.gh.miniasp.com/docs/mcp), [規則](https://antigravity.gh.miniasp.com/docs/rules)，與 [子代理](https://antigravity.gh.miniasp.com/docs/subagents).

- Antigravity 應用程式
- Antigravity CLI

## Antigravity 應用程式
[「Antigravity App」章節](index.html#sr-tab-1)
### 瀏覽並安裝外掛程式
[「瀏覽並安裝外掛」章節](index.html#browse-and-install-plugins)
若要在 Antigravity 應用程式中瀏覽並安裝 Marketplace 外掛，請依照下列步驟操作：

1. 在左側側欄中，點選 **自訂項目** 分頁（下方 **排程任務**):
2. 按一下 **市集** 分頁以檢視可用的外掛：
3. 按一下任何外掛程式卡片以檢視其詳細資訊與隨附功能：
4. 按一下 **+** 於外掛卡片以安裝。

### 管理已安裝的外掛
[「管理已安裝的外掛」章節](index.html#manage-installed-plugins)
若要檢視、切換或解除安裝現有外掛：

1. 在 **自訂項目** 面板，按一下 **已安裝** 分頁：
2. 按一下任何外掛程式旁的切換開關以啟用或停用它。
3. 若要解除安裝外掛，請按一下外掛卡片並選取 **解除安裝**.

您在 Antigravity 應用程式中安裝的任何外掛都會自動同步，並出現在 Antigravity CLI 的 **已安裝** 分頁。

## Antigravity CLI
[「Antigravity CLI」章節](index.html#sr-tab-2)
### 在 CLI 中開啟外掛管理員
[「在 CLI 中開啟外掛管理員」章節](index.html#open-the-plugin-manager-in-the-cli)
在 Antigravity CLI 中，使用以下方式開啟互動式外掛管理員 `/plugin` 斜線命令（或其別名 `/plugins`):

```
/plugin
```
 Top Terminal Window Bar /plugin—Antigravity CLI Terminal TUI Viewport  Title Plugins Tabs Header  Search Input Line  Local Directory Install Row (Discover tab only) + Install from local directory... Path: ./my-custom-plugin (press Enter or Esc) Plugin List Container  Populated dynamically via script  Toast Status Message  Bottom Keyboard Bar Keyboard:
互動式 CLI 外掛管理員——按 Tab（或點選分頁）在「已安裝」與「探索」間切換，↑/↓ 導覽，Enter 展開詳細資訊，空白鍵切換啟用/停用，Ctrl+S 安裝或解除安裝。

按下 Tab 在…之間切換 **已安裝** 分頁與 **探索** 分頁。

---

### 探索分頁
[「探索分頁」章節](index.html#discover-tab)
使用 **探索** 分頁以瀏覽市集目錄並安裝新外掛：

- 搜尋外掛程式 ：開始輸入以搜尋並篩選特定外掛程式。
- 從本機目錄安裝 ：突顯 從本機 目錄安裝 並按下 Enter 提供本機檔案系統路徑以供外掛安裝。
- 檢視外掛詳細資訊 ：突顯外掛程式並按下 Enter 展開其詳細資料檢視。詳細資料檢視會顯示下列資訊：
  - 描述
  - 包含的元件（MCP 伺服器、技能、規則、代理等）
  - 市集名稱
  - 版本
- 安裝或解除安裝 ：按下 Ctrl + S 於 未安裝的外掛以安裝，或按下 Ctrl + S 於 已安裝的外掛以解除安裝。

#### 安裝後
[「安裝後」章節](index.html#after-installation)
外掛安裝後，介面更新如下：

- 探索分頁 ：綠色圓點（ ● ）出現在外掛程式名稱旁，表示其安裝狀態。
- 已安裝分頁 ：外掛程式名稱出現在 已安裝 分頁清單。

### 已安裝分頁
[「已安裝分頁」章節](index.html#installed-tab)
使用 **已安裝** 分頁以檢視與管理你已安裝的外掛：

- 搜尋已安裝的外掛程式 ：開始輸入以篩選已安裝的外掛程式。
- 啟用或停用 ：按下 Space 於已安裝的外掛以切換 啟用與停用。
- 檢視外掛詳細資訊 ：按下 Enter 於已安裝的外掛以 展開其詳細檢視。詳細檢視顯示以下資訊：
  - 描述
  - 技能（如適用）
  - MCP 伺服器（如適用）
  - 規則（如適用）
  - 代理（如適用）
  - 市集名稱
  - 本機安裝路徑
  - 版本
- 解除安裝 ：按下 Ctrl + S 於已安裝的外掛以 解除安裝。

#### 鍵盤快速鍵
[「鍵盤快速鍵」章節](index.html#keyboard-shortcuts)
外掛程式管理員中提供下列鍵盤捷徑：

| 金鑰 | Tab | 動作 |
| --- | --- | --- |
| Tab | 兩者皆是 | 在…之間切換 已安裝 分頁與 探索 分頁。 |
| Any key | 兩者皆是 | 在使用中的分頁中搜尋並篩選外掛程式。 |
| Enter | 兩者皆是 | 展開外掛詳細資料（或選取 從本機目錄安裝 於 探索 ). |
| Ctrl + S | 兩者皆是 | 安裝未安裝的外掛，或解除安裝已安裝的外掛。 |
| Space | 已安裝 | 切換已安裝外掛的啟用或停用。 |

---

### 內嵌 /plugin 指令
[「內嵌 /plugin 指令」章節](index.html#inline-plugin-commands)
除了互動面板， `/plugin` 支援行內命令以 `install`, `uninstall`, `enable`, `disable`，與 `list` 直接從 提示詞安裝外掛，無需開啟外掛管理員 UI：

- **從官方 Marketplace 或本機目錄安裝**：執行 以下指令（`<marketplace-name>` 支援官方市集， `antigravity-plugins-official`): `/plugin install <plugin-name>@antigravity-plugins-official/plugin install <local-path>` 例如，執行 `/plugin install firebase@antigravity-plugins-official` 輸出： `Successfully installed plugin "firebase" from "antigravity-plugins-official".`
- **內嵌管理與列出外掛**：執行以下指令： `/plugin uninstall <plugin-name>/plugin enable <plugin-name>/plugin disable <plugin-name>/plugin list`

---

## 從您的 Shell 安裝（ agy plugin )
[「從 Shell 安裝（agy plugin）」章節](index.html#install-from-your-shell-agy-plugin)
在互動式 TUI 工作階段之外，您可以使用 從 shell 直接安裝與管理外掛 `agy plugin`:

- 從官方 Marketplace 安裝 ：指定 <plugin-name>@antigravity-plugins-official ( <marketplace-name> 僅 支援官方市集， antigravity-plugins-official ），或傳遞 裸 <plugin-name> ，預設為 <plugin-name>@antigravity-plugins-official : `agyplugininstallfirebase@antigravity-plugins-officialagyplugininstallfirebase`
- 從 GitHub 連結安裝 ：直接從 GitHub 儲存庫 URL 複製並暫存外掛程式： `agyplugininstallhttps://github.com/<owner>/<repo>`
- 從本機目錄安裝 ：將本地外掛程式資料夾暫存至您的 設定檔： `agyplugininstall</path/to/local/plugin>`
- 列出已安裝的外掛 ：執行 agy plugin list 取得已安裝外掛及其元件數量的 人類可讀摘要，或傳入 --json 輸出包含安裝路徑與元件名稱的 JSON 陣列： `agypluginlistagypluginlist--json`
- 啟用、停用或解除安裝外掛 : `agypluginenable<plugin-name>agyplugindisable<plugin-name>agypluginuninstall<plugin-name>`

---

## 後續步驟
[「後續步驟」章節](index.html#next-steps)
探索相關文件與指南：

- [讓你的外掛上架市集](https://forms.gle/2EX5RFYPoJe1UgxR9) ： 填寫此意向表單，深入了解如何將您的外掛程式上架至 Antigravity Marketplace。
- [外掛程式](https://antigravity.gh.miniasp.com/docs/plugins) ：了解如何撰寫自訂 plugin.json 資訊清單並封裝您自己的外掛。
- [與 Google 攜手建置](https://antigravity.gh.miniasp.com/docs/build-with-google) ：探索精選的 Google 外掛程式，適用於 Firebase、Android、Flutter、Chrome DevTools、BigQuery 等。
- [CLI 參考資料](https://antigravity.gh.miniasp.com/docs/cli/reference) ：檢視 Antigravity CLI 中的所有斜線指令與 鍵盤快速鍵。
[上一個  
遠端控制](../remote-control/index.html.gz)[下一步  
外掛程式](../plugins/index.html)
