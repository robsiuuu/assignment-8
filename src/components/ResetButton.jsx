import '../styles/ResetButton.css';

// Component for reset button
const ResetButton = ({ onReset }) => {
  return (
    <button className="reset-button" onClick={onReset}>
      Reset Game
    </button>
  );
};

export default ResetButton;