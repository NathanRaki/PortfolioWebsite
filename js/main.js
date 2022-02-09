/*============== MENU SHOW Y HIDDEN ==============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*============== SHOW MENU ==============*/
if (navToggle)
{
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*============== HIDE MENU ==============*/
if (navClose)
{
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*============== REMOVE MOBILE MENU ==============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction()
{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*============== SKILLS ACCORDION ==============*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills()
{
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++)
    {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close')
    {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})


/*============== QUALIFICATION TABS ==============*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')

    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick){
    modalViews[modalClick].classList.add('active-modal');
};

modalBtns.forEach((modalBtn, i)=>{
    modalBtn.addEventListener('click', ()=>{
        modal(i);
    })
});

modalCloses.forEach(modalClose => {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal');
        });
    });
});

/*==================== PORTFOLIO SWIPER  ====================*/
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

/*==================== POPUPS  ====================*/
let popupContents = document.getElementsByClassName("popup__content");
for (let i = 0; i < popupContents.length; i++) {
    popupContents[i].onclick = function (event) {
        event.stopPropagation();
    }
}

function togglePopup(name) {
    let display = document.getElementById(name).style.display;
    document.getElementById(name).style.display = display == "block" ? "none" : "block";
    document.getElementById('backgroundDarkener').style.display = display == "block" ? "none" : "block";

    display = document.getElementById(name).style.display;
    if (display == "none") {
        const videos = document.querySelectorAll('iframe')
        videos.forEach(i => {
            const source = i.src
            i.src = ''
            i.src = source
        })
    }
}
