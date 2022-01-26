// 현위치 날씨 출력하기
const weather = document.getElementById("weather");
const temp = document.createElement("temp");
const image = document.createElement("image");

function get_location() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(show_position);
    }
}

const API_KEY = "144096429111014279552a6a65ebf2c5";

function show_position(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
    .then(function(resp) {
        return resp.json();
    })
    .then(function(json)  {
        temp.textContent = Math.floor(json.main.temp - 273.15) + "℃" ;
        weather.append(temp);
    })
    
}

get_location();