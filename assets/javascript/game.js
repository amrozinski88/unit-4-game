// random number between 19-120
// crystals 1-12
var wins = 0;
var losses = 0;
var currentNum = 0;
var goalNum = 0;
var crystalValues = [];

goalNum = getRandomNumber(101)+19;

function reset() {
    currentNum = 0;
    crystalValues = [];
    crystalAssigner(); 
    goalNum = getRandomNumber(101)+19
    $("#goalNumber").text(goalNum);


}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function crystalAssigner() {
    for (var i = 0; i < 4; i++) {
        var crystalValue = getRandomNumber(11) + 1;
        while (crystalValues.includes(crystalValue)) {
            crystalValue = getRandomNumber(11) + 1;
        }
        crystalValues.push(crystalValue);

    }
}
function winOrLose (){
    if (currentNum === goalNum){
        alert("you win!");
        wins+=1;
        $("#wins").text(wins);
        reset();
    }
    else if (currentNum > goalNum){
        alert("You Lose!");
        losses+=1;
        $("#losses").text(losses)
        reset();
    }

    
}
$("#gem1").on("click",function(){
    currentNum = currentNum + crystalValues[0];
    $("#currentNumber").text(currentNum);
    winOrLose();
    
})
$("#gem2").on("click",function(){
    currentNum = currentNum + crystalValues[1];
    $("#currentNumber").text(currentNum);
    winOrLose();

})
$("#gem3").on("click",function(){
    currentNum = currentNum + crystalValues[2];
    $("#currentNumber").text(currentNum);
    winOrLose();

})
$("#gem4").on("click",function(){
    currentNum = currentNum + crystalValues[3];
    $("#currentNumber").text(currentNum);
    winOrLose();

})




reset();



