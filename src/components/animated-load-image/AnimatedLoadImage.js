import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Animated, ViewPropTypes } from 'react-native';
import { getScaledRoundedValue } from '../../util/metrics';
import Shimmer from '../shimmer';
import styles from './style';

export const AnimatedLoadImage = props => {
  const { containerStyle, placeholderSize, ...otherProps } = props;
  const [isImageLoadSuccess, setImageLoadSuccess] = useState(false);
  const [isImageLoadFailed, setImageLoadFailed] = useState(false);
  const opacity = new Animated.Value(0);

  const animateLoad = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 375,
      useNativeDriver: true,
    }).start(() => setImageLoadSuccess(true));
  };

  const finishedLoading = !isImageLoadSuccess && !isImageLoadFailed;

  console.log('AnimatedLoadImage props', JSON.stringify(props));

  return (
    <View style={[props.style]}>
      {finishedLoading && <Shimmer {...otherProps}/>}

      <Animated.View style={{ opacity }}>
        <Image
          onLoad={() => {
            animateLoad();
          }}
          onError={() => {
            setImageLoadFailed(true);
          }}
          {...otherProps}
        />
      </Animated.View>

      {isImageLoadFailed && (
        <View style={styles.placeholderContainer}>
          <Animated.Image
            {...otherProps}
            source={{ uri: 'https://www.joingoldenkey.org/eweb/images/DEMO1/notavailable.jpg' }}
          />
        </View>
      )}
    </View>
  );
};

AnimatedLoadImage.propTypes = {
  containerStyle: ViewPropTypes.style,
  placeholderSize: PropTypes.number,
};

AnimatedLoadImage.defaultProps = {
  containerStyle: null,
  placeholderSize: getScaledRoundedValue(80),
};
