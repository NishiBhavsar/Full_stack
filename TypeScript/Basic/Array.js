var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var cars = ['Audi', 'BMW', 'Ford'];
console.log("Cars: " + cars);
console.log("Cars[0]: " + cars[0]);
console.log("Cars[1]: " + cars[1]);
console.log("Cars[2]: " + cars[2]);
var Arr = [[1, 2, 3], [5, 6, 7]];
console.log(Arr[0][0]);
console.log(Arr[0][1]);
console.log(Arr[0][2]);
console.log();
console.log(Arr[1][0]);
console.log(Arr[1][1]);
console.log(Arr[1][2]);
var arrObj = new Array("Nishi", "Vishruti", "Tej");
for (var i = 0; i < arrObj.length; i++) {
    console.log(arrObj[i]);
}
var arrParse = new Array("Nishi", "Vishruti", "Tej");
function showFun(arrval) {
    for (var i_1 = 0; i_1 < arrval.length; i_1++) {
        console.log(arrParse[i_1]);
    }
}
showFun(arrParse);
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var copyArray = __spreadArray([], arr1, true);
console.log("Copy Array: " + copyArray);
var newArray = __spreadArray(__spreadArray([], arr1, true), [7, 8], false);
console.log("New Array: " + newArray);
var mergedArray = __spreadArray(__spreadArray([], arr1, true), arr2, true);
console.log("Merged Array: " + mergedArray);
