import datafile from "./datafile.json";
import { CriticalEngine } from "./lib/tesfy";
import getUserId from "./lib/getUserId";

const userId = getUserId();

window.engine = new CriticalEngine({
  datafile,
  userId,
  attributes: { language: navigator.language },
});
