import "./HomePage.scss";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="home-page">
      <section className="home-page__logo">
        <h1 className="home-page__logo-title">SEAM</h1>
        <h3 className="home-page__logo-subtitle">LESS</h3>
      </section>

      <p className="home-page__text">
        Test your AI knowledge! AI isn’t here to replace you—it’s here to help,
        from smart recommendations to automated assistants. Take this quiz to
        see how AI enhances daily life and unlocks new opportunities!
      </p>
      <Link to="/questions">
        <button className="home-page__button">Start</button>
      </Link>
    </section>
  );
}

export default HomePage;
