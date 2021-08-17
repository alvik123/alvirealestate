
let hamburger = document.getElementById("hamburger");
let mobNav = document.getElementById("navBar");

hamburger.addEventListener('click',function openMenu(){
    this.classList.toggle('is-active');

    if(mobNav.style.minHeight == '0px' || mobNav.style.minHeight == 0){
        console.log("Open");
        mobNav.style.minHeight = '100vh';
    }
    else{
        console.log("close");
        mobNav.style.minHeight = 0;
    }
})

let mobLinks = document.getElementsByClassName("link");

for(let i=0;i<mobLinks.length;i++){
    mobLinks[i].addEventListener('click',function(){
        hamburger.classList.toggle('is-active');

        if(mobNav.style.minHeight == '0px' || mobNav.style.minHeight == 0){
            console.log("Open");
            mobNav.style.minHeight = '100vh';
        }
        else{
            console.log("close");
            mobNav.style.minHeight = 0;
        }
    })
}