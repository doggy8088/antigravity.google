# 代理權限

權限2-0Antigravity 應用程式功能權限 Antigravity App 功能Antigravity 應用程式Antigravity CLI適用於：Antigravity 應用程式Antigravity CLI
# 代理權限
[「代理權限」章節](index.html#agent-permissions)
Antigravity 使用統一的細粒度權限引擎，在拒絕、詢問與允許存取清單間評估敏感工具操作。如果您將 Antigravity 與 Gemini Enterprise 搭配使用，請參閱 [Gemini Enterprise 中的 Antigravity](https://antigravity.gh.miniasp.com/docs/enterprise#autonomous-tool-permissions-and-human-in-the-loop-controls).

- Antigravity 應用程式
- Antigravity CLI

## Antigravity 應用程式
[「Antigravity App」章節](index.html#sr-tab-1)
### macOS 與 Linux
[「macOS 與 Linux」章節](index.html#macos-and-linux)
Antigravity 使用強健、統一的權限引擎來保護您的環境，同時啟用自主工作流程。代理執行的每個敏感操作都會表示為 **權限資源** 格式為 `action(target)`.

權限會依據三個不同的存取清單進行評估：

- 拒絕 ：該動作會立即被封鎖。
- 詢問 ：代理會暫停並提示要求您的明確核准後再繼續。
- 允許 ：允許該動作，無需提示。

#### 權限預設集
[「權限預設集」章節](index.html#permission-presets)
The **權限預設** 控制代理動作的核准方式。您設定的允許、拒絕與詢問規則會疊加在預設值之上並一律優先：

| 預設集 | 沙箱 | 終端機指令 | 檔案存取 | MCP & 網頁 |
| --- | --- | --- | --- | --- |
| 預設 | 已啟用 | 沙箱內允許；沙箱外詢問 | 工作區 + 暫存目錄 | 詢問 |
| 要求審查 | 已停用 | 一律詢問 | 僅限工作區 | 詢問 |
| Turbo | 已停用 | 已允許（無限制） | 完整檔案系統 | 已允許 |

在 **預設**，終端機指令在隔離的…內執行 **終端機沙箱** 存取範圍限於你的工作區與暫存目錄，且 **無網路存取**。當指令需要網路連線或主機資源時，代理會請求在沙箱外執行—除非已有…涵蓋，否則會徵求您的核准 `command(...)` 允許規則。

在以下項目下設定您的預設 **設定** > **一般** > **權限設定**，或在…下依專案覆寫 **設定** > **專案** （新專案預設為 **繼承一般**，遵循您的全域預設）。請參閱 **代理設定** 查看各預設的更多詳情。

#### 支援的動作與比對規則
[「支援的動作與比對規則」章節](index.html#supported-actions-and-matching-rules)
下表說明支援的權限動作及其比對行為：

| 動作 | 目標格式 | 比對行為 | 預設備援 |
| --- | --- | --- | --- |
| read_file | read_file(/path) , read_file(dir) ，或 read_file(*) | 比對絕對路徑，或相對於專案工作區根目錄的路徑。授予對所含檔案與資料夾的遞迴讀取存取權。使用 read_file(*) 比對系統上的所有檔案。 | 詢問 （在工作區中允許） |
| write_file | write_file(/path) 或 write_file(*) | 與以下相同 read_file 。隱含授與 read_file 適用於完全相同的目標路徑。 | 詢問 （在工作區中允許） |
| read_url | read_url(domain) 或 read_url(*) | 比對主機名稱與子網域（例如， google.com 涵蓋 mail.google.com ）。忽略 URL 路徑區段。使用 read_url(*) 比對任何網域。 | 詢問 |
| execute_url | execute_url(domain) 或 execute_url(*) | 操作網頁元素（點擊、輸入），或在網域上驅動互動式瀏覽器工作流程。 | 詢問 |
| command | command(prefix) , command(regex:pattern) ，或 command(*) | 預設按精確單字或權杖前綴逐字比對。如要以規則運算式比對，請以 開頭目標 regex: 前綴 (每個空白分隔的字符會評估為錨定正規表示式 ^(?:pattern)$ ，例如， command(regex:npm run (build.*)) ）。涵蓋沙箱內外的執行。 | 詢問 （在 Default 預設下於沙箱中允許） |
| mcp | mcp(server/tool) , mcp(server/*) ，或 mcp(*) | 比對指定伺服器上的精確 MCP 工具或所有工具（同樣適用於本機與遠端 MCP 伺服器）。使用 mcp(*) 比對任何工具。 | 詢問 |

##### 當指令需要完全相符時
[「當指令需要完全比對時」章節](index.html#when-commands-require-an-exact-match)
某些殼層結構可在看似無害的前綴後面隱藏任意指令執行，例如指令或程序替換（`$(...)`，反引號， `<(...)`），算術環境（`$((...))`），大括號展開（`{a,b}`），非字面指令名稱、網路或檔案描述元重新導向，以及執行子指令的開發者工具旗標（例如 `git -c core.pager=<cmd>` 或 `tar --to-command`）。當 Antigravity 偵測到其中任何一項（或無法乾淨地解析指令）時，會對整個指令列停用前綴比對：僅當規則比對整行時，指令才會無需提示執行 **逐字比對** （或橫跨整行原始行 `regex:` 規則），否則退回 **詢問**.

標準的殼層組合仍照常進行前綴比對：管線、 `&&`/`||`/`;` 鏈、引號字面量、純 `$VAR` 引數、簡單的檔案重新導向，以及透明包裝（`timeout`, `nohup`, `nice`, `env`，其內部指令會獨立評估）。例如，使用 `command(git)` 於您的允許清單， `git status && git log` 執行時不會提示，而 `git log $(whoami)` 提示核准。

##### 了解跨平台的 read_url 與 execute_url
[「了解各平台的 read_url 與 execute_url」章節](index.html#understanding-read_url-and-execute_url-across-the-platform)
The `read_url` 權限控管橫跨 Antigravity 三個不同區域的出站網路連線：

1. The `read_url` 工具 ：當代理使用內部 read_url_content 擷取網頁 Markdown 以供研究的工具，它會檢查你的 read_url 授權（複數）。
2. 瀏覽器子代理與工具 ：在操作 Chrome 工作階段時， read_url 授權載入與檢視目標網域。但互動式 UI 操作（按一下按鈕、輸入文字）由以下項目獨立管控 execute_url .
3. 終端機沙箱化 ：在以下項目下授權的任何網域 read_url 直接編譯進沙箱的出站網路允許清單，允許如 等指令 curl 或 npm 連線至已授權的主機。

##### 跨平台指令與路徑比對
[「跨平台指令與路徑比對」章節](index.html#cross-platform-command-and-path-matching)
無論您是在 macOS、Linux 或 Windows 上開發，Antigravity 都能確保您的權限規則運作一致。在 macOS 與 Linux 上，路徑使用標準正斜線（`/`）。在 Windows 上，Antigravity 會在規則評估前自動正規化路徑 ，方式為移除磁碟機代號（例如， `C:`）並轉換所有反斜線（`\`）轉為正斜線（`/`).

#### 隱含權限規則
[「隱含權限規則」章節](index.html#implicit-permission-rules)
Antigravity 套用以下隱含權限規則：

- 寫入即表示可讀取 ：允許 write_file 於路徑自動授予 read_file 於該路徑。
- 拒絕讀取即代表拒絕寫入 ：拒絕 read_file 於路徑立即阻擋 write_file 於該路徑。

#### 互動式權限提示
[「互動式權限提示」章節](index.html#interactive-permission-prompts)
當代理遇到需要核准的作業（**詢問** 模式)，互動式卡片出現於您的編輯器。在按一下 之前 **允許** 適用於檔案、URL 或 MCP 權限，您可以直接在提示卡中編輯目標字串以擴大授予範圍（例如，將單一檔案請求如 `/project/file.txt` 至父目錄 `/project`）。Antigravity 會驗證您編輯的目標安全地涵蓋該操作，並在該回合剩餘時間套用擴大的授權，防止相關操作重複提示。 *（備註：終端機指令不支援範圍編輯）。*

#### 終端機指令與沙箱
[「終端機指令與沙箱」章節](index.html#terminal-commands-and-the-sandbox)
在 **預設** 預設，代理在隔離的 內執行終端機指令 [終端機沙箱](https://antigravity.gh.miniasp.com/docs/sandbox)，預設僅能存取您的工作區與系統暫存目錄，且無網路存取。指令可在沙箱中無需手動核准執行，您的權限授權可進一步決定沙箱能觸及的範圍：

- 在以下項目下授與的路徑 read_file 動態填入沙箱的唯讀檔案系統允許清單。
- 在以下項目下授與的路徑 write_file 動態填入沙箱的讀寫檔案系統允許清單。
- 授與的網域，位於 read_url 定義輸出網路存取政策。

由於某些指令無法在沙箱中執行（例如需要網路存取的指令），代理仍可選擇在沙箱之外執行指令。除非已透過某個項目預先允許或拒絕，否則這類指令會提示要求您核准， `command` 規則。

#### 預設系統行為與防護機制
[「預設系統行為與防護機制」章節](index.html#default-system-behaviors-and-guardrails)
當動作未明確列於您的允許、拒絕或詢問清單時，Antigravity 會退回安全的系統預設值：

1. 指令 ：在以下項目下 預設 預設，指令在沙箱內無提示執行，在沙箱外執行需核准。
2. 工作區檔案 ：讀寫作用中專案目錄內的檔案無需提示即可進行，而非工作區檔案則需要核准。
3. 網頁瀏覽預設為詢問 ：適用於以下項目的動作 read_url 和 execute_url 預設為 詢問 。在代理導覽至任何網頁或對其操作前，會暫停並徵求您的明確核准，除非已設定允許規則。
4. MCP 工具預設為詢問 ：未設定的 MCP 工具呼叫會提示要求核准。

#### 設定範例
[「設定範例」章節](index.html#configuration-examples)
下列範例顯示…的規則 **允許清單**，定義無需提示即可執行的動作：

```
command(git)                             # Standard git commands
command(regex:npm run (build|lint|test)) # Allow safe npm scripts using regex
command(git push)                        # Allow git push, inside or outside the sandbox
read_file(/var/log/app)                  # Read external log paths
write_file(src/)                         # Edit relative src/ folder
read_url(google.com)                     # Fetch Google subdomains
mcp(linter/*)                            # Run linter MCP tools
```

下列範例顯示…的規則 **拒絕清單**，定義永久封鎖的動作：

```
command(rm -rf)                    # Block destructive deletions
command(regex:curl .*)             # Block unvetted curl downloads
command(sudo)                      # Block sudo privileges
write_file(.git/)                  # Safeguard Git history
write_file(/home/user/.ssh)        # Safeguard SSH keys
```

下列範例顯示…的規則 **詢問清單**，定義暫停以待手動確認的動作：

```
command(*)                         # Prompt all commands
execute_url(aws.amazon.com)        # Prompt AWS console actuation
mcp(sql/execute_mutation)          # Prompt modifying SQL queries
```

### Windows
[「Windows」章節](index.html#windows)
Antigravity 使用強健、統一的權限引擎來保護您的環境，同時啟用自主工作流程。代理執行的每個敏感操作都會表示為 **權限資源** 格式為 `action(target)`.

權限會依據三個不同的存取清單進行評估：

- 拒絕 ：該動作會立即被封鎖。
- 詢問 ：代理會暫停並提示要求您的明確核准後再繼續。
- 允許 ：允許該動作，無需提示。

#### 支援的動作與比對規則
[「支援的動作與比對規則」章節](index.html#supported-actions-and-matching-rules-1)
下表說明在 Windows 上支援的權限動作及其比對行為：

| 動作 | 目標格式 | 比對行為 | 預設備援 |
| --- | --- | --- | --- |
| read_file | read_file(/path) , read_file(dir) ，或 read_file(*) | 比對絕對路徑，或相對於專案工作區根目錄的路徑。授予對所含檔案與資料夾的遞迴讀取存取權。使用 read_file(*) 比對系統上的所有檔案。 | 詢問 （在工作區中允許） |
| write_file | write_file(/path) 或 write_file(*) | 與以下相同 read_file 。隱含授與 read_file 適用於完全相同的目標路徑。 | 詢問 （在工作區中允許） |
| read_url | read_url(domain) 或 read_url(*) | 比對主機名稱與子網域（例如， google.com 涵蓋 mail.google.com ）。忽略 URL 路徑區段。使用 read_url(*) 比對任何網域。 | 詢問 |
| execute_url | execute_url(domain) 或 execute_url(*) | 操作網頁元素（點擊、輸入），或在網域上驅動互動式瀏覽器工作流程。 | 詢問 |
| command | command(prefix) , command(regex:pattern) ，或 command(*) | 預設按精確單字或權杖前綴逐字比對。如要以規則運算式比對，請以 開頭目標 regex: 前綴 (每個空白分隔的字符會評估為錨定正規表示式 ^(?:pattern)$ ，例如， command(regex:npm run (build.*)) ). | 詢問 |
| unsandboxed | unsandboxed(prefix) , unsandboxed(regex:pattern) ，或 unsandboxed(*) | 預設逐字比對指令前綴（或搭配 regex: ）。符合此授權的指令在終端機沙箱啟用時，會在容器隔離之外執行。 | 詢問 |
| mcp | mcp(server/tool) , mcp(server/*) ，或 mcp(*) | 比對指定伺服器上的精確 MCP 工具或所有工具（同樣適用於本機與遠端 MCP 伺服器）。使用 mcp(*) 比對任何工具。 | 詢問 |

##### 當指令需要完全相符時
[「當指令需要完全比對時」章節](index.html#when-commands-require-an-exact-match-1)
某些殼層結構可在看似無害的前綴後面隱藏任意指令執行，例如指令或程序替換（`$(...)`，反引號， `<(...)`），算術環境（`$((...))`），大括號展開（`{a,b}`），非字面指令名稱、網路或檔案描述元重新導向，以及執行子指令的開發者工具旗標（例如 `git -c core.pager=<cmd>` 或 `tar --to-command`）。在 PowerShell 或命令提示字元等 Windows 殼層上，語法無法乾淨拆分為個別單字的指令也屬於此類。當 Antigravity 偵測到其中任何一項時，會對整個指令列停用前綴比對：僅當規則比對整行時，指令才會無需提示執行 **逐字比對** （或橫跨整行原始行 `regex:` 規則，例如 `command(regex:git .*)`），否則退回至 **詢問**.

標準的殼層組合仍照常進行前綴比對：管線、 `&&`/`||`/`;` 鏈、引號字面量、純 `$VAR` 引數、簡單的檔案重新導向，以及透明包裝（`timeout`, `nohup`, `nice`, `env`，其內部指令會獨立評估）。例如，使用 `command(git)` 於您的允許清單， `git status && git log` 執行時不會提示，而 `git log $(whoami)` 提示核准。

##### 了解跨平台的 read_url 與 execute_url
[「了解各平台的 read_url 與 execute_url」章節](index.html#understanding-read_url-and-execute_url-across-the-platform-1)
The `read_url` 權限控管橫跨 Antigravity 三個不同區域的出站網路連線：

1. The `read_url` 工具 ：當代理使用內部 read_url_content 擷取網頁 Markdown 以供研究的工具，它會檢查你的 read_url 授權（複數）。
2. 瀏覽器子代理與工具 ：在操作 Chrome 工作階段時， read_url 授權載入與檢視目標網域。但互動式 UI 操作（按一下按鈕、輸入文字）由以下項目獨立管控 execute_url .
3. 終端機沙箱化 ：在沙箱模式下，在以下項目下授權的任何網域 read_url 直接編譯進容器的出站網路允許清單 ( AllowedDomains ），允許類似…的指令 curl 或 npm 連線至已授權的主機。

##### 跨平台指令與路徑比對
[「跨平台指令與路徑比對」章節](index.html#cross-platform-command-and-path-matching-1)
無論您是在 macOS、Linux 或 Windows 上開發，Antigravity 都能確保您的權限規則運作一致。在 macOS 與 Linux 上，路徑使用標準正斜線（`/`）。在 Windows 上，Antigravity 會在規則評估前自動正規化路徑 ，方式為移除磁碟機代號（例如， `C:`）並轉換所有反斜線（`\`）轉為正斜線（`/`).

#### 隱含權限規則
[「隱含權限規則」章節](index.html#implicit-permission-rules-1)
Antigravity 套用以下隱含權限規則：

- 寫入即表示可讀取 ：允許 write_file 於路徑自動授予 read_file 於該路徑。
- 拒絕讀取即代表拒絕寫入 ：拒絕 read_file 於路徑立即阻擋 write_file 於該路徑。

#### 互動式權限提示
[「互動式權限提示」章節](index.html#interactive-permission-prompts-1)
當代理遇到需要核准的作業（**詢問** 模式)，互動式卡片出現於您的編輯器。在按一下 之前 **允許** 適用於檔案、URL 或 MCP 權限，您可以直接在提示卡中編輯目標字串以擴大授予範圍（例如，將單一檔案請求如 `/project/file.txt` 至父目錄 `/project`）。Antigravity 會驗證您編輯的目標安全地涵蓋該操作，並在該回合剩餘時間套用擴大的授權，防止相關操作重複提示。 *（備註：終端機指令不支援範圍編輯）。*

#### 終端機沙箱化（預覽版）
[「終端機沙箱化（預覽）」章節](index.html#terminal-sandboxing-preview)
啟用沙箱時，權限授與也適用於指令：

- 在以下項目下授與的路徑 read_file 動態填入沙箱的唯讀檔案系統允許清單。
- 在以下項目下授與的路徑 write_file 動態填入沙箱的讀寫檔案系統允許清單。
- 授與的網域，位於 read_url 定義輸出網路存取政策。

#### 預設系統行為與防護機制
[「預設系統行為與防護機制」章節](index.html#default-system-behaviors-and-guardrails-1)
當動作未明確列於您的允許、拒絕或詢問清單時，Antigravity 會退回安全的系統預設值：

1. 指令預設為詢問 ：未設定的終端機指令（ command 和 unsandboxed ）需要手動核准，除非已在您的設定中設為無需提示即可執行。
2. 工作區檔案 ：讀寫作用中專案目錄內的檔案無需提示即可進行，而非工作區檔案則需要核准。
3. 網頁瀏覽預設為詢問 ：適用於以下項目的動作 read_url 和 execute_url 預設為 詢問 。在代理導覽至任何網頁或對其操作前，會暫停並徵求您的明確核准，除非已設定允許規則。
4. MCP 工具預設為詢問 ：未設定的 MCP 工具呼叫會提示要求核准。

#### 設定範例
[「設定範例」章節](index.html#configuration-examples-1)
下列範例顯示…的規則 **允許清單**，定義無需提示即可執行的動作：

```
command(git)                             # Standard git commands
command(regex:npm run (build|lint|test)) # Allow safe npm scripts using regex
unsandboxed(git push)                    # Allow git push outside sandbox
read_file(/var/log/app)                  # Read external log paths
write_file(src/)                         # Edit relative src/ folder
read_url(google.com)                     # Fetch Google subdomains
mcp(linter/*)                            # Run linter MCP tools
```

下列範例顯示…的規則 **拒絕清單**，定義永久封鎖的動作：

```
command(rm -rf)                    # Block destructive deletions
command(regex:curl .*)             # Block unvetted curl downloads
command(sudo)                      # Block sudo privileges
write_file(.git/)                  # Safeguard Git history
write_file(/home/user/.ssh)        # Safeguard SSH keys
```

下列範例顯示…的規則 **詢問清單**，定義暫停以待手動確認的動作：

```
command(*)                         # Prompt all commands
execute_url(aws.amazon.com)        # Prompt AWS console actuation
mcp(sql/execute_mutation)          # Prompt modifying SQL queries
```

## Antigravity CLI
[「Antigravity CLI」章節](index.html#sr-tab-2)
### CLI 細粒度權限
[「CLI 細緻權限」章節](index.html#cli-fine-grained-permissions)
為在啟用自主工作流程的同時保護您的工作站，Antigravity CLI 整合了穩健的 **細粒度的權限引擎**。代理執行的每個敏感操作都表示為 **權限資源** 格式為 `action(target)`.

權限會依據全域設定中設定的三個不同存取清單進行評估（`~/.gemini/antigravity-cli/settings.json`):

- `deny` ：該動作會立即被封鎖。
- `ask` ：代理會暫停並提示要求您的明確核准後再繼續。
- `allow` ：該動作自動核准，無需提示。

### 支援的 CLI 動作與比對規則
[「支援的 CLI 動作與比對規則」章節](index.html#supported-cli-actions-and-matching-rules)
細緻權限遵循標準結構描述模式：

```
action(target)
```

下表列出支援的動作、目標格式規格與比對演算法：

| 動作 | 目標格式 | 比對行為 | 預設備援 |
| --- | --- | --- | --- |
| read_file | read_file(/path) , read_file(dir) ，或 read_file(*) | 比對絕對路徑，或相對於工作區根目錄的路徑。授予對所含檔案與資料夾的遞迴讀取存取權。 read_file(*) 比對系統上的所有檔案。 | 詢問 （在工作區中自動允許） |
| write_file | write_file(/path) 或 write_file(*) | 與以下相同 read_file 。隱含授與 read_file 適用於完全相同的目標路徑。 | 詢問 （在工作區中自動允許） |
| read_url | read_url(domain) 或 read_url(*) | 比對主機名稱與子網域（例如， google.com 涵蓋 mail.google.com ）。忽略 URL 路徑區段。 read_url(*) 比對任何網域。 | 詢問 |
| execute_url | execute_url(domain) 或 execute_url(*) | 操作網頁元素（點擊、輸入），或在網域上驅動互動式瀏覽器工作流程。 | 詢問 |
| command | command(prefix) , command(regex:pattern) ，或 command(*) | 預設逐字比對指令前綴。若要使用規則運算式，請加入 regex: 前綴 (例如， command(regex:npm run (build|lint|test)) ). | 詢問 |
| unsandboxed | unsandboxed(prefix) , unsandboxed(regex:pattern) ，或 unsandboxed(*) | 預設逐字比對指令前綴（或搭配 regex: ）。符合此授權的指令在終端機沙箱啟用時，會在容器隔離之外執行。 | 詢問 |
| mcp | mcp(server/tool) , mcp(server/*) ，或 mcp(*) | 比對指定伺服器上的精確 MCP 工具或所有工具（適用於本機與遠端 MCP 伺服器）。 mcp(*) 比對任何工具。 | 詢問 |

#### CLI 全域萬用字元語法
[「CLI 全域萬用字元語法」章節](index.html#cli-global-wildcard-syntax)
在所有支援的動作類型中，傳遞全域萬用字元 `*` （例如 `read_file(*)`, `command(*)`，與 `mcp(*)`）比對該整個動作命名空間內的所有目標。

#### CLI 隱含權限規則
[「CLI 隱含權限規則」章節](index.html#cli-implicit-permission-rules)
Antigravity CLI 套用以下隱含權限規則：

- 寫入即表示可讀取 ：允許 write_file 於路徑自動授予 read_file 於該路徑。
- 拒絕讀取即代表拒絕寫入 ：拒絕 read_file 於路徑立即阻擋 write_file 於該路徑。

#### CLI 跨平台路徑正規化
[「CLI 跨平台路徑正規化」章節](index.html#cli-cross-platform-path-normalization)
無論您是在 macOS、Linux 或 Windows 上開發，Antigravity 都能確保您的權限規則運作一致。在 macOS 與 Linux 上，路徑使用標準正斜線（`/`）。在 Windows 上，Antigravity 會在規則評估前自動正規化路徑 ，方式為移除磁碟機代號（例如， `C:`）並將所有反斜線轉換（`\`）轉為正斜線（`/`).

#### CLI 跨平台指令比對
[「CLI 跨平台指令比對」章節](index.html#cli-cross-platform-command-matching)
在 PowerShell 或命令提示字元等 Windows shell 中，無法乾淨拆成多個單字的指令預設需要精確比對。若要在 Windows 上比對指令及其子指令，請使用 `regex:` 前綴 (例如， `command(regex:git .*)` 允許任何 `git` 指令）。

---

### 預設 CLI 系統行為與防護機制
[「預設 CLI 系統行為與防護機制」章節](index.html#default-cli-system-behaviors-and-guardrails)
當動作未明確列於您的 `allow`, `deny`，或 `ask` 清單，系統退回安全的系統預設值：

1. 工作區會自動允許 ：在標準作業中，自動允許讀寫作用中專案目錄內的檔案。
2. 網頁瀏覽預設為詢問 ：適用於以下項目的動作 read_url 和 execute_url 預設為 詢問 。在代理導覽至任何網頁或對其操作前，會暫停並徵求您的核准，除非已設定允許規則。
3. 未設定的動作預設為詢問 ：所有其他未設定的動作（ command , mcp , execute_url ，以及非工作區檔案）預設為 詢問 .

---

### 互動式 CLI 權限提示
[「互動式 CLI 權限提示」章節](index.html#interactive-cli-permission-prompts)
當代理遇到需要核准的作業（**詢問** 模式)，互動式提示卡出現於您的 TUI。

確認之前 **允許** 適用於檔案、URL 或 MCP 權限，您可以直接在提示卡中編輯目標字串以擴大授予範圍（例如，將單一檔案請求如 `/project/file.txt` 至父目錄 `/project`）。CLI 會驗證您編輯的目標安全地涵蓋該操作，並在該回合剩餘時間套用擴大的授權，防止相關操作重複提示。 *（備註：終端機指令不支援範圍編輯）。*

---

### CLI 設定範例
[「CLI 設定範例」章節](index.html#cli-configuration-examples)
將這些規則新增至您的 `~/.gemini/antigravity-cli/settings.json` 檔案：

```
{
    "permissions": {
        "allow": [
            "command(git)",
            "command(regex:npm run (build|lint|test))",
            "unsandboxed(git push)",
            "read_file(/var/log/app)",
            "write_file(src/)",
            "read_url(google.com)",
            "mcp(linter/*)"
        ],
        "deny": [
            "command(rm -rf)",
            "command(regex:curl .*)",
            "command(sudo)",
            "write_file(.git/)",
            "write_file(/home/user/.ssh)"
        ],
        "ask": ["command(*)", "execute_url(aws.amazon.com)", "mcp(sql/execute_mutation)"]
    }
}
```

## 相關資源
[「相關資源」章節](index.html#related-resources)
探索相關文件與指南：

- [權限指令](https://antigravity.gh.miniasp.com/docs/cli/commands/permissions) ：在 TUI 中互動式管理規則。
- [沙箱自訂](https://antigravity.gh.miniasp.com/docs/sandbox) ：強制執行 OS 層級容器隔離邊界。
- [外掛程式與技能](https://antigravity.gh.miniasp.com/docs/plugins) ：建立您自己的自訂技能與斜線指令。
- [設定、算繪與按鍵繫結](https://antigravity.gh.miniasp.com/docs/settings) ：自訂鍵盤快速鍵與緩衝區。
[上一個  
管理對話](../cli/conversations/index.html.gz)[下一步  
Tab 補全](../ide/tab/index.html.gz)
