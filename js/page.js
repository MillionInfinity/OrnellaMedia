"use strict";
let $= require('jquery');



const nav = document.getElementById('test');
function homePage() {
    let navdisplay = $(
        `<header id="my-header">
        <div class="main-nav">
            <div class="navlink n1"><a href="index.html">Home</a></div>
            <div class="navlink n2"><a href="contactme.html">Aman</a></div>
            <div class="navlink n3"><a href="#">Gallery</a></div>
            <div class="navlink n4"><a href="#">Contact us</a></div>
            <div class="navlink n5"><a href="#">Divisions</a></div>
        </div> 
        <div class="central-nav">
            <a href="index.html"><img src="img/logoflower2.png" class="img-fluid" alt="ornella logo" width="150px"></a>
            <div class="orn">Ornella Multi-Media</div>
            <div class="creative">Creative Photographer and Videographer</div>
        </div> 
        <div class="right-nav"> 
            <div class="legend">Habesha Photographer & Videographer</div>
            <div class="line"></div> 
            <div class="follow"> follow me on social media </div>
            <div class="icons">
            <a href="#!"><i class="fab fa-twitter fa-2x"></i></a>
            <a href="#!"><i class="fab fa-linkedin fa-2x"></i></a> 
            <a href="#!"><i class="fab fa-github fa-2x"></i></a>
            </div> 
        </div> 
        </header>`)
         ;

    $("#test").html(navdisplay);
}
homePage();

function home() {
    let mainpage = (`
    <div class="main-home">
    <div id="bg-img">
    <a class="welcome"><img id="visitor" src="./img/threeshape.png" alt="trianle aman" width="300px"></a>
    </div>
 
    <div>
     <img src="./img/africa.png" alt="trianle aman" width="100%" class="lowerlogo">
     <a href="#!"><img src="./img/logoflower2.png" alt="trianle aman" width="15%" class="lowerflower"></a>
    </div>
    <div class="threeIn1">
    <div class="d text-center">
    <p>RECORDING <span>authentic</span>AND <span>intimate </span> TRADITIONAL WEDDINGS AS THEY ARE IN HOME</p>
    </div>
    <div class="e"><img src="./img/logodesign.png" alt="textlogo" width="250px"></div>
    <div class="a tinone"><img src="./img/1plk.jpg" alt="spill" width="220px"><p class="textAman">Meet Aman</p></div>
    <div class="b tinone"><img src="./img/1plc.jpg" alt="spill" width="220px"></div>
    <div class="c tinone"><img src="./img/1plc.jpg" alt="spill" width="220px"></div>
    </div>
    <div class="instagram"><p> follow along on instagram @suzannenevillphotography</p></div>
      </div>  `);

    $("#tri").html(mainpage);
}

// var myIndex = 0;
// carousel();

// function carousel() {
//     var i;
//     var x = document.getElementById("bg-img");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     myIndex++;
//     if (myIndex > x.length) { myIndex = 1 }
//     x[myIndex - 1].style.display = "block";
//     setTimeout(carousel, 5000); // Change image every 2 seconds
// }



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
                <div class="million">Design by Million Asseghegn </div>               
                 </div>`;
    $("#footer").html(footerh);
};
$(document).ready(function () {
$(".welcome").click(function () {
$('.main-home').hide();  
 return gallery();
});
});
$(document).ready(function () {
    $(".n3").click(function () {
        // $('.contactme"').remove();
        $('.main-home').hide();
        return gallery();
    });
});
// const loadQuote = () => {
//     var qoates = new XMLHttpRequest();
//     qoates.open("GET", "ornella.json");
//     qoates.onload = function () {
//         var ourQoate = JSON.parse(qoates.responseText);
//         // gallery(ourQoate);
//     };
//     qoates.send();
// };
// loadQuote();

const gallery=()=> {
    console.log("hi");
    let choose=`<div class="galleries">
     <div class="wedground"><a href="gallery.html"><img src="./img/wedding.png" alt="trianle aman" width="300px"></a></div>
     <div class="enground"><a href=""><img  class="eng p-2" src="./img/engagmet.png" alt="trianle aman" width="300px"></a></div>
     <div class="gradground"><a href=""><img src="./img/graduation.png" alt="trianle aman" width="300px"></a></div>
     <div class="marrage">
     <p class="marriage">“You know when you have found your prince because you not only have a smile on your face, but in your heart as well.."</p>
     <img class="logoGallery" src="./img/logoflower2.png" alt="textlogo" width="250px">
     </div>
     <div id="gallery-footer"></div>
     </div>`;
      $('#tri').append(choose);
};
// gallery();

// const galleryHtml=(data)=>{
// let asmara = [];
//    for (let qout in data){
     
//      const eritrea=data[qout];
//      asmara.push(eritrea);
//      console.log("eritrea", asmara );

      
//        $("#tri").html(asmara);
// }
//     $("#tri").append(asmara);
// };
// galleryHtml();
$(document).ready(function () {
    $(".n2").click(function () {
        $('.main-home').hide();
        $(".galleries").hide();
        return aman();
    });
});

// const aman=()=>{
//  console.log("hi aman");
//   let amanz=`<div class="contactm">
   
//    <div class="amanzeru text-center">
// <p class="amanmess"> Hi My name is Aman,</p>
// <p class="zerumess"> Nice to meet you, I 'm a very passionate Wedding photographer and videographer <span>for 
// Eritreans and Ethiopians! </span> I’ve always loved taking pictures. </p>
//     <div>
//       <a class="welaman"> <img id="visitor" src="./img/aman.png" alt="trianle aman" width="300px"></a>
//     </div>
//    </div>
//   <div class="marrage">
//      <p class="marriage">“You know when you have found your prince because you not only have a smile on your face, but in your heart as well.."</p>
//      <img class="logoGallery" src="./img/logoflower2.png" alt="textlogo" width="250px">
//      </div>
//      <div id="gallery-footer"></div>
//  </div>`;
//     $('#contactme').html(amanz);
// };


module.exports={
    home,
    footer,
    homePage,
//    loadQuote,
   gallery
};
