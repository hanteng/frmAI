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


### 🤖 非生成式 AI 類別（先進 → 基礎）

| 次類 | AWS | Microsoft Azure | Google Cloud Platform | 阿里雲 | Meta |
|------|-----|-----------------|-----------------------|--------|------|
| 🧩 認知服務 | Rekognition、Comprehend、Transcribe、Translate | Cognitive Services | Vision API、Speech-to-Text、Translation API、Natural Language API | 影像識別 API、智能語音交互、機器翻譯、自然語言處理 API | LASER、圖像識別 API |
| 🎙 語音生成（TTS） | Polly | Speech Service | Text-to-Speech API | 智能語音交互 TTS | Llama API 語音合成 |
| 📊 預測與推薦 | Forecast、Personalize | Personalizer | Recommendations AI | 個性化推薦 API | （無專屬產品） |
| 🗣 語音辨識（STT） | Transcribe | Speech to Text | Speech-to


