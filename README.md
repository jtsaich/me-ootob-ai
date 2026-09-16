# me.ootob.ai

Jack Tsai 的個人空間：小專案、寫作、Coffee Chat。工作室網站在 https://ootob.ai（repo `jtsaich/ootob-ai`）。

## Deploy

Cloudflare Worker `me-ootob-ai`（static assets，設定在 `wrangler.jsonc`），自訂網域 `me.ootob.ai` 由 wrangler 建立。

- 本機直接上傳：`npx wrangler deploy`
- 自動部署：Cloudflare dashboard → Workers & Pages → `me-ootob-ai` → Settings → Builds 連 GitHub `jtsaich/me-ootob-ai`，deploy command `npx wrangler deploy`。之後 push `main` 即部署

## 結構

```
index.html                  首頁（小專案、寫作、Coffee Chat）
taste/                      品味不可說
japanese/                   Dojo 道場（日文練習）
try-awesome-design/         Design System Experiments
non-dev-guide-to-ai-agents/ AI agents 指南
_headers                    Cloudflare 安全標頭
```

## 本機預覽

```bash
npx serve .
```
