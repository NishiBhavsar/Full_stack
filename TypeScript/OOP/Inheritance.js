var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.Area = a;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.showArea = function () {
        console.log("Area of the circle:  " + this.Area);
    };
    return Circle;
}(Shape));
var circleObj = new Circle(20);
circleObj.showArea();
var GrandParentCLS = /** @class */ (function () {
    function GrandParentCLS() {
    }
    return GrandParentCLS;
}());
var ParentCLS = /** @class */ (function (_super) {
    __extends(ParentCLS, _super);
    function ParentCLS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ParentCLS;
}(GrandParentCLS));
var ChildCLS = /** @class */ (function (_super) {
    __extends(ChildCLS, _super);
    function ChildCLS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChildCLS;
}(ParentCLS));
var obj = new ChildCLS();
obj.mes = "Hello Guys";
console.log(obj.mes);
var StaticCLS = /** @class */ (function () {
    function StaticCLS() {
    }
    StaticCLS.disp = function () {
        console.log("The value of num is" + StaticCLS.num);
    };
    return StaticCLS;
}());
StaticCLS.num = 12;
StaticCLS.disp();
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Pobj = new Person();
var isPerson = Pobj instanceof Person;
console.log("Pobj is an instance of Person: " + isPerson);
var PersonDHCLS = /** @class */ (function () {
    function PersonDHCLS() {
        this.str = "Hello";
        this.str2 = "Guys";
    }
    return PersonDHCLS;
}());
var PDHobj = new PersonDHCLS();
console.log(PDHobj.str);
var PersonalLoan = /** @class */ (function () {
    function PersonalLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return PersonalLoan;
}());
var PLobj = new PersonalLoan(10, 1);
console.log("Interest is : " + PLobj.interest + " Rebate is : " + PLobj.rebate);
