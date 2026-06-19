# iroca linktree

アイラッシュサロン **iroca** のリンク集ページ。Next.js (App Router) で実装し、
[OpenNext](https://opennext.js.org/cloudflare) 経由で Cloudflare Workers にデプロイする。

- 公開 URL: <https://kyon-sen.com/linktree>
- サブパス配信のため `next.config.ts` で `basePath: "/linktree"` を設定

## 開発

```bash
npm install
npm run dev      # http://localhost:3000/linktree
```

`npm run preview` で本番同等の Cloudflare Workers ランタイム（OpenNext 変換後）を
ローカル再現できる。basePath 配下の `_next` アセットが 200 で配信されるかの確認に使う。

```bash
npm run preview  # OpenNext ビルド + ローカル Workers でプレビュー
```

## デプロイ

`main` への push で GitHub Actions（`.github/workflows/deploy.yml`）が
`OpenNext build → wrangler deploy → 本番疎通確認` を実行する。

手動デプロイ:

```bash
npm run deploy
```

必要な GitHub Secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`。

## 構成メモ

- フォントは `next/font`（Cormorant Garamond / Noto Serif JP）でセルフホスト
- 画像は `next/image`（`images.unoptimized`）で basePath を自動付与
- リンクは `app/data/links.ts` のデータ駆動。Hot Pepper の URL 確定時は
  該当エントリを `kind: "soon"` → `kind: "link"` + `href` に差し替えるだけ
