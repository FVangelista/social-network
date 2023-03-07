import Content from './components/content';
import MobileNav from './components/mobileNav';
import MobileFooter from './components/mobileFooter';
import Menu from './components/menu';
import Trends from './components/trends';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <MobileNav />
      <Content />
      <MobileFooter />
      <Trends />
    </div>
  );
}

export default App;
