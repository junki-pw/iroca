import type { LinkEntry } from "../data/links";
import { IconCircle } from "./IconCircle";

type Props = Extract<LinkEntry, { kind: "link" }>;

// 通常の外部リンク 1 行。外部遷移なので next/link ではなく素の <a>。
export function LinkItem({ href, title, sub, icon }: Props) {
  return (
    <a className="link" href={href} target="_blank" rel="noopener noreferrer">
      <IconCircle icon={icon} />
      <span className="link__body">
        <span className="link__title">{title}</span>
        <span className="link__sub">{sub}</span>
      </span>
      <span className="link__chevron" aria-hidden="true" />
    </a>
  );
}
