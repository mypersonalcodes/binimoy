"use strict";

let header = $(`
<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="navbar">
<img src="./assets/images/binimoy.png" alt="" class="rounded-circle" height="50vw" width="auto">
<a class="binimoy" href="index.html"><h2>বিনিময়</h2></a>

<div class="hamburger_wrapper navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

  <div id="js-hamburger" class="hamburger">
    <span class="first"></span>
    <span class="second"></span>
    <span class="third"></span>
  </div>

</div>

<div class="collapse navbar-collapse " id="navbarSupportedContent">
  <ul class="navbar-nav ml-auto" id = "navbar-content">
  
  <p>চালক : online</p>
   <li class="nav-item"><a class="nav-link " href="#">Home</a></li>
   <li class="nav-item"><a class="nav-link" href="#">News</a></li>
   <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
   <li class="nav-item">
   <!--<input type="checkbox" class="dark_toggler" aria-label="Toggle Light Mode" onclick="toggle_light_mode()">
   </li>-->

  </ul>
</div>
</nav>`);

// Footer

let footer = $(`
<footer class="footer sticky-bottom"  style="background-color:#2b2a2a;">
  <div class="p-4">
    <div class="container-fluid quote-container">
      <div class="quotes"    style="text-align:center;">
      
     
        </div>
      
      </div>

    
      <div class="container">
       <div class="row">
         <div class="col-lg-6 col-md-12 mb-4 mb-md-0 justify-content-center">
         
              
          </div>


         <!--      From HERE I CHANGED THE FORM.


         <div class="col-lg-6 col-md-12 mb-4 mb-md-0 form-comtainer">
           <div class="form-style-6">
             <div class="form-header">
                <h6 class="display">Get in Touch Now</h6>
                </div>
                  <form>
                  <form action="https://formcarry.com/s/robyiR7YZkA" method="POST" accept-charset="UTF-8" >
                  <input type="text" name="field1" placeholder="Your Name" required/>
                  <input type="email" name="field2" placeholder="Email Address"  required/>
                  <textarea name="field3" placeholder="Type your Message" required></textarea>
                  <input type="submit" value="Send" />
                  </form>
                </div>
             </div>
        </div>
    </div>
    -->

    <div class="col-lg-6 col-md-12 mb-4 mb-md-0 form-comtainer">
          <div class="form-style-6">
             <div class="form-header">
                <h6 class="display">Get in Touch Now</h6>
              </div>
                <h1> Email:  <br> Phone: </h1>
                
                  
             </div>
          </div>
        </div>
    </div>
    


    

    <nav class="navbar navbar-expand-lg navbar-light fixed-bottom" id="navbar">


    
    </div>
    </div>
</footer>
`);

//"Scroll to top" button
let upArrow = $(`
  <button id="btnScrollToTop" onclick="scrollToTop()"><i class="fas fa-2x fa-angle-up"></i></button>
  <link rel="stylesheet" type="text/css" href="./css/style.css" />
  })
`);

//function for the "Scroll To Top" button to detect the footer
$(document).ready(function () {
  $(window).scroll(function () {
    //The button will be hidden until we scroll more than the window's height
    if ($(window).scrollTop() < $(window).height()) {
      $("#btnScrollToTop").css("visibility", "hidden");
    } else {
      $("#btnScrollToTop").css("visibility", "visible");
      //The button will change it's color when it hits the footer
      if (
        $(window).scrollTop() + $(window).height() >
        $(document).height() - 838
      ) {
        // 838 should be changed if footer's height is changed so that the button changes it's color exactly when it hits the footer (preferably 14 less than the computer height of the footer)
        $("#btnScrollToTop").css("background-color", "#6a00bb");
      } else {
        $("#btnScrollToTop").css("background-color", "#6a00bb");
      }
    }
  });
});

//function to scroll to top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

// Window Loads
$(function () {
  let bodyElement = $(`body`);
  bodyElement.prepend(header);
  bodyElement.append(footer);
  bodyElement.append(upArrow);
  $("#btnScrollToTop").css("visibility", "hidden");

  //toggler hamburger functions
  const menuBtn = document.querySelector(".navbar-toggler");
  let menuOpen = false;
  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      menuOpen = false;
    }
  });
});

// function for toggling hamburger is-active class

$(function () {
  $("#js-hamburger").on("click", function () {
    $(this).toggleClass("is-active");
  });
});

// Navbar current page highlight

let loader = document.querySelector(".loader-container");

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disappear");
}
$(function () {
  $("a.nav-link").each(function () {
    if ($(this).prop("href") == window.location.href) {
      $(this).addClass("current-link");
    }
  });
});

//function to remove underline on hover

$(document).ready(function () {
  $("a.nav-link").hover(
    function () {
      $(this).removeClass("current-link");
    },
    function () {
      if ($(this).prop("href") == window.location.href) {
        $(this).addClass("current-link");
      }
    }
  );
});

function toggle_light_mode() {
  var app = document.getElementsByTagName("HTML")[0];
  var nav = document.getElementById("navbar");
  if (localStorage.lightMode == "dark") {
    localStorage.lightMode = "light";
    app.setAttribute("light-mode", "light");
    nav.classList.remove("dark-theme");
    var sc = document.getElementsByClassName("socialicon");
    for(var i=0; i<sc.length; i++) {
      sc[i].classList.remove("dsc");
   }
  } else {
    nav.classList.add("dark-theme");
    localStorage.lightMode = "dark";
    app.setAttribute("light-mode", "dark");
    var sc = document.getElementsByClassName("socialicon");
    for(var i=0; i<sc.length; i++) {
      sc[i].classList.add("dsc");
   }
  }
}


window.addEventListener("storage", function () {
  if (localStorage.lightMode == "dark") {
    app.setAttribute("light-mode", "dark");
  } else {
    app.setAttribute("light-mode", "light");
  }
}, window.localStorage.clear());

// Function to remove scroll bar during preload
$(window).on('load', function() {
  setTimeout(function(){
    $('.no-scroll-preload').css('overflow', 'visible');
  },1000);
  $('.loader-container').fadeOut(2500);
});




// This is in the research page validation for secret code 

function validateForm() {
  let x = document.forms["myForm"]["Pass"].value;
  console.log(x)
  if (x == "3445") {
    
    
  }
  else {
    alert("  Should be correct");
    return false;
  }
}

