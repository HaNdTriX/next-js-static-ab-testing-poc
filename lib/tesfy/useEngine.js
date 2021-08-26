import { useContext } from "react";
import TesfyContext from "./TesfyContext";

export default function useEngine() {
  return useContext(TesfyContext).engine;
}
