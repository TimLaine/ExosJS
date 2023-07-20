const zone = document.querySelector("#zone")
const carre = document.createElement("div")
carre.classList.add("carre")
zone.appendChild(carre)

// document.addEventListener("keypress",function(){
//     let newCarre = carre.cloneNode()
//     zone.appendChild(newCarre)
// })

document.addEventListener("keydown", (event) => {
  var name = event.key;
  var code = event.code;
  // Alert the key name and key code on keydown
  alert(`Key pressed ${name} \r\n Key code value: ${code}`);
}, false);
