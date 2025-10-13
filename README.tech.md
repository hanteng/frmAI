

## ⚠️ Notes

### Github Action `gh-pages`

- Since you set `output-dir: _site/zh-hant`, the Action will publish that folder into the root of `gh-pages`. That means your Chinese version will be the default at `book.frmai.life`.    
- If later you want both English and Chinese, you’ll need to add a second render step and give each profile its own subfolder (`_site/en`, `_site/zh-hant`) so both can coexist.


### LF CRLF issues

```bash
git config core.autocrlf true
```

(This tells Git to convert LF → CRLF on checkout, and CRLF → LF on commit.)

