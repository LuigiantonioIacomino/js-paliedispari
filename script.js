function verifyWordPalindrome() {
let parola=prompt('Inserisci una parola: ');
let array_lettere=parola.split("");
let array_invertito=array_lettere.reverse();
let array_unito=array_invertito.join("");
if(parola==array_unito) {
    console.log("la parola è palindroma");
} else {
    console.log("no");
}
}




function generateRandomNumber() {
    let randomNumber=Math.floor(Math.random() * (6 - 1) + 1);
    return randomNumber;
}

function SommaPariOdispari(number1,number2,choice) {
 let somma=number1+number2;
  if(choice=="pari") {
    if(somma%2==0) {
        console.log("io ho vinto");
    }
    else {
        console.log("io ho perso");
    }
  }
  else {
    if(somma%2==0) {
        console.log("io ho perso");
    }
    else{
        console.log("io ho vinto");
    }
  }

}

let sceltaOddOrEven=prompt("Scegli pari o dispari:");
let numero=prompt('Inserisci un numero da 1 a 5');


let x=generateRandomNumber();

SommaPariOdispari(x,numero,sceltaOddOrEven);







