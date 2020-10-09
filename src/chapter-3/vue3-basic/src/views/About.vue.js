"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var AsyncShow_vue_1 = require("../components/AsyncShow.vue");
var DogShow_vue_1 = require("@/components/DogShow.vue");
exports.default = vue_1.defineComponent({
    name: 'About',
    components: {
        AsyncShow: AsyncShow_vue_1.default,
        DogShow: DogShow_vue_1.default
    },
    setup: function () {
        var error = vue_1.ref(null);
        vue_1.onErrorCaptured(function (e) {
            error.value = e;
        });
        return {
            error: error
        };
    }
});
//# sourceMappingURL=About.vue.js.map