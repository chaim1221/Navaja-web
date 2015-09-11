module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      // put specific spec files here, or just leave as-is; it should recursively find them
      '*.spec.js'
    ]
  });
};

