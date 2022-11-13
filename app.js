const h1 = document.querySelector('h1');
const divs = Array.from(document.querySelectorAll('.fair'));

console.log(divs);

addEventListener("click", function(e){
    if(e.target === divs[0]){
        h1.innerText = "STOP!";
        h1.style.color = "rgba(255,0,0)";
    }
    else if(e.target === divs[1]){
        h1.innerText = "SLOW DOWN!";
        h1.style.color = "rgb(255,255,0)";
    }
    else if(e.target === divs[2]){
        h1.innerText = "GO! GO! GO!";
        h1.style.color = "rgb(0,255,0)";
    }
    else {
        h1.innerText = "";
    }
})