import ExperimentContext from "./ExperimentContext";
import useExperiment from "./useExperiment";

export default function Experiment({
  id,
  userId,
  attributes,
  component = "div",
  children,
}) {
  const variationId = useExperiment({ id, userId, attributes });
  const Component = component;
  return (
    <ExperimentContext.Provider value={variationId}>
      <Component className={`experiment-${id}`}>{children}</Component>
    </ExperimentContext.Provider>
  );
}
