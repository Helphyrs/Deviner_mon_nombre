let input = document.getElementById('nombre'), phrase = document.getElementById('paragraphe'),  feu= document.getElementById('feu');
let snow = document.getElementById('snow'), arrowUp = document.getElementById('arrowup'),arrowDown = document.getElementById('arrowdown');
let phrase2 = document.getElementById('output'),phraseTentative = document.getElementById('tentative'), essai = document.getElementById('essais');
let form = document.getElementById('form');
let difficulte = document.getElementById('Difficulte'), reset = document.getElementById('Reset');
let chiffreJoueur = document.getElementById('ChiffreJoueur');
let affichage = document.getElementById('Affichage');
let inputNumber = 0, compteur = 0, valeur=1000,  random = Math.floor(Math.random()*valeur) ;
let correct= document.getElementById('correct');
let tableauvaleur = [];


console.log(random);
function suBmit() {
    for ( let i=0; i<=valeur; i++ ) {
        if ( i == input.value) {
            inputNumber=i
        }
    }
    console.log(inputNumber);
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
        correct.setAttribute('id','correct_visible');
    }
    return true;
}


function submitSansIndice() {
    for ( let i=0; i<=valeur; i++ ) {
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
    
    desactivation()
    if ( inputNumber < random) {
        phrase.innerHTML ="C'est plus haut.";
        arrowUp.setAttribute('id','arrowup_visible');
    } else if (inputNumber>random ) {
        phrase.innerHTML ="C'est plus bas.";
        arrowDown.setAttribute('id','arrowdown_visible');
    } else { 
        phrase.innerHTML ="Ding ding ding c'est correct ; PS: Si vous voulez continuer à jouer il suffit juste de remettre une valeur dans la barre et de faire entrer ;)"
        form.setAttribute('onSubmit','');
        correct.setAttribute('id','correct_visible');

}
return true;

}

function desactivation() {
    feu.setAttribute('id','feu');
    snow.setAttribute('id','snow');
    arrowUp.setAttribute('id','arrowup');
    arrowDown.setAttribute('id','arrowdown');
    correct.setAttribute('id','correct');
}
function submitDifficile() {
    form.setAttribute('onSubmit','submitSansIndice() ; return false')
}
function Reset() {
    desactivation();
    form.setAttribute('onSubmit','suBmit() ; return false')
    valeur=1000;
    random=Math.floor(Math.random()*valeur)
    compteur=0;
    phrase.innerHTML ="";
    essai.innerHTML ="";
    phrase2.innerHTML ="";
    phraseTentative.innerHTML="";
    affichage.innerHTML = "Vous devez trouvé un nombre compris entre 0 et " + valeur;
}
function Determiner() {
    valeur = parseInt(window.prompt('Mettez un chiffre qui sera la valeur maximale que ce que vous voulez chercher ( valeur maximale : 1000000 )'))
    while(isNaN(valeur) || valeur > 1000000) {
        valeur = parseInt(window.prompt('Mettez un chiffre qui sera la valeur maximale que ce que vous voulez chercher ( valeur maximale : 1000000 )'))
    }
    random = Math.floor(Math.random()*valeur);
    affichage.innerHTML = "Vous devez trouvé un nombre compris entre 0 et " + valeur;
}




affichage.innerHTML = "Vous devez trouvé un nombre compris entre 0 et " + valeur;





window.addEventListener('DOMContentLoaded',function() {
    difficulte.addEventListener('click',submitDifficile) ;
    reset.addEventListener('click',Reset);
    chiffreJoueur.addEventListener('click',Determiner);
});
