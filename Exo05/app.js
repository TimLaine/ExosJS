let result = document.querySelector("#result")

// This function get the value in input then check if it's a numeric value or not. If it isn't, it answers an alert. If it is, it convert the number into its value in francs.
function conversion(){
    const valeur = document.querySelector("input").value
    if(isNaN(valeur)){
        result.innerText = "Veuillez entrer une valeur numérique"
    } else {
        let conversion = valeur*6.55957
        result.innerText = conversion.toFixed(2)+" francs"
    }
}