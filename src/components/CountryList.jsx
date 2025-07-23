import Spinner from './Spinner';
import styles from './CountryList.module.css';
import CountryItem from "./CountryItem";
import Message from './Message';
import PropTypes from 'prop-types';



export default function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities || !cities.length)
    return (
    <Message message="Add your country and lets get started"/>
        );
  
  const countries = cities.reduce((arr, city) => {
        if(!arr.map((el) => el.country).includes(city.country))
            return [...arr, {country: city.country, emoji: city.emoji}]; 
        else return arr;
    }, []);
  

    
    CountryList.propTypes = {
      cities: PropTypes.arrayOf(
        PropTypes.shape({
          country: PropTypes.string.isRequired,
          emoji: PropTypes.string,
        })
      ).isRequired,
      isLoading: PropTypes.bool.isRequired,
    };

  
  return (
    <ul className={styles.countryList}>
     {countries.map((country) => (
  <CountryItem country={country} key={country.country} />       
))}
  </ul>
  );
}
