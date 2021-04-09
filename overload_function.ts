interface Admin {
      name: string;
      privileges: string[];
};

interface Employee{
      name: string;
      startDate: Date;

}
//interface ElevatedEmployee extends Employee,Admin{}
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
      name: "sdfsdg",
      privileges: ['create_server'],
      startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;
function add(a: number, b: number): number;
function add(a: string, b: number): number;
function add(a:string, b:string):string
function add(a: Combinable, b: Combinable) {
      if (typeof a === 'string' || typeof b === 'string') {
            return a.toString() + b.toString();
            
      }
      return a+b
}
//Function Overload:
const reslut = add('5', '5');

reslut.split(' ');
const fetchUserData={
      id:'u1',
      name:'hamza',
      jobs: {
            title: "fdgkf",
            fgb:'dgkf',
      }
}
/*type UnknownEmployee = Employee | Admin;
function printEmployeeInformation(emp:UnknownEmployee) {
      console.log(emp.name);
      if ('privileges'in emp) {
            console.log('privileges: '+emp.privileges)
            
      }
      if ('startDate'in emp) {
            console.log('startDate: '+emp.startDate)
            
      }
}
printEmployeeInformation(e1);
printEmployeeInformation({ name: "hamza", startDate: new Date() });

class Car{
      drive() {
            console.log('Driving...')
      }
}
class Truck{
      drive() {
            console.log('Driving a Truck...')
      }
      loadCargo(amount:number) {
            console.log('Loading cargo'+amount)
      }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle:Vehicle) {
      vehicle.drive();
      if ('loadCargo' in vehicle) {
            vehicle.loadCargo(10);
      }
      
}
useVehicle(v1);
useVehicle(v2);

interface Bird{
      type: 'bird';
      flyingSpeed: number;

}
interface Horse{
      type: 'horse';
      runningSpeed: number;
      
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
      switch (animal.type) {
            case 'bird':
                  console.log('Flying with speed: '+animal.flyingSpeed)
                  break;
            case 'horse':
                  console.log('Moving with speed: ' + animal.runningSpeed);
                  break;
            default:
                  break;
      }
     
}

moveAnimal({ type: 'horse', runningSpeed: 10 })

const userInput = document.getElementById('text_input');
if (userInput) {
      (userInput as HTMLInputElement).value="hi there"
      
}

interface ErrorContainer{
     
      [prop: string]: string;

}

const error: ErrorContainer = {
      email: "not a valid Email",
      userName: "Must start with a capital character"
};*/