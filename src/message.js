import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme, Surface, Headline } from 'react-native-paper';

export const Message = (props) => {
  const theme = useTheme();
  return (
    <Surface style={styles.container}>
      <Headline style={{color:theme.colors.text}}>Message</Headline>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
  },
});