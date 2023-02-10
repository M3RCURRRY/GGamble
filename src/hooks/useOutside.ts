import { useEffect } from "react";

export default function useOutside(ref: React.RefObject<HTMLElement>, callback: () => void) {
  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback?.();
        console.log("Clicked outside");
      }
      else {
        console.log("Clicked inside");
      }
    }

    document.addEventListener("mousedown", clickHandler);

    return () => {
      document.removeEventListener("mousedown", clickHandler);
    }

  }, [ref]);
}