
/* primo esercizio  */

/*var mail = prompt('Inserisci la tua mail:');
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

document.getElementById('risposta').innerHTML = risposta;*/

/* secondo esercizio */

var cognome = prompt('inserisci il tuo cognome:');
console.log (cognome);

var maiuscola = cognome.charAt(0).toUpperCase()+ cognome.slice(1);

var elencoCognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
console.log(elencoCognomi);

elencoCognomi.push(maiuscola);
console.log(elencoCognomi);

elencoCognomi.sort();

var position = 0;

for(var i = 0; i < elencoCognomi.length; i++){
    document.getElementById('cognomi').innerHTML = elencoCognomi;
    if(elencoCognomi[i] == cognome){
        position = i + 1;
    }
}

console.log(position);






