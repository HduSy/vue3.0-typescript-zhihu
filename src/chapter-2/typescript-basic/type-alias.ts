//类型别名
let sum: (x: number, y: number) => number
let result = sum(1, 2)
type PlusType = (x: number, y: number) => number
let sum2: PlusType
let result2 = sum2(1, 2)
type numberOrString = number | string
let result3: numberOrString
result3 = 123
result3 = '123'
//字面量
let result4: 1 = 1
let result5: 'abz' = 'abz'
type Directions = 'Up' | 'Right' | 'Bottom' | 'Left'
let result6: Directions = 'Up'

//交叉类型
interface IName {
    name: string
}

type IPeople = IName & { age: number }
let people: IPeople = {
    name: 'HduSy',
    age: 24
}
