function add(n1: number, n2: number,printResult:boolean,phrase:string) {
     // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
      //   throw new Error('Incorrect input')     
     // }
      let reslut=n1+n2
      if (printResult) {
            console.log(phrase+reslut)
      } else {
            return n1 + n2;
            
      }
}

let number1 = 5;
let number2 = 10;
let printResult = true;
let reslut="gjlg"
console.log(add(number1,number2,printResult,"Result:"))