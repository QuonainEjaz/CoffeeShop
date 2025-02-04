import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen';
import DetailView from './components/DetailView';
import OrderDeliverScreen from './components/OrderDeliverScreen';
import  OrderPickupScreen from './components/OrderPickupScreen';
import ThankYouMessageScreen from './components/ThankYouMessageScreen';
import TrackOrder from './components/TrackOrder';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
import { enableScreens } from 'react-native-screens';
enableScreens();

const App = () => {
  return (
    <NavigationContainer >
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DetailView"
            component={DetailView}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="OrderDeliverScreen"
            component={OrderDeliverScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="OrderPickupScreen"
            component={OrderDeliverScreen} 
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ThankYouMessageScreen"
            component={ThankYouMessageScreen}
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