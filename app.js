const slide_menu=()=>{
    const hermberger=document.querySelector(".hamberger");
    const links=document.querySelector(".links");
    hermberger.addEventListener("click",()=>{
        links.classList.toggle("slide");
    })
}
slide_menu();
console.log("there is nothing wrong with this thing");