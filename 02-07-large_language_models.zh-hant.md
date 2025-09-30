---
tags:
  - 基礎模型
  - 生成模型
  - RLHF
---
# 😵‍💫🧞‍♀️大語言模型 {#sec-large-language-models}

`大語言模型`（Large Language Models, LLMs）因為 2022 年底代表性案例[LLM聊天機器人](04-02-llm_chatbots.zh-hant)**ChatGPT**的迅速普及，不僅重燃了人們對人工智慧（AI）的熱情，甚至引發了對通用人工智慧（[AGI](02-04-agi.zh-hant)）的遐想。

為了簡要說明 `大語言模型`的關鍵組成技術，本條目依循介紹以下：
- 🧠 神經－符號合流的現代案例：....
- 🔮 自我監督學習的現代數字文本模型：....海量**未標記資料**中
- 🔼 神經元思考：連結主義的深度學習...行為主義的強化學習....RLHF

為了闡明`大語言模型`，已有幾類 ❝腦補❞ 心智模型假說，解釋其功能及運作：

- 🎞🤯 **巨型自動完成機**（Giant Autocomplete Machine）：LLM 好比文本預測「極致自動完成」仙，能超越自動完成系統猜中下一個詞。
- 🗺️🧭 **巨型統計地圖**（Giant Statistical Map）：LLM 如同詞彙「路徑生成」神，能在高維語意地圖按最可能路徑前行，完成神回應。
- 🗜️😵‍💫 **網際網路文本有損壓縮**（Lossy Compression of Internet Text）：LLM 如「整個網路的海量文本」模型參數壓縮檔，因捨棄細節有損所以難免「產生幻覺」。
- 🎭🧞‍♀️ **人機腦補語言賽局**（Mutual Mental Fill-in Language Game）：LLM 好比聊天「對話藝術」精，能流暢多輪對話贏得使用者信任（❝腦補❞雙贏賽局），填補對話甚至心靈空缺。

## 🎞巨型自動完成機🤯

🏷️ **解釋**：LLM 本質上是一個極度先進的 `巨型自動完成機`（Giant Autocomplete Machine），為了要**預測**最有可能出現的下一個詞，LLM 基於海量文本資料中習得語言的統計模式，並據此[生成](06-05-analysis_generative.zh-hant.md) 連貫文本，參與流暢對話。這比喻說法由**Grant Sanderson** 等人推廣，突顯使用者感知到的是 LLM [模仿人類溝通](01-01-Turing_Test.zh-hant.md)的「智慧」[@Sanderson2023-gpt-visual-intro;@Manning2022-understanding-reasoning-with-llms]。

- 🎯 **解釋較準部份**：
    - 🤯 **簡單易懂**：用過當代搜索界面有「自動完成」或「自動補完」的使用者，能將LLM簡單理解為更強大的「接話器」。
    - 🎞 **核心機制**：精準捕捉模型根本的 [機率性關聯](04-01-probabilistic_association.zh-hant) 本質，與依序生成詞彙的過程。
    - ⚠️ **凸顯限制**：突顯其「[🌀統計流](04----statistical_ai.zh-hant.md)」機器學習預測本質，而非內建「[🏛️符號流](03----symbolic_ai.zh-hant.md)」AI 知識庫，直觀地解釋為何模型生成可能產生「幻覺」，而非查證事實。
- ❌ **解釋缺失部份**：
    - 🤔 **湧現能力**：難以解釋模型如何展現超越簡單預測的複雜推理、摘要等能力。誤以為僅是「表層模仿」，忽略其**深層語意建模**能力。
    - 🪞 **內部表徵**：未觸及模型形成複雜語言與概念內部表徵的「如何」運作。

此說法突顯 LLM 的 **[生成邏輯](06-05-analysis_generative.zh-hant.md)** 與 **[機器學習](04-05-machine_learning_models.zh-hant.md)** 依靠海量文本的面向，但未能充分說明**語境理解**、**推理**與**創造性輸出**的潛力機制。
