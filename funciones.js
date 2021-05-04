 /*validar formulario*/
 const form = document.getElementById('form-registro');
 const fnombre = document.getElementById('fname');
 const email = document.getElementById('email');
 const rut = document.getElementById('rut');
 const pasaporte = document.getElementById('pasaporte');
 const phone = document.getElementById('phone');
 const message = document.getElementById('message');

 //eventos
 form.addEventListener('submit',e =>{
     e.preventDefault();
     checkInputs();
 });

 function checkInputs(){
     const  fnombreValue = fname.nodeValue.trim();
     const  emailValue   = email.nodeValue.trim();
     const  rutValue     = rut.nodeValue.trim();
     const  pasaporteValue = pasaporte.nodeValue.trim();
     const  phoneValue     = phone.nodeValue.trim();
     const  messageValue =   message.nodeValue.trim();

 }
