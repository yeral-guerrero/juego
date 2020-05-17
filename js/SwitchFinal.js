var opciones = ["Piedra","Papel","Tijera"];
var estado, gamer1, gamer2;


gamer1 = prompt("Opcion Jugador 1 Escoja: 0.- Piedra, 1.- Papel, 2.- Tijera:");
gamer2 = prompt("Opcion Jugador 2 Escoja: 0.- Piedra, 1.- Papel, 2.- Tijera:");
estado=juego(gamer1,gamer2);

switch(estado)
{
    case 0:
     console.log(`Empate de ${opciones[gamer1]}`);
     break;

    case 1:
      
        console.log(`Gana Judador 2 ${opciones[gamer2]} a ${opciones[gamer1]}`);
        break;

    case 2:
        console.log(`Gana Judador 1 ${opciones[gamer1]} a ${opciones[gamer2]}`);
        break;

    default:
        console.log("Opcion Incorrecta...");
}

function juego(gamer1 , gamer2)
{
    if(gamer1 == gamer2)
    {
        return 0;
    } 
    else if(gamer1==0 && gamer2==1 || gamer1==1 && gamer2==2 || gamer1==2 && gamer2==0)
    {
        return 1;
    }
    else if(gamer1==0 && gamer2==2 || gamer1==1 && gamer2==0 || gamer1==2 && gamer2==1){
        return 2;
    }
    
}

