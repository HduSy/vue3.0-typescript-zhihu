class Queue<T> {
    private data = []

    push(item: T) {
        return this.data.push(item)
    }

    pop(): T {
        return this.data.shift()
    }
}

let queue = new Queue<number>()

queue.push(1)
queue.push(2)
// queue.push('str')
console.log(queue.pop())

//泛型在接口上的应用
interface KeyPair<T, U> {
    key: T,
    value: U
}

let kp1: KeyPair<string, number> = {
    key: 'age',
    value: 24
}
let kp2: KeyPair<number, string> = {
    key: 0,
    value: 'songyao'
}
var iArr: number[] = [1, 2, 3]
//Array也是接口
var iArr: Array<number> = [1, 2, 3]
