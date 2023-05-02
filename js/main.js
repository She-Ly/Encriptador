var texto = document.getElementById("intext");




function encriptar () {

  document.getElementById("copy").style.display="block";
  document.getElementById("ilustracion").style.display="none";
  document.getElementById("textare").style.display="none";
  document.getElementById("ningun").style.display="none";


  var reemplazo = texto.value.replace(/a|e|i|o|u/g, function(m){return{"a":"ai", "e":"enter","i":"imes","o":"ober","u":"ufat"}[m]});
  console.log(reemplazo);
  document.getElementById("nuevo").innerHTML=reemplazo
}


function desencriptar () {
 
  document.getElementById("copy").style.display="block";
  document.getElementById("ilustracion").style.display="none";
  document.getElementById("textare").style.display="none";
  document.getElementById("ningun").style.display="none";

  
  var desencriptado = texto.value.replace(/ai|enter|imes|ober|ufat/g, function(m){return{"ai":"a", "enter":"e","imes":"i","ober":"o","ufat":"u"}[m]});
  console.log(desencriptado);
  document.getElementById("nuevo").innerHTML= desencriptado;
}


function myFunction() {
  
  var copyText = document.getElementById("nuevo");
  copyText.select();
  copyText.setSelectionRange(0, 99999); 
  navigator.clipboard.writeText(copyText.value);
}


