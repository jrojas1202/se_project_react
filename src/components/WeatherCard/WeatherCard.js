import "./WeatherCard.css";
import "../App/App";
import { WeatherOptions } from "../../utils/constants";
import { useMemo, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const weatherOption = WeatherOptions.find((i) => {
    return i.day === day && i.weatherType === type;
  });
  const weatherOptionUrl = weatherOption?.link || "";
  return (
    <section className="weather" id="weather">
      <div className="weather__info">
        {weatherTemp} °{currentTemperatureUnit}
      </div>
      <div>
        <img
          src={weatherOptionUrl}
          className="weather__image"
          alt="weather image"
        />
      </div>
    </section>
  );
};
export default WeatherCard;
