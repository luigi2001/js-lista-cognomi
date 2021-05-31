
var mail = prompt('Inserisci la tua mail:');
console.log (mail);

var iscritti = ['mariorossi12@gmail.com', 'luca.verdi@virgilio.it', 'giovannicairoli@libero.it', 'marcoambrosio@yahoo.com', 'guido.bianchi@gmail.com'];

var i = 0;

while (i < iscritti.length){
    if (iscritti[i] == mail){
        console.log ('presente');
    } else {
        console.log ('non presente');
    }
    break;
    i++;
}