"use strict";
let $= require('jquery');
const newNav = () => {
console.log("new nav");
let theNav=`
<header id="my-header">
        <div class="navbar navbar-expand-lg navbar-light bg-light">

         <a class="navbar-brand orn" href="#">
    <img src="img/logoflower2.png" width="38" height="35" class="d-inline-block align-top" alt="">
   Ornella Multi-Media
  </a>     
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
        <ul class="collapse navbar-collapse navfont" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link n1" href="index.html">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link n2" href="aman.html">Aman</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link n3" href="gallery.html">Gallery</a>
                    </li>
                      <li class="nav-item">
                        <a class="nav-link n4" href="http://localhost/ornella/OrnellaMedia/contactme.php">Contact Us</a>
                    </li>
                      <li class="nav-item">
                        <a class="nav-link n4" href="branch.html">Branch</a>
                    </li>
                    </ul>
                     <div class="central-nav">
                        <a href="index.html"><img src="img/logoflower2.png" class="img-fluid" alt="ornella logo" width="150px"></a>
                        <div class="orn">Ornella Multi-Media</div>
                        <div class="creative">Creative Photographer and Videographer</div>
                   </div> 
                    <div class="navbar navbar-expand-sm bg-light justify-content-center">
                    </div>
            <span class="navbar-text m-2">
            <div class="right-nav"> 
            <div class="legend">Habesha Photographer & Videographer</div>
            <div class="line"></div> 
            <div class="follow"> follow me on social media </div>
            <div class="icons">
            <a href="https://twitter.com/amanzerumesfin"></a>
            <a href="https://www.instagram.com/aman_zeru/"></a> 
            <a href="https://www.facebook.com/begieZgreat/"></a>
            </div>
        </div>
            </span>
        </div>
</na>
        </header>
`;
    $("#godaddy").html(theNav);
};
newNav();





 const footer = () => {
let footerh = `<div class="nav footer">
               <div class=""></div>
                 <div class="fi">
                <img src="./img/logoflower2.png" alt="textlogo" width="150px">
                </div>
               <div class="footer2 text-center">
                <div class="f f1"><a href="#">Home</a><span>|</span></div>
                <div class="f"><a href="#">Aman</a><span>|</span></div>
                <div class="f"><a href="#">Gallery</a><span>|</span></div>
                <div class="f"><a href="#">Branches</a></div>
                </div> 
                </div>`;
    $("#footer").html(footerh);
};



footer();

const lowerpart = () => {
    // console.log("lower part of the page");
    let thepart = `
    <div class="d text-center">
    <p class="h">RECORDING <span>authentic</span>AND <span>intimate </span> TRADITIONAL WEDDINGS AS THEY ARE IN HOME</p>
    </div>
    <div class="e"><img src="./img/logodesign.png" alt="textlogo" width="250px"></div>

    <div class="a tinone"><a href="aman.html"><div class="meet"><div class="met"></div></div><p class="textAman">Meet Aman</p></a></div>
    <div class="b tinone"><a href="#!"><div class="gal"><div class="met"></div></div><p class="textAman">Gallery</p></a></div>
    <div class="c tinone"><a href="#!"><img src="./img/1plc.jpg" alt="spill" width="220px"><div class="met"></div><p class="textAman">Branches</p></a></div>
    <div class="x tinone"><a href="#!"><img src="./img/1plc.jpg" alt="spill" width="220px"><div class="met"></div><p class="textAman">Branches</p></a></div>
    <div class="y tinone"><a href="#!"><img src="./img/1plc.jpg" alt="spill" width="220px"><div class="met"></div><p class="textAman">Branches</p></a></div>
    <div class="z tinone"><a href="#!"><img src="./img/1plc.jpg" alt="spill" width="220px"><div class="met"></div><p class="textAman">Branches</p></a></div>
 
    `;
    $(".threeIn1").html(thepart);
};
lowerpart();



const lowerbranch = () => {
    // console.log("lower part of the page");
    let thepart = `
    <div class="d text-center">
    <p class="h">RECORDING <span>authentic</span>AND <span>intimate </span> TRADITIONAL WEDDINGS AS THEY ARE IN HOME</p>
    </div>
    <div class="e"><img src="./img/logodesign.png" alt="textlogo" width="250px"></div>
     `;
    $(".threeIn2").html(thepart);
};
lowerbranch();


$('.form-control').on('click', function (e) {
    e.preventDefault();
    $(this).css('border', '2px solid #b9b1a7');
});

$('.submit').on('click', function (e) {
    e.preventDefault();
    $(this).css('background-color', '#ece5e7');
    $(this).css('color','rgb(138, 135, 135)');
});
module.exports={
    footer,
    newNav,
    lowerpart

};

