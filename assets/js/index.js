// Pour les boutons B et I 

const b = document.getElementById("b");
const it = document.getElementById("it");

b.addEventListener('click', () => {
    text.value +="<strong></strong>";
});

it.addEventListener('click', () => {
    text.value +="<em></em>";
});

// Pour le compteur 

const text = document.getElementById("text");
const max = 200; 
const bar = document.getElementById("progressBar"); 
const irl = document.getElementById("irl");

text.onkeyup = text.onkeydown = function(){
    document.getElementById("irl").innerHTML = this.value;

    let counting = text.value.length; 
    let count = max-irl.textContent.length;
    document.getElementById("compter").innerHTML = count; 
        if (count == 0) {
            text.setAttribute('maxlength', counting)
        } else {
            text.setAttribute('maxlength', '')
        }

        const percent = 100*irl.textContent.length/max;
        bar.style.setProperty('width', percent+'%');

            if (percent >= 0 && percent < 50) {
                bar.style.backgroundColor = "Green"; 
            }
            if (percent >= 50 && percent < 80) {
                bar.style.backgroundColor = "Orange"; 
            }
            if (percent >= 80 && percent < 100) {
                bar.style.backgroundColor = "Red"; 
            }

}
