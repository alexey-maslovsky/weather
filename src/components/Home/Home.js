import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import styles from './Home.module.scss';

const Home = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);

  const redirectToCurrentLocation = async () => {
    const response = await fetch(process.env.REACT_APP_IP_DETECT_API_URL);

    const { city } = await response.json();

    setIsLoading(false);

    history.push(`/${city}`);
  };

  useEffect(() => {
    redirectToCurrentLocation();
  }, []);

  return (
    <div className={styles.container}>
      {isLoading && <Spinner />}
    </div>
  );
};

export default Home;
