import './App.css';
import Header from './Components/Header/Header';
import Grid from './Components/Main/Grid/Grid';
import Home from './Components/Main/Home/Home';
import Realeases from './Components/Main/Releases/Realeases';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Grid />
      <Realeases />
    </div>
  );
}

export default App;
