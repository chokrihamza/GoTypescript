type Combinable = number | string;
type ConversionDescription= 'as_number' | 'as_text'
function combine(input1: Combinable, input2: Combinable, resultConversion:ConversionDescription) {
      let result
      if (typeof input1 === "number" && typeof input2 === "number"|| resultConversion==="as_number") {
            result=+input1+ +input2
          
      } else {
            result=input1.toString()+input2.toString()   
    }
      return result
}
 
const combineAges = combine(30, 60,'as_number');
console.log(combineAges)
const combineNames = combine('hamza', 'chokri','as_text')
type User={ name:string,age:number }
function Greet(user:User) {
      console.log(user.name)
}

Greet({ name: "hamza", age:20})