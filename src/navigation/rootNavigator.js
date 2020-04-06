import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { Appbar, useTheme, Title } from 'react-native-paper';
import { StackNavigator } from './stack';
import { DrawerContent } from './drawerContent';
import { AuthContext } from "../context/authContext";
import {
  SignIn,
  CreateAccount,
  Splash
} from "../screens/Screens";

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
    <Drawer.Screen name="Home" component={StackNavigator} />
  </Drawer.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={DrawerScreen}
        options={{
          animationEnabled: false
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false
        }}
      />
    )}
  </RootStack.Navigator>
);


const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
  const theme = useTheme();
  return(
    <AuthStack.Navigator
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
              {previous && (
                <Appbar.BackAction
                  onPress={navigation.goBack}
                  color={theme.colors.primary}
                />
              )}
              <Appbar.Content
                title={title}
                titleStyle={{
                  fontSize: 22,
                  fontWeight: '600',
                  color: theme.colors.primary,
                }}
              />
            </Appbar.Header>
          );
        },
      }}
    >
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ title: "My App" }}
      />
      <AuthStack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{ title: "Create Account" }}
      />
    </AuthStack.Navigator>
)};

export const RootNavigator = () => {
  const theme = useTheme();
  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;

  const [isLoading, setIsLoading] = React.useState(false);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setTimeout(function(){
          setIsLoading(false);
          setUserToken(null);
        }, 500);
      }
    };
  }, []);


  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer theme={navigationTheme}>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
