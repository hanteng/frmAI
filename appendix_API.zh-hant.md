---
label: app-api
---
# 🔖附錄⚙：API分類  {.unnumbered}

為求讀者能見樹見林地掌握當代雲端平台的各類 API 生態，此附錄整理至2025年幾家業界領導者的目錄。介紹重心先是以生成式 AI、其他 AI、及非 AI 依序說明。

## API分類表

雲端與 AI 服務依功能與技術特性可分為三大類：**生成式 AI**（以大語言模型為核心）、**非生成式 AI／ML**（認知與傳統機器學習）、以及**非 AI／ML**（雲端基礎與應用服務）。

- 🧠 **生成式 AI／LLM 類別**  
  - 🔗 **模型脈絡 MCP**：協同**大語言模型**進行跨系統工具調用與安全整合，支援多函數平行與巢狀調用。  
  - 🧩 **脈絡工程（Context Engineering）**：整合系統提示模板、多輪對話狀態管理，並注入檢索增強生成（RAG）所需知識。  
  - 📚 **知識驅動生成（RAG）**：結合向量檢索與 LLM，支持知識庫問答、企業文件檢索等應用。  
  - 🎬 **影片生成**：支持使用提示詞、場景描述、鏡頭參數等生成影片內容。  
  - 🖼 **圖像生成**：支持使用提示詞、風格設定、解析度等生成圖像。  
  - 💻 **代碼生成**：支持使用提示詞、語言指定、功能描述等生成可執行程式碼。  
  - 💬 **文字生成與對話**：支持基礎模型、角色設定、多輪對話等生成自然語言內容。  
  - 🛠 **模型微調與嵌入向量**：針對**大語言模型**進行領域微調，並生成語意嵌入向量以支持檢索與語意匹配。  

- 🤖 **非 LLM 的 AI／ML 類別**  
  - 🧩 **認知服務（Cognitive Services）**：涵蓋視覺、語音、語言、決策等預訓練 API。  
  - 🎙 **語音生成（TTS）**：將文字轉換為自然語音，支持多語言與多音色。  
  - 📊 **預測與推薦**：提供時間序列預測與個性化推薦服務。  
  - 🗣 **語音辨識（STT）**：將語音轉換為文字，支持即時與批次模式。  
  - 🌐 **機器翻譯**：支持多語言自動翻譯與語言偵測。  
  - 👁 **電腦視覺**：提供影像標註、物件偵測、OCR 等功能。  

- 🛠 **非 AI／ML 類別**  
  - 🔐 **安全與身分管理**：IAM、金鑰管理、WAF/防火牆等安全控制。  
  - 🌐 **網路與內容傳遞**：VPC/VNet、CDN、DNS 等網路與加速服務。  
  - 💾 **儲存與資料庫**：物件儲存、關聯式與 NoSQL 資料庫。  
  - 🖥 **計算與執行環境**：虛擬機、容器、無伺服器運算等計算資源。  

以下為五大平台（AWS、Microsoft Azure、Google Cloud Platform、阿里雲、Meta）的對照表，展示各家在三大類別中的代表性服務。


- 🧞😵‍💫 **生成式 AI ／LLM類別**
  - 🛣🌐 **脈絡工程**：整合系統提示模板、多輪對話狀態、注入RAG所需知識
  - 🔗🔐 **模型脈絡MCP**：協同**大語言模型**進行跨系統工具調用與整合
  - 🔗📝 **知識驅動生成**：支持知識驅動生成（RAG）的服務
  - 🎨🎬 **影片生成**：支持使用提示詞.......等等參數而進行影片生成服務。
  - 🎨🖼 **圖像生成**：支持使用提示詞.......等等參數而進行圖像生成服務。
  - 🪄💻 **代碼生成**：支持使用提示詞.......等等參數而進行代碼生成服務。 
  - 🪄💬 **文字生成與對話**：支持基礎模型、......等等...而進行文字生成服務。
  - 🪄🛠 **模型微調與嵌入向量**：......**大語言模型**

- 🦾🤖 **AI／ML 類別**
  - 👁️🧩 **認知服務：** 視覺、語音、語言、決策等預訓練 API
  - 📊 **預測與推薦：** 時間序列、推薦系統
  - 🎙🗣 **語音生成（TTS）：** 文字轉語音合成
  - 🗣 **語音辨識（STT）：** 語音轉文字
  - 🌐 **機器翻譯：** 多語言翻譯
  - 👁 **電腦視覺：** 影像標註、偵測、OCR

- 🛠 **非 AI／ML 類別**
  - 🔐 **安全與身分管理：** IAM、金鑰、WAF/防火牆
  - 🌐 **網路與內容傳遞：** VPC/VNet、CDN、DNS
  - 💾 **儲存與資料庫：** 物件儲存、關聯/NoSQL
  - 🖥 **計算與執行環境：** VM、Functions/Lambda

以下表格對照五大平台（AWS、Microsoft Azure、Google Cloud Platform、阿里雲、Meta）的對應服務與能力。

***

## 五大平台對照表

