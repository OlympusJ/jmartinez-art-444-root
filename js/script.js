function revealMenu () {
   var menu = document.getElementById("nav")
   
   menu.classList.toggle("open");
}
function closeMenu() {
    document.getElementById('nav').classList.remove('open');
}

function darkMode() {
  document.getElementsByClassName("darkmodebutton")[0].classList.toggle("lightmodebutton");
  document.getElementsByTagName("nav")[0].classList.toggle("navdark");
  document.getElementsByClassName("mobile-menu")[0].classList.toggle("mobile-menu-dark");
  document.getElementsByClassName("linkstyling")[0].classList.toggle("linkstylingdark");
  document.getElementsByClassName("linkstyling")[1].classList.toggle("linkstylingdark");
  document.getElementsByClassName("linkstyling")[2].classList.toggle("linkstylingdark");
  document.getElementsByClassName("linkstyling")[3].classList.toggle("linkstylingdark");
  document.getElementsByClassName("linkstyling")[4].classList.toggle("linkstylingdark");
  document.getElementsByTagName("body")[0].classList.toggle("bodydark");
  document.getElementsByClassName("myskills")[0].classList.toggle("myskillsdark");
  document.getElementsByClassName("FAQs")[0].classList.toggle("FAQsdark");
  document.getElementsByClassName("header")[0].classList.toggle("headerdark");
  document.getElementsByClassName("indv-question")[0].classList.toggle("indv-question-dark");
  document.getElementsByClassName("indv-question")[1].classList.toggle("indv-question-dark");
  document.getElementsByClassName("indv-question")[2].classList.toggle("indv-question-dark");
  document.getElementsByClassName("indv-question")[3].classList.toggle("indv-question-dark");
  document.getElementsByTagName("footer")[0].classList.toggle("footerdark");
  document.getElementsByClassName("text")[0].classList.toggle("textdark");
  document.getElementsByClassName("text")[1].classList.toggle("textdark");
  document.getElementsByClassName("text")[2].classList.toggle("textdark");
  document.getElementsByClassName("text")[3].classList.toggle("textdark");
  document.getElementsByClassName("text")[4].classList.toggle("textdark");
  document.getElementsByClassName("text")[5].classList.toggle("textdark");
  document.getElementsByClassName("text")[6].classList.toggle("textdark");
  document.getElementsByClassName("text")[7].classList.toggle("textdark");

  var img = document.getElementById("ps-svg");
  if (img.src.endsWith("images/ps.svg")) {
    img.src = "images/psdark.svg";
    img.alt = "Photoshop Dark Mode";
  } 
  else {
    img.src = "images/ps.svg";
    img.alt = "Photoshop Light Mode"
  }
  var img = document.getElementById("illus-svg");
  if (img.src.endsWith("images/illus.svg")) {
    img.src = "images/illusdark.svg";
    img.alt = "Illustrator Dark Mode";
  } 
  else {
    img.src = "images/illus.svg";
    img.alt = "Illustrator Light Mode"
  }

  var img = document.getElementById("indesign-svg");
  if (img.src.endsWith("images/indesign.svg")) {
    img.src = "images/indesigndark.svg";
    img.alt = "Indesign Dark Mode";
  } else {
    img.src = "images/indesign.svg";
    img.alt = "Indesign Light Mode"
  }

  var img = document.getElementById("figma-svg");
  if (img.src.endsWith("images/figma.svg")) {
    img.src = "images/figmadark.svg";
    img.alt = "Figma Dark Mode";
  } else {
    img.src = "images/figma.svg";
    img.alt = "Figma Light Mode"
  }

  var img = document.getElementById("adapt-svg");
  if (img.src.endsWith("images/adapt.svg")) {
    img.src = "images/adaptdark.svg";
    img.alt = "Adaptability Dark Mode";
  } else {
    img.src = "images/adapt.svg";
    img.alt = "Adaptability Light Mode"
  }

  var img = document.getElementById("creativity-svg");
  if (img.src.endsWith("images/creativity.svg")) {
    img.src = "images/creativitydark.svg";
    img.alt = "Creativity Dark Mode";
  } else {
    img.src = "images/indesign.svg";
    img.alt = "Creativity Light Mode"
  }

  var img = document.getElementById("team-svg");
  if (img.src.endsWith("images/team.svg")) {
    img.src = "images/teamdark.svg";
    img.alt = "Teamwork Dark Mode";
  } else {
    img.src = "images/team.svg";
    img.alt = "Teamwork Light Mode"
  }

  var img = document.getElementById("time-svg");
  if (img.src.endsWith("images/time.svg")) {
    img.src = "images/timedark.svg";
    img.alt = "Time Management Dark Mode";
  } else {
    img.src = "images/time.svg";
    img.alt = "Time Management Light Mode"
  }

  var img = document.getElementById("hamburger");
  if (img.src.endsWith("images/mobile.svg")) {
    img.src = "images/mobiledark.svg";
    img.alt = "Hamburger Icon Dark Mode";
  } else {
    img.src = "images/mobile.svg";
    img.alt = "Hamburger Icon Light Mode"
  }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
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