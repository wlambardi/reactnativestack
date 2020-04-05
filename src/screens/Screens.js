import React from "react";
import { View, StyleSheet, Button, ImageBackground } from "react-native";
import { useTheme, Surface, Text } from 'react-native-paper';

import { AuthContext } from "../context/authContext";
import Loader from "../util/loader";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  }
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const Splash = () => {
  const theme = useTheme();
  return (
      <Surface style={styles.container}>
        <Loader/>
      </Surface>
  );
};

export const SignIn = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={() => signIn()} />
      <Button
        title="Create Account"
        onPress={() => navigation.push("CreateAccount")}
      />
    </ScreenContainer>
  );
};

export const CreateAccount = () => {
  const { signUp } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Create Account Screen</Text>
      <Button title="Sign Up" onPress={() => signUp()} />
    </ScreenContainer>
  );
};
