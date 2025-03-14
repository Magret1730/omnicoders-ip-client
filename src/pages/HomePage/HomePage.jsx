import "./HomePage.scss";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="home-page">
      <section className="home-page__logo">
        <h1 class="home-page__logo-title">QUIZ</h1>
        <h3 class="home-page__logo-subtitle">NAME</h3>
      </section>

      <p class="home-page__text">Sentence - AI knowledge test?</p>
      <Link to="/questions"><button class="home-page__button">Start</button></Link>
    </section>
  );
}

export default HomePage;
