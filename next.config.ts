import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // kyon-sen.com/linktree のサブパス配信。next/link・next/image は
  // この prefix を自動付与する（ビルド時にクライアントバンドルへ inline される）。
  basePath: "/linktree",

  images: {
    // 3 つの小さなブランドアイコンのみ。最適化エンドポイント（IMAGES binding）を
    // 介さず原本をそのまま配信する。next/image は basePath を付与し続ける。
    unoptimized: true,
  },
};

export default nextConfig;

// 開発サーバ（next dev）で Cloudflare のバインディングを使えるようにする。
// 本番ビルドには影響しない。
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
