var texto = document.getElementById("intext");




function encriptar () {

  document.getElementById("copy").style.display="block";
  document.getElementById("ilustracion").style.display="none";
  document.getElementById("textare").style.display="none";
  document.getElementById("ningun").style.display="none";


  var reemplazo = texto.replace (/a|e|i|o|u/g, function(m){return{"a":"ai", "e":"enter","i":"imes","o":"ober","u":"ufat"}[m]});
  console.log(reemplazo);
  document.getElementById("nuevo").innerHTML=reemplazo;
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
  // Get the text field
  var copyText = document.getElementById("nuevo");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
}


