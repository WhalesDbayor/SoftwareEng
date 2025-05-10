import './App.css';
import ContentList from './ContentList';
import Create from './Create';
import Home from './Home';
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}>
            </Route>
            <Route path="/create" element={<Create />}> 
            </Route>
            <Route path="/content/:id" element={<ContentList />}> 
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
