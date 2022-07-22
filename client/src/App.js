import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import './App.css';
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import Post from "./pages/Post";

function App() {

  return (
    <div className="App">
       <Router>
        <div className="navbar">
          <Link to="/createpost"> Create A Post</Link>
          <Link to="/"> Home Page</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost/>} />
          <Route path="/post/:id" element={<Post/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
