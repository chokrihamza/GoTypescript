let userInput:unknown;
let userName: string;

userInput = 5;
userInput = "dlgkf";
if (typeof userInput === "string") {
      userName=userInput
      
}

function generateError(message:string,code:number):never {
      throw [message,code]
}

const result = generateError('There is an Error', 500);
console.log(result)