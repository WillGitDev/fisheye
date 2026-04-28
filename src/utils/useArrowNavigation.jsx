// src/utils/useArrowNavigation.js
import { useEffect } from "react";

export default function useArrowNavigation({
  onLeft,
  onRight,
  active = true,
}) {
  useEffect(() => {
    if (!active) return;
    function handleKeyDown(e) {
      if (e.key === "ArrowLeft") {
        onLeft && onLeft();
      }
      if (e.key === "ArrowRight") {
        onRight && onRight();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [onLeft, onRight, active]);
}
