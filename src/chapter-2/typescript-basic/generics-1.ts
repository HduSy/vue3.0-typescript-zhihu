function echo2(arg) {
    return arg
}

function echo<T>(arg: T): T {
    return arg
}

//返回值丧失了类型
let b = echo2(123) // number->any
b = echo2('str') // string->any

let a = echo(1234)
// let c: string = echo(123)

function swap<T, U>(arg: [T, U]): [U, T] {
    return [arg[1], arg[0]]
}