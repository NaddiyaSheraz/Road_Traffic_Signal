
function check(){
    var traffic_Signal = document.getElementById('user-input').value;
    var output =  document.getElementById('result');
    

    if (traffic_Signal === ""){
        output.innerHTML = "Enter the color of traffic signal ";
    }else if (traffic_Signal.toLowerCase() == "red"){
        output.innerHTML = "Must Stop"; 
    }
     else if (traffic_Signal.toLowerCase() == "yellow"){
        output.innerHTML = "Ready to move ";
    }
    else if (traffic_Signal.toLowerCase() == "green"){
        output.innerHTML = "Move now ";
    }
    else {
        output.innerHTML = "Invalid input. Please enter red, yellow, or green."
    }
}