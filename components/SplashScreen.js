import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';

const SplashScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:1}}>
      <ImageBackground
        style={styles.bg1}
        source={require('../assets/pics/background_image.png')}>
          <View style={{flex:1.6}}></View>
      <View style={styles.bg2}>
        <Text style={styles.text}>
          Coffee so good, your taste buds will love it.
        </Text>
        <Text style={styles.subtext}>
          The best grain, the finest roast, the powerful flavor.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Image
            style={styles.logo}
            source={require('../assets/pics/googleLogo.png')}
          />
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
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
    resizeMode:'stretch',
    height:'100%',
    width:'100%',
  },
  bg2: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 42,
    color: '#FFFFFF',
    fontWeight: '600',
    lineHeight: 44.84,
    letterSpacing: 1,
    textAlign: 'center',
    width: '80%',
    top: '-12%',
  },
  subtext: {
    fontSize: 18,
    color: '#A9A9A9',
    lineHeight: 21.56,
    letterSpacing: 1,
    textAlign: 'center',
    width: '80%',
    marginBottom: '5%',
    top: '-5%',
  },
  logo: {width: 35, height: 37, left: -10},
  buttonText: {fontSize: 25, color: '#0000008A', fontWeight: 500},
  button: {
    backgroundColor: '#FFFFFF',
    width: '85%',
    height: '21%',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '7%',
    top: '-5%',
  },
});

export default SplashScreen;
