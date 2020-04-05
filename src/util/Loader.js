import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { w, h } from './Dimensions';
import LottieView from 'lottie-react-native';

const Loader = () => 
    <View style={styles.container}>
      <LottieView
        loop={true}
        autoPlay={true}
        style={{
          width: w(40),
          height: h(40),
          backgroundColor: 'transparent',
        }}
        source={ require('../../assets/lotties/loader.json') }
      />
    </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loader;
