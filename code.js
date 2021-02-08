const btn = document.querySelector(".icon");
const nav = document.querySelector(".navs");
const text = document.querySelector(".text");

btn.addEventListener("click", function(){
    nav.classList.toggle("active");
    btn.classList.toggle("active");
});


const txt = 'Hi! am Tunde, A technology education Graduate who loves to teach kids computing and digital making';

let index = 0;

function writeTxt(){

    text.innerText = txt.slice(0, index);
    index++;

    if(index > txt.length){
        index = 0;
    }
}

setInterval(writeTxt, 150)
