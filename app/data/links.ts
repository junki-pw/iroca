// リンク定義。Hot Pepper の URL が決まったら該当エントリの kind を "soon" から
// "link" にし、href を入れるだけで通常リンクに切り替わる。
//
// アイコン画像は静的 import する。basePath(/linktree)配下で next/image が
// 正しいパス(/linktree/_next/static/media/...)を出力できるのは静的 import 時で、
// public 直参照(/assets/...)では basePath が付かず 404 になるため。

import type { StaticImageData } from "next/image";
import lineIcon from "../assets/line.png";
import instagramIcon from "../assets/instagram.jpg";
import hotpepperIcon from "../assets/hotpepper.jpg";

export const LINE_URL = "https://lin.ee/tkUdZZb";

export type LinkIcon =
  | { type: "image"; src: StaticImageData }
  | { type: "pin" };

export type LinkEntry =
  | {
      kind: "link";
      href: string;
      title: string;
      sub: string;
      icon: LinkIcon;
    }
  | {
      kind: "soon";
      title: string;
      sub: string;
      icon: LinkIcon;
    };

export const links: LinkEntry[] = [
  {
    kind: "link",
    href: LINE_URL,
    title: "LINE で予約・お問い合わせ",
    sub: "LINE RESERVE",
    icon: { type: "image", src: lineIcon },
  },
  {
    kind: "link",
    href: "https://www.instagram.com/shokochaneyelash?igsh=Z2xoMjZrOGw2cXN0",
    title: "Instagram を見る",
    sub: "Instagram",
    icon: { type: "image", src: instagramIcon },
  },
  {
    kind: "link",
    href: "https://beauty.hotpepper.jp/kr/slnH000815000/?vos=cpahpbprosmaf131118003",
    title: "Hot Pepper Beauty で予約",
    sub: "Hot Pepper Beauty",
    icon: { type: "image", src: hotpepperIcon },
  },
  {
    kind: "link",
    // Googleマップ：埼玉県加須市三保1-32-3（店舗共有リンク）
    href: "https://maps.app.goo.gl/Czvz7AR7d1bScFNg6?g_st=ic",
    title: "アクセス・地図",
    sub: "ACCESS・MAP",
    icon: { type: "pin" },
  },
];
