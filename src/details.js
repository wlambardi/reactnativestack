import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme, Surface, Text, Title } from 'react-native-paper';


export const Details = (props) => {
  const theme = useTheme();
  const { name } = props.route.params;
  return (
    <Surface style={styles.container}>
    <Title style={{color:theme.colors.text}}>Detail Screen</Title>
    <Text style={{color:theme.colors.text}}>Param Name {name}</Text>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
  },
});