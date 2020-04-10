import React, { useEffect } from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import {
  Surface,
  Title,
  Caption,
  Avatar,
  Subheading,
  useTheme,
  Text
} from 'react-native-paper';
import color from 'color';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { retrieveComments } from '../store/actions/comments';
import { AnimatedLoadImage } from './animated-load-image/AnimatedLoadImage';
import moment from 'moment';

export const DetailedDataPresent = props => {
  const theme = useTheme();

  const dataSourceComments = useSelector(state => state.comments);
  const dispatch = useDispatch();
  
  var date = new Date().getDate(); //Current Date
  var month = new Date().getMonth() + 1; //Current Month
  var year = new Date().getFullYear(); //Current Year
  var hours = new Date().getHours(); //Current Hours
  var min = new Date().getMinutes(); //Current Minutes
  var sec = new Date().getSeconds(); //Current Seconds
  const fecha = date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec;

  useEffect(() => {
    dispatch(retrieveComments(props.id));
  }, [dispatch]);

  useEffect(() => {
   //console.log('retrieveComments.comments', dataSourceComments.comments);
  }, [dataSourceComments.comments])


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

  const avatarUrl = 'https://picsum.photos/200';

  return (
    <ScrollView>
      <Surface style={styles.container}>
        <Title style={styles.title}>{props.title}</Title>          
        <View style={styles.topRow}>
          <Caption style={styles.handle}>{props.source.name}</Caption>
          <Caption style={[styles.handle, styles.dot]}>{'\u2B24'}</Caption>
          <Caption style={styles.handle}>{moment(props.publishedAt).format("LLL")}</Caption>
        </View>

       
        <Text style={[styles.description,{ color: contentColor }]}>{props.content==='' ? props.description : props.content}</Text>
        <AnimatedLoadImage
            source={{ uri: props.urlToImage }}
            style={[
              styles.image,
              {
                borderColor: imageBorderColor,
              },
            ]}
          />

          <View style={styles.bottomRow}>
            <TouchableOpacity
              onPress={() => {}}
              hitSlop={{ top: 10, bottom: 10 }}
            >
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="comment-outline"
                  size={25}
                  color={iconColor}
                />
                <Caption style={styles.iconDescription}>
                  123
                </Caption>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              hitSlop={{ top: 10, bottom: 10 }}
            >
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="share-outline"
                  size={25}
                  color={iconColor}
                />
                <Caption style={styles.iconDescription}>
                  {Math.floor((Math.random() * 100) + 1)}
                </Caption>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              hitSlop={{ top: 10, bottom: 10 }}
            >
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="heart-outline"
                  size={25}
                  color={iconColor}
                />
                <Caption style={styles.iconDescription}>{Math.floor((Math.random() * 100) + 1)}</Caption>
              </View>
            </TouchableOpacity>
          </View>
      </Surface>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  avatar: {
    marginRight: 20,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  handle: {
    marginRight: 3,
  },
  title:{
    fontSize: 22,
    lineHeight: 26,
  },
  dot: {
    fontSize: 3,
  },
  content: {
    marginVertical: 10,
    fontSize: 16,
    lineHeight: 18,
  },
  image: {
    borderWidth: StyleSheet.hairlineWidth,
    marginTop: 0,
    borderRadius: 20,
    width: '100%',
    height: 280,
  },
  description:{
    paddingVertical:10,
  },
  bottomRow: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  iconDescription: {
    marginLeft: 2,
    lineHeight: 14,
    fontSize:14,
  },
});
