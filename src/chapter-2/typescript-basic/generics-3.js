var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.push = function (item) {
        return this.data.push(item);
    };
    Queue.prototype.pop = function () {
        return this.data.shift();
    };
    return Queue;
}());
var queue = new Queue();
queue.push(1);
queue.push(2);
// queue.push('str')
console.log(queue.pop());
var kp1 = {
    key: 'age',
    value: 24
};
var kp2 = {
    key: 0,
    value: 'songyao'
};
var iArr = [1, 2, 3];
//Array也是接口
var iArr = [1, 2, 3];
//# sourceMappingURL=generics-3.js.map