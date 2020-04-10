import React, { useContext, useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { Surface, useTheme, Button, Text, Headline, Caption } from 'react-native-paper';

import { AuthContext } from "../context/authContext";
import Loader from "../util/loader";

import VideoBackground from "../components/videoBackground";
import * as Animatable from 'react-native-animatable';

const styles = StyleSheet.create({
  containerAnimatable: {
    flex: 1,
  },
  container: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
    paddingTop:100,
    backgroundColor:'transparent'
  },
  button: {
    padding: 2,
    borderRadius: 10,
    margin:20
  },
  headline:{
    paddingBottom: 40,
    fontSize:25,
    fontWeight: '600',
  },
  tinyLogo: {
    width: 300,
    height:50,
  }
});

const ScreenContainer = ({ children }) => (
  <Surface style={styles.container}>{children}</Surface>
);

export const Splash = () => <ScreenContainer><Loader/></ScreenContainer>

export const SignIn = ({ navigation }) => {
  const { signIn } = useContext(AuthContext);
  const paperTheme = useTheme();
  const [video, setVideo] = useState(true);

  setTimeout(() => {
    setVideo(false);
  }, 4000);

  const fadeIn = {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  };


  const imageBg = { /*uri: 'https://i.pinimg.com/564x/8a/70/39/8a7039441f94b976ddff9c179d097e97.jpg'*/ };

  return (
    video ? <VideoBackground/> :
    <Animatable.View animation={fadeIn} duration={2000} style={styles.containerAnimatable}>
      <ImageBackground  blurRadius={2} resizeMode={"cover"} source={imageBg} style={styles.container}>
        <Headline style={styles.headline}>Ciudad de Buenos Aires</Headline>
        <Caption>Caption</Caption>

        <Button icon="login" color={paperTheme.colors.primary} style={styles.button} mode="contained" onPress={() => signIn()}>
          Sign In
        </Button>
        
        <Button icon="account-plus" color={paperTheme.colors.primary} style={styles.button} mode="contained" onPress={() => navigation.push("CreateAccount")}>
          Create Account
        </Button>
      </ImageBackground>
    </Animatable.View>
  );
};

export const CreateAccount = () => {
  const { signUp } = useContext(AuthContext);
  const paperTheme = useTheme();
  return (
    <ScreenContainer>
      <Text>Create Account Screen</Text>
      <Button icon="account-plus" color={paperTheme.colors.primary} style={styles.button} mode="contained" onPress={() => signUp()}>
        Sign Up
      </Button>
    </ScreenContainer>
  );
};
