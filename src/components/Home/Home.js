import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  useEffect(() => {
    history.push('/Minsk');
  }, []);

  return (
    <div>
      Home
    </div>
  );
};

export default Home;
