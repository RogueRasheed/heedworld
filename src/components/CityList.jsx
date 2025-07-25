import { useCities } from '../contexts/CititesContext';
import CityItem from './CityItem';
import styles from './CityList.module.css';
import Message from './Message';
import Spinner from './Spinner';

export default function CityList() {
  const {cities, isLoading} = useCities();

  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message message="Add your city and lets get started"/>
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

