import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({
  weatherTemp,
  onSelectCard,
  clothingItems,
  type,
  day,
  onCardLike,
  isLoggedIn,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;

  const weatherType = useMemo(() => {
    if (currentTemperatureUnit === "C") {
      if (temp >= 30) {
        return "hot";
      } else if (temp >= 18 && temp < 30) {
        return "warm";
      } else {
        return "cold";
      }
    } else if (currentTemperatureUnit === "F") {
      if (temp >= 86) {
        return "hot";
      } else if (temp >= 64 && temp < 86) {
        return "warm";
      } else {
        return "cold";
      }
    }
  }, [weatherTemp, currentTemperatureUnit]);
  const filteredCards = clothingItems?.filter((item) => {
    return item.weather?.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={day} type={type} weatherTemp={temp} />

      <section className="cards">
        <div className="card__header">
          Today is {temp}°{currentTemperatureUnit} / You may want to wear:
        </div>

        <ul className="card__list">
          {filteredCards?.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onSelectCard={onSelectCard}
              onCardLike={onCardLike}
              isLoggedIn={isLoggedIn}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
