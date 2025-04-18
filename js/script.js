function revealMenu () {
   var menu = document.getElementById("nav")
   
   menu.classList.toggle("open");
}
function closeMenu() {
    document.getElementById('nav').classList.remove('open');
}
// let tothetop = document.getElementById("topbutton");
// window.onscroll = function() {scrollFunction()};
// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//       tothetop.style.display = "block";
//     } else {
//       tothetop.style.display = "none";
//     }
//   }
//   function topFunction() {
//     document.body.scrollTop = 0; 
//     document.documentElement.scrollTop = 0; 
//   }