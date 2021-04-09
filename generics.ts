/*const names: Array<string> = [];
const promise:Promise<string> = new Promise((resolve,reject) => {
      
      setTimeout(() => {
            resolve("hi") 
      }, 3000);
     

})
promise.then(data=>console.log(data))*/

function merge<T,U>(obj1:T, obj2:U) {
      return Object.assign(obj1,obj2)
}

const mergedObj = merge({ name: "hamza",age: 20  },0);
console.log(mergedObj.name)

interface lengthy{
      length:number
}

function countAndDescribe<T extends lengthy>(element: T):[T,string] {
      let descriptionText = "Got no value.!";
      if(element.length===1) {
            descriptionText='Got 1 element.'  
      }else if(element.length>1) {
            descriptionText='Got '+element.length+' elements.'  
      }
      return [element,descriptionText]
}

console.log(countAndDescribe(['sports']))

function extarctAndConvert<T extends object,U extends keyof T>(obj:T, key:U) {
      return obj[key]
}

console.log(extarctAndConvert({ name: "hamza" }, 'name'));

class DataStorage<T>{
      private data:T[] = [];
      addItem(item:T) {
            this.data.push(item);
      }
      removeItem(item:T) {
            this.data.splice(this.data.indexOf(item), 1);
      }
      getItem() {
            return [...this.data];
      }
}

const textStorage = new DataStorage<string>();

textStorage.addItem("hamza");
textStorage.addItem("chokri");
textStorage.removeItem('chokri')
console.log(textStorage.getItem());