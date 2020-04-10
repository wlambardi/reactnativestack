import React, { useEffect, useState } from 'react';
import { StyleSheet, RefreshControl, FlatList, View, Image } from 'react-native';
import { useTheme, Surface, List, Avatar, Text } from 'react-native-paper';
import color from 'color';
import {useSelector, useDispatch} from 'react-redux';
import {retrieveNews} from '../store/actions/news';
import Loader from "../util/loader";
import LoadingError from "../util/loadingError";


const AvatarImage = item => item.urlToImage ? <Avatar.Image style={styles.avatar} source={{ uri: item.urlToImage }} /> : <Avatar.Text style={styles.avatar} label="XD" />;

export const Feed = ({ navigation }) => {
  const theme = useTheme();
  const imageBorderColor = color(theme.colors.text)
    .alpha(0.15)
    .rgb()
    .string();

  const [refreshing, setRefreshing] = useState(false);
  const dataSource = useSelector(state => state.news);
  const dispatch = useDispatch();
  const [data, setData] = useState('');

  useEffect(() => {
    dispatch(retrieveNews());
  }, [dispatch]);

  function renderItem({ item }) {
    return (
      <Surface style={styles.container}>
        <List.Item
          title={item.title}
          description={item.source.name}
          left={() => <AvatarImage {...item}/>}
        />
      </Surface>
      
    );
  }
  function keyExtractor(item) {
    return Math.random().toString();
  }

  
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(retrieveNews());
    setRefreshing(false)
  }, [refreshing]);


  renderSeparator = () => <View style={{ height: StyleSheet.hairlineWidth }} />;

  if (dataSource.error) {
    return <LoadingError />;
  }else{
    if (dataSource.loadingNews) {
      return <Loader />;
    } else {
      if (dataSource.news !== null) {
        return (
          
            <FlatList
              ItemSeparatorComponent={renderSeparator}
              contentContainerStyle={{ backgroundColor: theme.colors.background }}
              style={{ backgroundColor: theme.colors.background }}
              data={dataSource.news.articles}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />
              }
            />
        );
      }
    }
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
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
  },
  avatar: {
    marginRight: 10,
  },
});
