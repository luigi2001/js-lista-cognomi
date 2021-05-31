
/* primo esercizio  */

var mail = prompt('Inserisci la tua mail:');
console.log (mail);

var iscritti = ['mariorossi12@gmail.com', 'luca.verdi@virgilio.it', 'giovannicairoli@libero.it', 'marcoambrosio@yahoo.com', 'guido.bianchi@gmail.com'];

var risposta = 'la mail inserita non risulta nei nostri database';

var i = 0;

while (i < iscritti.length){
    if (iscritti[i] == mail){
        console.log (risposta = 'mail trovata');
    } else {
        console.log (risposta);
    }
    i++;
}

document.getElementById('risposta').innerHTML = risposta;