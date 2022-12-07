import html from "html-literal";

export default state => html`
  <section id="jumbotron">
    <h2>SavvyCoders JavaScript Fullstack Bootcamp</h2>
    <a href="index.html"
      >"Call to Action" "Button"
      <p>${state.weather.city}</p>
      <p>${state.weather.temp} degrees</p></a
    >
  </section>
`;
