import "./Quiz.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PopUp from "../PopUp/PopUp.jsx";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [questionId, setQuestionId] = useState("");

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const response = await axios.get("http://localhost:4000/questions");
        setQuestions(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("An error occurred while fetching questions");
        setLoading(false);
      }
    };
    getQuestions();
  }, []);

  const currentQuestionData = questions[currentQuestion];

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const openPopUp = (id) => {
    setQuestionId(id);
    setIsPopUpOpen(true);
  };

  const closePopUp = () => {
    setIsPopUpOpen(false);
  };

  return (
    <>
      <div className="quiz">
        {currentQuestionData ? (
          <>
            <div className="quiz__number">
              <p>
                {currentQuestion + 1}/{questions.length}
              </p>
            </div>
            <div className="quiz__question">
              <p>{currentQuestionData.question}</p>
            </div>
            <div className="quiz__options">
              {currentQuestionData.options.map((option, index) => (
                <div className="quiz__option" key={index}>
                  <p>{option}</p>
                </div>
              ))}
            </div>
            <button
              className="quiz__submit"
              onClick={() => openPopUp(questionId)}
            >
              Submit
            </button>
          </>
        ) : (
          <p>No questions found</p>
        )}

        <PopUp
          isOpen={isPopUpOpen}
          onClose={closePopUp}
          questionId={questionId}
        />
      </div>
    </>
  );
}

export default Quiz;