### 🧠 生成式 AI 類別（先進 → 基礎）

| 次類 | AWS | Microsoft Azure | Google Cloud Platform | 阿里雲 | Meta |
|------|-----|-----------------|-----------------------|--------|------|
| 🔗 MCP | AWS MCP Servers | Azure AI Foundry MCP Server | GCP MCP Toolbox | 阿里雲 MCP + AI Gateway | Llama API MCP 工具調用 |
| 🧩 Context Engineering | Bedrock Agents | Azure AI Agents | Vertex AI Agent Builder | 百煉 Agent 能力 | Llama API 長上下文 + 工具調用 |
| 📚 RAG | Kendra + Bedrock + OpenSearch | Azure AI Search + Azure OpenAI | Vertex AI Search + Matching Engine | AnalyticDB + 百煉 + Elasticsearch | Faiss + Llama API |
| 🎬 影片生成 | （無原生） | （無原生） | Imagen Video / VideoPoet | 通義星辰 | Llama 4 Maverick |
| 💻 代碼生成 | CodeWhisperer | Azure OpenAI GPT-4 Code | Codey API | 百煉 Code 模型 | Llama 4 Turbo/Deep Think |
| 🖼 圖像生成 | Bedrock + Stable Diffusion | Azure OpenAI DALL·E API | Imagen API | 通義萬相 | Llama 4 Maverick |
| 💬 文字生成與對話 | Bedrock | Azure OpenAI Service | Vertex AI Generative AI Studio | 百煉（通義千問） | Llama 4 Turbo / Deep Think |
| 🛠 模型微調與嵌入向量 | SageMaker | Azure OpenAI Fine-tuning / Embeddings | Vertex AI Custom Model / Embeddings | 百煉模型微調與向量檢索 | Llama API Fine-tuning / Embeddings |

***


### 🤖 非生成式 AI 類別
以較先進至基礎排序...

| 次類 | AWS | Microsoft Azure | Google Cloud Platform | 阿里雲 | Meta |
|------|-----|-----------------|-----------------------|--------|------|
| 🧩 認知服務 | Rekognition、Comprehend、Transcribe、Translate | Cognitive Services | Vision API、Speech-to-Text、Translation API、Natural Language API | 影像識別 API、智能語音交互、機器翻譯、自然語言處理 API | LASER、圖像識別 API |
| 🎙 語音生成（TTS） | Polly | Speech Service | Text-to-Speech API | 智能語音交互 TTS | Llama API 語音合成 |
| 📊 預測與推薦 | Forecast、Personalize | Personalizer | Recommendations AI | 個性化推薦 API | （無專屬產品） |
| 🗣 語音辨識（STT） | Transcribe | Speech to Text | Speech-to




# drafty


然而，本條目將特別聚焦於**以 LLM 為核心的模型驅動 API** 與**非模型驅動 API** 的協作，以及 MCP 如何將它們包裝成可編排、可監控、可持續交付（CI/CD）的結構化流程。

再釐清 API 與 MCP 的基本定義與角色。

- 🔗 **API（應用程式介面）**：一組定義明確的規範與協定，允許不同軟體元件之間交換資料與功能呼叫。  
- 🧩 **模型驅動 API（Model-Based API）**：以 LLM 或其他 AI 模型為核心，透過 API 對外提供推理、生成、分類等能力。  
- 🛠️ **非模型驅動 API（Non Model-Based API）**：不依賴 AI 模型，提供資料查詢、業務邏輯、交易處理等功能。  
- 🔗🔐 **MCP**（模型脈絡協定）：一種高層次的協定與框架，用於統一管理多個 API（包括模型驅動與非模型驅動）、數據源與工具的協作，並在上下文豐富化、流程編排與可觀測性上提供支持。

> **小結**：API 是溝通的語言，MCP 是協作的規則與節奏，兩者結合能讓 LLM 與其他系統高效協同。



MCP（模型脈絡協定）透過標準化「提示」（prompts）、「資源」（resources）、「工具」和「情境」的互動方式，將 LLM 從一個簡單的文字生成器轉變為一個能夠協調多個系統並執行複雜任務的強大代理人。這個框架確保了任務的可追蹤性、可靠性和安全性。


### 🤖📡 模型驅動 API（LLM-Based APIs）

在 LLM 密集型應用中，模型驅動 API 是將基礎模型能力封裝並暴露給外部系統的主要方式。

- 📜 **特徵**：  
  - 以自然語言或結構化輸入為請求，返回生成文本、程式碼、摘要、分類結果等。  
  - 可透過提示工程（Prompt Engineering）、上下文注入（Context Injection）來調整輸出行為。  
  - 常見於聊天機器人、智慧助理、內容生成、程式碼輔助等場景。

- 📏 **挑戰**：  
  - 輸出不穩定性與隨機性（需透過溫度參數、提示設計控制）。  
  - 上下文長度限制與記憶管理。  
  - 與外部資料或工具的整合難度。

> **小結**：模型驅動 API 是 LLM 能力的出口，但若缺乏結構化協作機制，難以在複雜系統中穩定發揮。

