import { useState } from "react";
import PlayerThrow from "./components/PlayerThrow";
import ComputerThrow from "./components/ComputerThrow";
import ResultDisplay from "./components/ResultDisplay";
import ScoreBoard from "./components/Scoreboard";
import ResetButton from "./components/ResetButton";
import "./App.css";

function App() {

  // State variables
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [score, setScore] = useState({ wins: 0, losses: 0, ties: 0 });

  const choices = ["rock", "paper", "scissors"];

  // Determine winner
  const determineWinner = (player, computer) => {
    if (player === computer) return "tie";
    if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      return "win";
    }
    return "lose";
  };

  // Handle player's choice
  const handlePlayerChoice = (choice) => {

    // Prevent multiple selections during animation
    if (isAnimating) return;

    setPlayerChoice(choice);
    setIsAnimating(true);
    setComputerChoice(null);
    setResult("");

    // Computer random choice after animation
    let counter = 0;
    const interval = setInterval(() => {
      const randomChoice = choices[Math.floor(Math.random() * choices.length)];
      setComputerChoice(randomChoice);
      counter += 500;

      // Stop animation after 3 seconds
      if (counter >= 3000) {
        clearInterval(interval);
        setIsAnimating(false);
        const finalComputerChoice =
          choices[Math.floor(Math.random() * choices.length)];
        setComputerChoice(finalComputerChoice);

        const gameResult = determineWinner(choice, finalComputerChoice);
        setResult(gameResult);

        // Update score
        setScore((prev) => ({
          ...prev,
          wins: gameResult === "win" ? prev.wins + 1 : prev.wins,
          losses: gameResult === "lose" ? prev.losses + 1 : prev.losses,
          ties: gameResult === "tie" ? prev.ties + 1 : prev.ties,
        }));
      }
    }, 500);
  };

  // Reset game
  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult("");
    setIsAnimating(false);
    setScore({ wins: 0, losses: 0, ties: 0 });
  };

  // Render the app
  return (
    <div className="app">
      <header>
        <h1>Rock, Paper, Scissors</h1>
      </header>

      <ScoreBoard score={score} />

      <main className="game-container">
        <section className="player-section">
          <h2>Your Throw</h2>
          <PlayerThrow
            choices={choices}
            selectedChoice={playerChoice}
            onChoiceSelect={handlePlayerChoice}
            disabled={isAnimating}
          />
        </section>

        <section className="computer-section">
          <h2>Computer Throw</h2>
          <ComputerThrow choice={computerChoice} isAnimating={isAnimating} />
        </section>
      </main>

      <ResultDisplay result={result} />
      <ResetButton onReset={resetGame} />

      <footer>
        <p>© 2025 Rock, Paper, Scissors - Robertson Siu</p>
      </footer>
    </div>
  );
}

export default App;
