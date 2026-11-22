"use client";

import { useId, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

type IncludesListProps = {
  items: string[];
  /** Items shown before the toggle; the rest stay collapsed so cards keep the same height. */
  visibleCount: number;
  showMoreLabel: string;
  showLessLabel: string;
};

/** "Incluye" list of a consultation card, with a toggle that always sits after the last item. */
export function IncludesList({ items, visibleCount, showMoreLabel, showLessLabel }: IncludesListProps) {
  const [expanded, setExpanded] = useState(false);
  const listId = useId();
  const collapsible = items.length > visibleCount;
  return (
    <div>
      <ul id={listId} className="flex flex-col gap-2">
        {/* Collapsed items stay in the HTML (hidden), so the full list is in the static page. */}
        {items.map((item, index) => (
          <li
            key={item}
            hidden={!expanded && index >= visibleCount}
            className="flex gap-2 text-sm leading-snug text-gray-800"
          >
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-700" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
      {collapsible && (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={listId}
          onClick={() => setExpanded((value) => !value)}
          className="mt-3 inline-flex cursor-pointer items-center gap-1 text-sm font-semibold text-[#0055A4] hover:underline underline-offset-2"
        >
          {expanded ? showLessLabel : showMoreLabel}
          <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} aria-hidden />
        </button>
      )}
    </div>
  );
}
