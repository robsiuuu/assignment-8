import '../styles/Scoreboard.css';

// Component to display the scoreboard
const Scoreboard = ({ score }) => {
  return (
    <div className="score-board">
      <h2>Score</h2>
      <div className="score-grid">
        <div className="score-item">
          <span className="score-label">Wins:</span>
          <span className="score-value">{score.wins}</span>
        </div>
        <div className="score-item">
          <span className="score-label">Losses:</span>
          <span className="score-value">{score.losses}</span>
        </div>
        <div className="score-item">
          <span className="score-label">Ties:</span>
          <span className="score-value">{score.ties}</span>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;