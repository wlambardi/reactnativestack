import React, { useState, useCallback, useMemo } from 'react';
import {
  Provider as PaperProvider,
  DefaultTheme,
  DarkTheme,
} from 'react-native-paper';
import { I18nManager, Text } from 'react-native';
import { Updates } from 'expo';
import { useColorScheme } from 'react-native-appearance';
import { RootNavigator } from './rootNavigator';
import { PreferencesContext } from '../context/preferencesContext';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';

I18nManager.allowRTL(true);

export const Main = () => {
  const store = configureStore();
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(
    colorScheme === 'dark' ? 'dark' : 'light'
  );
  const [rtl] = useState(I18nManager.isRTL);

  function toggleTheme() {
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
  }

  const toggleRTL = useCallback(() => {
    I18nManager.forceRTL(!rtl);
    Updates.reloadFromCache();
  }, [rtl]);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      toggleRTL,
      theme,
      rtl: (rtl ? 'right' : 'left'),
    }),
    [rtl, theme, toggleRTL]
  );

  return (
    <Provider store={store}>
      <PreferencesContext.Provider value={preferences}>
        <PaperProvider
          theme={
            theme === 'light'
              ? {
                  ...DefaultTheme,
                  colors: { ...DefaultTheme.colors, primary: '#000' },
                }
              : {
                  ...DarkTheme,
                  colors: { ...DarkTheme.colors, primary: '#fff' },
                }
          }
        >
          <RootNavigator />
        </PaperProvider>
      </PreferencesContext.Provider>
    </Provider>
  );
};
