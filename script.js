const apiKey = '1786a0be46e157e4c3f8cad26abd5cf4';
const Url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchInput = document.querySelector('.search-input');
const button = document.querySelector('.search-btn');
const image=document.querySelector('.image img');
async function search(city) {
    const response = await fetch(Url + city + `&appid=${apiKey}`);
     if (response.status !== 200) {
        document.querySelector('.error').style.display='block'
        document.querySelector('.details').style.display='none'
       
    }
    else{
       const data = await response.json();
    console.log(data)

   
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.percentage').innerHTML = data.main.humidity + '%'
    document.querySelector('.speed').innerHTML = data.wind.speed + 'Km/h';
    document.querySelector('.country').innerHTML = data.name;
   
  if(data.weather[0].main=='Clouds'){
    image.src='images/clouds.png';
  }
  else if(data.weather[0].main=='Clear'){
    image.src='images/clear.png';
  }
   else if(data.weather[0].main=='Drizzle'){
    image.src='images/drizzle.png';
  }
   else if(data.weather[0].main=='Mist'){
    image.src='images/mist.png';
  }
   else if(data.weather[0].main=='Rain'){
    image.src='images/rain.png';
  }
   else {
        // fallback if no match
        image.src = './images/default.png';
    }
     document.querySelector('.error').style.display='none'
     document.querySelector('.details').style.display='block'
    }
   
}

button.addEventListener('click', () => {
    search(searchInput.value);
})