var leftBall = document.getElementById("left-ball")
var rightBall = document.getElementById("right-ball")

var started = document.getElementById("started")
var win = document.getElementById("win")
var lose = document.getElementById("lose")
var draw = document.getElementById("draw")

var leftR = document.getElementById("left-r")
var leftS = document.getElementById("left-s")
var leftP = document.getElementById("left-p")
var rightR = document.getElementById("right-r")
var rightS = document.getElementById("right-s")
var rightP = document.getElementById("right-p")

var tosh = document.getElementById("tosh")
var qogoz = document.getElementById("qogoz")
var qaychi = document.getElementById("qaychi")

var intro = document.getElementById("intro")
var startGame = document.getElementById("start-game")
var results = document.getElementById("results")
var chois = document.getElementById("chois")

results.style.display = "none"
chois.style.display = "none"


startGame.addEventListener("click" , ()=> {
    intro.style.display = "none"
    results.style.display = "block"
    chois.style.display = "block"
})

tosh.addEventListener("click", () => {
    leftS.style.display = "none"
    leftP.style.display = "none"
    leftR.style.display = "block"

    var random = Math.round(Math.random() * 2 + 1)
    
    started.style.display = "none"
    win.style.display = "none"
    lose.style.display = "none"
    draw.style.display = "none"
    

    if (random == 1) {
        rightP.style.display = "none"
        rightS.style.display = "none"
        rightR.style.display = "block"

        draw.style.display = "block"
    } else if (random == 2) {
        rightS.style.display = "none"
        rightR.style.display = "none"
        rightP.style.display = "block"

        lose.style.display = "block"

        rightBall.textContent ++
    } else if (random == 3) {
        rightR.style.display = "none"
        rightP.style.display = "none"
        rightS.style.display = "block"

        win.style.display = "block"

        leftBall.textContent ++
    }



})

qogoz.addEventListener("click", () => {
    leftS.style.display = "none"
    leftR.style.display = "none"
    leftP.style.display = "block"

    var random = Math.round(Math.random() * 2 + 1)

    started.style.display = "none"
    win.style.display = "none"
    lose.style.display = "none"
    draw.style.display = "none"

    if (random == 1) {
        rightR.style.display = "block"
        rightP.style.display = "none"
        rightS.style.display = "none"

        win.style.display = "block"

        leftBall.textContent ++
    } else if (random == 2) {
        rightR.style.display = "none"
        rightP.style.display = "block"
        rightS.style.display = "none"

        draw.style.display = "block"
    } else if (random == 3) {
        rightR.style.display = "none"
        rightP.style.display = "none"
        rightS.style.display = "block"

        lose.style.display = "block"

        rightBall.textContent ++
    }
})

qaychi.addEventListener("click", () => {
    leftP.style.display = "none"
    leftR.style.display = "none"
    leftS.style.display = "block"

    var random = Math.round(Math.random() * 2 + 1)

    started.style.display = "none"
    win.style.display = "none"
    lose.style.display = "none"
    draw.style.display = "none"

    if (random == 1) {
        rightP.style.display = "none"
        rightS.style.display = "none"
        rightR.style.display = "block"

        lose.style.display = "block"

        rightBall.textContent ++
    } else if (random == 2) {
        rightS.style.display = "none"
        rightR.style.display = "none"
        rightP.style.display = "block"

        win.style.display = "block"

        leftBall.textContent ++
    } else if (random == 3) {
        rightR.style.display = "none"
        rightP.style.display = "none"
        rightS.style.display = "block"

        draw.style.display = "block"
    }
})







