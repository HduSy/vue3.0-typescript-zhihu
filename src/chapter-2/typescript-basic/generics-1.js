function echo2(arg) {
    return arg;
}
function echo(arg) {
    return arg;
}
//返回值丧失了类型
var b = echo2(123); // number->any
b = echo2('str'); // string->any
var a = echo(1234);
// let c: string = echo(123)
function swap(arg) {
    return [arg[1], arg[0]];
}
//# sourceMappingURL=generics-1.js.map