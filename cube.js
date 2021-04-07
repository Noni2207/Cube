
   function Surfacearea() {
    var page = eval(document.CUBE.page.value.replace(",",".").replace(/ /g,""));
    var diagonal = eval(document.CUBE.diagonal.value.replace(",",".").replace(/ /g,""));
    var area;
    var volume;
    var desMesta = (document.CUBE.desMesta.value);
    
    if (document.CUBE.page.value != "") {
      diagonal = page * Math.sqrt(2); 
      document.getElementById(" ");
    } else if (document.CUBE.diagonal.value != "") {
      page = diagonal / Math.sqrt(2);  
      document.getElementById(" ") ;
    } else {
        
      location.href = "#error1";
      return;
    }     
    document.CUBE.diagonal.value = ((diagonal.toFixed(desMesta)).toString()).replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".",",");
    document.CUBE.page.value = ((page.toFixed(desMesta)).toString()).replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".",","); 
    
    volume = page * page * page;
      
    document.CUBE.volume.value = ((volume.toFixed(desMesta)).toString()).replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".",","); 
    
    area = 6 * page * page;
      
    document.CUBE.area.value = ((area.toFixed(desMesta)).toString()).replace(/\B(?=(?:\d{3})+(?!\d))/g, " ").replace(".",","); 
   
   }
   
function goreDM() {
 if (document.CUBE.desMesta.value == "3") {
   document.CUBE.desMesta.value = "";
 }
}
function doleDM() {
 if (document.CUBE.desMesta.value == "") {
   document.CUBE.desMesta.value = "3"; 
 }
}  
     
     
     
     
 
 
 
 