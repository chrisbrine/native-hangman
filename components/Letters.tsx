import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

function getBGColor({
  guessed,
  wrong,
  selectable,
}: {
  guessed: boolean;
  wrong: boolean;
  selectable: boolean;
}): string {
  if (wrong) {
    return 'lightcoral';
  }
  if (guessed) {
    return 'lightgreen';
  }
  if (selectable) {
    return 'lightgrey';
  }
  return 'white';
}

function Letter({
  letter,
  guessed,
  wrong,
  selectable,
  onLetterPress,
}: {
  letter: string;
  guessed: boolean;
  wrong: boolean;
  selectable: boolean;
  onLetterPress: (letter: string) => void;
}): React.JSX.Element {
  const styleSheets = StyleSheet.create({
    letter: {
      fontSize: 24,
      margin: 5,
      // textDecorationLine: guessed ? 'line-through' : 'none',
      color: 'black',
      borderWidth: 1,
      backgroundColor: getBGColor({guessed, wrong, selectable}),
      width: 25,
      textAlign: 'center',
    },
  });
  return (
    <Text
      onPress={() => selectable && onLetterPress(letter)}
      style={styleSheets.letter}>
      {letter}
    </Text>
  );
}

export default function Letters({
  guessedLetters,
  wrongLetters,
  maxGuesses,
  neededLetterCount,
  onLetterPress,
}: {
  guessedLetters: string[];
  wrongLetters: string[];
  maxGuesses: number;
  neededLetterCount: number;
  onLetterPress: (letter: string) => void;
}): React.JSX.Element {
  const allowSelect =
    wrongLetters.length < maxGuesses &&
    guessedLetters.length < neededLetterCount;
  const styleSheets = StyleSheet.create({
    view: {
      flexDirection: 'column',
      flexWrap: 'wrap',
    },
    innerView: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  });
  const firstRow = 'qwertyuiop'.split('');
  const secondRow = 'asdfghjkl'.split('');
  const thirdRow = 'zxcvbnm'.split('');
  const rows = [firstRow, secondRow, thirdRow];
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View style={styleSheets.view}>
        {rows.map((row, rowIndex) => (
          <View key={`row-${rowIndex}`} style={styleSheets.innerView}>
            {row.map((letter, index) => (
              <Letter
                key={`letter-${letter}-${index}`}
                letter={letter}
                guessed={guessedLetters.includes(letter)}
                wrong={wrongLetters.includes(letter)}
                selectable={allowSelect}
                onLetterPress={onLetterPress}
              />
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}
