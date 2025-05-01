import './App.css';
import profileImg from './assets/pic.jpeg'; // Save the image as 'profile.jpg' in /src/assets

function App() {
  return (
    <div className="App">
      <header className="hero-section">
        <nav className="nav">
          <div className="logo">👋</div>
          <ul>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
            <li>Blog</li>
            <li><button className="connect-btn">Connect</button></li>
          </ul>
        </nav>
        <div className="hero-content">
          <div className="text-content">
            <p className="location">Toronto, ON</p>
            <h1>
              I Build <span>Custom Website Solutions</span><br />
              That Help Your <span>Business Grow</span>
            </h1>
            <p>I help you increase conversion and performance in every possible way.</p>
            <div className="buttons">
              <button className="btn-dark">See my work</button>
              <button className="btn-light">Start a project</button>
            </div>
          </div>
          <div className="image-content">
            <img src={profileImg} alt="Profile" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

