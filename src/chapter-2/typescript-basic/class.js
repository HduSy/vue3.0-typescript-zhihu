var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    //private仅类内可访问
    //protected子类可访问
    //public(default)公有
    Animal.prototype.run = function () {
        console.log(this.name + " is running");
        return this.name + " is running";
    };
    return Animal;
}());
var snake = new Animal('lily');
// console.log(snake.run())
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log(this.name + " is barking");
        return this.name + " is barking";
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this.name + " is a cat");
        return _this;
    }
    Cat.prototype.run = function () {
        return 'Meow, ' + _super.prototype.run.call(this);
    };
    return Cat;
}(Animal));
var cat = new Cat('Tom');
cat.run();
//# sourceMappingURL=class.js.map