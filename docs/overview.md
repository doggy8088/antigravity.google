# 選擇您的 Antigravity

選擇您的 Antigravity2-0Antigravity 應用程式開始使用選擇您的 Antigravity Antigravity App 開始使用Antigravity 應用程式
# 選擇您的 Antigravity
[「選擇您的 Antigravity」章節](#choose-your-antigravity)
Antigravity 在專為此設計的產品介面中提供原生代理式協助，具備動態推理控制、多代理編排與企業級安全。從 Agent Manager 演進為獨立桌面指揮中心（Antigravity 應用程式），並搭配原生終端機、編輯器與程式化 SDK 介面，Antigravity 同時支援同步互動式結對程式設計，以及獨立於單一 IDE 的非同步背景代理工作流程。選取下方任一介面，探索即時介面預覽、核心工作流程與快速入門路徑：
 Left Navigation Rail  Right Display Pane  Component Preview  Desktop App Window Frame  Window Body: Left Sidebar + Center Conversation + Right Terminals Pane  1. Left Navigation Sidebar  2. Main Center Conversation Column  Top Conversation Bar checkout-service/Discount Code Validationmore_vert Conversation Thread Body Add promo code validation and expired coupon checks to the checkout endpoint.Worked for 11schevron_right
I updated `checkout-service` to validate discount codes before creating a payment intent:

- PromoValidator : Check expiration dates and minimum order totals.
- CheckoutController : Return 400 Bad Request with a clear message for expired codes.

Shall I run the checkout test suite to verify?
content_copythumb_upthumb_down Pinned Bottom Prompt Composer Ask anything, @ to mention, / for actions Static + icon add Model Selector Button + Dropdown anchored directly above the button Modelmicarrow_forward 3. Right Context Pane (Switchable: Terminals / Artifacts / Browser)  Tagline & Action Buttons (Ideal-for tags removed) 
獨立桌面應用程式，可用於啟動、協調與檢視自主代理團隊，並提供視覺化差異比對與計畫檢視。
[開始使用 Antigravity 應用程式arrow_forward](/docs/getting-started/)[桌面版功能指南](/docs/features/) Component Preview  Window Titlebar terminalAntigravity CLImore_horiz Terminal Canvas  Top Brand Header with Exact 6x5 Block Pixel Art "A" Logo Antigravity CLI 1.2.14developer@example.com (Google AI Pro)Gemini 3.8 Flash (High)~/projects/checkout-service Execution Turn  User Query >Run the test suite and fix the failing discount rounding test Agent Thought 1 ▸Thought for 2s, 114 tokensRunning unit tests to reproduce the rounding failure Tool Call 1 Bash(npm test -- src/discounts.test.ts)(ctrl+o to expand) Agent Thought 2 ▸Thought for 3s, 142 tokensUpdating currency rounding in calculateDiscount Tool Call 2 Edit(src/pricing/discounts.ts)(ctrl+o to expand) Bottom Framed Prompt Input & Status Bar >? for shortcutsGemini 3.8 Flash · high Tagline & Action Buttons (Ideal-for tags removed) 
鍵盤優先的終端機用戶端，可在本機 shell、遠端雲端環境與 SSH 工作階段中執行 Antigravity 工作流程。
[開始使用 Antigravity CLIarrow_forward](/docs/getting-started?tab=cli)[CLI 參考手冊](/docs/cli/reference/) Component Preview  Window Titlebar arrow_backarrow_forwardfolderspring-petclinicexpand_moresplitscreenview_sidebar IDE Body: Activity Bar + Split Left (Agent Chat) and Right (Editor Tabs + Markdown Report)  Far-Left IDE Activity Bar folder_copysearchfork_rightauto_awesomeextensionsettings Left: Antigravity Assistant Panel ANTIGRAVITYVS Codespring-petclinic / Project Analysis And Reportingaddmore_vert
Please review this project. Investigate how it works and build a report showing important files and data flows.

- BaseEntity , NamedEntity , and Person serve as base classes.
- Owner , Pet , Visit , Vet , Specialty , and PetType define business models.
Key System Controllers:
- OwnerController : Manages owner creation, lookup, and pagination.
- PetController : Handles pet updates/creation using PetValidator .
- VetController : Provides HTML vet list and cached JSON endpoint.
 Artifact Card (Clicking switches to project_review.md tab)  Assistant Prompt Bar Ask anything, @ to mention, / for actionsadd Model Selector Popover anchored directly above the model button Modelarrow_forward Right: Editor Tab Bar + Markdown Report / README Preview  Tab View 1: project_review.md (Active by default) Project ReviewReview ▾Spring PetClinic - Architectural Review & Technical Analysis
This document provides an architecture review and technical investigation of the **Spring PetClinic** application (`spring-projects/spring-petclinic`).
1. Project Overview & Tech Stack
Spring PetClinic is a reference application built to showcase modern **Spring Boot** patterns, clean domain-driven architecture, and Java best practices.

- Framework: Spring Boot 4.1.0, Spring MVC, Spring Data JPA, Spring Cache
- Java Toolchain: Java 17 ( build.gradle )
- Database & Persistence: In-memory H2, MySQL, PostgreSQL
2. Core Domain Model & Entity Hierarchy
The domain model follows standard Object-Relational Mapping (ORM) principles with common base class inheritance.
 Tab View 2: Preview README.md README.mdMarkdown PreviewSpring PetClinic Sample Application
Built with Spring Boot, Spring MVC, Thymeleaf, and Spring Data JPA (`spring-projects/spring-petclinic`).
Running PetClinic Locally
Clone the repository and start the embedded server using the Maven or Gradle wrapper:

- Maven: ./mvnw spring-boot:run
- Gradle: ./gradlew bootRun
- Local Endpoint: http://localhost:8080
Database Configuration
Uses an in-memory **H2** database by default, with Docker Compose profiles for `mysql` and `postgres`.
 Statusline Footer fork_right main⊗ 0 ⚠ 2 ⓘ 1Java: ReadyGradle: Build Error Tagline & Action Buttons (Ideal-for tags removed) 
將代理能力、行內補全與側邊面板互動直接嵌入 IDE 的編輯器擴充功能。
[開始使用 IDE 擴充功能arrow_forward](/docs/getting-started?tab=ide)[支援的擴充功能指南](/docs/ide/extensions/) Component Preview agent_pipeline.pyPython 3.10+
```
from google.antigravity import Agent, LocalAgentConfig
from google.antigravity.hooks.policy import allow, deny

# Configure stateful agent harness and safety policies
config = LocalAgentConfig(
    policies=[allow("view_file"), deny("run_command")],
    system_instructions="You are a senior software architect.",
)

# Execute multi-turn conversation in async context
async with Agent(config) as agent:
    response = await agent.chat("Audit the repository architecture.")
    print(await response.text())
```
 Tagline & Action Buttons (Ideal-for tags removed) 
可用於建構、自訂與部署自主式 AI 代理及測試框架的程式化 Python SDK，適用於您自己的應用程式與 CI/CD 流程。
[開始使用 Antigravity SDKarrow_forward](/docs/getting-started?tab=sdk)[工具與技能 API](/docs/sdk/tools/)
---

## 核心代理功能
[「代理核心功能」章節](#core-agent-capabilities)
每個 Antigravity 介面都執行在共享且高度最佳化的代理框架上，該框架與 Gemini 模型共同訓練，結合了同步的逐回合程式碼編輯與工具執行，以及非同步背景子代理、排程 cron sidecar 與自動化驗證迴圈：
psychology前沿 Gemini 模型Gemini 4 & 3.8
與 Google DeepMind 共同訓練。以 Gemini 4 Argon、Gemini 3.8 Flash 與 Gemini 3.1 Pro 提供前沿速度、可設定的推理層級與大型情境容量，為所有本機代理提供動力。
[模型規格arrow_forward](/docs/models/)group_work非同步子代理平行執行
將複雜的背景任務委派給在隔離的 Git worktree 上運作的並行子代理，且不阻塞您的作用中終端機或編輯器工作階段。
[子代理指南arrow_forward](/docs/subagents/)splitscreen視覺產出物驗證迴圈
透過結構化視覺報告追蹤並驗證代理輸出，包括互動式實作計畫、統一多檔案差異與瀏覽器工作階段錄製。
[產出物檢視arrow_forward](/docs/artifacts/)shield設計內建安全性有界存取
透過細緻的工具核准閘道、工作區目錄範圍、本機 Proxy 與企業 VPC 服務控制，強制執行本機執行防護。
[權限與安全性arrow_forward](/docs/permissions/) Google Ecosystem Integrations Wide Card hubGoogle 平台整合
與 Google 各產品團隊共同設計的技能、MCP 伺服器與擴充功能精選套組，包括 Firebase、Android、Modern Web、Chrome DevTools、Flutter、Google Cloud Data、Maps、Science 與 Antigravity SDK。
[檢視所有組合arrow_forward](/docs/build-with-google/)
---

## 前沿模型與動態推理
[「前沿模型與動態推理」章節](#frontier-models-and-dynamic-reasoning)
Antigravity 運用 Google DeepMind 的前沿 Gemini 模型與動態推理控制。可依對話回合調整推理努力，或將長期任務委派給自主代理群：
psychology
### 互動式模型與思考層級選擇器

請直接在下方體驗模型選擇器。Antigravity 可讓您依對話回合動態調整推理深度與模型速度。
[模型規格與限制arrow_forward](/docs/models/) Plan Segmented Control Model View Usage Action  Usage Popout Gemini ModelsWeekly Limit Remaining100%Five Hour Limit Remaining100%Claude and GPT modelsWeekly Limit Remaining100%Five Hour Limit Remaining100%
---

## 產品比較
[「產品比較」章節](#product-comparison)
比較 Antigravity 各介面的主要功能與執行環境：
 Category Filter Bar 
| 功能 | desktop_windows 應用程式 | terminal CLI | extension IDE 擴充功能 | code_blocks SDK |
| --- | --- | --- | --- | --- |
| 桌面應用程式 | check | close | close | close |
| 終端機使用者介面 (TUI) | close | check | close | close |
| 編輯器擴充功能（VS Code、JetBrains、VS、Zed、Xcode） | close | close | check | close |
| 程式化 Python SDK | close | close | close | check |
| 遠端控制 & 無頭執行 | check | check | close | close |
| 工作區 & Git 工作樹隔離 | check | check | close | check |
| 多代理群體 (/teamwork-preview) | check | check | close | close |
| 深度推理模式（/boost） | check | check | close | close |
| 互動式視覺產出物 & 差異 | check | check | check | close |
| 沙箱化 Chromium 瀏覽器自動化 | check | close | close | close |
| 自訂技能（SKILL.md） & 規則檔案 | check | check | check | check |
| Model Context Protocol (MCP) 用戶端 | check | check | check | check |
| 排程任務 & cron 側車 | check | check | close | close |
| 企業 SSO & BYOID（Workforce Identity） | check | check | check | check |
| 區域資料落地（US & EU） | check | check | check | check |
| VPC Service Controls (VPC-SC) | check | check | check | check |
| 要求、回應 & 遙測記錄 | check | check | check | check |
info功能針對每個介面的執行目標量身打造。「IDE 擴充功能」下的企業版功能適用於 Antigravity IDE 擴充功能（VS Code 中已正式推出 & Visual Studio；在 JetBrains、Zed 與 Xcode 中預覽）。[功能指南arrow_forward](/docs/features/)
---

## 使用者與企業版層級
[「使用者與企業版層級」章節](#user-and-enterprise-tiers)
Antigravity 透過 Google Cloud 安全、區域資料落地與 VPC Service Controls，支援個人開發者與企業工程組織：
verified_user部署層級 Community Panel 個人開發者
專為需要前沿自主程式設計協助的軟體工程師、研究人員與開源貢獻者設計，可在本機工作站上執行。
免費方案 · Pro & Ultra 方案desktop_windows桌面版 & 終端機用戶端
完整存取原生 Antigravity 應用程式桌面應用程式與高速 `agy` 命令列介面。
extension所有 IDE 擴充功能
整合 VS Code、JetBrains IDE、Xcode、Zed 與 Visual Studio，具備專屬代理面板、互動式計畫與內嵌 diff 審查。
toll彈性個人方案 & AI 點數
從每月 0 美元的免費方案開始，或升級至 Google AI Plus、Pro 或 Ultra 以獲得更高的速率限制與可選的 AI 點數超額。
build技能、MCP & 規則
撰寫專案層級自訂技能（`SKILL.md`），連接 stdio/SSE MCP 伺服器，並定義行為規則集。
[免費開始使用arrow_forward](/docs/getting-started/)[檢視 AI 點數 & 計畫](/docs/plans/) Enterprise Panel 企業版工程組織
專為需要 Google Cloud 治理、區域資料落地、VPC 服務控制與企業身分識別管理的組織打造。
Google Cloud 服務條款 · VPC-SC[badge企業 SSO & BYOIDGoogle Cloud & WIF使用 Google Cloud SSO、透過 Workforce Identity Federation 的自攜身分 (BYOID)（例如 Okta），或 Application Default Credentials 進行驗證。](/docs/enterprise/)[public區域資料落地美國、歐盟 & 全域控制模型推論與資料處理在全球、美國多區域與歐盟多區域端點中的發生位置。](/docs/enterprise/)[lanVPC Service ControlsGoogle Cloud透過 Google Cloud VPC 服務控制（VPC-SC）與 IAM 角色治理，強制執行網路服務邊界與私人連線。](/docs/enterprise/)[fact_check要求 & 遙測記錄雲端稽核直接在您的 Google Cloud 專案中設定專案遙測與完整請求與回應記錄，以確保安全與法規遵循。](/docs/enterprise/)[account_balance_wallet彈性企業版計費授權或隨用隨付透過 Gemini Enterprise Agent Platform API 選擇依用量計費，或使用內含配額與託管超量額度的 Gemini Enterprise 授權。](/docs/enterprise/)[shield_lock零模型訓練保證資料隱私權受 Google Cloud 服務條款約束。您的提示詞、程式碼與對話紀錄絕不會儲存在您的私有環境之外，也不會用於訓練模型。](/docs/enterprise/)[探索企業版套件arrow_forward](/docs/enterprise/)[架構 & 案例研究](/use-cases/enterprise/)
---

## 文件支柱
[「文件支柱」章節](#documentation-pillars)
探索六大核心架構支柱的文件：
[rocket_launch從這裡開始開始使用安裝 Antigravity 應用程式、設定 CLI、整合 SDK，並設定 IDE 擴充功能。](/docs/getting-started/)[school概念學習掌握基礎概念，包括工作區、Git Worktree 與工作階段。](/docs/features/)[extension可擴充性延伸撰寫自訂技能（`SKILL.md`），連接 MCP 伺服器，並定義生命週期掛鉤。](/docs/skills/)[domain安全性企業版企業 SSO & BYOID、區域資料落地、VPC Service Controls 與 Cloud Logging。](/docs/enterprise/)[menu_book生態系與 Google 攜手建置Firebase、Chrome DevTools、Android CLI、Dart & Flutter、科學與資料代理套件技能。](/docs/build-with-google/)[auto_stories規格參考CLI 指令手冊、模型規格、設定結構描述與 API 參考資料。](/docs/cli/reference/)[下一步  
快速入門](/docs/getting-started/)
