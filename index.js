'use strict';
var DtsBundlePlugin = (function () {
    const dts = require('dts-bundle');

    function DtsBundlePlugin(options){
        if (options === void 0) { options = {}; }
        this.options = options;
    }

    DtsBundlePlugin.prototype.apply = function (compiler) {
        const _this = this;

        compiler.hooks.done.tap({ name: 'DtsBundlePlugin' }, function() {
            dts.bundle(_this.options);
        });
    };

    return DtsBundlePlugin;
})();

module.exports = DtsBundlePlugin;
