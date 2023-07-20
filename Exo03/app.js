        const grid = document.querySelector("#grid")
        const text = document.querySelector("#text")
        const box = document.createElement("div")
        box.classList.add("box")
        let nb = 1

        for(i=1; i <= 9; i++){
            let newBox = box.cloneNode()
            grid.appendChild(newBox)
            newBox.addEventListener("click",function(){
                boxX(newBox)
            })
        }

        function boxX(box){
            box.classList.add("boxX")
            box.innerText = "X"
            newBox.addEventListener("click",function(){
                boxO()
            })
        }
        function boxO(box){
            box.classList.add("boxO")
            box.innerText = "O"
        }