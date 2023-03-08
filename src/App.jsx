import Content from './components/content';

import Menu from './components/menu';
import Trends from './components/trends';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />

      <Content />

      <Trends />
    </div>
  );
}

export default App;
