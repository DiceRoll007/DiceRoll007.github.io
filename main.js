function rollDice(a, b){
    return Math.floor(Math.random() * (b - a + 1)) + a
}

function showNumber(){
    document.getElementById("diceTotal").innerHTML="Total:"+ sumMod
}

function d4roll(){
    document.getElementById("diceImg").src="images/d4.png"
    let diceNumber = document.getElementById("diceNumber").innerHTML=rollDice(1, 4)
    let takeModifier = document.getElementById("mod").value
    let sumMod = parseInt(takeModifier)+parseInt(diceNumber)
    document.getElementById("diceTotal").innerHTML="Total:"+sumMod
}
function d6roll(){
    document.getElementById("diceImg").src="images/d6.png"
    let diceNumber = document.getElementById("diceNumber").innerHTML=rollDice(1, 6)
    let takeModifier = document.getElementById("mod").value
    let sumMod = parseInt(takeModifier)+diceNumber
    document.getElementById("diceTotal").innerHTML="Total:"+sumMod
    
}
function d8roll(){
    document.getElementById("diceImg").src="images/d8.png"
    let diceNumber = document.getElementById("diceNumber").innerHTML=rollDice(1, 8)
    let takeModifier = document.getElementById("mod").value
    let sumMod = parseInt(takeModifier)+diceNumber
    document.getElementById("diceTotal").innerHTML="Total:"+sumMod

}
function d10roll(){
    document.getElementById("diceImg").src="images/d10.png"
    let diceNumber = document.getElementById("diceNumber").innerHTML=rollDice(1, 10)
    let takeModifier = document.getElementById("mod").value
    let sumMod = parseInt(takeModifier)+diceNumber
    document.getElementById("diceTotal").innerHTML="Total:"+sumMod
    
}
function d12roll(){
    var img = document.getElementById("diceImg");
    img.src = "images/d12.png"
    let diceNumber = document.getElementById("diceNumber").innerHTML=rollDice(1, 12)
    let takeModifier = document.getElementById("mod").value
    let sumMod = parseInt(takeModifier)+diceNumber
    document.getElementById("diceTotal").innerHTML="Total:"+sumMod
    
}
function d20roll(){
    document.getElementById("diceImg").src="images/d20.png"
    let diceNumber = document.getElementById("diceNumber").innerHTML=rollDice(1, 20)
    let takeModifier = document.getElementById("mod").value
    let sumMod = parseInt(takeModifier)+parseInt(diceNumber)
    document.getElementById("diceTotal").innerHTML="Total:"+sumMod
    
}

function dark(){
    var dark = document.body;
    dark.classList.toggle("dark")
    }

function animation(){
    debugger
    var active = document.querySelector("#dice");
    active.style="transform: perspective(100px) translateZ(30px) rotateX(360deg);transition: 1s ease-in-out ;transform-style: preserve-3d;;"
}
