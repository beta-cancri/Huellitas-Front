// Home simple 
const Home = () => {
  return <h1>Welcome to the Animal Adoption App!</h1>;
};
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Detail from './views/detail/detail.component';
import About from './views/about/about.component';
import Contact from './views/contact/contact.component';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
