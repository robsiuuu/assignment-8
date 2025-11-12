import { useState, useEffect } from "react";
import "../styles/ComputerThrow.css";

const ComputerThrow = ({ choice }) => {
  // State for animation
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayChoice, setDisplayChoice] = useState("question");
  const [shuffleIndex, setShuffleIndex] = useState(0);
  const choices = ["rock", "paper", "scissors"];

  // Handle animation effect
  useEffect(() => {
    let interval;

    // Start shuffling animation
    if (isAnimating) {
      let counter = 0;
      interval = setInterval(() => {
        setShuffleIndex((prev) => (prev + 1) % choices.length);
        counter += 500;

        // Stop animation after 3 seconds
        if (counter >= 3000) {
          clearInterval(interval);
          setIsAnimating(false);
        }
      }, 500);
    } else {
      setShuffleIndex(0);
    }

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [choices.length, isAnimating]);

  // Update display choice based on animation state
  useEffect(() => {
    if (isAnimating) {
      setDisplayChoice("animating");
    } else if (choice) {
      setDisplayChoice(choice);
    } else {
      setDisplayChoice("question");
    }
  }, [choice, isAnimating]);

  // Trigger animation when choice changes
  return (
    <div className="computer-throw">
      <div
        className={`computer-choice ${
          displayChoice === "animating" ? "animating" : ""
        }`}
      >
        {displayChoice === "question" ? (
          <img
            src="/images/question-mark.PNG"
            alt="Computer thinking"
            className="choice-image question-mark"
          />
        ) : displayChoice === "animating" ? (
          <img
            src={`/images/${choices[shuffleIndex]}.PNG`}
            alt="Shuffling choices"
            className="choice-image shuffle-image"
          />
        ) : (
          <img
            src={`/images/${choice}.PNG`}
            alt={choice}
            className="choice-image"
          />
        )}
      </div>
      {choice && !isAnimating && <span className="choice-label">{choice}</span>}
    </div>
  );
};

export default ComputerThrow;
