-- list-floats-toc.lua
-- Collect headings, figures, and tables, then inject them into toc.qmd placeholders.

local figures, tables_, headings = {}, {}, {}

-- Capture figures and tables
function FloatRefTarget(el)
  if el.type == "Figure" then
    table.insert(figures, {
      id = el.identifier,
      caption = pandoc.utils.stringify(el.caption_long or el.caption_short)
    })
  elseif el.type == "Table" then
    table.insert(tables_, {
      id = el.identifier,
      caption = pandoc.utils.stringify(el.caption or {})
    })
  end
  return el
end

-- Capture headings (H1–H3 for TOC)
function Header(el)
  if el.level <= 3 then
    table.insert(headings, {
      id = el.identifier,
      text = pandoc.utils.stringify(el.content),
      level = el.level
    })
  end
  return el
end

-- Helper: build nested bullet list from headings
local function build_toc_list(items)
  local function make_item(h)
    return { pandoc.Plain{ pandoc.Link(h.text, "#" .. h.id) } }
  end

  local root = {}
  local stack = { { level = 0, list = root } }

  for _, h in ipairs(items) do
    -- Pop until we find the right parent level
    while #stack > 0 and h.level <= stack[#stack].level do
      table.remove(stack)
    end
    local parent = stack[#stack].list
    local new_item = make_item(h)
    table.insert(parent, new_item)
    -- Push a new sublist holder
    stack[#stack+1] = { level = h.level, list = new_item }
  end

  return pandoc.BulletList(root)
end

-- Replace placeholders in toc.qmd
function Div(el)
  if el.identifier == "toc" then
    if #headings > 0 then
      return pandoc.Div({ build_toc_list(headings) }, el.attr)
    end

  elseif el.identifier == "lof" then
    local blocks = {}
    for i, fig in ipairs(figures) do
      local link = pandoc.Link(fig.caption, "#" .. fig.id)
      table.insert(blocks, pandoc.Plain{ pandoc.Str(i .. ". "), link })
    end
    return pandoc.Div({ pandoc.BulletList(blocks) }, el.attr)

  elseif el.identifier == "lot" then
    local blocks = {}
    for i, tab in ipairs(tables_) do
      local link = pandoc.Link(tab.caption, "#" .. tab.id)
      table.insert(blocks, pandoc.Plain{ pandoc.Str(i .. ". "), link })
    end
    return pandoc.Div({ pandoc.BulletList(blocks) }, el.attr)
  end

  return el
end
