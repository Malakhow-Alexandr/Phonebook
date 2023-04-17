import { useState } from 'react';
import { ReactComponent as Forecast } from '../../images/forecast.svg';
import styles from './WeatherApp.module.css';

import TextField from '@mui/material/TextField';

export const Weather = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({
    data: {},
    error: false,
  });

  const toDate = () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const currentDate = new Date();
    const date = `${days[currentDate.getDay()]}, ${currentDate.getDate()} ${
      months[currentDate.getMonth()]
    }`;
    return date;
  };

  const search = async event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setQuery('');
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=f00c38e0279b7bc85480c3fe775d518c`
      )
        .then(resp => resp.json())
        .then(data => {
          setWeather({ data: data, error: false });
        })
        .catch(error => {
          setWeather({ data: {}, error: true });
          setQuery('');
          console.log(error.message);
        });
    }
  };

  return (
    <div className={styles.forecast}>
      <div className={styles.wrapper}>
        <div>
          <Forecast className={styles.weather} />
        </div>
        <div className={styles.wrapper_search}>
          <h2 className={styles.date}>{toDate()}</h2>
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            autoFocus
            type="text"
            name="query"
            value={query}
            onChange={event => setQuery(event.target.value)}
            onKeyPress={search}
          />
        </div>
      </div>
      {weather.error ||
        (weather && weather.data && weather.data.main && (
          <div className={styles.wrapper__bg}>
            {weather.error && (
              <span style={{ fontSize: '26px' }}> Sorry, City not found</span>
            )}

            {weather && weather.data && weather.data.main && (
              <div>
                <h2 className={styles.city}>
                  {weather.data.name}, <span>{weather.data.sys.country}</span>{' '}
                </h2>
                <div className={styles.wrap_icon}>
                  <img
                    className={styles.weather_icon}
                    src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
                    alt={weather.data.weather[0].description}
                  />

                  <h2 className={styles.temp}>
                    {Math.round(weather.data.main.temp)}
                    <span> &deg;C </span>
                  </h2>
                </div>

                <p className={styles.color}>
                  {weather.data.weather[0].description.toUpperCase()}
                </p>
                <p className={styles.color}>
                  Wind Speed: {weather.data.wind.speed}m/s
                </p>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};
