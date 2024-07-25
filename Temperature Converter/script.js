let tempInput;
let tempOutput;

document.getElementById("mySubmit").onclick = function(){
    tempInput = document.getElementById("myText").value;
    tempOutput = ((tempInput - 32) * (5/9));
    document.getElementById("celsius").innerHTML = tempOutput;
}