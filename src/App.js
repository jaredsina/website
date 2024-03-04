import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="row">
        <a href="" className="navbar-link">
          Jared Sinai Hernandez
        </a>
        <div>
          <a href="" className="navbar-link">
            Work
          </a>
          <a href="" className="navbar-link">
            About
          </a>
          <a href="" className="navbar-link">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default App;
