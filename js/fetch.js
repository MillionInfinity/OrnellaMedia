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



module.exports = {
    loadOrnella,
// loadQuote,

};

