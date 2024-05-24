const isFilled = () => { //checks that all inputs are filled 
    var inputs = document.querySelectorAll('#tip-info input');
    console.log(inputs);
    for (const input of inputs)
      if (input.value == '') return false;
  
    return true;
}
  
function calc(){
    if (isFilled()){
        var curr = parseFloat(document.getElementById("curr-total").value);
        var per = parseFloat(document.getElementById("tip-per").value);
        var tip = curr * (per / 100.0);
        var newTotal = (Math.ceil(tip + curr)).toFixed(2); //rounds up to the nearest dollar
        var newTip = (newTotal - curr).toFixed(2);
        document.getElementById("new-tip").innerHTML = newTip;
        document.getElementById("new-total").innerHTML = newTotal;
    }
    else{
        alert("Fill the required fields with valid inputs"); //invalid input
    }
}

function reset(){
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
    document.getElementById("new-total").innerHTML = "0.00";
    document.getElementById("new-tip").innerHTML = "0.00";
}
