import { FC, useEffect } from 'react';
import useHomeServices from '../../services/home-services';
import './home.css';

const HomePage: FC = () => {
  const HomeServices = useHomeServices();

  useEffect(() => {
    //? Testing demo services
    HomeServices.testApiSuccess()
      .then((resp: any) => console.log(':::Success::: ', resp))
      .catch((error: any) => console.log(':::Error::: ', error));

    HomeServices.testApiError()
      .then((resp: any) => console.log(':::Success::: ', resp))
      .catch((error: any) => console.log(':::Error::: ', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">Welcome Child</header>
    </div>
  );
};

export default HomePage;
