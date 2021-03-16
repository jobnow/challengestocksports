import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import { Routes } from './src/routes/routes';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Routes />
    </>
  );
};

export default App;
