const mobileMenu = document.querySelector('#mobile-menus');
const menuItem = document.querySelector('#nav-menus');

const homeNav = document.querySelector('#home-nav');
const aboutNav = document.querySelector('#about-nav');
const prodNav = document.querySelector('#product-nav');
const contactNav = document.querySelector('#contact-nav');

const navItem = document.querySelectorAll('.nav-item');
const navLinks = document.querySelectorAll('.nav-links');
// const contactCard =document.querySelectorAll('.contact-card')
const activateDropDown = ()=>{
    mobileMenu.classList.toggle('activate');
    menuItem.classList.toggle('activate');
}

const deactivateDropdown = () =>{
    mobileMenu.classList.remove('activate');
    menuItem.classList.remove('activate');
}

const colorNav = (menu)=>{
    homeNav.style.color='#57837B';
    aboutNav.style.color='#57837B';
    prodNav.style.color='#57837B';
    contactNav.style.color='#57837B';
    menu.style.color="#515E63";
}


const navColor = ()=>{
    const scrollPos=window.scrollY;

    let homeY = 0;
    let aboutY = 701;
    let prodY = 1492;
    let contactY = 2283;

    if (window.innerWidth<1000){
        homeY = 0;
        aboutY = 563;
        prodY = 1492;
        contactY = 3003;

    }
    
    if (scrollPos<aboutY){
        homeNav.style.color="#515E63";
        aboutNav.style.color='#57837B';
        prodNav.style.color='#57837B';
        contactNav.style.color='#57837B';
    }
    else if(scrollPos>=aboutY && scrollPos<prodY){
        homeNav.style.color="#57837B";
        aboutNav.style.color='#515E63';
        prodNav.style.color='#57837B';
        contactNav.style.color='#57837B';
    }
    else if(scrollPos>=prodY && scrollPos<contactY){
        homeNav.style.color="#57837B";
        aboutNav.style.color='#57837B';
        prodNav.style.color='#515E63';
        contactNav.style.color='#57837B';
    }
    else if(scrollPos>contactY){
        homeNav.style.color="#57837B";
        aboutNav.style.color='#57837B';
        prodNav.style.color= '#57837B';
        contactNav.style.color='#515E63';
    }
}

homeNav.style.color="#515E63";
mobileMenu.addEventListener('click',activateDropDown);
navLinks.forEach(item=>{
    item.addEventListener('click',deactivateDropdown);
})

window.addEventListener('scroll',navColor)


