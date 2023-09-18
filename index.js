let resultado = Somar (1111, 25)

function Somar (Vitorias , Derrotas){

    return Vitorias - Derrotas
}
let Nivel = ["Ferro","Bronze", "Prata", "Ouro", "Diamante" ,"Lendário", "Imortal", "Radiante"]

function Ferro() {

    console.log("O Herói tem de saldo " + resultado  + " e está no nível de " + Nivel[0])
}
function Bronze() {

    console.log("O Herói tem de saldo " + resultado  + " e está no nível de " + Nivel[1])
}
function Prata() {

    console.log("O Herói tem de saldo " + resultado  + " e está no nível de " + Nivel[2])
}
function Ouro() {

    console.log("O Herói tem de saldo " + resultado  + " e está no nível de " + Nivel[3])
}
function Diamante() {

    console.log("O Herói tem de saldo " + resultado  + " e está no nível de " + Nivel[4])
}
function Lendário() {

    console.log("O Herói tem de saldo " + resultado  + " e está no nível de " + Nivel[5])
}
function Imortal() {

    console.log("O Herói tem de saldo " + resultado  + " e está no nível de " + Nivel[6])
}
function Radiante() {

    console.log("O Herói tem de saldo " + resultado  + " e está no nível de " + Nivel[7])
}

if (resultado < 10 ){

    Ferro()

}   else if ( 10 > resultado && resultado <=20 ){

            Bronze()

}
            else if ( 20 > resultado && resultado <=50 ){

                    Prata()
    
}               
                else if ( 50 > resultado && resultado<=80 ){

                        Ouro()
}
            else if ( 80 > resultado && resultado <=90 ){

                    Diamante()
}
        else if ( 90 > resultado && resultado <=100 ){

                Lendário()
}
else if ( resultado > 100 ){

        Imortal()
}