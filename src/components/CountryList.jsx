import Spinner from './Spinner';
import styles from './CountryList.module.css';
import CountryItem from "./CountryItem";
import Message from './Message';
import { useCities } from '../contexts/CititesContext';



export default function CountryList() {
  const {cities, isLoading} = useCities();

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
  

   

  
  return (
    <ul className={styles.countryList}>
     {countries.map((country) => (
  <CountryItem country={country} key={country.country} />       
))}
  </ul>
  );
}
