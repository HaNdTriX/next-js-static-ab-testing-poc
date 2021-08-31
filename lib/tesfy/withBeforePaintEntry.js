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
          // Inject before_paint.js as early as possible
          const nextEntry = webpackConfig.entry;
          webpackConfig.entry = async function entry(...args) {
            const entries = await nextEntry(...args);
            const newEntries = {
              ...entries,
              main: [entries.main, path.resolve(relativePath)],
            };
            return newEntries;
          };
        }

        return webpackConfig;
      },
    };
  };
};
