import React, { useEffect } from 'react';
import color from 'color';
import { Dimensions } from 'react-native';
import { useTheme } from 'react-native-paper';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import overlay from '../util/overlay';
import { Feed } from '../screens/feed';
import { Album } from '../screens/album';

const initialLayout = { width: Dimensions.get('window').width };
const All = () => <Feed />;
const PhotoAlbum = () => <Album />;

export const Notifications = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'all', title: 'All' },
    { key: 'album', title: 'Album' },
  ]);

  const theme = useTheme();

  const renderScene = SceneMap({
    all: All,
    album: PhotoAlbum,
  });

  const tabBarColor = theme.dark
    ? (overlay(4, theme.colors.surface))
    : theme.colors.surface;

  const rippleColor = theme.dark
    ? color(tabBarColor).lighten(0.5)
    : color(tabBarColor).darken(0.2);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: theme.colors.primary }}
      style={{ backgroundColor: tabBarColor, shadowColor: theme.colors.text }}
      labelStyle={{ color: theme.colors.primary }}
      pressColor={rippleColor}
    />
  );
  
  return (
    <React.Fragment>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
    </React.Fragment>
  );
};
