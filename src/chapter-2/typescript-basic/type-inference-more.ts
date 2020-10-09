//类型推断
let strdemo = 'str'
//联合类型
let numberOrString: number | string
numberOrString = 'anc'
numberOrString = 4
function getLength(input: number | string): number {
    let str = input as string
    if (str.length) {
        return str.length
    } else {
        let num = input as number
        return num.toString().length
    }
}

//类型保护
function getLength2(input: string | number): number {
    if (typeof input === 'string')
        return input.length
    else
        return input.toString().length
}