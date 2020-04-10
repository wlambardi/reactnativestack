import React, { useEffect, useState } from 'react';
import { StyleSheet, RefreshControl, FlatList, View } from 'react-native';
import { useTheme, Surface, List } from 'react-native-paper';
import color from 'color';
import {useSelector, useDispatch} from 'react-redux';
import {retrieveNews} from '../store/actions/news';
import Loader from "../util/loader";
import LoadingError from "../util/loadingError";
import { DataPresent } from '../components/dataPresent';

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
    return <DataPresent {...item} />;
  }
  function keyExtractor(item) {
    return Math.random().toString();
  }

  useEffect(() => {
    if (JSON.stringify(dataSource.news).length>2){
      setData(dataSource.news.articles.map(aux => ({
        ...aux,
        navigation,
        onPress: () =>
          navigation &&
          navigation.push('Details', {
            ...aux,
          }),
      })));
    }
  }, [dataSource]);
  
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
          <Surface style={styles.container}>
            <FlatList
              ItemSeparatorComponent={renderSeparator}
              contentContainerStyle={{ backgroundColor: theme.colors.background }}
              style={{ backgroundColor: theme.colors.background }}
              data={data}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />
              }
            />
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
