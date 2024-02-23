import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';

export default function Hangman({
  guessedLetters,
  wrongGuesses,
  maxGuesses,
  neededLetterCount,
}: {
  guessedLetters: string[];
  wrongGuesses: number;
  maxGuesses: number;
  neededLetterCount: number;
}): React.JSX.Element {
  const runGame =
    wrongGuesses < maxGuesses && guessedLetters.length < neededLetterCount;
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text>Hangman</Text>
        <Text>
          Wrong guesses: {wrongGuesses}/{maxGuesses}
        </Text>
        {runGame && <Text>Good luck!</Text>}
        {!runGame && <Text>Game over!</Text>}
      </View>
    </SafeAreaView>
  );
}
