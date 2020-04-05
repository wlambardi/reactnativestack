import { StyleSheet } from 'react-native';
import { layout } from '../../theme/layout';
import { getScaledRoundedValue } from '../../util/metrics';

export default StyleSheet.create({
  placeholderContainer: {
    ...layout.center,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  placeholderLogo: {
    width: getScaledRoundedValue(80),
    height: getScaledRoundedValue(30),
    resizeMode: 'contain',
  },
});