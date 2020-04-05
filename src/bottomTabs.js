import React from 'react';
import color from 'color';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme, Portal, FAB } from 'react-native-paper';
import { useSafeArea } from 'react-native-safe-area-context';
import { useIsFocused, RouteProp } from '@react-navigation/native';

import overlay from './util/overlay';
import { Feed } from './screens/feed';
import { Message } from './screens/message';
import { Notifications } from './screens/notifications';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabs = (props) => {
  const routeName = props.route.state
    ? props.route.state.routes[props.route.state.index].name
    : 'Home';

  const theme = useTheme();
  const safeArea = useSafeArea();
  const isFocused = useIsFocused();

  let icon = 'feather';

  if (props.route.state){
    console.log('props.route.state.routes[props.route.state.index].name', props.route.state.routes[props.route.state.index].name);
  }

  switch (routeName) {
    case 'Home':
      icon = '';
      break;
    case 'Messages':
      icon = 'email-plus-outline';
      break;
    default:
      icon = 'feather';
      break;
  }

  const tabBarColor = theme.dark
    ? overlay(6, theme.colors.surface)
    : theme.colors.surface;

  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="Home"
        backBehavior="initialRoute"
        shifting={true}
        activeColor={theme.colors.primary}
        inactiveColor={color(theme.colors.text)
          .alpha(0.6)
          .rgb()
          .string()}
        sceneAnimationEnabled={false}
      >
        <Tab.Screen
          name="Home"
          component={Feed}
          options={{
            tabBarIcon: 'home-account',
            tabBarColor,
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarIcon: 'bell-outline',
            tabBarColor,
          }}
        />
        <Tab.Screen
          name="Messages"
          component={Message}
          options={{
            tabBarIcon: 'message-text-outline',
            tabBarColor,
          }}
        />
      </Tab.Navigator>
      {
        icon !== '' && 
        <Portal>
          <FAB
            visible={isFocused}
            icon={icon}
            style={{
              position: 'absolute',
              bottom: safeArea.bottom + 65,
              right: 16,
            }}
            color="white"
            theme={{
              colors: {
                accent: theme.colors.primary,
              },
            }}
            onPress={() => {}}
          />
        </Portal>
      }
      
    </React.Fragment>
  );
};
