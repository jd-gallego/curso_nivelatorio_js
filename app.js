let title = document.getElementById("main_title");
let btn = document.getElementById("button_enviar");
btn.addEventListener("click", function(){
    let currentTitle = title.textContent;
    if (currentTitle === currentTitle.toUpperCase()) {

        title.textContent = currentTitle.toLowerCase();

    } else {

        title.textContent = currentTitle.toUpperCase();

    }
});