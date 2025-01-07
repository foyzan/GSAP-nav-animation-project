let gtl = gsap.timeline();

gtl.to("#menuSideBar", {
    right: 0,
    duration: 0.5,
})

gtl.to("#menuSideBar h4", {
    right: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.3,
})



let menu = document.querySelector("#nav .ri-menu-line");
let menuIcon = document.querySelector("#nav i");

gtl.pause();

let closerflag = true;
let closetimeout;
menu.addEventListener("click", () => {
    if(closerflag){
        gtl.play();
        closerflag = false;
        clearTimeout(closetimeout)
        menuIcon.classList.toggle("ri-close-large-line");
    }else{
        gtl.reverse();
        closerflag = true;
        closetimeout = setTimeout(() => {
            menuIcon.classList.toggle("ri-close-large-line");
        }, 2700);
    }
    
});







