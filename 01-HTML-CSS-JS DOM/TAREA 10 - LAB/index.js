const miBotonUno = document.getElementById('cambiarBoton');
miBotonUno.addEventListener('click',function(){
    document.querySelector('.cuadro1').style.background="yellow";
    document.querySelector('.eldisplay').style.display="block";
    document.querySelector('.cuadro2').style.background="yellow";
    document.querySelector('.cuadro2').style.width="100%";
    document.querySelector('.cuadro2').style.margin="0%";
    document.querySelector('.cuadro3').style.background="yellow";
    document.querySelector('.cuadro3').style.width="100%";
    document.querySelector('.cuadro3').style.margin="0%";
});

const miBotonDos = document.getElementById('resetBoton');
miBotonDos.addEventListener('click',function(){
    document.querySelector('.cuadro1').style.background="red";
    document.querySelector('.eldisplay').style.display="flex";
    document.querySelector('.cuadro2').style.background="red";
    document.querySelector('.cuadro2').style.width="97%";
    document.querySelector('.cuadro2').style.margin="10px 0px 10px 10px";
    document.querySelector('.cuadro3').style.background="red";
    document.querySelector('.cuadro3').style.width="97%";
    document.querySelector('.cuadro3').style.margin="10px 0px 10px 10px";
});