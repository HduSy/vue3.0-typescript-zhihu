function genericsWithArr<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
}

genericsWithArr([1, 2, 3])
// genericsWithArr('str')

// 泛型约束 必须有某某属性、某某方法
interface ILength {
    length: number
}

function genericsWithArr2<T extends ILength>(arg: T): T {
    console.log(arg.length)
    return arg
}

genericsWithArr2('star')
genericsWithArr2([1, 2, 3])
genericsWithArr2({length: 10, width: 123})
// genericsWithArr2(1234)