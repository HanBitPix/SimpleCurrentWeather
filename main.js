'use strict';

const zipCode = prompt('Please enter you Zip Code');

$.ajax({
  dataType: 'json',
  type: 'GET',
  url: 'http:/api.openweathermap.org/data/2.5/weather',
  data:{
    zip: zipCode,
    APPID: '9bda6980a1b47b512f48ca5b96c2d32e',
    units: 'imperial'
  },
  success: function(response) {

    $('h5').text(`Today at ${response.name}`);

    // Weather Report
    const weatherIcon = response.weather[0].icon;
    console.log(weatherIcon);
    $('.card-img-top').attr('src',`http://openweathermap.org/img/w/${weatherIcon}.png`);

    // Forecast
    const weatherDescription = response.weather[0].description;
    $('.forecast').text(`Forecast: ${weatherDescription}`);

    // Temperature
    const temperature = response.main.temp;
    $('.temp').text(`Temperature: ${temperature.toFixed(0)} F`);

    // Wind Speed
    const wind = response.wind.speed;
    $('.wind').text(`Wind Speed: ${wind} mph`);

    // Humidity
    const humidity = response.main.humidity;
    $('.humid').text(`Humidity: ${humidity}%`);
  }
});