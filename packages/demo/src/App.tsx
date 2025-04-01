import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useTheme } from "./theme";
import { logPageView } from "page-view-logger";

function Home() {
  return (
    <div className="page-content">
      <h1>Home Page</h1>
      <p>Welcome to the Page View Logger Demo!</p>
      <p>Check the browser console to see the page view logs.</p>
    </div>
  );
}

function About() {
  return (
    <div className="page-content">
      <h1>About Page</h1>
      <p>
        This is the about page. Navigate between pages to see the logger in
        action.
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div className="page-content">
      <h1>Contact Page</h1>
      <p>Contact us at: example@example.com</p>
    </div>
  );
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? "🌙" : "☀️"} {theme === "light" ? "Dark" : "Light"}{" "}
      Mode
    </button>
  );
}

function App() {
  logPageView();
  return (
    <Router>
      <div className="container">
        <ThemeToggle />
        <h1>Page View Logger Demo</h1>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
