<template>
    <section class="hero">
      <nav class="navbar">
        <div class="logo">👋</div>
        <ul>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Testimonials</li>
          <li>Blog</li>
          <li><button class="connect-btn">Connect</button></li>
        </ul>
      </nav>
  
      <div class="hero-content">
        <div class="text">
          <p class="location">📍 Nairobi, KE</p>
          <h1>
            I Build Custom <span class="blue">Website Solutions</span><br />
            That Help Your <span class="blue">Business Grow</span>
          </h1>
          <p class="description">
            I help you increase conversion and performance in every possible way.
          </p>
          <div class="buttons">
            <button class="btn dark">See my work</button>
            <button class="btn light">Start a project</button>
          </div>
        </div>
        <div class="photo">
          <img src="/prof.jpeg" alt="Profile photo" />
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .hero {
    padding: 2rem;
    font-family: sans-serif;
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navbar ul {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    padding: 0;
  }
  .connect-btn {
    background-color: #0d0c22;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    border: none;
  }
  .hero-content {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
    align-items: center;
    justify-content: space-between;
  }
  .text {
    max-width: 500px;
  }
  .location {
    color: #888;
    font-size: 0.9rem;
  }
  h1 {
    font-size: 2.5rem;
    line-height: 1.3;
  }
  .blue {
    color: #2294ed;
  }
  .description {
    margin-top: 1rem;
    color: #555;
  }
  .buttons {
    margin-top: 1.5rem;
    display: flex;
    gap: 1rem;
  }
  .btn {
    padding: 0.75rem 1.25rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
  .btn.dark {
    background-color: #0d0c22;
    color: white;
  }
  .btn.light {
    background-color: #2294ed;
    color: white;
  }
  .photo img {
    width: 250px;
    border-radius: 50%;
  }
  </style>
  