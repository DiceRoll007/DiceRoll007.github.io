function rollDice(a, b){
    return Math.floor(Math.random() * (b - a + 1)) + a
}
function showNumber(){
    var diceNumber = document.getElementById("diceNumber").innerHTML=rollDice(1, 20)
    var takeModifier = document.getElementById("mod").value
    var sumMod = parseInt(takeModifier)+parseInt(diceNumber)
    document.getElementById("diceTotal").innerHTML="Total:"+sumMod
    var img = document.getElementById("diceImg");
    img.setAttribute("src", "images/d20.png")
}

function changeDice(){
    var takeDice = document.getElementById("changeDice").value
    if (takeDice == "4"){
        document.getElementById("diceImg").src="images/d4.png"
    }
    if (takeDice == "6"){
        document.getElementById("diceImg").src="images/d6.png"
    }
    if (takeDice == "8"){
        document.getElementById("diceImg").src="images/d8.png"
    }
    if (takeDice == "10"){
        document.getElementById("diceImg").src="images/d10.png"
    }
    if (takeDice == "12"){
        document.getElementById("diceImg").src="images/d12.png"
    }
    else {
        document.getElementById("diceImg").src="images/d20.png"
    }
}

function dark(){
    var dark = document.body;
    dark.classList.toggle("dark")
    }
