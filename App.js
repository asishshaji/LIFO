import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './src/Screens/LoginScreen';
import VideoScreen from './src/Screens/VideoScreen';

import React from 'react';

const LoginStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    VideoScreen: {
      screen: VideoScreen,
    },
  },
  {
    initialRouteName: 'Login',
  },
);
const App = createAppContainer(LoginStack);

export default App;
