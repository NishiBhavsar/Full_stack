class Emp {  
    firstName:string; 
    lastName:string; 
     
    constructor(firstName:string,lastName:string) { 
       this.firstName = firstName;
       this.lastName = lastName;
    }  
     
    showEmpDetails():void { 
       console.log("Employee Details: "+this.firstName+" "+this.lastName);
    } 
 } 
  
 var ob = new Emp("Nishi","Bhavsar");
 
 ob.showEmpDetails();