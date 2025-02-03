import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar
} from 'react-native';

const IPhone13mini_1 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar BarStyle="light-content" style={{ backgroundColor: '#010101' }} />
      <ImageBackground
        style={styles.bg1}
        source={require('../assets/pics/bg1.png')}>
        <Text style={styles.text}>
          Coffee so good, your taste buds will love it.
        </Text>
      </ImageBackground>
      <View style={styles.bg2}>
        <Text style={styles.subtext}>
          The best grain, the finest roast, the powerful flavor.
        </Text>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('IPhone13mini_2')}>
          <Image style={{width: 33, height: 33, left:-8}} source={require('../assets/pics/Google-Logo.png')} />
          <Text style={{fontSize: 20, color: '#0000008A', fontWeight: 500}}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010101',
  },
  bg1: {
    flex: 1.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bg2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 34,
    color: '#FFFFFF',
    fontWeight: 'bold',
    lineHeight: 42.84,
    letterSpacing: 1,
    textAlign: 'center',
    width: 300,
    height: 134,
    marginTop: 630,
  },
  subtext: {
    fontSize: 14,
    color: '#A9A9A9',
    lineHeight: 21.56,
    letterSpacing: 1,
    textAlign: 'center',
    width: 314,
    height: 42,
    top: 40,
  },
  button: {
    backgroundColor: '#FFFFFF',
    width: 300,
    height: 54,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: 70,
  },
});

export default IPhone13mini_1;
