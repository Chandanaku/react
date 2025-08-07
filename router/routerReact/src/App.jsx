import { Routes, Route, Link } from "react-router-dom";

// Placeholder components for demonstration
const HomePage = () => <h2>Home Page</h2>;
const AboutPage = () => <h2>About Page</h2>;
const ContactPage = () => <h2>Contact Page</h2>;
const NotFoundPage = () => <h2>404 - Page Not Found</h2>;
function App() {
  return (
    <>
      <div>
        <h1>Welcome</h1>
        <nav>
          {" "}
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />{" "}
          {/* Fallback for unmatched routes */}
        </Routes>
      </div>
    </>
  );
}

export default App;
