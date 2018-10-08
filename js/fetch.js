"use strict";
// let data=require('./data');
const loadOrnella=()=>{
 var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            var people = response.ornellas;
            // console.log(people);
            // return people;
            let ornimage=[];
            for(let i=0; i<people.length; i++){
                let onimage=people[i];
                // console.log("people", onimage);
                ornimage+=`<div class="gallery">`;
                ornimage+= `<img class="galies" src="${onimage.img}">`;
                ornimage+=`</div>`;
                $('#four').html(ornimage);
            }
          }

      };
      xhttp.open("GET", "ornella.json", true);
      xhttp.send();
    };
 loadOrnella();


// const loadEng=()=>{
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             var response = JSON.parse(xhttp.responseText);
//             var enga = response.engagement;
//             console.log("enga",enga);
//             // return people;
//             let ornimage = [];
//             for (let i = 0; i <enga.length; i++) {
//                 let onimage = enga[i];
//                 // console.log("people", onimage);
//                 // ornimage += `<div class="gallery">`;
//                 // ornimage += `<img class="galies" src="${onimage.img}">`;
//                 // ornimage += `</div>`;
//                 $('#engu').html(ornimage);
//             }
//         }

//     };
//     xhttp.open("GET", "ornella.json", true);
//     xhttp.send();
// };


$(".enground").click(function(){
    console.log("laila baby");
    // loadEng();
});


// const loadQuote = () => {
//     var qoates= new XMLHttpRequest();
//     qoates.open("GET", "ornella.json");
//     qoates.onload=function(){
//         var ourQoate=JSON.parse(qoates.responseText);
//        console.log(ourQoate);
//        gallery(qoates);
//     }
//    qoates.send();
// };
// const gallery=(data)=> {
//     console.log("hi");
//     let choose=`<div>
//      <div class="wedground"><a href="gallery.html"><img src="./img/wedding.png" alt="trianle aman" width="300px"></a></div>
//      <div class="enground"><a href=""><img  class="eng p-2" src="./img/engagmet.png" alt="trianle aman" width="300px"></a></div>
//      <div class="gradground"><a href=""><img src="./img/graduation.png" alt="trianle aman" width="300px"></a></div>
//      <div class="lowerlogo"></div>

//      <h1 id="article">hellow</h1>
//      <div id="gallery-footer"></div>
//      </div>`;
//       $('#tri').append(choose);
// };
// gallery();

const loadBranch = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            var people = response.branches;
            // console.log(people);
            // return people;
            let ornimage = [];
            for (let brancho= 0; brancho< people.length; brancho++) {
                let onimage = people[brancho];
                // console.log("people", onimage);
                   ornimage += `<div id="infobtn" class="branc col-lg-3 col-md- col-sm-3" data-toggle="modal" data-target="#brancho-${brancho}">`;
                   ornimage +=`<p class="bra-loc">${onimage.location}</p>`;
                   ornimage +=`<div class="branc-img"></div>`;
                   ornimage +=`</div>`;
                   ornimage += `<div class="modal fade modalStyle" id="brancho-${brancho}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">`;
                   ornimage += `<div class="modal-dialog" role="document">`;
                   ornimage += `<div class="modal-content">`;
                   ornimage += `<div class="modal-header">`;
                   ornimage += `<h5 class="modal-title" id="${brancho}exampleModalLabel">${onimage.location} Branch</h5>`;
                   ornimage += `<button type="button" class="close" data-dismiss="modal" aria-label="Close">`;
                   ornimage += `<span aria-hidden="true">&times;</span>`;
                   ornimage += `</button>`;
                   ornimage += `</div>`;
                   ornimage += `<div class="modal-body">`;

                   ornimage += `<img  src="${onimage.imgs}" width="80px" height="80px">`;
                   ornimage += `<p class="b-name">${onimage.name}</p>`;
                   ornimage += `<p class="ebs">Phone Number :- <em>${onimage.tele}</em></p>`;
                   ornimage += `<p class="ebs">${onimage.do}</p>`;
                   ornimage += `<p class="ebs">${onimage.location}</p>`;
                   ornimage += `<div class="bran-img"></div>`;
                   ornimage += `</div>`;
                   ornimage += `<div class="modal-footer">`;
                //    ornimage += `<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>`;
                   ornimage += `<button type="button" class="btn btn-primary con-btn">Contact</button>`;
                   ornimage += `</div>`;
                   ornimage += `</div>`;
                   ornimage += `</div>`;
                   ornimage += `</div>`;
               
                $('#branching').html(ornimage);
            }
        }

    };
    xhttp.open("GET", "ornella.json", true);
    xhttp.send();
};
loadBranch();
$("document").ready(function(){
$(".con-btn").click(function(){
    console.log("contact info clicked");
});
});

module.exports = {
    loadOrnella,
// loadQuote,
// loadEng,

};

