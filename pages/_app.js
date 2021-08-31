import { useMemo } from "react";
import { Engine } from "tesfy";
import { TesfyProvider } from "../lib/tesfy";

export default function App({ Component, pageProps }) {
  const engine = useMemo(
    () => globalThis.engine || new Engine({ datafile: {} }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <TesfyProvider engine={engine}>
      <Component {...pageProps} />
    </TesfyProvider>
  );
}
