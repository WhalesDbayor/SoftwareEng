import logo from './logo.png';
import './App.css';
import Header from './Header';


function App() {
  const logoUrl = logo;
  return (
    <div className="App">
      <Header name="World" logo={ logoUrl } />
    </div>
  );
}

export default App;
