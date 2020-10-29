import {SafeAreaView, View, Text} from 'react-native';

import BaseScreen from '../../components/BaseScreen';

export default class DetailScreen extends BaseScreen {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <StatusBar barStyle="dark-content" />
        </View>
        <Text>detail</Text>
      </SafeAreaView>
    );
  }
}
