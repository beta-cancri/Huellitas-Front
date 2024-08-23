// Home simple 
const Home = () => {
  return <h1>Welcome to the Animal Adoption App!</h1>;
};
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Detail from './views/detail/detail.component';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
