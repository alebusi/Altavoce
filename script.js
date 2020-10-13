var testoFinale="";

window.addEventListener("keydown", keypress_handler, false);

/*$(document).ready(function(){*/
    $("#testoCompleto").load("https://docs.google.com/document/d/e/2PACX-1vTYZ7j14zvmea0tzkWS8wdm54-6gxHFMuATwkWe7xBjW_KvD8zOrKGVpErNOLbkV4d5jEzphBLLWT-u/pub span");
/*});*/

function keypress_handler(event) {
  if (event.keyCode == 32) { 
    testoRaw=document.getElementById("testoCompleto").innerHTML;
    /* testo=testoRaw.substr(testoRaw.indexOf("#")+1); */
    testoFinale=sistemaTesto(testoRaw);	
    document.getElementById("testo").innerHTML=testoFinale;
    }
}
/*
$(window).load(function () {
    testoRaw=document.getElementById("testoCompleto").innerHTML;
    /* testo=testoRaw.substr(testoRaw.indexOf("#")+1);
    testoFinale=sistemaTesto(testoRaw);	
    document.getElementById("testo").innerHTML=testoFinale;
});
*/
/*
testoRaw=document.getElementById("testoCompleto").innerHTML;
testo=testoRaw.substr(testoRaw.indexOf("#")+1);
testoFinale=sistemaTesto(testoRaw);	
document.getElementById("testo").innerHTML=testoFinale;
*/
function sistemaTesto(testo) {
  testo = testo.replace(/à/ig,"ah");
  testo = testo.replace(/ì/ig,"ih");
  testo = testo.replace(/ù/ig,"uh");
  testo = testo.replace(/ò/ig,"oh");
  testo = testo.replace(/è/ig,"eh");
  testo = testo.replace(/é/ig,"eh");
  return testo;
}
