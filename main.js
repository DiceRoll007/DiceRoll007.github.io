function rollDice(a, b){
    return Math.floor(Math.random() * (b - a + 1)) + a
}
function showNumber(){
    document.getElementById("diceNumber").innerHTML=rollDice(1, 20)
}
