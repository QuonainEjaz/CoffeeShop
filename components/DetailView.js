import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const DetailView = ({route, navigation}) => {
  const [activeSize, setActiveSize] = useState('S');
  const [activeHeart, setActiveHeart] = useState(false);
  const [price1, setPrice] = useState(route.params?.price);
  const price = [
    {size: 'M', price: route.params?.price * 1.15},
    {size: 'L', price: route.params?.price * 1.25},
    {size: 'S', price: route.params?.price},
  ];
  const handlePress = size => {
    setActiveSize(size);
    setPrice(
      size === 'S'
        ? route.params?.price
        : size === 'M'
        ? price[0]?.price
        : price[1]?.price,
    );
  };
  const handleOnPress = () => {
    navigation.navigate('Order', {
      name: route.params.name,
      Price:
        route.params.price && activeSize === 'M'
          ? price[0]?.price
          : activeSize === 'L'
          ? price[1]?.price
          : price[2]?.price,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/pics/arrowLeft.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Detail</Text>
          <TouchableOpacity
            style={[styles.icon, activeHeart ? styles.activeHeart : null]}
            onPress={() => setActiveHeart(!activeHeart)}>
            <Image
              source={require('../assets/pics/Heart.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <Image source={route.params.image} style={styles.coffeeImage} />
        <View style={styles.coffeeInfoBox}>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{route.params.name}</Text>
            <Text style={styles.subtitle}>with Chocolate</Text>
            <View style={styles.rating}>
              <Text style={styles.ratingText}>⭐ {route.params.rating}</Text>
              <Text style={styles.reviews}>(230)</Text>
            </View>
          </View>
          <View style={styles.imgContainer}>
            <Image
              source={require('../assets/pics/img1.png')}
              style={styles.img1}
            />
            <Image
              source={require('../assets/pics/img4.png')}
              style={styles.img4}
            />
          </View>
        </View>

        <Image
          style={styles.line1}
          source={require('../assets/pics/Line.png')}
        />

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.description}>
            A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml
            of espresso coffee and 85ml of fresh milk the fo...
            <Text style={styles.readMore}>Read More</Text>
          </Text>
        </View>

        <Text style={styles.sizeTitle}>Size</Text>
        <View style={styles.sizeContainer}>
          <TouchableOpacity
            style={[
              styles.sizeButton,
              activeSize === 'S'
                ? styles.sizeButtonActive
                : styles.sizeButtonInactive,
            ]}
            onPress={() => handlePress('S')}>
            <Text
              style={[
                styles.sizeButtonText,
                activeSize === 'S' ? styles.activeSizeText : null,
              ]}>
              S
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.sizeButton,
              activeSize === 'M'
                ? styles.sizeButtonActive
                : styles.sizeButtonInactive,
            ]}
            onPress={() => handlePress('M')}>
            <Text
              style={[
                styles.sizeButtonText,
                activeSize === 'M' ? styles.activeSizeText : null,
              ]}>
              M
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.sizeButton,
              activeSize === 'L'
                ? styles.sizeButtonActive
                : styles.sizeButtonInactive,
            ]}
            onPress={() => handlePress('L')}>
            <Text
              style={[
                styles.sizeButtonText,
                activeSize === 'L' ? styles.activeSizeText : null,
              ]}>
              L
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.priceTitle}>Price</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>$ {Number(price1).toFixed(2)}</Text>
          <TouchableOpacity style={styles.buyButton} onPress={handleOnPress}>
            <Text style={styles.buyButtonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: '4%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '6%',
    marginBottom: '8%',
  },
  headerText: {
    marginTop: '2%',
    fontSize: 24,
    color: '#2F2D2C',
    lineHeight: 22.63,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: '4%',
    width: 28,
    height: 28,
  },
  coffeeImage: {
    width: '95%',
    height: 220,
    alignSelf: 'center',
    borderRadius: 20,
  },
  coffeeInfoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '4%',
    marginVertical: '5%',
  },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: '10%',
    width: '36%',
  },
  img1: {width: 50, height: 50},
  img4: {width: 50, height: 50},
  infoContainer: {
    marginBottom: '2%',
  },
  line1: {
    width: '95%',
    marginHorizontal: 'auto',
    height: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    letterSpacing: 2,
    lineHeight: 22.5,
  },
  subtitle: {
    fontSize: 14,
    color: '#9B9B9B',
    marginVertical: '5%',
    letterSpacing: 1,
    marginLeft: '1%',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '1%',
  },
  ratingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginRight: '1%',
  },
  reviews: {
    fontSize: 16,
    color: '#7D7D7D',
    marginTop: '1%',
  },
  descriptionContainer: {
    paddingHorizontal: '4%',
    marginTop: '4%',
    marginBottom: '4%',
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: '3%',
  },
  description: {
    fontWeight: 500,
    fontSize: 16,
    color: '#9B9B9B',
    lineHeight: 28.96,
    letterSpacing: 0.5,
  },
  readMore: {
    fontFamily: 'Sora-Regular',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 28.96,
    color: '#C67C4E',
  },
  sizeTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#000',
    paddingHorizontal: '4%',
    marginBottom: '4%',
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    marginBottom: '4%',
  },
  sizeButton: {
    width: 90,
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    width: '50%',
    fontSize: 20,
    color: '#9B9B9B',
    marginTop: -25,
    top: 40,
    left: 22,
    zIndex: 1,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderWidth: 1,
    borderColor: '#F1F1F1',
    borderTopEndRadius: 35,
    borderTopStartRadius: 35,
    marginHorizontal: -20,
    marginBottom: 'auto',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginHorizontal: -20,
    marginBottom: 'auto',
    bottom: 'auto',
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
  activeHeart: {
    backgroundColor: '#C67C4EC0',
    borderRadius: 20,
  },
});

export default DetailView;
