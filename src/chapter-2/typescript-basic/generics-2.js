function genericsWithArr(arg) {
    console.log(arg.length);
    return arg;
}
genericsWithArr([1, 2, 3]);
function genericsWithArr2(arg) {
    console.log(arg.length);
    return arg;
}
genericsWithArr2('star');
genericsWithArr2([1, 2, 3]);
genericsWithArr2({ length: 10, width: 123 });
// genericsWithArr2(1234)
//# sourceMappingURL=generics-2.js.map