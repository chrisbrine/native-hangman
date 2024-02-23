import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

export default function Word({
  word,
  guessedLetters,
}: {
  word: string;
  guessedLetters: string[];
}): React.JSX.Element {
  const styleSheets = StyleSheet.create({
    view: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    letter: {
      fontSize: 24,
      margin: 5,
    },
  });
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View style={styleSheets.view}>
        {word.split('').map((letter, index) => {
          const guessed = guessedLetters.includes(letter);
          return (
            <Text key={`word-${letter}-${index}`} style={styleSheets.letter}>
              {guessed ? letter : '_'}
            </Text>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
