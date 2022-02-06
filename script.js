function checkdata()
//checking if input is higher than zero
{
    var principal = document.getElementById("principal");
    if  (principal.value<=0){
        alert("Enter a positive value");
        principal.focus();
        return false;
        
    }
    return true;
}

function updateRate()
// function to change the numbers on the slider
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}


function compute()
//Function to calculate interest
{
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseFloat(document.getElementById("years").value);
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit <mark>" +principal+ "</mark>,<br/>at an interest rate of<mark>"+rate+"%</mark></br>You will receive an amount of<mark>" +interest+"</mark>,</br>in the year<mark>"+year+"</mark></br>"
}

