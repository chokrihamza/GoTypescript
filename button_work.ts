const button = document.querySelector("button")!;
function clickHandler(message:string) {
      console.log("clicked"+message)
}
if (button) {
      button.addEventListener('click', clickHandler.bind(null,"fgdf"))
      
}