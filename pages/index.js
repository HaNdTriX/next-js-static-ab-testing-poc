import { Experiment, Variation } from "../lib/tesfy";

export default function IndexPage() {
  return (
    <>
      <h1>Experiments</h1>
      <section>
        <h2>Experiment 1 - Allocation</h2>
        <Experiment id="experiment-1">
          <Variation>
            <p style={{ backgroundColor: "yellow", height: 100 }}>Yellow</p>
          </Variation>
          <Variation id="0">
            <p style={{ backgroundColor: "blue", height: 100 }}>Blue</p>
          </Variation>
          <Variation id="1">
            <p style={{ backgroundColor: "red", height: 100 }}>Red</p>
          </Variation>
        </Experiment>
      </section>
      <section>
        <h2>Experiment 2 - Audience</h2>
        <Experiment id="experiment-2">
          <Variation>
            <p style={{ fontWeight: "bold" }}>Bold</p>
          </Variation>
          <Variation id="0">
            <p>Normal</p>
          </Variation>
        </Experiment>
      </section>
    </>
  );
}
