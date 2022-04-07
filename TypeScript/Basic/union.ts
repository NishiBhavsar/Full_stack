var val:string|number;
val = 12;
console.log("Numeric: "+val);
val = "God Is Great..!!";
console.log("String: "+val);

var arr:number[]|string[]; 
var i:number; 
arr = [1,2,4] 
console.log("Numeric Array:")  

for(i = 0;i<arr.length;i++) { 
   console.log(arr[i]) 
}  

arr = ["Gandhidham","Anjar","Bhuj"] 
console.log("String Array:")  

for(i = 0;i<arr.length;i++) { 
   console.log(arr[i]) 
} 

function showFun(nm:string|string[]) { 
    if(typeof nm == "string") { 
       console.log(nm) 
    } else { 
       var i; 
      for(i = 0;i<nm.length;i++) { 
          console.log(nm[i]);
       } 
    } 
 } 
 showFun("Nishi Bhavsar");
 showFun(["Nishi","Vishruti","Tej"]);