// import logo from './logo.png';
// import './App.css';
// import Header from './Header';
import Navbar from './Navbar';
import Home from './Home';


function App() {
  // const logoUrl = logo;
  return (
    <div className="App">
      {/* <Header name="World" logo={ logoUrl } /> */}
      <Navbar />
      <div className="content">
        <Home />
      </div>
        
    </div>
  );
}

export default App;
