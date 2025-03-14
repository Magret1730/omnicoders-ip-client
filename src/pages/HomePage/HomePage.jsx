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
        Knowledge is power, and understanding AI means unlocking new
        opportunities. AI isn’t here to replace you—it’s here to work with you,
        helping businesses grow, making daily tasks easier, and enhancing
        creativity. From smart recommendations to automated assistants, AI is
        already part of our world in ways you might not even realize. Take this
        quiz to discover how AI is seamlessly integrated into everyday life and
        how it can be a powerful tool, not a competitor.
      </p>
      <Link to="/questions">
        <button className="home-page__button">Start</button>
      </Link>
    </section>
  );
}

export default HomePage;
