// import logo from './logo.svg';
import logo from './bxs-mouse-alt.svg';
import './App.css';
import Content from './Content';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Click Counter App</h1>
      <Content />
    </div>
  );
}

export default App;
