import { getScaledRoundedValue } from '../util/metrics';

const fonts = {
  display: {
    regular: 'Displace2.0-Regular',
    medium: 'Displace2.0-Medium',
    black: 'Displace2.0-Black',
  },
  headings: 'Gilroy-Semibold',
  body: {
    light: 'OpenSans-Light',
    lightItalic: 'OpenSans-LightItalic',
    regular: 'OpenSans-Regular',
    regularItalic: 'OpenSans-Italic',
    semiBold: 'OpenSans-SemiBold',
    semiBoldItalic: 'OpenSans-SemiBoldItalic',
    bold: 'OpenSans-Bold',
    boldItalic: 'OpenSans-BoldItalic',
  },
  icons: 'icons',
};

const fontSize = {
  xxs: getScaledRoundedValue(11),
  xs: getScaledRoundedValue(13),
  s: getScaledRoundedValue(14),
  m: getScaledRoundedValue(16),
  l: getScaledRoundedValue(18), // Define
  xl: getScaledRoundedValue(24),
  xxl: getScaledRoundedValue(42), // Define
};

export { fonts, fontSize };
