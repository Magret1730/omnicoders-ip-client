import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";
import "./PopUp.scss";

ReactModal.setAppElement("#root");

const API_URL = import.meta.env.VITE_API_URL; 

const PopUp = ({ isOpen, onClose, questionId }) => {
const [explanation, setExplanation] = useState("");

useEffect(() => {
    if (isOpen && questionId) {
    fetch(`${API_URL}/explanation/${questionId}`)
        .then((res) => res.json())
        .then((data) => {
        setExplanation(data.explanation);
        })
        .catch((error) => console.error("Error fetching explanation:", error));
    }
}, [isOpen, questionId]);

return (
    <ReactModal
    isOpen={isOpen}
    onRequestClose={onClose}
    className="popup-content"
    overlayClassName="popup-overlay"
    >
    <div className="popup-body">
        <p>{explanation || "Loading explanation..."}</p>
        <button onClick={onClose}>Close</button>
    </div>
    </ReactModal>
);
};

PopUp.propTypes = {
isOpen: PropTypes.bool.isRequired,
onClose: PropTypes.func.isRequired,
questionId: PropTypes.string.isRequired,
};

export default PopUp;