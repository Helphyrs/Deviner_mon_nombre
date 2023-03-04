let input = document.getElementById('nombre'), phrase = document.getElementById('paragraphe'),  feu= document.getElementById('feu');
let snow = document.getElementById('snow'), arrowUp = document.getElementById('arrowup'),arrowDown = document.getElementById('arrowdown');
let phrase2 = document.getElementById('output'),phraseTentative = document.getElementById('tentative'), essai = document.getElementById('essais');
let form = document.getElementById('form'), arrowdown_2 = document.getElementById('arrowdown_2'), correct_2 = document.getElementById('correct_2');
let feu_2 = document.getElementById('feu_2'), snow_2 = document.getElementById('snow_2'), arrowup_2 = document.getElementById('arrowup_2');
let difficulte = document.getElementById('Difficulte'), reset = document.getElementById('Reset');
let chiffreJoueur = document.getElementById('ChiffreJoueur');
let affichage = document.getElementById('Affichage');
let inputNumber = 0, compteur = 0, valeur=1000,  random = Math.floor(Math.random()*valeur) ;
let correct= document.getElementById('correct');
let tableauvaleur = [];


console.log(random);
function suBmit() {
    difficulte.removeEventListener('click',submitDifficile);
    difficulte.addEventListener('click',Warning2);
    for ( let i=0; i<=valeur; i++ ) {
        if ( i == input.value) {
            inputNumber=i
        }
    }
    compteur++;
    phrase2.innerHTML = "Le chiffre que vous avez mis est : " + inputNumber + "."; 
    for ( let i = 0 ; i<=tableauvaleur.length ; i++) {
        if ( inputNumber === tableauvaleur[i]) {
            compteur--;
            phrase2.innerHTML = "Mettez un chiffre que vous n'avez pas déjà mis au moins."
            tableauvaleur.splice(i,1);
        } 
    }
    
     tableauvaleur.push(inputNumber);
    if ( tableauvaleur.length === 15 || tableauvaleur.length === 30 | tableauvaleur.length === 45 ) {
        tableauvaleur.push('<br>');
    }
     essai.innerHTML = tableauvaleur ;
     compteur === 1 ? phraseTentative.innerHTML = "Vous êtes à votre " + compteur + "ère tentative." : phraseTentative.innerHTML = "Vous êtes à votre " + compteur + "ème tentative.";
    
    desactivation();
    if ( inputNumber < random  && inputNumber < random-100) {
        phrase.innerHTML = "On se les gèle ! C'est beaucoup plus !";
        snow.setAttribute('id','snow_visible');
        arrowUp.setAttribute('id','arrowup_visible');
        snow_2.setAttribute('id','snow_2_visible');
        arrowup_2.setAttribute('id','arrowup_2_visible');
    } else if ( inputNumber > random  && inputNumber > random+100) {
        phrase.innerHTML ="On se les gèle ! C'est beaucoup moins !";
        snow.setAttribute('id','snow_visible');
        arrowDown.setAttribute('id','arrowdown_visible');
        snow_2.setAttribute('id','snow_2_visible');
        arrowdown_2.setAttribute('id','arrowdown_2_visible');
    } else  if ( inputNumber < random) {
        phrase.innerHTML ="Vous vous réchauffez, plus qu'un petit effort. Juste un peu plus, allez !";
        feu.setAttribute('id','feu_visible');
        arrowUp.setAttribute('id','arrowup_visible');
        feu_2.setAttribute('id','feu_2_visible');
        arrowup_2.setAttribute('id','arrowup_2_visible');
    
    } else if (inputNumber>random ) {
        phrase.innerHTML ="Vous vous réchauffez, plus qu'un petit effort. Juste un peu moins allez !";
        feu.setAttribute('id','feu_visible');
        arrowDown.setAttribute('id','arrowdown_visible');
        feu_2.setAttribute('id','feu_2_visible');
        arrowdown_2.setAttribute('id','arrowdown_2_visible');
    } else { 
        phrase.innerHTML ="Ding ding ding c'est correct ; PS: Si vous voulez continuer à jouer il suffit juste de remettre une valeur dans la barre et de faire entrer ;)"
        form.setAttribute('onSubmit','');
        correct.setAttribute('id','correct_visible');
        correct_2.setAttribute('id','correct_2_visible');
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
    phrase2.innerHTML = "Le chiffre que vous avez mis est : " + inputNumber + "."
    for ( let i = 0 ; i<=tableauvaleur.length ; i++) {
        if ( inputNumber === tableauvaleur[i]) {
            compteur--;
            phrase2.innerHTML = "Mettez un chiffre que vous n'avez pas déjà mis au moins"
            tableauvaleur.splice(i,1);
        } 
    }
    tableauvaleur.push(inputNumber);
    if ( tableauvaleur.length === 15 || tableauvaleur.length === 30 | tableauvaleur.length === 45 ) {
        tableauvaleur.push('<br>');
    }
    essai.innerHTML = tableauvaleur ;
    compteur === 1 ? phraseTentative.innerHTML = "Vous êtes à votre " + compteur + "ère tentative." : phraseTentative.innerHTML = "Vous êtes à votre " + compteur + "ème tentative.";
    
    desactivation()
    if ( inputNumber < random) {
        phrase.innerHTML ="C'est plus haut.";
        arrowUp.setAttribute('id','arrowup_visible');
        arrowup_2.setAttribute('id','arrowup_2_visible');
    } else if (inputNumber>random ) {
        phrase.innerHTML ="C'est plus bas.";
        arrowDown.setAttribute('id','arrowdown_visible');
        arrowdown_2.setAttribute('id','arrowdown_2_visible');
    } else { 
        phrase.innerHTML ="Ding ding ding c'est correct ; PS: Si vous voulez continuer à jouer il suffit juste de remettre une valeur dans la barre et de faire entrer ;)"
        form.setAttribute('onSubmit','');
        correct.setAttribute('id','correct_visible');
        correct_2.setAttribute('id','correct_2_visible');

}
return true;

}

function desactivation() {
    feu.setAttribute('id','feu');
    snow.setAttribute('id','snow');
    arrowUp.setAttribute('id','arrowup');
    arrowDown.setAttribute('id','arrowdown');
    feu_2.setAttribute('id','feu_2');
    snow_2.setAttribute('id','snow_2');
    arrowup_2.setAttribute('id','arrowup_2');
    arrowdown_2.setAttribute('id','arrowdown_2');
    correct.setAttribute('id','correct');
    correct_2.setAttribute('id','correct_2');
}
function submitDifficile() {
    difficulte.removeEventListener('click',submitDifficile);
    form.setAttribute('onSubmit','submitSansIndice() ; return false')
    difficulte.addEventListener('click',Warning);
}
function Warning() {
    alert("Vous avez déjà mis le mode avec difficulté, si vous souhaitez l'enlever, cliquer sur Reset s'il vous plaît.");
}
function Warning2() {
    alert("Vous avez déjà commencé une partie, si vous souhaitez recommencer, cliquer sur Reset s'il vous plaît.");
}
function Warning3() {
    alert("Vous avez déjà changé de valeur, si vous souhaitez recommencer, cliquer sur Reset s'il vous plaît.")
}
function Reset() {
    difficulte.addEventListener('click',submitDifficile);
    chiffreJoueur.addEventListener('click',Determiner);
    difficulte.removeEventListener('click',Warning);
    difficulte.removeEventListener('click',Warning2);
    chiffreJoueur.removeEventListener('click',Warning3);
    desactivation();
    form.setAttribute('onSubmit','suBmit() ; return false')
    valeur=1000;
    input.setAttribute('max',valeur);
    random=Math.floor(Math.random()*valeur)
    compteur=0;
    phrase.innerHTML ="";
    essai.innerHTML ="";
    phrase2.innerHTML ="";
    phraseTentative.innerHTML="";
    affichage.innerHTML = "Vous devez trouver un nombre compris entre 0 et " + valeur;
}
function Determiner() {
    chiffreJoueur.removeEventListener('click',Determiner);
    chiffreJoueur.addEventListener('click',Warning3);
    valeur = parseInt(window.prompt('Mettez un chiffre qui sera la valeur maximale que ce que vous voulez chercher ( valeur maximale : 1000000 )'))
    while(isNaN(valeur) || valeur > 1000000) {
        valeur = parseInt(window.prompt('Mettez un chiffre qui sera la valeur maximale que ce que vous voulez chercher ( valeur maximale : 1000000 )'))
    }
    random = Math.floor(Math.random()*valeur);
    input.setAttribute('max',valeur);
    affichage.innerHTML = "Vous devez trouver un nombre compris entre 0 et " + valeur;
}




affichage.innerHTML = "Vous devez trouver un nombre compris entre 0 et " + valeur;





window.addEventListener('DOMContentLoaded',function() {
    difficulte.addEventListener('click',submitDifficile) ;
    reset.addEventListener('click',Reset);
    chiffreJoueur.addEventListener('click',Determiner);
});
