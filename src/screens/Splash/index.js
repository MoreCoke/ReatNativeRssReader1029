import {SafeAreaView, View, Text, StatusBar} from 'react-native';

import BaseScreen from '../../components/BaseScreen';
import {styles} from '../../style';

export default class SplashScreen extends BaseScreen {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View>
          <Text>SplashScreen</Text>
        </View>
      </SafeAreaView>
    );
  }
}
