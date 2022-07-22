import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import './App.css';
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";

function App() {

  return (
    <div className="App">
       <Router>
        <Link to="/createpost"> Create A Post</Link>
        <Link to="/"> Home Page</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
