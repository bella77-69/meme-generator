import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import Meme from './components/Meme/Meme.jsx';
function App() {
  return (
    <div className="App">
     <Header />
     <Meme />
    </div>
  );
}

export default App;
