//类型推断
var strdemo = 'str';
//联合类型
var numberOrString;
numberOrString = 'anc';
numberOrString = 4;
function getLength(input) {
    var str = input;
    if (str.length) {
        return str.length;
    }
    else {
        var num_1 = input;
        return num_1.toString().length;
    }
}
//类型保护
function getLength2(input) {
    if (typeof input === 'string')
        return input.length;
    else
        return input.toString().length;
}
//# sourceMappingURL=type-inference-more.js.map