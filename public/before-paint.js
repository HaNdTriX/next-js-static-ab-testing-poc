// This script should run before the initial paint.
(() => {
  const getCookie = (name) =>
    document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"))?.[2];

  const insertStyleRule = (() => {
    const style = document.createElement("style");
    document.head.appendChild(style);
    return (rule) => style.sheet.insertRule(rule, style.sheet.cssRules.length);
  })();

  // 1. Get variation
  const variationCookie = getCookie("VARIATION");

  // 2. Calculate variation...

  // 3. Inject variation styles
  insertStyleRule(`
    .variation-a {
      display: ${variationCookie === "b" ? "none" : "block"} !important;
    }
  `);
  insertStyleRule(`
    .variation-b {
      display: ${variationCookie === "b" ? "block" : "none"} !important;
    }
  `);
})();
