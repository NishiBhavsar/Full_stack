import { ValidatorCLS } from './validators/validators';
import { Constants } from './constant/constant';

let email = 'hp149@gmail.com';

let zipCode = '382415';

let Phone_Number="9874563210";

let validator = new ValidatorCLS();

let resultOfEmailValidate = validator.isValidStr(email,Constants.emailRegex,6,30);

let resultOfZipCodeValidate = validator.isValidStr(zipCode,Constants.numberRegex,6);

let resultofPhoneValidate = validator.isValidStr(Phone_Number,Constants.numberRegex,10);




console.log("Valid Email Id OR Not: "+resultOfEmailValidate);

console.log("Valid Zip Code OR Not: "+resultOfZipCodeValidate);

console.log("Valid Phone Number OR Not: "+resultofPhoneValidate);