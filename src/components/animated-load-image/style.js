import { StyleSheet } from 'react-native';
import { getScaledRoundedValue } from '../../util/metrics';

export default StyleSheet.create({
  placeholderContainer: {
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
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  center: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
});