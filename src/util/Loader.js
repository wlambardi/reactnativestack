import React from 'react';
import { StyleSheet } from 'react-native';
import { w, h } from './Dimensions';
import LottieView from 'lottie-react-native';
import { Surface } from 'react-native-paper';

const Loader = () => 
    <Surface style={styles.container}>
      <LottieView
        loop={true}
        autoPlay={true}
        style={{
          width: w(50),
          height: w(50),
          backgroundColor: 'transparent',
        }}
        source={ require('../../assets/lotties/loader.json') }
      />
    </Surface>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loader;
