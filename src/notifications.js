import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme, Surface, Headline } from 'react-native-paper';
import { AnimatedLoadImage } from './components/animated-load-image/AnimatedLoadImage';
import color from 'color';

export const Notifications = (props) => {
  const theme = useTheme();
  const imageBorderColor = color(theme.colors.text)
    .alpha(0.15)
    .rgb()
    .string();

  return (
    <Surface style={styles.container}>
      <Headline style={{color:theme.colors.text}}>Notifications</Headline>

      <View style={styles.stdMarginVertical}>
        <AnimatedLoadImage
          source={{ uri: 'https://ak2.picdn.net/shutterstock/videos/11575052/thumb/1.jpg' }}
          style={[
            styles.image,
            {
              borderColor: imageBorderColor,
            },
          ]}
        />
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
  },
  image: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 20,
    width: '100%',
    height: 150,
  },
  stdMarginVertical: {
    marginVertical: 20,
  }
});