(function () {
  const bankers = ["", "壹","貳","參","肆","伍","陸","柒","捌","玖","拾"];
  //
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

  // NEW: allow only files starting with 01- … 10-
  const allowRe = /^(?:0[1-9]|10)-/;
  const fileFromHref = (href) => (href || "").split("#")[0].split("?")[0].split("/").pop() || "";

  // Update LEFT TOC and return current part/chapter numbers
  function updateLeftSidebar(mode) {
    const partSections = Array.from(document.querySelectorAll(".sidebar .sidebar-item-section"));
    let globalChapter = 0;
    let partIndex = 0;
    let currentPartNum = null;
    let currentChapterNum = null;

    const activeLink = document.querySelector(".sidebar .sidebar-link.active");

    for (const partEl of partSections) {
      // Gate the entire section: it counts as a "Part" only if its header link
      // OR any child chapter link starts with 01–10.
      const headerLink = partEl.querySelector(".sidebar-item-text .sidebar-link");
      const headerFile = fileFromHref(headerLink?.getAttribute("href") || "");
      let sectionAllowed = allowRe.test(headerFile);

      if (!sectionAllowed) {
        sectionAllowed = Array.from(partEl.querySelectorAll(".sidebar-section .sidebar-link"))
          .some(a => allowRe.test(fileFromHref(a.getAttribute("href") || "")));
      }
      if (!sectionAllowed) continue; // skip this section entirely

      // This section is a numbered Part
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
        if (!link || !textSpan) continue;

        const chapFile = fileFromHref(link.getAttribute("href") || "");
        if (!allowRe.test(chapFile)) continue; // only number allowed chapters

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

    if (partHeading && partNum != null) {
      cacheOriginal(partHeading);
      const base = stripLeadingNumber(partHeading.dataset.originalLabel);
      partHeading.textContent = mode === "legal"
        ? `第${toBankers(partNum)} ${base}`
        : `${partNum} ${base}`;
    }

    if (chapterHeading && partNum != null && chapterNum != null) {
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
