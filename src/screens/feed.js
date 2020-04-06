import React, { useEffect } from 'react';
import { StyleSheet, ScrollView, FlatList } from 'react-native';
import { useTheme, Surface, Headline, List } from 'react-native-paper';
import { AuthContext } from "../context/authContext";
import color from 'color';
import { AnimatedLoadImage } from '../components/animated-load-image/AnimatedLoadImage';

import {useSelector, useDispatch} from 'react-redux';
import {retrieveAlbums} from '../store/actions/albums';

export const Feed = (props) => {
  const theme = useTheme();
  const imageBorderColor = color(theme.colors.text)
    .alpha(0.15)
    .rgb()
    .string();

  const dataSource = useSelector(state => state.albums);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveAlbums());
  }, [dispatch]);
  return (
    <Surface style={styles.container}>
      
      <Headline style={{color:theme.colors.text}}>Feed</Headline>
      
      <FlatList
        data={dataSource.albums}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => 
          <List.Item
            title={item.title}
            left={props => <List.Icon {...props} icon="folder" />}
            right={props => <List.Icon {...props} icon="menu-right" />}
          />
        }
        keyExtractor={(item) => item.id.toString()}
      />

    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
  },
  divider: {
    marginVertical:20,
  },
  image: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 30,
    width: 120,
    height: 80,
  },
  surface: {
    width: 120,
    height: 80,
    marginLeft:20,
    borderRadius: 30,
  },
  stdMarginVertical: {
    marginVertical: 20,
  }
});
