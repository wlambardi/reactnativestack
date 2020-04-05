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
      
      <Headline style={{color:theme.colors.text}}>Messages</Headline>

      <View style={styles.stdMarginVertical}>
        <AnimatedLoadImage
          source={{ uri: 'https://static.turbosquid.com/Preview/2019/02/25__04_16_17/F0000.jpg2FC6BC63-7CDA-4F27-95B9-EAEFCA0E92F6Zoom.jpg' }}
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
