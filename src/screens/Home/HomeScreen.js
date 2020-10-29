import React from 'react';
import {SafeAreaView, View, StatusBar, Text} from 'react-native';

import BaseScreen from '../../components/BaseScreen';
import {styles} from '../../style';

export default class HomeScreen extends BaseScreen {
  constructor() {
    super();
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <StatusBar barStyle="dark-content" />
        </View>
        <Text>home</Text>
      </SafeAreaView>
    );
  }
}
