import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import FavoriteScreen from './FavoriteScreen';
import DetailScreen from '../Detail';

const Stack = createStackNavigator();

export default function () {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
