import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const DetailView = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/pics/img3.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Detail</Text>
        <TouchableOpacity style={styles.icon}>
          <Image
            source={require('../assets/pics/img2.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <Image
        source={require('../assets/pics/card-img1.png')}
        style={styles.coffeeImage}
      />

      <Image
        source={require('../assets/pics/img1.png')}
        style={{width: 50, height: 50, top: 65, left: 240}}
      />
      <Image
        source={require('../assets/pics/img4.png')}
        style={{width: 50, height: 50, top: 15, left: 310}}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Cappucino</Text>
        <Text style={styles.subtitle}>with Chocolate</Text>
        <View style={styles.rating}>
          <Text style={styles.ratingText}>⭐ 4.8</Text>
          <Text style={styles.reviews}>(230)</Text>
        </View>
      </View>
      <Image
        style={{
          width: 350,
          height: 1,
          position: 'relative',
          left: 10,
          top: -68,
        }}
        source={require('../assets/pics/Line.png')}
      />

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.description}>
          A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of
          espresso coffee and 85ml of fresh milk the fo..{' '}
          <Text style={styles.readMore}>Read More</Text>
        </Text>
      </View>

      <Text style={styles.sizeTitle}>Size</Text>
      <View style={styles.sizeContainer}>
        <TouchableOpacity
          style={[styles.sizeButton, styles.sizeButtonInactive]}>
          <Text style={styles.sizeButtonText}>S</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.sizeButton, styles.sizeButtonActive]}>
          <Text style={[styles.sizeButtonText, styles.activeSizeText]}>M</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sizeButton, styles.sizeButtonInactive]}>
          <Text style={styles.sizeButtonText}>L</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.priceTitle}>Price</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>$ 4.53</Text>
        <TouchableOpacity
          style={styles.buyButton}
          onPress={() => navigation.navigate('OrderDeliverScreen')}>
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 14,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 34,
    marginBottom: 32,
  },
  headerText: {
    marginTop: 10,
    fontSize: 24,
    color: '#2F2D2C',
    lineHeight: 22.63,
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 5,
    marginRight: 20,
    width: 28,
    height: 28,
  },
  coffeeImage: {
    zIndex: 1,
    width: 350,
    height: 246,
    left: 20,
    borderRadius: 20,
  },
  infoContainer: {
    marginBottom: 30,
    paddingHorizontal: 20,
    top: -70,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
    letterSpacing: 1,
    lineHeight: 22.5,
    marginTop: -8,
    marginLeft: 2,
  },
  subtitle: {
    fontSize: 14,
    color: '#9B9B9B',
    marginVertical: 10,
    letterSpacing: 1,
    marginLeft: 2,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginRight: 4,
  },
  reviews: {
    fontSize: 16,
    color: '#7D7D7D',
    marginTop: 3,
  },
  descriptionContainer: {
    paddingHorizontal: 20,
    top: -50,
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    left: -2,
    fontWeight: 400,
    fontSize: 16,
    color: '#9B9B9B',
    lineHeight: 24.96,
    letterSpacing: 0.1,
    padding: 5,
  },
  readMore: {
    fontFamily: 'Sora-Regular',
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 22.96,
    color: '#C67C4E',
  },
  sizeTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    color: '#000',
    top: -30,
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    paddingHorizontal: 20,
    top: -20,
  },
  sizeButton: {
    width: 96,
    height: 43,
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    gap: 10,
    color: '#FFF5EE',
  },
  sizeButtonActive: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C67C4E',
    backgroundColor: '#FFF5EE',
  },
  sizeButtonInactive: {
    borderColor: '#FFF5EE',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DEDEDE',
  },
  sizeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  activeSizeText: {
    color: '#C67C4E',
  },
  priceTitle: {
    fontSize: 18,
    color: '#9B9B9B',
    left: 22,
    zIndex: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 60,
    borderWidth: 1,
    borderColor: '#F1F1F1',
    backgroundColor: '#F9F9F9',
    top: -60,
    borderTopEndRadius: 35,
    borderTopStartRadius: 35,
    marginHorizontal: -20,
  },

  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#C67C4E',
    bottom: -22,
    marginLeft: 20,
  },
  buyButton: {
    marginTop: 20,
    backgroundColor: '#C67C4E',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    width: '60%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default DetailView;
