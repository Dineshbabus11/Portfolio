import './App.css';
import { About } from './components/about/About';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Skill } from './components/skill/Skill';

function App() {
  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Skill/>
    </>
  );
}

export default App;

