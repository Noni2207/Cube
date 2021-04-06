

   function Surfacearea() {
    var stranica = eval(document.CUBE.stranica.value.replace(",",".").replace(/ /g,""));
    var diagonala = eval(document.CUBE.diagonala.value.replace(",",".").replace(/ /g,""));
    var povrsina;
    var zapremina;
    var desMesta = (document.CUBE.desMesta.value);
    
    if (document.CUBE.stranica.value != "") {
      diagonala = stranica * Math.sqrt(2); 
      document.getElementById(" ");
    } else if (document.CUBE.diagonala.value != "") {
      stranica = diagonala / Math.sqrt(2);  
      document.getElementById(" ") ;
    } else {
        
      location.href = "#error1";
      return;
    }     
    document.CUBE.diagonala.value = ((diagonala.toFixed(desMesta)).toString()).replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".",",");
    document.CUBE.stranica.value = ((stranica.toFixed(desMesta)).toString()).replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".",","); 
    
    zapremina = stranica * stranica * stranica;
      
    document.CUBE.zapremina.value = ((zapremina.toFixed(desMesta)).toString()).replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".",","); 
    
    povrsina = 6 * stranica * stranica;
      
    document.CUBE.povrsina.value = ((povrsina.toFixed(desMesta)).toString()).replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".",","); 
   
   }
   
function goreDM() {
 if (document.CUBE.desMesta.value == "3") {
   document.CUBE.desMista.value = "";
 }
}
function doleDM() {
 if (document.CUBE.desMesta.value == "") {
   document.CUBE.desMesta.value = "3"; 
 }
}  
     
     
     
 
 
 
 