class ParentClass { 
    display():void {
       console.log("Display method from Parent Class!") 
    } 
 } 
 
 class ChildClass extends ParentClass { 
    display():void { 
       super.display() 
       console.log("dislay method from Child Class!")
    } 
    hello():void{
        console.log("Hello from Child Class!");
    }
 } 
 
 var parentObj = new ParentClass();
 parentObj.display();
 var childObj = new ChildClass();
 childObj.display();
 childObj.hello();

 class ParentClass2 { 
    display():void {
       console.log("Display method from Parent Class!") 
    } 
 } 
  
 class ChildClass2 extends ParentClass2 { 
    display():void { 
       console.log("dislay method from Child Class!")
    } 
    hello():void{
        console.log("Hello from Child Class!");
    }
 } 
  
 var parentObj = new ParentClass();
 parentObj.display();
 var childObj = new ChildClass();
 childObj.display();
 childObj.hello();