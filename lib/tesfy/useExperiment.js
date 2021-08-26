import useEngine from "./useEngine";

export default function useExperiment({ id, userId, attributes }) {
  const engine = useEngine();
  return engine.getVariationId(id, userId, attributes);
}
