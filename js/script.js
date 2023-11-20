// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
// - per i multipli di 3 stampi “Fizz” al posto del numero
// - per i multipli di 5 stampi “Buzz” al posto del numero
// - per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
const wrapperElement = document.querySelector ('div.wrapper');
let cardElement;

for (let i = 1; i <= 100; i++) {
    cardElement = document.createElement('div');
    cardElement.className = 'card';
    wrapperElement.appendChild (cardElement);
    if (i % 3 === 0 && i % 5 === 0) {
        cardElement.innerHTML = 'FizzBuzz';
        cardElement.className += ' bg-red'
    } else if (i % 5 === 0) {
        cardElement.innerHTML = 'Buzz';
        cardElement.className += ' bg-yellow'
    } else if (i % 3 === 0) {
        cardElement.innerHTML = 'Fizz';
        cardElement.className += ' bg-green'
    } else {
        cardElement.innerHTML = i;
    } 
}