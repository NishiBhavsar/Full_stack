var Emp = /** @class */ (function () {
    function Emp() {
    }
    Object.defineProperty(Emp.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (theAge) {
            if (theAge <= 0 || theAge >= 100) {
                throw new Error('The age is invalid');
            }
            this._age = theAge;
        },
        enumerable: false,
        configurable: true
    });
    Emp.prototype.getAge = function () {
        return this._age;
    };
    return Emp;
}());
var EmpObj = new Emp();
EmpObj.age = 110;
console.log(EmpObj.getAge());
