"use strict";
console.log("hi video");
// let $ = require('jquery'),
const nav=document.getElementById('test');
function homePage(){
 let navdisplay=$(
     `<header id="my-header">
        <div class="main-nav">
            <div class="navlink n1"><a href="#">Home</a></div>
            <div class="navlink n2"><a href="#">Assist</a></div>
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
        </header>
         `);
  
    $("#test").html(navdisplay);
}
homePage();

function home(){
    let mainpage=(`
    <div id="bg-img">
    <a href="#" class="welcome"><img src="./img/threeshape.png" alt="trianle aman" width="300px"></a>
    </div>
 
    <div>
     <img src="./img/lowerlogo.png" alt="trianle aman" width="100%" class="lowerlogo">
     <a href="#!"><img src="./img/logoflower2.png" alt="trianle aman" width="15%" class="lowerflower"></a>
    </div>
    <div class="threeIn1">
    <div class="d text-center">
    <p>RECORDING <span>authentic</span>AND <span>intimate </span> TRADITIONAL WEDDINGS AS THEY ARE IN HOME</p>
    </div>
    <div class=" e "><img src="./img/logodesign.png" alt="textlogo" width="250px"></div>
    <div class=" a tinone"><img src="./img/1plk.jpg" alt="spill" width="220px"></div>
    <div class=" b tinone"><img src="./img/1plc.jpg" alt="spill" width="220px"></div>
    <div class=" c tinone"><img src="./img/1plc.jpg" alt="spill" width="220px"></div>
    </div>
    <div class="instagram"><p> follow along on instagram @suzannenevillphotography</p></div>
        `);
    
    $("#tri").html(mainpage);
}
home();
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



const footer=()=>{
    let footerh=`<div class="footer">
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
                 </div>`
    $("#tri").append(footerh);
}
footer();
