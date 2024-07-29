let tempInput;
let tempOutput;
let tempOutputRound;

document.getElementById("mySubmit").onclick = function(){
    tempInput = document.getElementById("myText").value;
    tempOutput = ((tempInput - 32) * (5/9));
    tempOutputRound = Math.round(tempOutput);
    document.getElementById("celsius").innerHTML = tempOutputRound;
}