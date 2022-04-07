let a = 20;
let b = 30;
let c = a + b;
console.log("Sum: "+c);

let a1 = 30;
let b1 = 20;
let c1 = a1 - b1;
console.log("Sub: "+c1);

let a2 = 30;
let b2 = 20;
let c2 = a2 * b2;
console.log("Mul: "+c2);

let a3 = 30;
let b3 = 10;
let c3 = a2 / b2;
console.log("Div: "+c1);

let a4 = 10;
let b4 = 20;
console.log(a4==b4);     
console.log(a4==10);    

let a5 = 10;
let b5 = 20;
console.log(a5===b5);   
console.log(a5===10);   

let a6 = 10;
let b6 = 20;
console.log(a6!=b6);     
console.log(a6!=10);    

let a7 = 10;
let b7 = 20;
console.log(a7!==b7);     
console.log(a7!==10);    

let a8 = 30;
let b8 = 20;
console.log(a8>b8);     
console.log(a8>30);    

let a9 = 30;
let b9 = 20;
console.log(a9<b9);     
console.log(a9<30);    

let a10 = 30;
let b10 = 20;
console.log(a10>=b8);     
console.log(a8>=30);    

let a11 = 30;
let b11 = 20;
console.log(a11>b11);     
console.log(a11>30);    

let a12 = false;
let b12 = true;
console.log(a12&&b12);     
console.log(b12&&true);   
console.log(b12&&10);     
console.log(a12&&'10');  

let a13 = false;
let b13 = true;
console.log(a13||b13);      
console.log(b13||true);   
console.log(b13||10);     
console.log(a13||'10');   

let a14 = 20;
let b14 = 30;
console.log(!true);    
console.log(!false);   
console.log(!a14);     
console.log(!b14);     
console.log(!null);    

let a15 = 10;
let b15 = 5;
console.log("a: " +a15);
console.log("b: " +b15);

let a16 = 10;
let b16 = 5;
let c16 = a16 += b16;
console.log("Ans: "+c16);

let a17 = 10;
let b17 = 5;
let c17 = a17 -= b15;
console.log("Ans: "+c17);

let a18 = 10;
let b18 = 5;
let c18 = a18 *= b18;
console.log("Ans: "+c18);

let a19 = 10;
let b19 = 5;
let c19 = a19 /= b19;
console.log("Ans: "+c19);

let a20 = 16;
let b20 = 5;
let c20 = a20 %= b20;
console.log("Ans: "+c20); 

let flnm = "Abhishek" + " Pujara";  
console.log("Fullname: " +flnm);  

let num = 16;  
let result = (num > 0) ? "True":"False"   
console.log(result);  

let Cars = {brand: 'BMS', model: 'X4', year: 2022};
console.log('make' in Cars);

let Cars2 = { Company1: 'BMW',
             Company2: 'Ford',
             Company3: 'Honda'
           };
delete Cars2.Company1;
console.log(Cars2);   

let mes = "Hello " + "Guys..!!";
console.log(typeof mes);

let arr = [1, 2, 3];
console.log("arr is an Array:");
console.log(arr instanceof Array); 

console.log("arr is a String:");
console.log(arr instanceof String); 