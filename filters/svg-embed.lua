function Image (el)
  -- Check if the image source is an SVG file and has a special data attribute
  if el.src:find('%.svg$') and el.attr["data-pan-zoom"] then
    -- Get the value of the data-pan-zoom attribute
    local panZoomValue = el.attr["data-pan-zoom"]
    
    -- Replace the image with an embed tag that includes the data attribute
    return pandoc.RawInline('html', '<embed src="' .. el.src .. '" type="image/svg+xml" class="svg-pan-zoom-target" data-pan-zoom="' .. panZoomValue .. '">')
  end
end