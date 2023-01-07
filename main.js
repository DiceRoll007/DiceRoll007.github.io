function rollDice(a, b){
    return Math.floor(Math.random() * (b - a + 1)) + a
}

let diceValue = 20
function changeValue(){
    if (diceValue == 4){
        diceNumber = document.getElementById("diceNumber").innerHTML=rollDice(1, 4)
        takeModifier = document.getElementById("mod").value
        sumMod = parseInt(takeModifier)+parseInt(diceNumber)
        document.getElementById("diceTotal").innerHTML="Total:"+sumMod
    }
    else if (diceValue == 6){
        diceNumber = document.getElementById("diceNumber").innerHTML=rollDice(1, 6)
        takeModifier = document.getElementById("mod").value
        sumMod = parseInt(takeModifier)+diceNumber
        document.getElementById("diceTotal").innerHTML="Total:"+sumMod
    }
    else if (diceValue == 8){
        diceNumber = document.getElementById("diceNumber").innerHTML=rollDice(1, 8)
        takeModifier = document.getElementById("mod").value
        sumMod = parseInt(takeModifier)+diceNumber
        document.getElementById("diceTotal").innerHTML="Total:"+sumMod
    }
    else if (diceValue == 10){
        diceNumber = document.getElementById("diceNumber").innerHTML=rollDice(1, 10)
        takeModifier = document.getElementById("mod").value
        sumMod = parseInt(takeModifier)+diceNumber
        document.getElementById("diceTotal").innerHTML="Total:"+sumMod
    }
    else if (diceValue == 12){
        diceNumber = document.getElementById("diceNumber").innerHTML=rollDice(1, 12)
        takeModifier = document.getElementById("mod").value
        sumMod = parseInt(takeModifier)+diceNumber
        document.getElementById("diceTotal").innerHTML="Total:"+sumMod
    }
    else if (diceValue == 20){
        diceNumber = document.getElementById("diceNumber").innerHTML=rollDice(1, 20)
        takeModifier = document.getElementById("mod").value
        sumMod = parseInt(takeModifier)+parseInt(diceNumber)
        document.getElementById("diceTotal").innerHTML="Total:"+sumMod
    }
}

function d4roll(){
    document.getElementById("diceImg").src="images/d4.png"
    diceValue = 4
}
function d6roll(){
    document.getElementById("diceImg").src="images/d6.png"
    diceValue = 6  
}
function d8roll(){
    document.getElementById("diceImg").src="images/d8.png"
    diceValue = 8
}
function d10roll(){
    document.getElementById("diceImg").src="images/d10.png"
    diceValue = 10
}
function d12roll(){
    document.getElementById("diceImg").src="images/d12.png"
    diceValue = 12
}
function d20roll(){
    document.getElementById("diceImg").src="images/d20.png"
    diceValue = 20
}

function dark(){
    var dark = document.body;
    dark.classList.toggle("dark")
    }

function animation(){
    var takeDice = document.querySelector("#dice");
    takeDice.classList.add("diceAnimation")
}

function removeAnimation(){
    var takeDice = document.querySelector("#dice");
    takeDice.classList.remove("diceAnimation")
}
function removeDice(){
    var takeDice = document.querySelector("#dice");
    takeDice.classList.replace("diceAnimation","diceRemove")
}
function addDice(){
    var takeDice = document.querySelector("#dice");
    takeDice.classList.replace("diceRemove","diceAnimation")
}