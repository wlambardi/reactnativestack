import React, { useEffect } from 'react';
import { StyleSheet, ScrollView, FlatList } from 'react-native';
import { useTheme, Surface, Headline, List, Text } from 'react-native-paper';
import color from 'color';
import {useSelector, useDispatch} from 'react-redux';
import {retrieveAlbums} from '../store/actions/albums';
import Loader from "../util/loader";
import { w, h } from "../util/Dimensions";
import { FlatGrid } from 'react-native-super-grid';
import { AnimatedLoadImage } from '../components/animated-load-image/AnimatedLoadImage';

export const Album = (props) => {
  const theme = useTheme();
  const imageBorderColor = color(theme.colors.text)
    .alpha(0.15)
    .rgb()
    .string();

  const dataSource = useSelector(state => state.albums);
  const dispatch = useDispatch();

  const qry = () => {
    var RandomNumber = Math.floor(Math.random() * 5) + 1 ;
    var response = '';
    switch(RandomNumber){
      case 1: 
        response='sports';
        break;
      case 2: 
        response='nature';
        break;
      case 3: 
        response='water';
        break;
      case 4: 
        response='fire';
        break;
      case 5: 
        response='cars';
        break;
      case 6: 
        response='people';
        break;
      case 7: 
        response='music';
        break;
      case 8: 
        response='beach';
        break;
      case 9: 
        response='city';
        break;
      default: 
        response='fire,people,sports,water,nature';
        break;
    }

    return response;
  };

  useEffect(() => {
    dispatch(retrieveAlbums());
  }, [dispatch]);

  if (dataSource.loadingAlbums) {
    return <Loader />;
  } else {
    if (dataSource.albums !== null) {
      return (
        <Surface style={styles.container}>
          
          <FlatGrid
            itemDimension={w(25)}
            items={dataSource.albums}
            renderItem={({ item }) => (
              <AnimatedLoadImage
                source={{ uri: 'https://source.unsplash.com/1600x900/?'+qry() }}
                style={[
                  styles.image,
                  {
                    borderColor: imageBorderColor,
                  },
                ]}
              />
            )}
          />

        </Surface>
      );
    }
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:5,
  },
  divider: {
    marginVertical:20,
  },
  image: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    width: '100%',
    height: w(25),
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
