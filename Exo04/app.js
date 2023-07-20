const zone = document.querySelector("#zone")
const carre = document.createElement("div")
carre.classList.add("carre")
let nb = 0


document.addEventListener("keydown",function(){
    let newCarre = carre.cloneNode()
    nb++
    console.log(nb)
    if (event.code == "ArrowDown"){
        // Using these random numbers, we can create a random RGB value to set a background color on the carre
        let randomColor1 = Math.floor(Math.random()*255)
        let randomColor2 = Math.floor(Math.random()*255)
        let randomColor3 = Math.floor(Math.random()*255)
        zone.appendChild(newCarre)
        newCarre.innerText = nb
        newCarre.style.backgroundColor = "rgb("+randomColor1+","+randomColor2+","+randomColor3+")"
    } else if(event.code == "ArrowUp"){
        zone.removeChild(zone.lastChild)
        nb--
    }
    if(nb >= 225){
        newCarre.addEventListener("click",function(){
            newCarre.style.backgroundColor = "#000000"
        })
}
})
// This function works by using an array containing all hexadecimal values, then taking one out of random 6 times in a row and creating a value with that. It's a second solution, based on something found on internet. The RGB one is my own.
function couleur(){
let color = ""
const hexa = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
for(i = 0; i < 6; i++){
    color += hexa[Math.floor(Math.random()*16)]
}
return "#"+color
}
