function show(id:number,nm:string)
{
    console.log("Id ="+id +" "+"name"+nm);
}
function cal(nm1:number,nm2:number)
{
    var sum;
    sum=nm1+nm2;
    console.log(sum);
}
var person : {   
    id: number;   
    nm: string;   
};   
  
person = {   
  id: 1,   
  nm : "Nishi Bhavsar"  
}
console.log(person.id+" "+person.nm);
show(2,"Vishiruti"); 
cal(5,10);