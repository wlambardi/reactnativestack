import React, { useRef, useEffect, useState, useCallback } from 'react';
import { View, Animated, Easing } from 'react-native';
import PropTypes from 'prop-types';
import { Svg, Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import colors from '../../theme/colors';
import { screenMetrics } from '../../util/metrics';
import { main } from './style';
import { useTheme } from 'react-native-paper';

export const Shimmer = props => {
  
  const theme = useTheme();
  const { containerStyle, highlightColor } = props;

  const [isAnimationDone, setAnimationStatus] = useState(false);
  const shimmer = useRef(new Animated.Value(0)).current;

  const animateShimmer = useCallback(() => {
    Animated.timing(shimmer, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
    }).start(() => setAnimationStatus(true));
  }, [shimmer]);

  const translate = shimmer.interpolate({
    inputRange: [0, 1],
    outputRange: [-screenMetrics.width, screenMetrics.width],
    useNativeDriver: true,
  });

  useEffect(() => {
    animateShimmer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isAnimationDone) {
      shimmer.setValue(0);
      setAnimationStatus(false);
    } else {
      animateShimmer();
    }
  }, [isAnimationDone, animateShimmer, shimmer]);

  return (
    <View style={[main.container, containerStyle,{borderRadius:20}]}>
      <Animated.View style={{ transform: [{ translateX: translate }] }}>
        <Svg height={screenMetrics.height} width={screenMetrics.height}>
          <Defs>
            <LinearGradient
              id="grad"
              x1="0%"
              y1="0%"
              x2="50%"
              y2="0%"
              x3="100%"
              y3="0%">
              <Stop offset="0%" stopColor={'#a7a7a7'} stopOpacity="0" />
              <Stop offset="50%" stopColor={'#a7a7a7'} stopOpacity="0.5" />
              <Stop offset="100%" stopColor={'#a7a7a7'} stopOpacity="0" />
            </LinearGradient>
          </Defs>
          <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
        </Svg>
      </Animated.View>
    </View>
  );
};

Shimmer.propTypes = {
  containerStyle: PropTypes.object,
  highlightColor: PropTypes.string,
};

Shimmer.defaultProps = {
  containerStyle: {},
  highlightColor: colors.WHITE,
};
