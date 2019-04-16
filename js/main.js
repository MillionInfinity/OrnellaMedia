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

    var buttonClicked;
    $(".wedd").click(()=>{
      if(buttonClicked!= true){
        buttonClicked=true;
        $('.are').hide();
        $('.selga').hide();
        $(".wed-text").css({ display:"inline" });
        // alert('button clicked');
    }else{

    }
    console.log("i dont know");

    });
var buttonClicke;
$(".eng").click(() => {
    if (buttonClicke!= true) {
        buttonClicke = true;
        $('.we').hide();
        $('.selga').hide();
        $(".wed-text").css({ display: "inline" });
        // alert('button clicked');
    } else {

    }
    console.log("i dont know");

});