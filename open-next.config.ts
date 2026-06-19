import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// 完全に静的な 1 ページ（ISR なし）のため incrementalCache は付けない。
// 将来サーバ機能や ISR を入れる際に override を追加する。
export default defineCloudflareConfig({});
