const   mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
   fullName:{
       type: String,
       required:'This field is required'
   },
   email:{
       type: String,
       required:'This field is required'
   },
   mobile: {
        type: Number,
        required:'This field is required'
    },
    city: {
        type: String,
        required:'This field is required'
    },
    age: {
        type: String,
        required:'This field is required'
    },
    salary: {
        type: String,
        required:'This field is required'
    }
});

employeeSchema.path('fullName').validate((val) => {
    fullnameRegex = /^[a-zA-Z ]{2,40}$/;
    return fullnameRegex.test(val);
}, 'Invalid Name.');
employeeSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');
employeeSchema.path('mobile').validate((val) => {
    mobileRegex = /^[0-9]+$/;
    return mobileRegex.test(val);
}, 'Invalid Number.');
employeeSchema.path('age').validate((val) => {
    ageRegex =/^([0-9]{1,2})$/;
    return ageRegex.test(val);
}, 'Invalid Age.');
/^[a-zA-Z]{0,30}$/;
employeeSchema.path('city').validate((val) => {
    cityRegex =/^[a-zA-Z]{0,30}$/;
    return cityRegex.test(val);
}, 'Invalid City.');
// "use strict";

// exports.__esModule = true;

// exports.RegEx = void 0;

// var RegEx = /** @class */ (function () {

//     function RegEx() {

//     }

//     RegEx.emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     RegEx.numregex = /^[0-9]+$/;

//     RegEx.ageregEx = /^([0-9]{1,2})$/;

//     RegEx.fullnameregex = /^[a-zA-Z ]{0,30}$/;

//     RegEx.cityregex = /^[a-zA-Z]{0,30}$/;

//     return RegEx;

// }());

// exports.RegEx = RegEx;
// empSchema.path('salary').validate((val) => {
//     mobileRegex = /^[0-9][-a-zA-Z]+$/;
//     return mobileRegex.test(val);
// }, 'Invalid Number.');
// \d+[,|.]+[0-9]{1,9}?( - | to )\d+[,|.]+[0-9]{1,9} (\w{1,} \w{1,}|\w{1,})

// -------
mongoose.model('Employee',employeeSchema);

