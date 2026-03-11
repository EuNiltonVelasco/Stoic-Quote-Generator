const quotes = [

"Você tem poder sobre sua mente, não sobre eventos externos. — Marco Aurélio",

"A felicidade da sua vida depende da qualidade dos seus pensamentos. — Marco Aurélio",

"Não explique sua filosofia. Incorpore-a. — Epicteto",

"A dificuldade mostra o que os homens são. — Epicteto",

"Não é o que acontece com você, mas como você reage. — Epicteto",

"A riqueza consiste não em ter grandes posses, mas em ter poucas necessidades. — Sêneca"

];

function newQuote(){

let random = Math.floor(Math.random()*quotes.length);

let fullQuote = quotes[random];

let parts = fullQuote.split("—");

let quoteText = parts[0];

let authorText = parts[1];

document.getElementById("quote").innerText = '"' + parts[0].trim() + '"';
document.getElementById("author").innerText = "("+ authorText + ")";

}