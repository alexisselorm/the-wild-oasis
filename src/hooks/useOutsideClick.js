import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();
  useEffect(() => {
    function handleCLick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }

    document.addEventListener("click", handleCLick, listenCapturing);
    return () =>
      document.removeEventListener("click", handleCLick, listenCapturing);
  }, [handler, listenCapturing]);

  return ref;
}
