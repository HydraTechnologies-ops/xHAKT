// src/pages/home.js

const Home = (element) => {
  element.innerHTML = `
    <div class="welcome-container">
      <h1>Welcome to xHAKT</h1>
      <p>Explore our platform to learn more about phytoplankton, engage in DAO activities, and manage your data efficiently.</p>
      
      <div class="cta-buttons">
        <button id="learn-more">Learn More</button>
        <button id="get-started">Get Started</button>
      </div>
      
      <section class="about-section">
        <h2>About xHAKT</h2>
        <p>xHAKT is a cutting-edge platform dedicated to advancing the study and management of phytoplankton, crucial to our planet's health. Our platform leverages blockchain technology to provide decentralized governance through DAOs, ensuring that our community has a voice in the platform's future.</p>
      </section>
      
      <section class="features-section">
        <h2>Platform Features</h2>
        <div class="features">
          <div class="feature">
            <h3>Comprehensive Data</h3>
            <p>Access detailed data and insights on phytoplankton and carbon sequestration. Our platform offers a rich database of phytoplankton information, helping researchers and enthusiasts alike.</p>
          </div>
          <div class="feature">
            <h3>Engage in DAO</h3>
            <p>Participate in decentralized decision-making and governance. Our DAO feature allows you to propose, vote, and fund projects, ensuring a collaborative and transparent environment.</p>
          </div>
          <div class="feature">
            <h3>Easy File Upload</h3>
            <p>Effortlessly upload and manage your data files. Our user-friendly interface makes it simple to keep your data organized and accessible.</p>
          </div>
          <div class="feature">
            <h3>Interactive Slideshow</h3>
            <p>Explore global phytoplankton distributions with our interactive slideshow, featuring stunning satellite images and detailed data.</p>
          </div>
        </div>
      </section>
      
      <section class="testimonials-section">
        <h2>What Our Users Say</h2>
        <div class="testimonials">
          <blockquote>
            <p>"xHAKT has transformed the way we manage our marine data. Highly recommend!"</p>
            <footer>- Marine Biologist</footer>
          </blockquote>
          <blockquote>
            <p>"The DAO feature is fantastic. It's great to have a say in the platform's future."</p>
            <footer>- Environmental Scientist</footer>
          </blockquote>
        </div>
      </section>
      
      <footer class="footer">
        <nav class="footer-nav">
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </nav>
        <p>&copy; 2024 xHAKT</p>
      </footer>
    </div>
  `;
};


export { Home };
