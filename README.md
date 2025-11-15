# Rock, Paper, Scissors - React Edition
## Assignment 8: https://uncg-my.sharepoint.com/:v:/g/personal/rrsiu_uncg_edu/IQDqTnFr5y2oS4dE30x-NRegAZVJBWdTUK3MOJ5J1p-ynA0?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=ZuSdU7

A modern, interactive implementation of the classic Rock, Paper, Scissors game built with React. Features smooth animations, score tracking, and a clean, responsive design.

## 🎮 Features

- **Interactive Gameplay**: Click to select your throw (rock, paper, or scissors)
- **Computer AI**: Randomized computer choices with visual shuffle animation
- **Real-time Results**: Instant win/lose/tie determination
- **Score Tracking**: Keep track of wins, losses, and ties across rounds
- **Smooth Animations**: 3-second shuffle animation before computer reveals choice

## 🛠️ Technologies Used

- **React** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **CSS** - Custom styling with animations and transitions
- **HTML** - Semantic markup for accessibility

## 🚀 Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- React with vite project
- npm or yarn package manager

### Steps to Run

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd rock-paper-scissors-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add game images**
   - Create a `public/images/` folder if it doesn't exist
   - Add the following image files:
     - `rock.png` (or `.PNG`)
     - `paper.png` (or `.PNG`) 
     - `scissors.png` (or `.PNG`)
     - `question-mark.png` (or `.PNG`)

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to the local development URL (usually `http://localhost:5173`)
   - The game should be running and ready to play!

## 🎯 How to Play

1. **Make Your Choice**: Click on the rock, paper, or scissors image to select your throw
2. **Watch the Animation**: The computer will shuffle through choices for 3 seconds
3. **See the Result**: The winner is determined based on classic rules:
   - Rock beats Scissors
   - Scissors beats Paper  
   - Paper beats Rock
   - Same choice results in a tie
4. **Track Your Score**: Wins, losses, and ties are automatically tracked
5. **Play Again**: Make another selection to continue playing
6. **Reset**: Use the Reset button to clear the score and start fresh

## 🏗️ Component Architecture

- **App.jsx** - Main component managing game state and logic
- **PlayerThrow.jsx** - Handles player selection with clickable images
- **ComputerThrow.jsx** - Displays computer choice with shuffle animation
- **ResultDisplay.jsx** - Shows game outcome (win/lose/tie)
- **ScoreBoard.jsx** - Tracks and displays game statistics
- **ResetButton.jsx** - Resets game state and scores

## 📝 Implementation Notes

This project demonstrates:
- React functional components with hooks
- State management with useState and useEffect
- Component composition
- Event handling in React
- CSS animations and transitions

The game logic handles all 9 possible throw combinations and provides immediate visual feedback. The computer choice animation creates anticipation before revealing the result.

## 📄 License

This project is created for educational purposes as part of a web development assignment.

---

**Enjoy playing Rock, Paper, Scissors X!** 🎮✨
