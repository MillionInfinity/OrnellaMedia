"use strict";
let $ = require('jquery'),
fethc=require('./fetch');
// console.log("ornella ready",fethc.loadOrnella);
$(document).ready(function () {
    // console.log("ready!");
    const mainHome = () => {
        let indexh = `
      <section id="tri">
            <div class="main-home"></div>
            <div id="bg-aman">
                <div id="bindex">
                <div id="indexb"></div>
                    </div>
                <div class="colect">
                        <p class="myNm"> Hi,My name is ...</p>
                        <h1 class="anan" > Aman Zeru </h1>
                        <div class="hor-line"></div>
                        <h3 class="h3">Professional videographer &Photographer </h3>
                    </div>
     <a class="welcome"> <img id="visitor" src="./img/threeshape.png" alt="trianle aman" width="300px"></a>

            </div>
                <div class="lowerlogo">
                <a href="#!"><img src="./img/logoflower2.png" alt="trianle aman" class="lowerflower lflwr"></a>
                </div>
            <div class="threeIn1"></div>
        <d class="container-fluid">
         <div class="row ls">
              <div class="col-sm-1 col-md-1 col-lg-1 col-xl-1">
                     </div>
            <div class="col-sm-10 col-md-10 col-lg-10 col-xl-10">
            <h1 class="text-center about">About <span>Me</span></h1>
                Hi there !We are Dan and Kelly Watson,
                a husband and wife photography team based in Nashville,
                Tennessee.We have been in business for over 10 years and Dan has photographed 
                over 200 weddings.Our goal is to provide you with classic images that will stand 
                the test of time and be cherished forever.We take a limited number of weddings
                each year in order to give our clients the attention they deserve.
            </div>
            <div class="col-sm-1 col-md-1 col-lg-1 col-xl-1" >
             </div>
            <div class="instagram">
            <p> follow along on instagram @aman_zeru</p>
            </div>
        </section>
     `;
        $(".tri-aman").html(indexh);
    };
    mainHome();
});

// $(document).ready(function(){
// const galleryHome = () => {
//     let choose= `
//     <a class="makda">wedding</a>
//     <div class="selga">    
//      <div id="hello" class="wedground"><a><img src="./img/wedding.png" alt="trianle aman" width="300px"></a></div>
//      <div class="enground"><a><img src="./img/engagmet.png" class="eng" alt="trianle aman" width="300px"></a></div>
//      <div class="gradground"><a><img src="./img/graduation.png" alt="trianle aman" width="300px"></a></div>
//       <div class="lowerlogo"><a><img src="./img/logoflower2.png" alt="trianle aman" class="lowerflower"></a></div>
//     <p class="q text-center">RECORDING <span>authentic</span>AND <span>intimate </span> TRADITIONAL WEDDINGS AS THEY ARE IN HOME</p>
//     <div class="threeIn1"></div>
//      <div class="zerumess d">
//     <h5 class="marriage">“You know when you have found your prince because you not only have a smile on your face, but in your heart as well.."</h5>
//     </div> 
//     <div class="instagram">
//    <p> follow along on instagram @@aman_zeru</p>
//    </div>
//    </div>
//      `;
//     $('.four-aman').html(choose);
// };
// galleryHome();
// });


// $(".wedd").on('click', function(){
//        console.log("hi");
//   const galleryHome=()=>{ 
//         let choose= `
//         <li class="million">Million is here</li>
// `;
//        $('.tri-aman').html(choose);
// };
//       galleryHome();
//   });
$(document).ready(function () {
//     $(".wedd").click(function () {
//         $(".selga").hide();
//         console.log("hi wedding pictures", fethc.loadOrnella);
      
//          const galleryHome=()=>{ 
//         let choose= `
//         <li class="million">Million is here</li>
//        <div id="wedPic">
//           <section></section>
//        </div>
// `;
//        $('.four-aman').html(choose);
// };
//       galleryHome();
//     });


    $(".gradd").click(function () {
        console.log("hi grad pictures");
        //     $("#chgcolor").css("background-color", "green");
    });

    
});



module.exports=
{
    // galleryHome
};