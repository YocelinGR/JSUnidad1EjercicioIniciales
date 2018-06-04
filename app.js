//Preguntar por el nombre y apellido
var name=prompt("¿Cuál es tu nombre y apellido");
//Obteniendo 1a iniciales
var firstInitial=name.slice(0,1);
//Obteniendo 2a iniciales
var position=name.indexOf(" ")+1;//Buscando posicion del segundo caracter
var secondInitial=name.slice(position,position+1);
//Imprimir en la web
document.write("Las iniciales de tu nombres son: "+ firstInitial.toUpperCase()+secondInitial.toUpperCase());
