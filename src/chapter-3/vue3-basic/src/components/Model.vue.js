import { defineComponent } from 'vue';
export default defineComponent({
    name: "Model",
    props: {
        isOpen: Boolean
    },
    emits: {
        'close-model': null
    },
    setup: function (props, context) {
        var buttonClick = function () {
            context.emit('close-model');
        };
        return {
            buttonClick: buttonClick
        };
    }
});
//# sourceMappingURL=Model.vue.js.map