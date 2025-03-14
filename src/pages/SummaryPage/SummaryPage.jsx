import { useLocation } from "react-router-dom";
import "./SummaryPage.scss";

function SummaryPage() {
  const location = useLocation();
  const { score, totalQuestions } = location.state || {}; // Retrieve score and total questions

  return (
    <section className="summary">
      <section className="summary-page">
        <h1 className="summary-page-title">SCORE</h1>
        <h3 className="summary-page-subtitle">
          {score} out of {totalQuestions}
        </h3>
      </section>
    </section>
  );
}

export default SummaryPage;
