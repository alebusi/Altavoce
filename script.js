var testoFinale="";

window.addEventListener("keydown", keypress_handler, false);
/*
$(document).ready(function(){
    $("#testoCompleto").load("https://docs.google.com/document/d/e/2PACX-1vTYZ7j14zvmea0tzkWS8wdm54-6gxHFMuATwkWe7xBjW_KvD8zOrKGVpErNOLbkV4d5jEzphBLLWT-u/pub span", caricaTesto);
});
*/
function keypress_handler(event) {
  if (event.keyCode == 32) { 
    testoRaw=document.getElementById("testoCompleto").innerHTML;
    testoFinale=sistemaTesto(testoRaw);	
    document.getElementById("testo").innerHTML=testoFinale;
    }
}
/*
$(window).load(function () {
    testoRaw=document.getElementById("testoCompleto").innerHTML;
    testoFinale=sistemaTesto(testoRaw);	
    document.getElementById("testo").innerHTML=testoFinale;
});
*/

function caricaTesto() {
  testoRaw=document.getElementById("testoCompleto").innerHTML;
  testoRaw=testoRaw.substr(testoRaw.indexOf("minuti")+5);
  testoRaw=testoRaw.substr(1,testoRaw.indexOf("Pubblicato da")-1);  
  testoFinale=sistemaTesto(testoRaw);	
  document.getElementById("testo").innerHTML=testoFinale;
  document.getElementById("testoCompleto").innerHTML=testoFinale;    
}

function sistemaTesto(testo) {
  testo = testo.replace(/à/ig,"ah");
  testo = testo.replace(/ì/ig,"ih");
  testo = testo.replace(/ù/ig,"uh");
  testo = testo.replace(/ò/ig,"oh");
  testo = testo.replace(/è/ig,"eh");
  testo = testo.replace(/é/ig,"eh");
  return testo;
}
