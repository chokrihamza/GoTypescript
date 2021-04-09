/*function Logger(loginString: string) {
      console.log('LOGGER FACTORY')
      return function (constructor:Function) {
            console.log((loginString));
            console.log(constructor);
            
      }
}
function withTempate(template: string, hookId: string) {
      console.log('Template Factory')
      return function (constructor: any) {
            console.log('rendering template')
            const hookel = document.getElementById(hookId);
            const p = new constructor()
            console.log(p.name)
            if (hookel) {

                  hookel.innerHTML = template;
                  hookel.querySelector('h1')!.textContent=p.name
            }
      }
}
@Logger(`${Math.random()}`)
@withTempate('<h1>Hi</h1>', 'app')

class Person{
      name 
      constructor(n:string) {
            console.log('Creating person object...')
            this.name=n
      }
}

const person1 = new Person("dsfg")
const person2 = new Person("fdgdf")
console.log(person1)

//--
function Log(target:any,propertyName:string|symbol) {
      console.log('Property Decriptor!');
      
      console.log(target,propertyName)
}
function Log2(target: any, name: string, descriptor: PropertyDecorator):void {
      console.log('Accessor descriptor ')
      console.log(target)
      console.log(name)
      console.log(descriptor)
           
}
class Product{
      @Log
      title: string;
      private _price: number;

      @Log2
      set price(val: number) {
            if (val > 0) {
                  this._price = val;
                  
            } else {
                  throw new Error('invalid Price')
            }
      }
      constructor(t: string, p: number) {
            this.title = t;
            this._price = p;
      }
      getPriceWithTax(tax:number) {
            return this._price*(1+tax)
      }
}*/

