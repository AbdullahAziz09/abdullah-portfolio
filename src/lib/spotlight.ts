import type { MouseEvent } from "react";

export function handleSpotlight(e: MouseEvent<HTMLElement>) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  card.style.setProperty("--my", `${e.clientY - rect.top}px`);
}
