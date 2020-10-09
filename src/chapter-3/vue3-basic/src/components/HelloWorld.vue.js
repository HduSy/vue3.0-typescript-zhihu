import { defineComponent, ref } from 'vue';
import Model from "@/components/Model.vue";
//服务typescript而存在，将普通object变为component
export default defineComponent({
    name: 'HelloWorld',
    components: { Model: Model },
    props: {
        msg: {
            required: true,
            type: String
        },
    },
    setup: function (props, context) {
        console.log(props.msg);
        // context.attrs
        // context.slots
        // context.emit
        var modelIsOpen = ref(false);
        var onModelOpen = function () {
            modelIsOpen.value = true;
        };
        var onCloseModel = function () {
            modelIsOpen.value = false;
        };
        return {
            modelIsOpen: modelIsOpen,
            onModelOpen: onModelOpen,
            onCloseModel: onCloseModel
        };
    }
});
//# sourceMappingURL=HelloWorld.vue.js.map