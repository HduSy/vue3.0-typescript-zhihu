"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * vue3.0最重要的新特性重用方式
 */
var vue_1 = require("vue");
//非data形式ref
function useMousePosition() {
    var x = vue_1.ref(0);
    var y = vue_1.ref(0);
    var updateMouse = function (e) {
        x.value = e.pageX;
        y.value = e.pageY;
    };
    vue_1.onMounted(function () {
        console.log('mounted');
        document.addEventListener('click', updateMouse);
    });
    vue_1.onUnmounted(function () {
        document.removeEventListener('click', updateMouse);
    });
    return { x: x, y: y };
}
//data形式reactive
function useMousePositionData() {
    var data = vue_1.reactive({
        x: 0,
        y: 0,
        updateMouse: function (e) {
            data.x = e.pageX;
            data.y = e.pageY;
        }
    });
    vue_1.onMounted(function () {
        console.log('mounted');
        document.addEventListener('click', data.updateMouse);
    });
    vue_1.onUnmounted(function () {
        document.removeEventListener('click', data.updateMouse);
    });
    var refData = vue_1.toRefs(data);
    return __assign({}, refData);
}
exports.default = useMousePositionData;
//# sourceMappingURL=useMousePosition.js.map