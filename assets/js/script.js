var weatherInfo = function(){
    fetch("api.openweathermap.org/data/2.5/forecast?id="+ theCity +"&appid=00d04ffea22670d2825eac31941d3a6a")
    console.log("function is called");
}

var theCity = function(){
    localStorage.setItem(theCity);
    document.getElementById("#theCity").innerHTML = localStorage.getItem(theCity);
}


weatherInfo();