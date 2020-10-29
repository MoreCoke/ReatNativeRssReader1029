import React from 'react';
import {NavigationContext} from '@react-navigation/native';

export const withNavigation = (Component) => (props) => (
  <NavigationContext.Consumer>
    {(navigation) => <Component navigation={navigation} {...props} />}
  </NavigationContext.Consumer>
);

export const delay = (ms) => new Promise((r) => setTimeout(r, ms));
