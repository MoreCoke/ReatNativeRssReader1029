import {Component} from 'react';
import {BackHandler} from 'react-native';

class BaseScreen extends Component {
  constructor() {
    super();
    this.onScreenEnter = this.onScreenEnter.bind(this);
    this.onScreenLeave = this.onScreenLeave.bind(this);
    this.onAndroidBack = this.onAndroidBack.bind(this);
  }

  componentDidMount() {
    const {navigation} = this.props;
    navigation.addListener('focus', this.onScreenEnter);
    navigation.addListener('blur', this.onScreenLeave);
    BackHandler.addEventListener('hardwareBackPress', this.onAndroidBack);
  }

  componentWillUnmount() {
    const {navigation} = this.props;
    navigation.removeListener('focus', this.onScreenEnter);
    navigation.removeListener('blur', this.onScreenLeave);
    BackHandler.removeEventListener('hardwareBackPress', this.onAndroidBack);
  }

  onScreenEnter() {
    console.log('enter');
  }

  onScreenLeave() {
    console.log('leave');
  }

  onAndroidBack() {
    console.log('Android back');
  }
}

export default BaseScreen;
