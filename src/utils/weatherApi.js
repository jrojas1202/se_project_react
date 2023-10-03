import { request } from "./api";

const latitude = 10.99;
const longitude = 44.34;
const APIkey = `0a4530af402b94f1b5f9b35269fbad5d`;
export const getWeatherApi = () => {
  const weatherApi = request(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  );
  return weatherApi;
};
export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  const weather = {
    temperature: {
      F: Math.round(temperature),
      C: Math.round(((temperature - 32) * 5) / 9),
    },
  };
  console.log(weather);
  return weather;
};

export const parseLocationData = (data) => {
  const userLocation = data.name;
  return userLocation;
};

export const parseForcastData = (data) => {
  const weather = data.weather;
  const forcast = weather && weather[0].main.toLowerCase();
  return forcast;
};

export const parseTimeOfDay = (data) => {
  const currentTime = Date.now();
  const timeOfDay = data.sys;
  const sunrise = timeOfDay.sunrise;
  const sunset = timeOfDay.sunset;

  if (currentTime > sunrise && currentTime < sunset) {
    return true;
  } else {
    return false;
  }
};
