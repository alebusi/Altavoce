var testo;

$(document).ready(function(){
    $("#testoCompleto").load("https://docs.google.com/document/d/e/2PACX-1vTYZ7j14zvmea0tzkWS8wdm54-6gxHFMuATwkWe7xBjW_KvD8zOrKGVpErNOLbkV4d5jEzphBLLWT-u/pub span");
});

testoRaw=document.getElementById("testoCompleto").innerHTML;
/* testo=testoRaw.substr(testoRaw.indexOf("#")+1); */
testo=sistemaTesto(testoRaw);	
document.getElementById("testo").innerHTML=testo;

function sistemaTesto(testo) {
  testo = testo.replace(/à/ig,"ah");
  testo = testo.replace(/ì/ig,"ih");
  testo = testo.replace(/ù/ig,"uh");
  testo = testo.replace(/ò/ig,"oh");
  testo = testo.replace(/è/ig,"eh");
  testo = testo.replace(/é/ig,"eh");
  return testo;
}
