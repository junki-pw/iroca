import { links } from "../data/links";
import { LinkItem } from "./LinkItem";
import { SoonLink } from "./SoonLink";

// 予約・SNS・アクセスのリンク一覧
export function LinkList() {
  return (
    <nav className="links" aria-label="予約・SNS・アクセス">
      <ul className="links__list">
        {links.map((entry, i) => (
          <li key={i}>
            {entry.kind === "soon" ? (
              <SoonLink {...entry} />
            ) : (
              <LinkItem {...entry} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
