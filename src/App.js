import logo from './logo.svg';
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Error from './Pages/Error';
import Contact from './Pages/Contact';
import Hello from './Pages/Hello';
import UserInfo from './Page2/UserInfo';
import Users from './Page2/Users';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/contact" element = {<Contact />} />
        <Route path = "/blog" element = {<Blog />} />
        <Route path = "*" element = {<Error />} />
        <Route path = "/blog/contact" element = {<Hello />} />
      </Routes> */}
      
      <Routes>
        <Route path = "users" element = {<Users />} />
        <Route path = "users/:x" element = {<UserInfo />} />
      </Routes>
      
    </div>
  );
}

export default App;
