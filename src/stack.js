import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar, useTheme, Title, Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { BottomTabs } from './bottomTabs';
import { Details } from './details';

const Stack = createStackNavigator();

function useFonts(fontMap) {
  let [fontsLoaded, setFontsLoaded] = React.useState(false);
  (async () => {
    await Font.loadAsync(fontMap);
    setFontsLoaded(true);
  })();
  return [fontsLoaded];
}

export const StackNavigator = ({ userToken }) => {
  const theme = useTheme();
  let [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
  });
  return (
    <Stack.Navigator
      initialRouteName="BottomTabs"
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => {
          const { options } = scene.descriptor;
          const title =
            options.headerTitle !== undefined
              ? options.headerTitle
              : options.title !== undefined
              ? options.title
              : scene.route.name;

          return (
            <Appbar.Header
              theme={{ colors: { primary: theme.colors.surface } }}
            >
              {previous ? (
                <Appbar.BackAction
                  onPress={navigation.goBack}
                  color={theme.colors.primary}
                />
              ) : (
                <TouchableOpacity
                  style={{ marginLeft: 10 }}
                  onPress={() => {
                    navigation.openDrawer();
                  }}
                >
                  <MaterialCommunityIcons
                    name="menu"
                    size={40}
                    color={theme.colors.primary}
                  />
                </TouchableOpacity>
              )}
              <Appbar.Content
                title={fontsLoaded ?  <Title style={{fontFamily: 'Poppins-Regular'}}>{title}</Title> : <Text>Loading ...</Text>}
                titleStyle={{
                  color: theme.colors.primary,
                }}
              />
            </Appbar.Header>
          );
        },
      }}
    >
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={({ route }) => {
          console.log('!@# options', { route });
          const routeName = route.state
            ? route.state.routes[route.state.index].name
            : 'Home';
          return { headerTitle: routeName };
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerTitle: 'Detail title' }}
      />
    </Stack.Navigator>
  );
};
