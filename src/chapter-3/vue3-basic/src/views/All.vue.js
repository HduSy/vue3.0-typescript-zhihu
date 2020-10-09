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
var vue_1 = require("vue");
var vue_2 = require("vue");
var vue_3 = require("vue");
var useMousePosition_1 = require("@/hooks/useMousePosition");
var useUrlLoader_1 = require("@/hooks/useUrlLoader");
exports.default = {
    name: "MyCount",
    setup: function () {
        //ref使javascript primitive type其成为响应式对象
        // const count = ref(0)
        // const doubleCount = computed(() => count.value * 2)
        // const increase = () => {
        //   count.value++
        // }
        var greeting = vue_1.ref('');
        function updateTitle() {
            greeting.value += '$';
        }
        // const {result, loading, loaded, error} = useUrlLoader<DogResult>('https://dog.ceo/api/breeds/image/random')
        var _a = useUrlLoader_1.default('https://api.thecatapi.com/v1/images/search?limit=1'), result = _a.result, loading = _a.loading, loaded = _a.loaded, error = _a.error;
        var _b = useMousePosition_1.default(), x = _b.x, y = _b.y;
        var data = vue_2.reactive({
            count: 0,
            increase: function () { return data.count++; },
            doubleCount: vue_2.computed(function () { return data.count * 2; }),
            nums: [0, 1, 2, 3],
            person: {},
            updateTitle: updateTitle
        });
        vue_2.watch([greeting, function () { return data.count; }, result], function (newValue, oldValue) {
            console.log(oldValue);
            console.log(newValue);
            document.title = data.count + greeting.value;
            if (result.value) {
                // console.log(`value:${result.value.status}`)
                // console.log(`url:${result.value.message}`)
                console.log("id:" + result.value[0].id);
                console.log("url:" + result.value[0].url);
                console.log("width:" + result.value[0].width);
                console.log("height:" + result.value[0].height);
            }
        });
        vue_3.onUpdated(function () {
            console.log('updated');
        });
        vue_3.onRenderTracked(function (e) {
            // console.log(e)
        });
        //vue3.0使用ES6proxy技术解决了vue2.0响应式Object.defineProperty实现方式的不足
        data.nums[0] = -1;
        data.person.name = 'HduSy';
        //data对象本身是响应式的，其值非响应式
        var refData = vue_1.toRefs(data);
        return __assign(__assign({}, refData), { x: x, y: y,
            result: result,
            loading: loading,
            loaded: loaded,
            error: error });
    }
};
//# sourceMappingURL=All.vue.js.map