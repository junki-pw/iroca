"use client";

import { useId, useState } from "react";
import type { LinkEntry } from "../data/links";
import { LINE_URL } from "../data/links";
import { IconCircle } from "./IconCircle";

type Props = Extract<LinkEntry, { kind: "soon" }>;

// 「準備中」リンク。タップで LINE 予約への案内文を開閉する。
// JS が無くても「準備中」バッジで状態は伝わる（崩れない）。
export function SoonLink({ title, sub, icon }: Props) {
  const [open, setOpen] = useState(false);
  const noteId = useId();

  return (
    <>
      <button
        className="link link--soon"
        type="button"
        aria-controls={noteId}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <IconCircle icon={icon} />
        <span className="link__body">
          <span className="link__title">{title}</span>
          <span className="link__sub">{sub}</span>
        </span>
        <span className="link__badge">準備中</span>
      </button>
      <p className="link__note" id={noteId} hidden={!open}>
        近日公開予定です。お急ぎの方は、いまのところ{" "}
        <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
          LINE
        </a>{" "}
        からご予約いただけます。
      </p>
    </>
  );
}
