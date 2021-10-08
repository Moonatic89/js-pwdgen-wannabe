// #region Variables Initialization

const user_firstName = prompt("Ciao! Qual è il tuo nome?");

const user_lastName = prompt("Ottimo! E il tuo cognome?");

const user_favColor = prompt("Benissimo! Qual è il tuo colore preferito?");

const psw_number = "21";

const psw_string = user_firstName + user_lastName + user_favColor + psw_number;

//#endregion

// console.log(psw_string);


document.getElementById("psw").innerHTML = psw_string;