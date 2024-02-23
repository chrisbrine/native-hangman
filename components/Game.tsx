import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import Hangman from './Hangman';
import Letters from './Letters';
import Word from './Word';

export default function Game({
  word,
  maxGuesses,
  onGameEnd,
}: {
  word: string;
  maxGuesses: number;
  onGameEnd: (gameEnd: {
    guessedLetters: string[];
    wrongLetters: string[];
    win: boolean;
  }) => void;
}): React.JSX.Element {
  const [guessedLetters, setGuessedLetters] = React.useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = React.useState<string[]>([]);
  // below should be a count of unique letters in the word
  const neededLetterCount = new Set(word.split('')).size;
  const onLetterPress = (letter: string) => {
    if (guessedLetters.includes(letter) || wrongLetters.includes(letter)) {
      return;
    }
    if (word.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
    } else {
      setWrongLetters([...wrongLetters, letter]);
    }
  };
  React.useEffect(() => {
    const guessedSet = new Set(guessedLetters);
    const wrongSet = new Set(wrongLetters);
    const win = guessedSet.size === neededLetterCount;
    const lose = wrongSet.size >= maxGuesses;
    if (win || lose) {
      onGameEnd({guessedLetters, wrongLetters, win});
    }
  }, [guessedLetters, maxGuesses, neededLetterCount, onGameEnd, wrongLetters]);
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View>
        <Hangman
          guessedLetters={guessedLetters}
          wrongGuesses={wrongLetters.length}
          maxGuesses={maxGuesses}
          neededLetterCount={neededLetterCount}
        />
        <Word word={word} guessedLetters={guessedLetters} />
        <Letters
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          maxGuesses={maxGuesses}
          neededLetterCount={neededLetterCount}
          onLetterPress={onLetterPress}
        />
      </View>
    </SafeAreaView>
  );
}
