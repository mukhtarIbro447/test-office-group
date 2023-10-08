import './App.css';
import Header from './components/Header';
import MiddleContent from './components/MiddleContent';
import WhiteColorFactory from './components/WhiteColorFactory';

function App() {
  return (
    <div className="App">
      <Header />
      <MiddleContent />
      <WhiteColorFactory />
    </div>
  );
}

export default App;
