import '../styles/ResultDisplay.css';

// Component to display the result of the game
const ResultDisplay = ({ result }) => {
  if (!result) return null;

  const resultText = {
    win: 'You Win! 🎉',
    lose: 'You Lose! 😞',
    tie: "It's a Tie! 🤝"
  };

  return (
    <div className={`result-display ${result}`}>
      <h2>{resultText[result]}</h2>
    </div>
  );
};

export default ResultDisplay;