import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppHeader from './components/header.js';
import AppHero from './components/hero.js';

function App() {
  return (
    <div className="App">
      <header id="header">
      
       <AppHeader/>
       <AppHero/>
      </header>
      <main>
      <AppHero/>
      </main>
    </div>
  );
}

export default App;
