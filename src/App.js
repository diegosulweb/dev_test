import style from './App.module.scss';
import Home from './pages/Home';
import Hero from './components/Hero';
import PlanetInfo from './components/PlanetInfo/PlanetInfo';

const App = () => (
  <div className={style.main}>
    <Hero />
    <Home />
    <PlanetInfo />
  </div>
);

export default App;
