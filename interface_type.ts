//type addFn=(n1:number,n2:number)=>number
interface addFn{
      (n1: number, n2: number): number;
}
let add: addFn;
add = (n1:number,n2:number) => {
      return n1 + n2;
}
interface Named{
      readonly name: string;
      outputName?: string;
}
interface Greetable extends Named{
     greet(phrase: string): void;
}
class Person implements Greetable,Named{
      name: string;
      age:number= 20;
      constructor(n:string) {
         this.name=n   
      }

      greet(phrase:string) {
            console.log(phrase+''+this.name)
      }
      
}
let user1: Greetable;
user1 = new Person("sami")

user1.greet("hi there am ")
console.log(user1)