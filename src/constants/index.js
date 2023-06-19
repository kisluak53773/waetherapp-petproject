import Sun from "../static/Sun";
import Murky from "../static/Murky";
import Rain from "../static/Rain";
import SmallRain from "../static/SmallRain";
import SmallRainAndSun from "../static/SmallRainAndSun";

export const REACT_API_KEY = "c35713a92c9e65f4fcced7daa379087f";
export const CITIES = {
  BY: [
    "Минск",
    "Брест",
    "Гомель",
    "Могилев",
    "Гродно",
    "Витебск",
    "Бобруйск",
    "Барановичи",
    "Борисов",
    "Пинск",
    "Орша",
    "Мозырь",
    "Лида",
    "Солигорск",
    "Новополоцк",
  ],
  RU: [
    "Москва",
    "Абдулино",
    "Абинск",
    "Агидель",
    "Адыгейск",
    "Александровск-Сахалинский",
    "Бабаево",
    "Барыш",
  ],
};

export function weatherState(type) {
  switch (type) {
    case "дождь":
      return <Rain />;
    case "облачно с прояснениями":
      return <SmallRainAndSun />;
    case "небольшой дождь":
      return <SmallRain />;
    case "ясно":
      return <Sun />;
    case "пасмурно":
      return <Murky />;
    default:
      return <h1>Something went wrong</h1>;
  }
}

export const windDirection = (degrees) => {
  if (degrees > 0 && degrees <= 45) {
    return "северо-восток";
  }
  if (degrees > 45 && degrees <= 90) {
    return "восток";
  }
  if (degrees > 90 && degrees <= 135) {
    return "юго-восток";
  }
  if (degrees > 135 && degrees <= 180) {
    return "юг";
  }
  if (degrees > 180 && degrees <= 225) {
    return "юго-запад";
  }
  if (degrees > 225 && degrees <= 270) {
    return "запад";
  }
  if (degrees > 270 && degrees <= 315) {
    return "северо-запад";
  }
  return "север";
};
