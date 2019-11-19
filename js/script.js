var hexinput= document.querySelector(".hexinput");
var bu2n= document.querySelector(".bu2n");
var color2= document.querySelector(".color2");
var body= document.querySelector("body");
var ShowRGB= document.querySelector("#ShowRGB");
var ShowColor= document.querySelector("#ShowColor");
var h1= document.querySelector("#h1");
var h2= document.querySelector("#h2");
var DisplayResults= document.querySelector(".DisplayResults");



bu2n.addEventListener("click", function(){
    if(hexinput.value.length> 7){
        alert("the hex code value is above the required value");
    }else if(hexinput.value.length< 7){
        if(hexinput.value.length==""){
            alert("the hex code value is empty");
        }else{
            alert("the hex code value is not complete");
        }
        
    }else{
        Converter();
    }
})


function Converter(){
    
    var Obsolete = hexinput.value.substring(0,1);
    var a= parseInt(hexinput.value.substring(1,3), 16);
    var b= parseInt(hexinput.value.substring(3,5), 16);
    var c= parseInt(hexinput.value.substring(5,7), 16);

    if(Obsolete=="#"){
        DisplayResults.style.display="block";

        h1.style.display="block";
        ShowRGB.style.display="block";
        ShowRGB.innerHTML= "rgb(" + a + "," + b + "," + c + ")";
    
        h2.style.display="block";
        ShowColor.style.display= "block";
        ShowColor.style.backgroundColor= "rgb(" + a + "," + b + "," + c + ")";
       
    }else{
        alert("error.. every hex code value must start with an #");

    }

}




