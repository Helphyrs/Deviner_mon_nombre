let input = document.getElementById('nombre'), phrase = document.getElementById('paragraphe'),  feu= document.getElementById('feu');
let snow = document.getElementById('snow'), arrowUp = document.getElementById('arrowup'),arrowDown = document.getElementById('arrowdown');
let phrase2 = document.getElementById('output'),phraseTentative = document.getElementById('tentative'), essai = document.getElementById('essais');
let form = document.getElementById('form');

let inputNumber = 0, compteur = 0, valeur=1000,  random = Math.floor(Math.random()*valeur) ;

let tableauvaleur = [];


console.log(random);
function suBmit() {
    for ( let i=0; i<valeur; i++ ) {
        if ( i == input.value) {
            inputNumber=i
        }
    }
    compteur++;
    for ( let i = 0 ; i<tableauvaleur.length ; i++) {
        if ( inputNumber === tableauvaleur[i]) {
            compteur--;
            phrase2.innerHTML = "-__- S'il vous plait mettez un chiffre que vous n'avez pas déjà mis au moins -__-"
            tableauvaleur.splice(i,1);
        } else {  phrase2.innerHTML = "Le chiffre que vous avez mis est : " + inputNumber + ".";}
    }
    tableauvaleur.push(inputNumber);
    essai.innerHTML = tableauvaleur ;
    compteur === 1 ? phraseTentative.innerHTML = "Vous êtes à votre " + compteur + "ère tentative." : phraseTentative.innerHTML = "Vous êtes à votre " + compteur + "ème tentative.";
    
    desactivation();
    if ( inputNumber < random  && inputNumber < random-100) {
        phrase.innerHTML = "Vous êtes froid, très froid, tellement que vous êtes loin mais bon le chiffre que vous cherchez et bien plus élevée que ce que vous avez dit ;)";
        snow.setAttribute('id','snow_visible');
        arrowUp.setAttribute('id','arrowup_visible');
    } else if ( inputNumber > random  && inputNumber > random+100) {
        phrase.innerHTML ="Vous êtes toujours froid mais au moins vous avez mis plus que pas assez x)";
        snow.setAttribute('id','snow_visible');
        arrowDown.setAttribute('id','arrowdown_visible');
    } else  if ( inputNumber < random) {
        phrase.innerHTML ="Ah ben c'est cool vous vous réchauffez, juste un tout petit plus allez !";
        feu.setAttribute('id','feu_visible');
        arrowUp.setAttribute('id','arrowup_visible');
    
    } else if (inputNumber>random ) {
        phrase.innerHTML ="Ah ben c'est cool vous vous réchauffez, juste un tout petit moins allez !";
        feu.setAttribute('id','feu_visible');
        arrowDown.setAttribute('id','arrowdown_visible');
    } else { 
        phrase.innerHTML ="Ding ding ding c'est correct ; PS: Si vous voulez continuer à jouer il suffit juste de remettre une valeur dans la barre et de faire entrer ;)"
        form.setAttribute('onSubmit','');
    }
    return true;
}

function desactivation() {
    feu.setAttribute('id','feu');
    snow.setAttribute('id','snow');
    arrowUp.setAttribute('id','arrowup');
    arrowDown.setAttribute('id','arrowdown');
}