import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IPhone13mini_1 from './components/IPhone13mini_1';
import IPhone13mini_2 from './components/IPhone13mini_2';
import IPhone13mini_3 from './components/IPhone13mini_3';
import IPhone13mini_4 from './components/IPhone13mini_4';
import IPhone13mini_5 from './components/IPhone13mini_5';
import IPhone13mini_6 from './components/IPhone13mini_6';
import TrackOrder from './components/TrackOrder';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
import { enableScreens } from 'react-native-screens';
enableScreens();

const App = () => {
  return (
    <NavigationContainer >
        <Stack.Navigator initialRouteName="IPhone13mini_1">
          <Stack.Screen
            name="IPhone13mini_1"
            component={IPhone13mini_1}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="IPhone13mini_2"
            component={IPhone13mini_2}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="IPhone13mini_3"
            component={IPhone13mini_3}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="IPhone13mini_4"
            component={IPhone13mini_4}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="IPhone13mini_5"
            component={IPhone13mini_5}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="IPhone13mini_6"
            component={IPhone13mini_6}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TrackOrder"
            component={TrackOrder}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};


export default App;