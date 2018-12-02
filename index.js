'use strict';
var DtsBundlePlugin = (function () {
  const dts = require('dts-bundle');

  function DtsBundlePlugin(options){
    if (options === void 0) { options = {}; }
    this.options = options;
  }

  function _bundle(options) {
    return () => dts.bundle(options);
  }

  DtsBundlePlugin.prototype.apply = function (compiler) {
    const bundle = () => _bundle(this.options);

    if (!!compiler.hooks) {
      compiler.hooks.done.tap('DtsBundlePlugin', bundle());
    } else {
      compiler.plugin('done', bundle());
    }
  };

  return DtsBundlePlugin;
})();

module.exports = DtsBundlePlugin;
