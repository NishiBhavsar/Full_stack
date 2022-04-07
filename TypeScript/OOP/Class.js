var Emp = /** @class */ (function () {
    function Emp(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Emp.prototype.showEmpDetails = function () {
        console.log("Employee Details: " + this.firstName + " " + this.lastName);
    };
    return Emp;
}());
var ob = new Emp("Nishi", "Bhavsar");
ob.showEmpDetails();
