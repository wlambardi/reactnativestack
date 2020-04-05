import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Surface, useTheme, Button, Headline, Text } from 'react-native-paper';

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
  <Surface style={styles.container}>{children}</Surface>
);

export const Splash = () => <ScreenContainer><Loader/></ScreenContainer>

export const SignIn = ({ navigation }) => {
  const { signIn } = useContext(AuthContext);
  const theme = useTheme();
  return (
    <ScreenContainer>
      <Headline>Welcome</Headline>

      <Button icon="account-key" color={theme.colors.primary} mode="outlined" onPress={() => signIn()}>
        Sign In
      </Button>

      <Button icon="account-plus" color={theme.colors.primary} mode="outlined" onPress={() => navigation.push("CreateAccount")}>
        Create Account
      </Button>
    </ScreenContainer>
  );
};

export const CreateAccount = () => {
  const { signUp } = useContext(AuthContext);
  const theme = useTheme();
  return (
    <ScreenContainer>
      <Text>Create Account Screen</Text>
      <Button icon="account-plus" color={theme.colors.primary} mode="outlined" onPress={() => signUp()}>
        Sign Up
      </Button>
    </ScreenContainer>
  );
};
