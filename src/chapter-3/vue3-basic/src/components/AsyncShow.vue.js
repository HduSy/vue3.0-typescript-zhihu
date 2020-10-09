"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
exports.default = vue_1.defineComponent({
    name: "AsyncShow",
    setup: function (props, context) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve({
                    result: Math.floor(Math.random() * 10 + 1)
                });
            }, 3000);
        });
    }
});
//# sourceMappingURL=AsyncShow.vue.js.map