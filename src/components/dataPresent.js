import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Surface,
  Title,
  Caption,
  Text,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';

import color from 'color';
import { AnimatedLoadImage } from './animated-load-image/AnimatedLoadImage';

export const DataPresent = props => {
  const theme = useTheme();
  const iconColor = color(theme.colors.text)
    .alpha(0.54)
    .rgb()
    .string();

  const contentColor = color(theme.colors.text)
    .alpha(0.8)
    .rgb()
    .string();

  const imageBorderColor = color(theme.colors.text)
    .alpha(0.15)
    .rgb()
    .string();

  return (
    <TouchableRipple onPress={() => props.onPress(props.id)}>
      <Surface style={styles.container}>
                  
        {
          props.title && <Title style={styles.title}>{props.title}</Title>
        }
        <View style={styles.topRow}>
          {
            props.author ? 
              <>
              <Caption style={styles.handle}>{props.author}</Caption>
              <Caption style={[styles.handle, styles.dot]}>{'\u2B24'}</Caption>
              </>
              : null
          }

          {
            props.source.author && <Caption style={styles.handle}>{props.author}</Caption>
          }

          {
            props.source.name && <Caption style={styles.handle}>{props.source.name}</Caption>
          }
          
          
        </View>

        {
            (props.description || props.content) && <Text style={[styles.description,{ color: contentColor }]}>{props.description===null ? props.content : props.description}</Text>
        }
        
        
    
        {
          props.urlToImage ?
          <AnimatedLoadImage
            source={{ uri: props.urlToImage }}
            style={[
              styles.image,
              {
                borderColor: imageBorderColor,
              },
            ]}
          /> 
          : null
        }
        
      </Surface>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:20,
  },
  leftColumn: {
    width: 100,
    alignItems: 'center',
  },
  rightColumn: {
    flex: 1,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  handle: {
    marginRight: 3,
    fontSize: 14,
    lineHeight: 16,
  },
  title:{
    fontSize: 20,
    lineHeight: 26,
  },
  dot: {
    fontSize: 3,
  },
  description:{
    paddingVertical:14,
    fontSize: 16,
    lineHeight: 18,
  },
  image: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 20,
    width: '100%',
    height: 150,
  },
  bottomRow: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconDescription: {
    marginLeft: 2,
    lineHeight: 12,
  },
});
