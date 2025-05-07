import './App.css';
import Home from './Home';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <h1>Welcome to the Loader App</h1>
        <Home />
      </div>
    </div>
  );
}

export default App;
