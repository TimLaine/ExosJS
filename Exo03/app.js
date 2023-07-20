        const grid = document.querySelector("#grid")
        const text = document.querySelector("#text")
        const box = document.createElement("div")
        box.classList.add("box")
        let nb = 0
        let tour = true
        text.innerText = "Nouvelle partie. X commence !"

        for(i=1; i <= 9; i++){
            let newBox = box.cloneNode()
            grid.appendChild(newBox)

            newBox.addEventListener("click",function(){
                if(newBox.classList.contains("box-clicked")){
                    text.innerText = "Case déjà choisie"
                } else if(tour == true){
                    boxX(newBox)
                } else {
                    boxO(newBox)
                }
            })
        }

        function boxX(box){
            box.classList.add("boxX")
            box.classList.add("box-clicked")
            box.innerText = "X"
            nb++
            tour = false
            text.innerText = "C'est au tour de O"
            if(nb == 9){
                text.innerText = "Partie terminée"
            }
        }
        function boxO(box){
            box.classList.add("boxO")
            box.classList.add("box-clicked")
            box.innerText = "O"
            nb++
            tour = true
            text.innerText = "C'est au tour de X"
            if(nb == 9){
                text.innerText = "Partie terminée"
            }
        }