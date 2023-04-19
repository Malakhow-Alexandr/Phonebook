import { useState } from 'react';
import { toast } from 'react-toastify';
import styles from './WeatherApp.module.css';
import { motion, AnimatePresence } from 'framer-motion';

export const Weather = ({ onMount }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
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
          if (data.message === 'city not found') {
            toast.error(data.message);
          }
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
      <AnimatePresence>
        <motion.div
          className={styles.wrapper}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.4 }}
        >
          <div className={styles.wrapper_search}>
            <h2 className={styles.date}>{toDate()}</h2>
            <input
              placeholder="City"
              className={styles.input_field}
              autoFocus
              type="text"
              name="query"
              value={query}
              onChange={event => setQuery(event.target.value)}
              onKeyPress={search}
            />
          </div>
        </motion.div>
      </AnimatePresence>
      {weather.error ||
        (weather && weather.data && weather.data.main && (
          <AnimatePresence>
            <motion.div
              className={styles.wrapper__bg}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{
                duration: 0.3,
                type: 'just',
              }}
            >
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

                    <p className={styles.temp}>
                      {Math.round(weather.data.main.temp)}
                      <span> &deg;C </span>
                    </p>
                  </div>

                  <p className={styles.color}>
                    Wind Speed: {weather.data.wind.speed}m/s
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        ))}
    </div>
  );
};
