import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import './App.css';
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Post from "./pages/Post";
import Registration from "./pages/Registration";


function App() {

  return (
    <div className="App">
       <Router>
        <div className="navbar">
          <Link to="/createpost"> Create A Post</Link>
          <Link to="/"> Home Page</Link>
          <Link to="/login"> Login</Link>
          <Link to="/registration"> Registration</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost/>} />
          <Route path="/post/:id" element={<Post/>} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
