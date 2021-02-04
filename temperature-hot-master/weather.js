const inputField = document.getElementById('inputTag');
const cityName = document.getElementById('cityName');
const temp = document.getElementById('temparature');
const sky = document.getElementById('sky');
const windSpeed = document.getElementById('windSpeed');

function tempTeller() {
    if(inputField.value == ''){

        document.getElementById('error').style.display = 'block';

    }
    
    else{
        fetch('http://api.openweathermap.org/data/2.5/weather?q=' + inputField.value + '&appid=0db36ee4db64433905185f23dd12fa5f')
        .then(got => got.json())
        .then(data => {

            cityName.innerText = data.name;
            temp.innerText = data.main.temp;
            sky.innerText = data.weather[0].main;
            windSpeed.innerText = data.wind.speed;
            document.getElementById('error').style.display = 'none';

        })
    }
}
