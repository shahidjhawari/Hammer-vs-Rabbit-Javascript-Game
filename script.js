var cursor = document.querySelector(".cursor");
var holes = [...document.querySelectorAll(".hole")];
var scoreEl = document.querySelector(".score span");
var score = 0;
var sound = new Audio("material/smash.mp3");

function run(){
    const i = Math.floor(Math.random() * holes.length);
    let hole = holes[i];
    let timer = null;

    const img = document.createElement("img")
    img.classList.add("rabbit")
    img.src = 'material/rabiit.png'

    img.addEventListener("click", function(){
        sound.play();
        score += 10
        scoreEl.textContent = score;
        img.src = "material/smash-rabbit.png";
        clearTimeout(timer);
        setTimeout( () => {
            hole.removeChild(img);
            run();
        }, 500);
    })

    hole.appendChild(img)

    timer = setTimeout( () => {
        hole.removeChild(img);
        run();
    }, 1500);
}

run();

window.addEventListener("mousemove", function(e){
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
})

window.addEventListener("mousedown", function(){
    cursor.classList.add("active");
})

window.addEventListener("mouseup", function(){
    cursor.classList.remove("active");
})


