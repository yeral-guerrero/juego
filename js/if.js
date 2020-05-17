var opciones = ["Piedra","Papel","Tijera"];
var gamer1, gamer2;

function juego(gamer1 , gamer2)
{
    if(gamer1 == gamer2)
    {
        console.log(`Empate de ${opciones[gamer1]}`);
    } 
    else if(gamer1==0 && gamer2==1 || gamer1==1 && gamer2==2 || gamer1==2 && gamer2==0)
    {
        console.log(`Gana Jugador 2 ${opciones[gamer2]} vs ${opciones[gamer1]}`);
    }
    else if(gamer1==0 && gamer2==2 || gamer1==1 && gamer2==0 || gamer1==2 && gamer2==1){
       // console.log(`Gana jugador1`);
        console.log(`Gana Jugador 1 ${opciones[gamer1]} vs ${opciones[gamer2]}`);
    }
    else console.log("Opcion Incorrecta...")
}