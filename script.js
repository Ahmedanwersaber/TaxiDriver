let menubar = document.querySelector('#menu-bars')
let mynav = document.querySelector('.navbar');

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times');
    mynav.classList.toggle('active');
}

let navbar=document.querySelector('.navbar');

document.querySelector('#menu-bars').onclick=()=>{
    navbar.classList.toggle('active');
    search.classList.remove('active');

}

// remove menu and search on scroll 
window.onscroll =()=>{
    navbar.classList.remove('active');
    search.classList.remove('active');
}


let header=document.querySelector('header');
window.addEventListener('scroll',() =>{
    header.classList.toggle('active',window.scrollY > 0)
});
