import "./Quiz.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PopUp from "../PopUp/PopUp.jsx";
import { useNavigate } from "react-router-dom";



const API_URL = import.meta.env.VITE_API_URL; 

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [questionId, setQuestionId] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null); 
  const [score, setScore] = useState(0); 
  const navigate = useNavigate(); 

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const response = await axios.get(`${API_URL}/questions`);
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

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  const handleAnswerSubmit = () => {
    if (selectedOption === null) {
      alert("Please select an option before submitting.");
      return;
    }

    const correctOption = questions[currentQuestion].correct_answer;

    if (questions[currentQuestion].options[selectedOption] === correctOption) {
      setIsAnswerCorrect(true);
      setScore((prevScore) => prevScore + 1);
    } else {
      setIsAnswerCorrect(false);
    }

    openPopUp();
  };

  const openPopUp = () => {
    setQuestionId(questions[currentQuestion].id);
    setIsPopUpOpen(true);
  };

  const closePopUp = () => {
    setIsPopUpOpen(false);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setQuestionId(questions[currentQuestion + 1].id);
      setIsAnswerCorrect(null);
      setSelectedOption(null); 
      setIsPopUpOpen(false);
      setSelectedOption(null);
    } else {
      navigate("/summary", { state: { score, totalQuestions: questions.length } });
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const currentQuestionData = questions[currentQuestion];

  return (
    <>
      <div className="quiz">
        {currentQuestionData ? (
          <>
            <div className="quiz__number">
              <p className="quiz__number-item">
                {currentQuestion + 1}/{questions.length}
              </p>
            </div>
            <div className="quiz__question">
              <p>{currentQuestionData.question}</p>
            </div>
            <div className="quiz__options">
              {currentQuestionData.options.map((option, index) => (
                <div
                  className={`quiz__option ${
                    selectedOption === index ? "quiz__option--selected" : ""
                  }`}
                  onClick={() => handleOptionClick(index)}
                  key={index}
                >
                  <p>{option}</p>
                </div>
              ))}
            </div>
            <button className="quiz__submit" onClick={handleAnswerSubmit}>
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
          isAnswerCorrect={isAnswerCorrect} 
          handleNextQuestion={handleNextQuestion}
        />
      </div>
    </>
  );
}

export default Quiz;
