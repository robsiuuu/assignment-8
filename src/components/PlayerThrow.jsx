import "../styles/PlayerThrow.css";

// Component for player's choice buttons
const PlayerThrow = ({ choices, selectedChoice, onChoiceSelect, disabled }) => {
  return (
    <div className="player-throw">
      {choices.map((choice) => (
        <button
          key={choice}
          className={`choice-btn ${
            selectedChoice === choice ? "selected" : ""
          } ${disabled ? "disabled" : ""}`}
          onClick={() => onChoiceSelect(choice)}
          disabled={disabled}
          aria-label={`Select ${choice}`}
        >
          <img
            src={`/images/${choice}.PNG`}
            alt={choice}
            className="choice-image"
          />
          <span className="choice-label">{choice}</span>
        </button>
      ))}
    </div>
  );
};

export default PlayerThrow;
