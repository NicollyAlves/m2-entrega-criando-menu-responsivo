
class ShowModal {
    static show() {
        const abrir = document.getElementById("bars")
        const fechar = document.getElementById("mark")
        abrir.addEventListener("click", () => {
            let toggleMenu = document.getElementById("navegador")
            toggleMenu.classList.toggle("listas")
        })
        
        abrir.addEventListener("click", () => {
            abrir.style.opacity = 0.0
            fechar.style.opacity = 1.0
            let toggle = document.getElementById("navegador")
            toggle.classList.toggle("filters")                
        })
    }
    
    static showMinWidth() {
        let media = window.matchMedia("(min-width:900px)")
        if(media){
            let toggleMenu = document.getElementById("navegador")
            let toggle = document.getElementById("navegador")
            toggleMenu.classList.toggle("listas")
            toggle.classList.toggle("filters") 
        }
    }
}
ShowModal.show()
ShowModal.showMinWidth()
