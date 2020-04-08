import React from 'react';
import { StyleSheet } from 'react-native';
import { w, totalSize } from './Dimensions';
import LottieView from 'lottie-react-native';
import { Surface, Headline, Caption } from 'react-native-paper';

const LoadingError = props => {
  return (
    <Surface style={styles.container}>
      <LottieView
        loop={true}
        autoPlay={true}
        style={{
          width: w(60),
          height: w(60),
          backgroundColor: 'transparent',
        }}
        source={require('../../assets/lotties/error.json')}
      />
      <Headline style={styles.title}>Oops! something went wrong.</Headline>
      <Caption style={styles.message}>
        We're working on it and we'll get it fixed as soon as we can.
      </Caption>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: totalSize(2),
    textAlign:'center',
  },
  message: {
    fontSize: totalSize(1.6),
    textAlign:'center',
    marginHorizontal:w(10),
  },
});

export default LoadingError;
