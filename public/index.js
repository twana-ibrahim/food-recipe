const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

var isClicked = false;

burger.addEventListener("click", () =>{
    if(isClicked === false){
        menu.classList.remove("hidden");
        isClicked = true;
    }
    else{
        menu.classList.add("hidden");
        isClicked = false;
    }
})