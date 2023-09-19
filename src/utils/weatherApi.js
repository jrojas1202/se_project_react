const latitude = 10.99;
const longitude = 44.34;
const APIkey = `0a4530af402b94f1b5f9b35269fbad5d`;
export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return weatherApi;
};
export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  const weather = {
    temperature: {
      F: `${Math.round(temperature)}`,
    },
  };
  return weather;
};
export const parseLocationData = (data) => {
  const locationName = data.name;
  return locationName;
};
