import React from 'react';
import { useDesign } from '../context/DesignContext';
import Home1 from './designs/Home1';
import Home2 from './designs/Home2';
import Home3 from './designs/Home3';

interface HomeProps {
  cityName?: string;
}

const Home: React.FC<HomeProps> = ({ cityName = "Mooresville" }) => {
  const { design } = useDesign();

  switch (design) {
    case 1:
      return <Home1 cityName={cityName} />;
    case 2:
      return <Home2 cityName={cityName} />;
    case 3:
      return <Home3 cityName={cityName} />;
    default:
      return <Home1 cityName={cityName} />;
  }
};

export default Home;

