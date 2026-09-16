# OwlForestSchool.com

奧爾森林學堂旅遊指南。使用 Astro、Tailwind CSS、TypeScript、pnpm 與 Cloudflare Workers 靜態資產部署。

## 技術特性

- 台灣繁體中文，無多語系
- 無資料庫、無登入、無 CMS
- GA4：`G-HXM22WWPKP`
- 真實景點照片本地化，不依賴第三方圖床
- TouristAttraction 與 FAQPage 結構化資料
- sitemap、robots、OG 圖、404、關於與隱私頁
- 純前端路線切換與行前清單，不儲存個人資料

## 本機開發

```bash
corepack enable
pnpm install
pnpm dev
```

Node.js 建議使用 `.nvmrc` 指定的 22.12.0 或以上版本。

## 建置

```bash
pnpm build
pnpm preview
```

## 部署到 Cloudflare Workers

```bash
pnpm deploy
```

本專案為完全靜態 Astro 網站，使用 Cloudflare Workers Static Assets 部署，因此不需要 SSR adapter。首次部署後，在 Cloudflare Dashboard 將自訂網域 `owlforestschool.com` 與 `www.owlforestschool.com` 綁定到 Worker，並將其中一個版本設定 301 到主要網域。

## 需要定期更新的位置

主要景點狀態集中在：

```text
src/data/site.ts
```

請更新 `status.checkedAt`、施工摘要及預計完成時間。照片更新時直接替換 `public/images/` 內同名檔案即可。Google 地圖評分與評價數維護於 `rating` 欄位，同步時間請一併更新。

## 圖片授權提醒

目前專案使用真實景點照片製作可視化原型，來源記錄於 `SOURCES.md`。正式商業上線前，建議改用自行拍攝或已取得明確授權的原始照片，並保留授權證明。
