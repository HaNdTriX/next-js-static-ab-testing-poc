const path = require("path");

module.exports = function withBeforePaintEntry({
  relativePath = "./before_paint.js",
} = {}) {
  return (config) => {
    return {
      ...config,
      webpack: (webpackConfig, options) => {
        if (config.webpack) {
          webpackConfig = config.webpack(webpackConfig, options);
        }

        if (!options.isServer) {
          const nextEntry = webpackConfig.entry;
          webpackConfig.entry = async function entry(...args) {
            const entries = await nextEntry(...args);
            return {
              ...entries,
              before_paint: path.resolve(relativePath),
            };
          };
        }

        return webpackConfig;
      },
    };
  };
};
