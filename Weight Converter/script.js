let weightInput;
let weightOutput;

document.getElementById("mySubmit").onclick = function(){
    weightInput = document.getElementById("myText").value;
    weightOutput = (weightInput * 0.45359237);
    document.getElementById("kg").innerHTML = weightOutput;
}