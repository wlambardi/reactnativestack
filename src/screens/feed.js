import React, { useEffect } from 'react';
import { StyleSheet, ScrollView, FlatList } from 'react-native';
import { useTheme, Surface, Headline, List } from 'react-native-paper';
import color from 'color';
import {useSelector, useDispatch} from 'react-redux';
import {retrieveAlbums} from '../store/actions/albums';
import Loader from "../util/loader";

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

  if (dataSource.loadingAlbums) {
    return <Loader />;
  } else {
    if (dataSource.albums !== null) {
      return (
        <Surface style={styles.container}>
          <FlatList
            data={dataSource.albums}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => 
              <List.Item
                title={item.title}
                left={props => <List.Icon {...props} icon="folder" />}
              />
            }
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
