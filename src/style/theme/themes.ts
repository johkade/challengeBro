import COLORS from './colors';
import {DarkTheme, DefaultTheme} from '@react-navigation/native';
import UnwrappedTheme from './types/UnwrappedTheme';

export const DARK_THEME: UnwrappedTheme = {
  bg: COLORS.offBlack,
  card: COLORS.gray800,
  cardActive: COLORS.cobalt,
  cardInactive: `${COLORS.cobalt}77`,
  notification: COLORS.gray800,
  text: COLORS.white,
  fontStd: COLORS.white,
  fontMedium: COLORS.gray300,
  fontLight: COLORS.gray700,
  fontInverse: COLORS.offBlack,
  primary: COLORS.cobalt,
  border: 'transparent',
};

export const LIGHT_THEME: UnwrappedTheme = {
  bg: COLORS.white,
  card: COLORS.gray50,
  cardActive: COLORS.cobalt,
  cardInactive: `${COLORS.cobalt}77`,
  notification: COLORS.gray700,
  text: COLORS.offBlack,
  fontStd: COLORS.offBlack,
  fontMedium: COLORS.gray800,
  fontLight: COLORS.gray300,
  fontInverse: COLORS.offWhite,
  primary: COLORS.cobalt,
  border: 'transparent',
};

export const DARK_THEME_WRAPPED = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...DARK_THEME,
  },
};

export const LIGHT_THEME_WRAPPED = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...LIGHT_THEME,
  },
};
