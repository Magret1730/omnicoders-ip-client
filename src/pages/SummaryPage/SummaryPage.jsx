import { useLocation } from "react-router-dom";
import "./SummaryPage.scss";

function SummaryPage() {
  const location = useLocation();
  const { score, totalQuestions } = location.state || {}; // Retrieve score and total questions

  let message = "";
  if (score === totalQuestions) {
    message =
      "It looks like you already know quite a bit about how AI is shaping our everyday experiences!";
  } else if (score > totalQuestions / 2) {
    message =
      "Nice job! You’ve got a solid understanding of how AI impacts our lives.";
  } else {
    message =
      "No worries! AI is an exciting field, and understanding its role in our daily lives is an ongoing journey.";
  }
  return (
    <section className="summary">
      <section className="summary-page">
        <h1 className="summary-page-title">SCORE</h1>
        <h3 className="summary-page-subtitle">
          {score} out of {totalQuestions}
        </h3>
      </section>
      <div className="home-page__text">
        <p>{message}</p>
      </div>
    </section>
  );
}

export default SummaryPage;
