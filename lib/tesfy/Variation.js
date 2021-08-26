import useIsServer from "./useIsServer";
import { useContext } from "react";
import ExperimentContext from "./ExperimentContext";

export default function Variation({ id = null, children }) {
  const isServer = useIsServer();
  const variationId = useContext(ExperimentContext);

  if (isServer || variationId === id) {
    return (
      <div className={`variation variation-${id || "default"}`}>{children}</div>
    );
  }

  return null;
}
