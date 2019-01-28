"use strict";
let page=require ('./page'),
    fetching=require('./fetch'),
    // data=require('./data'),
    ornella=require('./ornella');

    $(document).ready(()=>{
    // console.log("home page is loading");
    // page.home();
    page.footer();
 
    });
   
    $("#visitor").click(()=>{
        console.log("galler is visitor");
    
    });

    $(".n3").click(() => {
        console.log("galler is ready");

    });
