import React from 'react';
import {View, Text, StyleSheet,} from 'react-native';
// import 'react-native-gesture-handler';

import HomeScreen from './HomeScreen';
import SplashScreen from './SplashScreen';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// const Drawer = createDrawerNavigator();

const TrackOrder = () => {
  return (
    <View style={styles.container}>
      <Text>Track Order</Text>
    </View>
    // <Drawer.Navigator
    //   initialRouteName="HomeScreen"
    //   drawerContentOptions={{
    //     activeTintColor: '#e91e63',
    //     itemStyle: {marginVertical: 5},
    //   }}
    //   drawerStyle={{
    //     backgroundColor: '#c6cbef',
    //     width: 240,
    //   }}>
    //   <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    //   <Drawer.Screen name="SplashScreen" component={SplashScreen} />
    // </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});

export default TrackOrder;
