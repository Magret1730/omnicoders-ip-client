import React, { useEffect, useState } from "react";
import axios from "axios"; // ✅ Added missing axios import
import PropTypes from "prop-types";
import "./PopUp.scss";

const API_URL = import.meta.env.VITE_API_URL; // ✅ Define API_URL properly

function PopUp({ isOpen, onClose, questionId, isAnswerCorrect, handleNextQuestion }) {
  const [explanation, setExplanation] = useState("");

  useEffect(() => {
    if (isOpen && questionId) {
      axios
        .get(`${API_URL}/explanation/${questionId}`) // ✅ Using API_URL instead of hardcoded localhost
        .then((response) => {
          setExplanation(response.data.explanation);
        })
        .catch((error) => {
          console.error("Error fetching explanation:", error);
          setExplanation("No explanation available.");
        });
    }
  }, [isOpen, questionId]);

  if (!isOpen) return null; // ✅ Prevents rendering when the popup is closed

  return (
    <div className="popup">
    <div className="popup__content">
      <h3>{isAnswerCorrect ? "✅ Correct!" : "❌ Wrong Answer"}</h3>
      <div className="popup__body">
        <p>{explanation}</p>
        <button onClick={handleNextQuestion}>Next</button>
      </div>
    </div>
  </div>
  );
}


PopUp.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  questionId: PropTypes.string.isRequired,
  isAnswerCorrect: PropTypes.bool,
  handleNextQuestion: PropTypes.func.isRequired,
};

export default PopUp;
