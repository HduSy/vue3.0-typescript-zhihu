import { __awaiter, __generator } from "tslib";
import { defineComponent } from 'vue';
import axios from 'axios';
export default defineComponent({
    name: "DogShow",
    setup: function () {
        return __awaiter(this, void 0, void 0, function () {
            var rawData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios.get('https://dog.ceo/api/breeds/image/random')];
                    case 1:
                        rawData = _a.sent();
                        return [2 /*return*/, {
                                result: rawData.data
                            }];
                }
            });
        });
    }
});
//# sourceMappingURL=DogShow.vue.js.map