import React from 'react';
import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen';
import DetailView from './components/DetailView';
import Order from './components/Order';
import ThankYouMessageScreen from './components/ThankYouMessageScreen';
import TrackOrderPickup from './components/TrackOrderPickup';
import TrackOrderDelivery from './components/TrackOrderDelivery';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
import { enableScreens } from 'react-native-screens';
enableScreens();

const App = () => {
  return (
    <NavigationContainer >
        <Stack.Navigator initialRouteName="SplashScreen"  >
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
            name="Order"
            component={Order}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ThankYouMessageScreen"
            component={ThankYouMessageScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TrackOrderPickup"
            component={TrackOrderPickup}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TrackOrderDelivery"
            component={TrackOrderDelivery}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};


export default App;