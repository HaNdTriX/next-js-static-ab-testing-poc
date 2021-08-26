import { Engine } from "tesfy";

export default class CriticalEngine extends Engine {
  constructor(args) {
    super(args);
    this.appendInitializerStyle();
    this.applyPrePaintClasses();
  }

  appendInitializerStyle() {
    this.style = document.createElement("style");
    this.style.id = "tesfy-initializer-styles";
    document.head.appendChild(this.style);
  }

  removeInitializerStyle() {
    if (this.style) {
      document.head.removeChild(this.style);
      delete this.style;
    }
  }

  applyPrePaintClasses() {
    const variationIds = this.getVariationIds(this.getUserId());
    // Enforce initial experiment styles
    for (const [experimentId, variationId] of Object.entries(variationIds)) {
      const hideAll = `.experiment-${experimentId} .variation { display: none !important; }`;
      const showPick = `.experiment-${experimentId} .variation.variation-${
        variationId || "default"
      } { display: block !important; }`;

      console.log(hideAll);
      console.log(showPick);

      this.style.sheet.insertRule(hideAll, this.style.sheet.cssRules.length);
      this.style.sheet.insertRule(showPick, this.style.sheet.cssRules.length);
    }
  }
}
