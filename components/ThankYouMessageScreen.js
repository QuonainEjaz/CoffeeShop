import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';

const ThankYouMessageScreen = ({route, navigation}) => {
  const deliveryType = route?.params?.deliveryType || 'defaultValue';
  console.log(deliveryType);

  const handleNavigation = () => {
    if (deliveryType === 'Pick Up') {
      navigation.navigate('TrackOrderPickup');
    } else {
      navigation.navigate('TrackOrderDelivery');
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.Backicon}>
        <Image
          source={require('../assets/pics/arrowLeft.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>Thank You</Text>
        <Text style={styles.subTitle}>For ordering from us</Text>
      </View>

      <View>
        <TouchableOpacity onPress={handleNavigation} style={styles.button}>
          <Text style={styles.buttonText}>Track Your Order</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.itemContainer}>
        <Image
          source={require('../assets/pics/user.png')}
          style={styles.itemImage}
        />
        <View style={styles.items}>
          <Text style={styles.itemTitle}>John Hawn</Text>
          <Text style={styles.itemDesc}>Coffee Shop</Text>
        </View>
        <View style={styles.quantity}>
          <TouchableOpacity>
            <Image
              source={require('../assets/pics/Call.png')}
              style={styles.call}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '4%',
    paddingVertical: '10%',
    paddingTop: '10%',
    paddingBottom: '10%',
  },
  Backicon: {
    position: 'absolute',
    left: 10,
    top: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    width: '10%',
  },
  icon: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    letterSpacing: 1,
    lineHeight: 25,
    marginBottom: 30,
    top: -30,
    color: '#C67C4E',
    left: 20,
  },
  subTitle: {
    fontSize: 20,
    color: '#808080',
    marginBottom: 20,
    top: -40,
    left: -10,
    letterSpacing: 1,
  },
  button: {
    backgroundColor: '#C67C4E',
    width: '100%',
    paddingHorizontal: '30%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginBottom: '1%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    top: 100,
  },
  itemImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 20,
  },
  items: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDesc: {
    fontSize: 14,
    color: '#888',
  },
  call: {
    width: 58,
    height: 58,
  },
});

export default ThankYouMessageScreen;
