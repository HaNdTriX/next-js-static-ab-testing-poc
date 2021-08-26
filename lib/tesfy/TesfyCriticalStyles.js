import Script from "next/script";
import { useEffect } from "react";
import useEngine from "./useEngine";

export default function TesfyCriticalStyles() {
  const engine = useEngine();
  useEffect(() => {
    engine?.removeInitializerStyle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Script
      strategy="beforeInteractive"
      src="_next/static/chunks/before_paint.js"
    />
  );
}
