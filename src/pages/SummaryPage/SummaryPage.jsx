import { useLocation } from "react-router-dom";
import "./SummaryPage.scss";

function SummaryPage() {
  const location = useLocation();
  const { score, totalQuestions } = location.state || {}; // Retrieve score and total questions

  let message = "";
  if (score === totalQuestions) {
    message = "It looks like you already know quite a bit about how AI is shaping our everyday experiences!";
  } else if (score > totalQuestions / 2) {
    message = "Nice job! You’ve got a solid understanding of how AI impacts our lives.";
  } else {
    message = "No worries! AI is an exciting field, and understanding its role in our daily lives is an ongoing journey.";
  }
  return (
    <section className="summary">
      <section className="summary-page">
        <h1 className="summary-page-title">SCORE</h1>
        <h3 className="summary-page-subtitle">
          {score} out of {totalQuestions}
        </h3>
        <p>{message}</p>
        <p>Fun Fact: Did you know that AI is also used in areas like art creation, climate predictions, and even helping to design new products?</p>
        <p>Want to learn more about AI and its impact on the future? Check out more resources on AI!</p>
      </section>
      <div className="home-page__text">AI is already part of your life.</div>
    </section>
  );
}

export default SummaryPage;
