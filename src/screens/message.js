import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { useTheme, Surface, Headline} from 'react-native-paper';
import { AuthContext } from "../context/authContext";
import color from 'color';
import { AnimatedLoadImage } from '../components/animated-load-image/AnimatedLoadImage';

export const Message = (props) => {
  const theme = useTheme();
  const imageBorderColor = color(theme.colors.text)
    .alpha(0.15)
    .rgb()
    .string();
  return (
    <Surface style={styles.container}>
      
      <Headline style={{color:theme.colors.text}}>New messages</Headline>

      <View style={styles.stdMarginVertical}>
        <AnimatedLoadImage
          source={{ uri: 'https://source.unsplash.com/1600x900/?nature,water' }}
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
  divider: {
    marginVertical:20,
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
