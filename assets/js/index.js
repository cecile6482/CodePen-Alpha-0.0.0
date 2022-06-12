// Pour les boutons B et I 

const b = document.getElementById("b")
const it = document.getElementById("it")

b.addEventListener('click', () => {
    text.value +="<strong></strong>";
});

it.addEventListener('click', () => {
    text.value +="<em></em>";
});

