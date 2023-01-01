function rollDice(a, b){
    return Math.floor(Math.random() * (b - a + 1)) + a
}
function showNumber(){
    var diceNumber = document.getElementById("diceNumber").innerHTML=rollDice(1, 20)
    var takeModifier = document.getElementById("mod").value
    var sumMod = parseInt(takeModifier)+parseInt(diceNumber)
    document.getElementById("diceTotal").innerHTML="Total:"+sumMod
}
function dark(){
    var dark = document.body;
    dark.classList.toggle("dark")
    }
