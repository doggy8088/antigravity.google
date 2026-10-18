# 審查產出物

審查產出物 — Antigravity CLIcliAntigravity CLI功能審查產出物 — Antigravity CLI Antigravity CLI 功能Antigravity CLI適用於：Antigravity CLI
# 審查產出物
[「審查產出物」章節](index.html#reviewing-artifacts)
稽核產生的程式碼、審查實作提案、附加行級回饋留言，並在將編輯套用至本機檔案系統前驗證視覺媒體素材。

## 協作與協同引導
[「協作與共同引導」章節](index.html#collaboration-and-co-steering)
An **產出物** 是代理為完成任務並向您傳達進度與思路而建立的結構化交付項目。產出物包含豐富的 Markdown 大綱（例如實作計畫）、程式碼差異、架構圖與視覺媒體檔案。

隨著代理以更高的自主性在更長時間內工作，產出物實現了非同步協作。您無需同步仔細監控每個工具執行，只需在關鍵里程碑審查高層級交付物。

由於自主代理偶爾會偏離正軌或產生幻覺解法，產出物工作流程扮演關鍵的互動式協同引導機制。視您的設定而定，代理會在中間里程碑暫停，讓您檢視擬議的計畫或程式碼編輯、提供內嵌註解，並在任何變更實際寫入本機檔案系統之前重新引導代理。

TUI 將這些資產劃分為兩個互動層：

- 產出物選取器覆蓋層 ：高階檢查清單選單，包含審查狀態標記、快速預覽切換與可收合資料夾。
- 產出物詳細檢視器 ：全螢幕程式碼稽核介面，支援行內註解、語法突顯與圖表縮放。

## /artifact 總覽
[「/artifact 總覽」章節](index.html#overview-of-artifact)
當代理產生或修改檔案時，您的 TUI 狀態列會更新通知（`/artifact to review`）。按下 `ctrl+r` 於提示詞方塊內部開啟全螢幕 **產出物選取器** 面板。

```
10 artifacts · /artifact to review
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
>
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
Action required (10 left)
› [ ] new release_notes.md   open  approve reject
  utils.py
  [ ] new performance_report.md
  api_client.py
  config_manager.py
  [ ] new user_guide.md
  run_tests.py
  data_processor.py
  [ ] new system_architecture.md
  [ ] new project_overview.md

Keyboard: ↑/↓ Navigate  y/n Approve/reject  shift+a Approve all  p Preview  esc Done
```

### 互動快速鍵
[「互動按鍵繫結」章節](index.html#interaction-keybindings)
使用以下專用面板控制項稽核檔案檢查清單：

| 金鑰 | TUI 指令 | 動作行為 |
| --- | --- | --- |
| ↑ / ↓ | nav.scroll_line | 將反白選取項目在項目清單中向上或向下捲動。 |
| h / l | nav.switch_button | 聚焦並在行內列按鈕之間切換： 開啟 , 核准 ，與 拒絕 （亦支援左/右方向鍵）。 |
| p | confirm.preview | 切換 快速行內檔案預覽 。這會在選取的列正下方開啟 12 行截斷並縮排的程式碼區塊預覽。 |
| y | confirm.approve | 即時核准反白的檔案。狀態標記更新為綠色勾選（ ✓ approved ). |
| n | confirm.reject | 即時拒絕反白的檔案。狀態標記更新為紅色叉號（ ✗ rejected ). |
| Shift+A | confirm.approve_all | 一次動作批次核准所有待處理的可操作檔案。 |
| Shift+R | confirm.reject_all | 一次動作批次拒絕所有待處理的可操作檔案。 |
| Enter | nav.confirm | 執行作用中焦點按鈕。若 open 按鈕聚焦時，會啟動全螢幕詳細檢視器。 |
| Esc | nav.escape | 儲存您使用中的審查狀態、將核准/拒絕提交回代理線程，並將焦點返回提示詞方塊。 |

### 程式碼檔案與視覺媒體
[「程式碼檔案與視覺媒體」章節](index.html#code-files-and-visual-media)
為整理工作區資產，選擇器會依格式類型區分檔案：

- 可採取動作的程式碼檔案 ：需要明確核准的標準程式碼、組態檔與計畫 Markdown 檔案。
- 可摺疊媒體抽屜 ：視覺資產檔案（例如 PNG、JPG、WebP、SVG、MP4 或 WebM 媒體）會分組至專屬的 媒體 抽屜標頭。使用以下動作與媒體項目互動：
  - 反白標示 媒體 標頭列並按下 Enter 展開或收合抽屜清單。
  - 反白標示特定媒體項目並按下 Enter 在你作業系統的原生媒體檢視器中開啟檔案。

---

## 檢視產出物
[「檢視產出物」章節](index.html#viewing-an-artifact)
若要對檔案的程式碼結構或建議邏輯啟動詳細稽核，請選取 `open` （或按下 `Enter` 直接在反白標示的程式碼列上）以開啟 **產出物詳細檢視器**.

```
implementation_plan.md
>   1      Implementation Plan: Alpha-Centauri Telemetry Scaling Engine
    2
    3     This document provides a highly detailed, step-by-step engineering implementation plan to upgrade the Alpha-Centauri
    4     telemetry ingestion pipeline. It outlines current gaps, proposed architecture improvements, execution timelines, risks,
    5     and verification procedures.
    6     ──────
    7     ## 1. Executive Summary
    8
    9     As sensor deployments scale from 100 to 10,000 active nodes, the existing synchronous Python-based ingestion system (
   10     data_processor.py ) faces critical CPU and write latency bottlenecks.
   11
   12     This implementation plan details the migration to an asynchronous, remote-buffered pipeline utilizing distributed
   13     message
   14     queues, multi-threaded worker pools, and an optimized column-oriented storage layer.
   15     ──────
   16     ## 2. Current Architecture vs. Target Architecture
   17
   18     ### Gap Analysis
   19
   20      Feature    | Existing (v1.2)   | Target (v2.0)     | Gap to Resolve
   21     ------------|-------------------|-------------------|---------------------------
   22      Concurrency| Sync, 1-thread    | Async, concurrent | Cannot scale peak bursts
   23      Buffer     | None (direct API) | Message Queue     | Outage data loss
   24      Storage    | Flat JSON         | Columnar CNS      | Slow queries, high consumption
   25      Config     | Load on launch    | Dynamic polling   | Requires restarts to update
   26
   27     ### Architectural Schema
   28
   29         Ingestion Layer │ Buffering Layer │ Processing Layer │ Storage Layer
   30
   31         ┌────────────┐    ┌────────────┐
   32         │ "Sensor 1" │    │ "Sensor 2" │
   33         └────────────┘    └────────────┘
   34                │ HTTP POST           │ HTTP POST
   35                ▼                 ▼
   36         ┌─────────────────┐
   37         │ "Load Balancer" │
   38         └─────────────────┘
   39                  │
   40                  ▼
   41         ┌───────────────────────┐    ┌───────────────────────┐
   42         │ "Ingestion Gateway A" │    │ "Ingestion Gateway B" │
   43         └───────────────────────┘    └───────────────────────┘
   44                     │ Publish                    │ Publish
   45                     ▼                            ▼
   46         ┌─────────────────────────────┐
   47         │ "Distributed Message Queue" │
   48         └─────────────────────────────┘
   49                        │ Stream Consume
   50                        ▼
   51         ┌────────────────────┐    ┌────────────────────┐
   52         │ "Worker Process 1" │    │ "Worker Process 2" │
   53         └────────────────────┘    └────────────────────┘
   54                    │ Read Config               │ Read Config
   55                    ▼                         ▼
   56         ┌──────────────────────────┐    ┌──────────────────────────┐
   57         │ "Dynamic Config Service" │    │ "Columnar Storage (CNS)" │
  [0%  L1  1-57/135]

  ↑/↓ scroll · pgup/pgdown page · shift+g bottom · g top · c comment · m raw mermaid · ctrl+=/ctrl+- zoom 100%
  l hide lines · esc close
```

### 稽核與導覽
[「稽核與導覽」章節](index.html#auditing-and-navigation)
使用下列鍵盤快捷鍵導覽詳細檢視器：

- 捲動 ：使用以下項目逐頁或逐行捲動 j / k （或標準方向鍵）。
- 邊界跳躍 ：按下 g 跳至檔案頂端，且 Shift+G 直接跳至底部。
- 切換裝訂邊 ：按下 l 切換行號溝槽的開關，以更乾淨地呈現原始程式碼。

### 逐行註解
[「細緻行註解」章節](index.html#granular-line-commenting)
若特定程式碼區塊需要修正，請依下列步驟操作：

1. 導覽並將游標定位至目標行。
2. 按下 c 開啟直接附加至該行的行內多行文字編輯器緩衝區。
3. 撰寫您的描述性意見回饋，然後按下 Esc 儲存並提交留言。該行會更新為顯示視覺留言指示器（ 💬 ).
4. 若要刪除您的有效意見回饋，請將游標置於註解行上並按下 d .

### 自訂 Mermaid 圖表呈現
[「自訂 Mermaid 圖表算繪」章節](index.html#custom-mermaid-diagram-rendering)
若作用中文件包含結構化系統流程圖、資料庫關聯或架構配置，請使用下列控制項：

- 循環切換呈現模式（`m`) ：按下 m 循環切換下列視覺算繪模式：
  - Kitty 圖形圖像 ：在相容 Kitty 的終端機模擬器中，將圖表原生算繪為行內圖形。
  - ASCII 方框圖 （預設值）：將圖表渲染為簡潔、高效能且相容所有 Shell 的文字藝術。
  - 原始程式碼 ：顯示原始 Markdown 程式碼區塊圍欄。
- 縮放圖形 ：當 Kitty 圖形圖片模式作用中時，按下 ctrl+= 放大並縮放影像，且 ctrl+- 縮小。

按下 `Esc` 關閉詳細資料檢視器並返回主要選取器清單。

## 後續步驟
[「後續步驟」章節](index.html#next-steps)
設定偏好設定並檢閱代理自主性參數：

- [管理對話](https://antigravity.gh.miniasp.com/docs/cli/conversations) ：恢復先前的工作階段並分叉分支。
- [設定、算繪與按鍵繫結](https://antigravity.gh.miniasp.com/docs/cli/settings) ：自訂鍵盤快速鍵與視覺緩衝區。
- [權限與沙箱](https://antigravity.gh.miniasp.com/docs/cli/sandbox) ：設定安全參數與隔離清單。
[上一個  
視覺螢幕擷取畫面](../../screenshots/index.html.gz)[下一步  
總覽](../../projects/index.html.gz)
