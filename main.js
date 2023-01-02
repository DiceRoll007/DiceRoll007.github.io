function rollDice(a, b){
    return Math.floor(Math.random() * (b - a + 1)) + a
}

function showNumber(){
    var diceNumber = document.getElementById("diceNumber").innerHTML=rollDice(1, 20)
    var takeModifier = document.getElementById("mod").value
    var sumMod = parseInt(takeModifier)+parseInt(diceNumber)
    document.getElementById("diceTotal").innerHTML="Total:"+sumMod
}

function changeDice(){
    var takeDice = document.getElementById("changeDice").value
    if (takeDice == "4"){
        document.getElementById("diceImg").src="images/d4.png"
        var diceNumber = document.getElementById("diceNumber").innerHTML=rollDice(1, 4)
        var takeModifier = document.getElementById("mod").value
        var sumMod = parseInt(takeModifier)+parseInt(diceNumber)
        document.getElementById("diceTotal").innerHTML="Total:"+sumMod
    }
    if (takeDice == "6"){
        document.getElementById("diceImg").src="images/d6.png"
        var diceNumber = document.getElementById("diceNumber").innerHTML=rollDice(1, 6)
        var takeModifier = document.getElementById("mod").value
        var sumMod = parseInt(takeModifier)+diceNumber
        document.getElementById("diceTotal").innerHTML="Total:"+sumMod
    }
    if (takeDice == "8"){
        document.getElementById("diceImg").src="images/d8.png"
        var diceNumber = document.getElementById("diceNumber").innerHTML=rollDice(1, 8)
        var takeModifier = document.getElementById("mod").value
        var sumMod = parseInt(takeModifier)+diceNumber
        document.getElementById("diceTotal").innerHTML="Total:"+sumMod
    }
    if (takeDice == "10"){
        document.getElementById("diceImg").src="images/d10.png"
        var diceNumber = document.getElementById("diceNumber").innerHTML=rollDice(1, 10)
        var takeModifier = document.getElementById("mod").value
        var sumMod = parseInt(takeModifier)+diceNumber
        document.getElementById("diceTotal").innerHTML="Total:"+sumMod
    }
    if (takeDice == "12"){
        document.getElementById("diceImg").src="images/d12.png"
        var diceNumber = document.getElementById("diceNumber").innerHTML=rollDice(1, 12)
        var takeModifier = document.getElementById("mod").value
        var sumMod = parseInt(takeModifier)+diceNumber
        document.getElementById("diceTotal").innerHTML="Total:"+sumMod
    }
    if (takeDice == "20"){
        document.getElementById("diceImg").src="images/d20.png"
    }
}

function dark(){
    var dark = document.body;
    dark.classList.toggle("dark")
    }
