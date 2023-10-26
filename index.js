function toBinary()
{
    var decimal = document.getElementById("decimal").value;
    // function to check if it's a valid number
    var answer = "";
    decimal = parseInt(decimal);
    while(decimal > 0)
    {
        answer = (decimal % 2) + answer;
        decimal = Math.floor(decimal / 2);
    }
    document.getElementById("result").innerHTML = answer;
}