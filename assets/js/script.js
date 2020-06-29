var weatherContainerEl = document.querySelector("#weather-container");
var weatherSearchTerm = document.querySelector("#weather-search-term");

var getCityInfo= function(cityResponse) {

var apiURL = "https://api.openweathermap.org/data/2.5/forecast?q="+ cityResponse + "&units=imperial&appid=00d04ffea22670d2825eac31941d3a6a";

fetch(apiURL)
.then(function(response) {
    if (response.ok) {
        response.json().then(function(data) {
            displayCity(data,cityResponse);
        });
    } else {
        alert("Error: " + response.statusText);
    }
})
.catch(function(error) {
    alert("Unable to connect to OpenWeatherMaps");
})
console.log(apiURL)
};

var cityFormEl = document.querySelector("#searchCity");

var cityInputEl = document.querySelector("#cityName");

var formSubmitHandler = function() {
    event.preventDefault();
    //var theCity = cityInputEl.nodeValue.trim();

    if (cityInputEl.value) {
        getCityInfo(cityInputEl.value);
        nameInputEl.value= "";
    } else {
        alert("Please enter a city name");
    }
    console.log(event)
}

var displayCity = function(city, searchTerm) {
    if(city.length ===0) {
        cityContainerEl.textContent = "No cities found.";
        return;
    }

    

weatherContainerEl.textContent = "";
weatherSearchTerm.textContent = searchTerm;
console.log(searchTerm);
}

var displayWeather = function(cityResponse, searchTerm) {
    console.log(cityResponse)
    console.log(searchTerm)
}



//for (var i=0; i< city.length; i++) {
    //var
//}

getCityInfo("Chicago");