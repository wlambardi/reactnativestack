import React from 'react';
import { View } from 'react-native';
import { Video } from 'expo-av';
import * as Animatable from 'react-native-animatable';

const videoBackground = () => {
    const fadeOut = {
        from: {
            opacity: 1,
        },
        to: {
            opacity: 0,
        },
    };
    return (
        <Animatable.View animation={fadeOut} duration={2000} delay={2000} style={{ flex:1 }}>
            <Video
                source={require('../../assets/video/intro.mp4')}
                rate={1.0}
                volume={0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={{ flex:1 }}
            />
        </Animatable.View>
    )
}

export default videoBackground
