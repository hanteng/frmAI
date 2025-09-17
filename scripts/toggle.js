(function () {
  const bankers = ["", "壹","貳","參","肆","伍","陸","柒","捌","玖","拾"];
  //,"拾壹","拾貳","拾參","拾肆","拾伍","拾陸","拾柒","拾捌","拾玖","貳拾"
  function toBankers(n) {
    return bankers[n] || String(n);
  }

  function stripLeadingNumber(s) {
    if (!s) return "";
    return s.replace(/^\s*(第[一二三四五六七八九十百千壹貳參肆伍陸柒捌玖拾]+|\d+(?:\.\d+)*)\s+/, "").trim();
  }

  function cacheOriginal(el) {
    if (el && !el.dataset.originalLabel) {
      el.dataset.originalLabel = el.textContent.trim();
    }
  }

  // Update LEFT TOC and return current part/chapter numbers
  function updateLeftSidebar(mode) {
    const partSections = Array.from(document.querySelectorAll(".sidebar .sidebar-item-section"));
    let globalChapter = 0;
    let partIndex = 0;
    let currentPartNum = null;
    let currentChapterNum = null;

    const activeLink = document.querySelector(".sidebar .sidebar-link.active");

    for (const partEl of partSections) {
      partIndex += 1;
      const partText = partEl.querySelector(".sidebar-item-text .menu-text");
      if (partText) {
        cacheOriginal(partText);
        const base = stripLeadingNumber(partText.dataset.originalLabel);
        partText.textContent = mode === "legal"
          ? `第${toBankers(partIndex)} ${base}`
          : `${partIndex} ${base}`;
      }

      let chapterInPart = 0;
      const chapterItems = partEl.querySelectorAll(".sidebar-section .sidebar-item");
      for (const li of chapterItems) {
        if (li.classList.contains("unlisted") || li.classList.contains("unnumbered")) continue;
        const link = li.querySelector(".sidebar-link");
        const textSpan = li.querySelector(".menu-text") || link;
        if (!textSpan) continue;
        cacheOriginal(textSpan);
        const base = stripLeadingNumber(textSpan.dataset.originalLabel);

        if (mode === "legal") {
          globalChapter += 1;
          textSpan.textContent = `${globalChapter} ${base}`;
        } else {
          chapterInPart += 1;
          textSpan.textContent = `${partIndex}.${chapterInPart} ${base}`;
        }

        if (link === activeLink) {
          currentPartNum = partIndex;
          currentChapterNum = mode === "legal" ? globalChapter : chapterInPart;
        }
      }
    }
    return { partNum: currentPartNum, chapterNum: currentChapterNum };
  }

  // Update MAIN heading for both Part and Chapter pages
  function updateMainHeading(mode, partNum, chapterNum) {
    const partHeading = document.querySelector("h1.part");
    const chapterHeading = document.querySelector("h1.title");

    if (partHeading) {
      cacheOriginal(partHeading);
      const base = stripLeadingNumber(partHeading.dataset.originalLabel);
      partHeading.textContent = mode === "legal"
        ? `第${toBankers(partNum)} ${base}`
        : `${partNum} ${base}`;
    }

    if (chapterHeading) {
      const numSpan = chapterHeading.querySelector(".chapter-number");
      const titleSpan = chapterHeading.querySelector(".chapter-title");
      if (numSpan && titleSpan) {
        if (!numSpan.dataset.originalLabel) numSpan.dataset.originalLabel = numSpan.textContent.trim();
        if (!titleSpan.dataset.originalLabel) titleSpan.dataset.originalLabel = titleSpan.textContent.trim();

        if (mode === "legal") {
          numSpan.textContent = String(chapterNum);
          titleSpan.textContent = titleSpan.dataset.originalLabel;
        } else {
          numSpan.textContent = `${partNum}.${chapterNum}`;
          titleSpan.textContent = titleSpan.dataset.originalLabel;
        }
      }
    }
  }

  function renumber(mode) {
    const { partNum, chapterNum } = updateLeftSidebar(mode);
    updateMainHeading(mode, partNum, chapterNum);
  }

  // Default mode
  const defaultMode = "arabic"; // or "legal"
  document.documentElement.classList.add(defaultMode);
  renumber(defaultMode);

  // Console toggle
  window.setNumberingMode = function (mode) {
    if (mode !== "legal" && mode !== "arabic") return;
    document.documentElement.classList.remove("legal", "arabic");
    document.documentElement.classList.add(mode);
    renumber(mode);
  };
})();
