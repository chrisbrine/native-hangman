import React from 'react';
import {Button, SafeAreaView, StatusBar, Text, View} from 'react-native';

export default function Splash({
  newGame,
  setGameDifficulty,
  winOrLose,
  win,
  difficulty,
  rightGuesses,
  wrongGuesses,
}: {
  newGame: () => void;
  setGameDifficulty: (difficulty: number) => void;
  winOrLose: boolean;
  win: boolean;
  difficulty: number;
  rightGuesses: number;
  wrongGuesses: number;
}): React.JSX.Element {
  const getDifficultyText = (currentDifficulty: number) => {
    switch (currentDifficulty) {
      case 12:
        return 'Easy';
      case 6:
        return 'Medium';
      case 4:
        return 'Hard';
      case 2:
        return 'Impossible';
      default:
        return 'Unknown';
    }
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text>Hangman</Text>
        {winOrLose && (
          <View>
            <Text>Right guesses: {rightGuesses}</Text>
            <Text>Wrong guesses: {wrongGuesses}</Text>
            <Text>{win ? 'You win!' : 'You lose!'}</Text>
          </View>
        )}
        <Button title="New Game" onPress={newGame} />
        <Text>Current Difficulty: {getDifficultyText(difficulty)}</Text>
        <Button title="Easy" onPress={() => setGameDifficulty(12)} />
        <Button title="Medium" onPress={() => setGameDifficulty(6)} />
        <Button title="Hard" onPress={() => setGameDifficulty(4)} />
        <Button title="Impossible" onPress={() => setGameDifficulty(2)} />
      </View>
    </SafeAreaView>
  );
}
