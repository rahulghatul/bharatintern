function con() 

{
    const input = document.getElementById("input").value
    const data = document.getElementById("data").value
    
    console.log(input, data)
    
    if (data == "Cel") 
    {
        var f = input * (9 / 5) + 32;
        
        document.getElementById("result").innerHTML = `${f.toPrecision(2)} °F`
    }
    
    else 
    {
        var c = (input - 32) * 5 / 9
        document.getElementById("result").innerHTML = `${c.toPrecision(2)} °C`
    }
}