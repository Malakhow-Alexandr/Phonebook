import { useEffect, useState } from 'react';
import { ReactComponent as Forecast } from '../images/forecast.svg';
import { useDispatch, useSelector } from 'react-redux';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactFilter } from 'components/ContactFilter/Filter';
import { Section } from 'components/Section/Section';
import { Container } from 'components/Container/Container.styled';
import { ThreeDots } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { fetchContacts } from 'redux/contacts/operation';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { Weather } from 'components/Weather/WeatherApp';

import { WeatherButton } from 'components/WeatherButton/WeatherButton.styled';

export default function Contacts() {
  const [weatherIsHidden, setWeatherIsHidden] = useState(true);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (error) {
    toast.error(`Sorry we have a ${error}, please reload page!`);
  }
  const toggleWeather = () => {
    setWeatherIsHidden(!weatherIsHidden);
  };

  return (
    <Container>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <ContactFilter />
        <ContactsList />
      </Section>
      <ThreeDots
        height="50"
        width="50"
        color="#e9eee8"
        ariaLabel="three-circles-rotating"
        visible={isLoading}
        wrapperStyle={{ position: 'absolute', top: 215, left: 175 }}
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
      <WeatherButton
        type="button"
        onClick={() => {
          toggleWeather();
        }}
      >
        {<Forecast width="50" height="40" />}
      </WeatherButton>
      {!weatherIsHidden && <Weather />}
    </Container>
  );
}
