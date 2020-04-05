import { StyleSheet } from 'react-native';
import { writingDirectionStyleProp } from '../util/i18n';
import { getScaledRoundedValue } from '../util/metrics';
import { castShadow } from '../util/styleUtils';
import colors from './colors';
import { fonts, fontSize } from './typography';

export const textStyleGuide = StyleSheet.create({
  h1: {
    fontFamily: fonts.display.medium,
    fontSize: fontSize.xxl,
    writingDirection: writingDirectionStyleProp,
    color: colors.WHITE,
  },
  h2: {
    fontFamily: fonts.headings,
    fontSize: getScaledRoundedValue(20),
    writingDirection: writingDirectionStyleProp,
    color: colors.BLACK,
  },
  h3: {
    fontFamily: fonts.headings,
    fontSize: fontSize.m,
    writingDirection: writingDirectionStyleProp,
    color: colors.BLACK,
  },
  body: {
    fontFamily: fonts.body.regular,
    fontSize: fontSize.s,
    writingDirection: writingDirectionStyleProp,
    color: colors.GRAY,
  },
  label: {
    fontFamily: fonts.body.regular,
    fontSize: fontSize.xs,
    writingDirection: writingDirectionStyleProp,
    color: colors.ACCENT_DISCOVER,
  },
  caption: {
    fontFamily: fonts.body.regular,
    fontSize: fontSize.xxs,
    writingDirection: writingDirectionStyleProp,
    color: colors.BLACK,
  },
  strong: {
    fontFamily: fonts.body.bold,
  },
  underline: {},
  link: {},
});

export const radiusStyles = {
  s: { borderRadius: getScaledRoundedValue(8) },
  m: { borderRadius: getScaledRoundedValue(16) },
  l: { borderRadius: getScaledRoundedValue(24) },
};

export const shadowStyles = {
  light: {
    ...castShadow(3),
  },
  med: {
    ...castShadow(5),
  },
  dark: {
    ...castShadow(7),
  },
};

export const borderStyles = {
  thin: {
    borderWidth: StyleSheet.hairlineWidth,
  },
};

export const states = {};
