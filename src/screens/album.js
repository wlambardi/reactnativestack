import React, { useEffect } from 'react';
import { StyleSheet, RefreshControl } from 'react-native';
import { useTheme, Surface, Headline, List, Text } from 'react-native-paper';
import color from 'color';
import {useSelector, useDispatch} from 'react-redux';
import {retrieveNews} from '../store/actions/news';
import Loader from "../util/loader";
import LoadingError from "../util/loadingError";

import { w, h } from "../util/Dimensions";
import { FlatGrid } from 'react-native-super-grid';
import { AnimatedLoadImage } from '../components/animated-load-image/AnimatedLoadImage';

export const Album = (props) => {
  const theme = useTheme();
  const imageBorderColor = color(theme.colors.text)
    .alpha(0.15)
    .rgb()
    .string();

  const dataSource = useSelector(state => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveNews());
  }, [dispatch]);

  const onRefresh = React.useCallback(() => {
    dispatch(retrieveNews());
  }, [dispatch]);

  if (dataSource.error) {
    return <LoadingError />;
  }else{
    if (dataSource.loadingNews) {
      return <Loader />;
    } else {
      if (dataSource.news !== null) {
        return (
          <Surface style={styles.container}>
            
            { dataSource.news.articles &&
            <FlatGrid
              itemDimension={w(20)}
              items={dataSource.news.articles}
              keyExtractor={item => item.urlToImage}
              refreshControl={
                <RefreshControl
                  onRefresh={onRefresh}
                />
              }
              renderItem={({ item }) => (
                item.urlToImage && 
                <AnimatedLoadImage
                  source={{ uri: item.urlToImage }}
                  style={[
                    styles.image,
                    {
                      borderColor: imageBorderColor,
                    },
                  ]}
                />
                
              )}
            />
            }
          </Surface>
        );
      }
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
    height: w(20),
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
