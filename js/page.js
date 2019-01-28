"use strict";
let $= require('jquery');



const nav = document.getElementById('test');
function homePage() {
    let navdisplay = $(
        `<header id="my-header">
        <div class="main-nav">
            <div class="navlink n1"><a href="index.html">Home</a></div>
            <div class="navlink n2"><a href="aman.html">Aman</a></div>
            <div class="navlink n3"><a href="#">Gallery</a></div>
            <div class = "navlink n4"><a href="http://localhost/ornella/OrnellaMedia/contact.php">Contact us</a> </div>
            <div class="navlink n5"><a href="branch.html">Divisions</a></div>
        </div> 
        <div class="central-nav">
            <a href="index.html"><img src="img/logoflower2.png" class="img-fluid" alt="ornella logo" width="150px"></a>
            <div class="orn">Ornella Multi-Media</div>
            <div class="creative">Creative Photographer and Videographer</div>
        </div> 
        <div class="right-nav"> 
            <div class="legend">Habesha Photographer & Videographer</div>
            <div class="line"></div> 
            <div class="follow"> follow me on social media</div>
            <div class="icon">
            <a href="https://twitter.com/amanzerumesfin"><i class="fab fa-twitter fa-2x"></i></a>
            <a href="https://www.instagram.com/aman_zeru/?hl=en"><i class="fab fa-instagram fa-2x"></i></a> 
            <a href="https://www.facebook.com/begieZgreat/"><i class="fab fa-facebook fa-2x"></i></a>
            </div> 
        </div> 
        </header>`);

    $("#test").html(navdisplay);
}
homePage();

const footer = () => {
let footerh = `<div class="footer">
                 <div class="fi">
                <img src="./img/logoflower2.png" alt="textlogo" width="150px">
                </div>
               <div class="footer2">
                <div class="f">Home</div>
                <div class="f">Contact Aman</div>
                <div class="f">Gallery</div>
                <div class="f">Branches Address</div>
                </div> 
                </div>`;
    $("#footer").html(footerh);
};
footer();

const gallery=()=> {
    console.log("hi");
    let choose=`<div class="galleries">
     <div class="wedground"><a href="gallery.html"><img src="./img/wedding.png" alt="trianle aman" width="300px"></a></div>
     <div class="enground"><a ><img src="./img/engagmet.png" class="eng" alt="trianle aman" width="300px"></a></div>
     <div class="gradground"><a href="#"><img src="./img/graduation.png" alt="trianle aman" width="300px"></a></div>
     <div>
     <img src="./img/africa.png" alt="trianle aman" width="100%" class="lowerlogo">
     <a href="#!"><img src="./img/logoflower2.png" alt="trianle aman" width="15%" class="lowerflower"></a>
    </div>     
     <div class="zerumess d">
    <p class="marriage">“You know when you have found your prince because you not only have a smile on your face, but in your heart as well.."</p>
    </div> 
    <div class="instagram"><p> follow along on instagram @aman_zeru</p></div>
    </div>`;
      $('#tri').html(choose);
};


$(".n3").click(function(){
    console.log("gallery button clicked");
    $(".main-home").remove();
// $(".all-pic").remove();
   return gallery();
});



module.exports={
    footer,
    homePage,
//    gallery
};
