# me.ootob.ai

Jack Tsai 的個人空間：小專案、寫作、Coffee Chat。工作室網站在 https://ootob.ai（repo `jtsaich/ootob-ai`）。

## Deploy

Cloudflare Pages 專案 `me-ootob-ai`，自訂網域 `me.ootob.ai`。

- 本機直接上傳：`npx wrangler pages deploy . --project-name me-ootob-ai`
- 或 push `main` 觸發 `.github/workflows/deploy.yml`（需 repo secrets `CLOUDFLARE_API_TOKEN`、`CLOUDFLARE_ACCOUNT_ID`）

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
