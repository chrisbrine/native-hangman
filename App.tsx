/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Game from './components/Game';
import Splash from './components/Splash';

const words = [
  'hangman',
  'apple',
  'banana',
  'cherry',
  'date',
  'elderberry',
  'fig',
  'grape',
  'honey',
];

const randomWord = (): string => {
  return words[Math.floor(Math.random() * words.length)];
};

export default function App(): React.JSX.Element {
  const [word, setWord] = React.useState(randomWord());
  const [runningGame, setRunningGame] = React.useState(false);
  const [difficulty, setDifficulty] = React.useState(6);
  const [rightGuesses, setRightGuesses] = React.useState(0);
  const [wrongGuesses, setWrongGuesses] = React.useState(0);
  const [winOrLose, setWinOrLose] = React.useState(false);
  const [winGame, setWinGame] = React.useState(false);
  const finishedGame = ({
    guessedLetters,
    wrongLetters,
    win,
  }: {
    guessedLetters: string[];
    wrongLetters: string[];
    win: boolean;
  }) => {
    setRunningGame(false);
    setWinGame(win);
    setWinOrLose(true);
    setRightGuesses(guessedLetters.length);
    setWrongGuesses(wrongLetters.length);
  };
  const newGame = () => {
    setWord(randomWord());
    setRunningGame(true);
    setWinGame(false);
    setWinOrLose(false);
    setRightGuesses(0);
    setWrongGuesses(0);
  };

  return (
    <React.Fragment>
      {runningGame && (
        <Game word={word} maxGuesses={difficulty} onGameEnd={finishedGame} />
      )}
      {!runningGame && (
        <Splash
          newGame={newGame}
          setGameDifficulty={setDifficulty}
          winOrLose={winOrLose}
          win={winGame}
          difficulty={difficulty}
          rightGuesses={rightGuesses}
          wrongGuesses={wrongGuesses}
        />
      )}
    </React.Fragment>
  );
}
