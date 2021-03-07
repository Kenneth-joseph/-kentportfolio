const hamburger= document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_nav = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('#header .header');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_nav.classList.toggle('active');
}); 


document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor= "#22292a";
    }
    else{
        header.style.backgroundColor= "transparent";
    }
})