function add(n1: number, n2: number):number {
      return n1 + n2;
}

function printReslut(num: number):undefined {
      console.log('The Reslut Is' + num);
      return 
}
function AddandHandle(n1: number, n2: number, cb:(num:number)=>void) {
      const result = n1 + n2;
      cb(result);
      console.log(result+10)
}

let combineValues:(a:number,b:number)=>number;
combineValues = add
//combineValues=printReslut
//combineValues = 5;
console.log(combineValues);
console.log(combineValues(8,8))
console.log(printReslut(add(5, 2)))

AddandHandle(20, 20, (result) => {
      console.log(result)
})