import Image from "next/image";
import type { LinkIcon } from "../data/links";
import { MapPinIcon } from "./MapPinIcon";

// アイコンの白い円。画像（next/image。basePath を自動付与）か地図ピン SVG を内包。
export function IconCircle({ icon }: { icon: LinkIcon }) {
  return (
    <span className="link__icon">
      {icon.type === "image" ? (
        <Image src={icon.src} alt="" width={26} height={26} loading="lazy" />
      ) : (
        <MapPinIcon />
      )}
    </span>
  );
}
