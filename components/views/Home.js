const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

import html from "html-literal";

export default st => html`
  <section id="jumbotron">
    <h2>Click Below To See James McMinn's Planned Capstone</h2>
    <a href="https://github.com/jman114/CapStone">See My Capstone Plan!</a>
  </section>
  <h2>
    Weather in ${st.weather.city} ${kelvinToFahrenheit(st.weather.temp)}F, feels
    like ${kelvinToFahrenheit(st.weather.feelsLike)}F
  </h2>
`;
