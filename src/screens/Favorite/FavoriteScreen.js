import React from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';

import {styles} from '../../style';
import BaseScreen from '../../components/BaseScreen';

export default class FavoriteScreen extends BaseScreen {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View>
          <Text>FavoriteScreen</Text>
        </View>
      </SafeAreaView>
    );
  }
}
