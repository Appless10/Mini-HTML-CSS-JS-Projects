let weightInput;
let weightOutput;
let weightOutputRound;

document.getElementById("mySubmit").onclick = function(){
    weightInput = document.getElementById("myText").value;
    weightOutput = (weightInput * 0.45359237);
    weightOutputRound = Math.round(weightOutput);
    document.getElementById("kg").innerHTML = weightOutputRound;
}