---

### 🛠️📊 非模型驅動 API（Non Model-Based APIs）

非模型驅動 API 在 AI 系統中同樣重要，它們提供了 LLM 無法直接生成或計算的確定性功能與資料。

- 📜 **特徵**：  
  - 提供明確、可重複的輸入輸出行為（如資料庫查詢、支付交易、業務邏輯處理）。  
  - 高度可預測與可測試。  
  - 常用於補充 LLM 的知識盲點與計算限制。

- 📏 **挑戰**：  
  - 與 LLM 的語言輸出格式對接需要額外解析與轉換。  
  - 缺乏上下文感知能力，需由外部協調層（如 MCP）提供。

> **小結**：非模型驅動 API 是 LLM 的「外掛工具」，提供確定性與專業領域能力。

---


這本手冊紮根人工智慧底層的**問題意識**（見[第壹篇 ㉄](01----problematics.zh-hant)  ），透過嚴謹的 **事實查核** 與 **邏輯追源** ，幫助讀者建構個人化的 **[🪜 知識鷹架](notes-action.zh-hant)** 。這能框智、帶格局的鷹架，協助讀者檢視現有科技方案，更能啟發創新智能化包括**AI 工程**（見第拾篇 🌉 ）的解決之道。
 
本書聚焦人類創造智能科技時，能「道」且「盜」的重要格局與框架。

雖然本書以**知識**為本，處理複雜概念時卻力求簡明，避免教條式的說法。

## 本書結構

這本手冊紮根底層的**問題意識**（見[第壹篇 ㉄](01----problematics.zh-hant)），目標創新智能化**AI 工程**之道（見第拾篇 🌉 ），在起點和終點之間有以下各章：

* 聚焦**具身**、**賽局**與未來前瞻，本書精選相關知識與案例，確保選取內容不只對過去歷史能有系統性理解，更能對未來發展能有創新性啟示：
	* 「博弈派AI」（見[第柒篇 🏆](07----game_ai.zh-hant) ）、
	* 「具身派AI」（見[第捌篇 🦾](08----embodied_ai.zh-hant) ）、 與
	* 「AI 數學」（見[第玖篇 📐](09----ai_math.zh-hant) ）
* 力求融合經典與現代實踐，本書系統性介紹**流派** 與 **主義**：
	* [第貳篇 🎏🏮](02----schools_paradigms.zh-hant) 流派與主義（Schools & Paradigms）
		* **2.1** 🎏🏮🏛️ [符號流／主義](02-01-symbolic_ai.zh-hant)（Symbolic AI / Symbolism）
		* **2.5** 🏮🧬 [連結主義](02-05-connectionism.zh-hant)（Connectionism）
		* **2.6** 🏮💪 [行為主義](02-06-behaviorism.zh-hant)（Behaviorism）
	* [第參篇 🏛️](03----symbolic_ai.zh-hant)  「符號流」AI（Symbolic AI）
	* [第肆篇 🌀](04----statistical_ai.zh-hant)  「統計流」AI（Statistical AI）
* 主推系統創新與分析層次，本書系統性總結 5 種智能行為體系 「導向」（見[第伍篇 ☸](05----ai_orientations.zh-hant) ），以及 6 種分析與內容生成 「型式」（見[第陸篇 ❖](06----analytics_decisions.zh-hant.md) ）。


以上分章結構，不只勾勒出格局與框架，更鼓勵讀者構架自己的 **[🪜 知識鷹架](notes-action.zh-hant)**，運用作者創建的新學習分類法，系統地產出關鍵的**動詞－名詞**組合。

*** 

本書主要特色是：

1. 著重格局視野的**知識框架**：以「**格物**致智」中的格物為起點，用66條關鍵詞，撐起夠豐富的知識鷹架，直面如`符碼紮根問題`、`框架問題`等底層**問題意識**，促進系統性掌握各流派、分析形式、等等「道」理。
2. 注重紮根實用的**應用思路**：以「格物**致智**」中的致智為目標，挑選具啟發性的解決與應用取徑，補上如`博弈派AI`、`具身派AI`、`AI數學`、`AI工程`等等的新興課題，展開創造性吸收各發展路徑的「用」法。
3. 以「格物致智」的新中文成語，把經典知識點和最新如`大語言模型` 等課題做紥根且更新的參照，構築能自我改進及擴張及延伸的**知識鷹架**。
4. 其中，引進了如`完形心理學`、`語言賽局`等概念，提出作者的「格物致智」的`演化`與`賽局`觀點，突出從語言到人工智能科技的系統科學觀點。
5. 最後，建構道／盜 的雙關語，點出智能在人類社會的競爭與合作性質，把「用甲骨文問卦」到「用ChatGPT求拍拍」等實踐，用`演化`與`賽局`觀點體會知識系統的底層邏輯：知識能成規則，也能挑戰規則的框智格局演化論。

這本手冊在陪伴讀者理解人工智慧不同的`問題意識`及`解決方式`同時，期待也能讓讀者從系統性的理解出發，展開自己**實踐**與**設計**之旅。

***