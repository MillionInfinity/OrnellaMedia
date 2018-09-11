"use strict";
// let data=require('./data');
const loadOrnella=()=>{
 var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            var people = response.ornella;
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
//    const welcome=()=>{
//     //    console.log("something");
//    return loadOrnella().then(function(){
//        console.log("something");
//    });
//    };
//   welcome();

module.exports = {
    loadOrnella
};

