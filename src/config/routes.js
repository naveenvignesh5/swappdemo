import React from 'react';
import { createStackNavigator } from 'react-navigation';

// Screens
import { Home, Albums } from '../screens';

// Constants
import { NAVIGATION } from '../constants/routeNames';

const routes = {
  [NAVIGATION.home]: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  [NAVIGATION.albums]: {
    screen: Albums,
    navigationOptions: {
      header: null,
    },
  }
};

const AppNavigator = createStackNavigator({ ...routes });

export default AppNavigator;
