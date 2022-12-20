// header menu

var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');
var menuSections = document.querySelector('#main-menu-mobile > ul');


menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active');
    // body.classList.toggle('lock-scroll');
}

menuSections.onclick = function() {
  menuContainer.classList.remove('open');
  menuTrigger.classList.remove('is-active');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let hasBannerBeenClosed = false;

$(document).scroll(function () {
  var y = $(this).scrollTop();
  
  if (y > 6500 && !hasBannerBeenClosed) {
    $(".top-banner").slideDown();
  } else {
    $(".top-banner").slideUp();
  }
});

$("#closeTopBanner").on("click",function(){
  $(".top-banner").slideUp();
  hasBannerBeenClosed = true;
});
