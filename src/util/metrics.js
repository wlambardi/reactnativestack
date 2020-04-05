import { Dimensions, Platform, StatusBar } from 'react-native';
// import DeviceInfo from 'react-native-device-info';

const { width, height } = Dimensions.get('window');
const designWidth = 375;
const scaleCoefficient = width / designWidth;
const getScaledRoundedValue = value => Math.round(value * scaleCoefficient);

const hasNotch = false; // DeviceInfo.hasNotch();
const statusBarHeight = Platform.select({
  ios: hasNotch ? getScaledRoundedValue(40) : getScaledRoundedValue(20),
  android: StatusBar.currentHeight,
});
const navBarHeight = Platform.select({
  ios: hasNotch ? getScaledRoundedValue(60) : getScaledRoundedValue(50),
  android: getScaledRoundedValue(50),
});
const topBarHeight = statusBarHeight + navBarHeight;

const spacingMetrics = {
  xxs: getScaledRoundedValue(10),
  xs: getScaledRoundedValue(12),
  s: getScaledRoundedValue(17),
  m: getScaledRoundedValue(21),
  l: getScaledRoundedValue(28),
  xl: getScaledRoundedValue(37),
  xxl: getScaledRoundedValue(50),
};

const screenMetrics = {
  width,
  height,
  statusBarHeight,
  navBarHeight,
  topBarHeight,
};

const layoutMetrics = {
  pagePadding: spacingMetrics.l,
};

export {
  getScaledRoundedValue,
  spacingMetrics,
  screenMetrics,
  layoutMetrics,
  hasNotch,
};
