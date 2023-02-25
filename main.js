// Filter JS

$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
            if (value == "all"){
                $(".post-box").show("1000");
            }
            else{
                $(".post-box")
                    .not("." + value)
                    .hide("1000");
                $(".post-box").
                    filter("." + value)
                    .show("1000");
            }
    });

    // asignar propiedad de active-filter

    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});

/* Dos de las maneras de aplicar scroll en el header*/

// definiendo una variable "active"

// $(window).scroll(function() {     
//     var scroll = $(window).scrollTop();
//     if (scroll > 0) {
//         $("header").addClass("active");
//     }
//     else {
//         $("header").removeClass("active");
//     }
// });


/* definiendo una variable "ticking" */
window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})