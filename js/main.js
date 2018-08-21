"use strict";
console.log("hi video");
// let $ = require('jquery'),
const nav=document.getElementById('test');
function homePage(){
 let navdisplay=$(
     `<header id="my-header">
        <div class="main-nav">
            <div class="nav-list"><a href="#">Home</a></div>
            <div class="nav-list"><a href="#">Assist</a></div>
            <div class="nav-list"><a href="#">Gallery</a></div>
            <div class="nav-list"><a href="#">Contact me</a></div>
            <div class="nav-list"><a href="#">Divisions</a></div>
        </div> 
        <div class="central-nav">
            <img src="img/logoflower2.png" class="img-fluid" alt="ornella logo" width="200px">
            <div>Ornella Multi-Media</div>
            <div>Creative Photographer and Videographer</div>
        </div> 
        <div class="right-nav"> 
            <div>a line</div> 
            <div> follow me on social media </div>
            <div class="icons">
            <a href="#!"><i class="fab fa-twitter fa-2x">Lk</i></a>
            <a href="#!"><i class="fab fa-linkedin fa-2x">L</i></a> 
            <a href="#!"><i class="fab fa-github fa-2x">G</i> </a>
            </div> 
        </div> 
        </header>
         `)
  
    $("#test").html(navdisplay);
}
homePage();

function home(){
    let mainpage=(`
    <div id="bg-img">
    <div id="triangle">
    <p>Meet Aman</p>
    </div>
    </div>
    `)
    $("#tri").html(mainpage);
}
home();
          