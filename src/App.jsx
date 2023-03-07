import Content from './components/content';
import MobileNav from './components/mobileNav';
import MobileFooter from './components/mobileFooter';
import './App.css';

function App() {
  return (
    <div className="App">
      <MobileNav />
      <Content />
      <MobileFooter />
    </div>
  );
}

export default App;
