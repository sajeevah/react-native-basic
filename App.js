import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import HelloWorldApp from './components/HelloWorldApp';
import Bananas from './components/Bananas';
import LotsOfGreetings from './components/LotsOfGreetings';

const App = () => {
  return (
    <LotsOfGreetings />
  );
};

export default App;
