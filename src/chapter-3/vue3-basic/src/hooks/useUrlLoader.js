"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var axios_1 = require("axios");
function useUrlLoader(url) {
    var result = vue_1.ref(null);
    var loading = vue_1.ref(true);
    var loaded = vue_1.ref(false);
    var error = vue_1.ref(null);
    axios_1.default.get(url).then(function (rawData) {
        loading.value = false;
        loaded.value = true;
        result.value = rawData.data;
    }).catch(function (err) {
        error.value = err;
    });
    return {
        result: result,
        loading: loading,
        loaded: loaded,
        error: error
    };
}
exports.default = useUrlLoader;
//# sourceMappingURL=useUrlLoader.js.map