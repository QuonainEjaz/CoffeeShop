import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import Favourites from './Favourities.js';
import Cart from './Cart.js';
import Notification from './Notification.js';

const {width, height} = Dimensions.get('window');
const Tab = createBottomTabNavigator();

const coffeeTypes = ['Cappuccino', 'Macchiato', 'Latte', 'Americano'];
const coffeeData = [
  {
    id: '1',
    name: 'Cappucino',
    price: '4.50',
    rating: '4.8',
    image: require('../assets/pics/cardImg1.png'),
  },
  {
    id: '2',
    name: 'Macchiato',
    price: '5.40',
    rating: '4.8',
    image: require('../assets/pics/cardImg2.png'),
  },
  {
    id: '3',
    name: 'Latte',
    price: '6.20',
    rating: '4.5',
    image: require('../assets/pics/cardImg3.png'),
  },
  {
    id: '4',
    name: 'Americano',
    price: '2.60',
    rating: '4.0',
    image: require('../assets/pics/cardImg4.png'),
  },
];

const Home = ({navigation}) => {
  const [category, setCategory] = useState('Cappuccino');
  const handlePress = item => {
    navigation.navigate('DetailView', {
      image: item.image,
      name: item.name,
      rating: item.rating,
      price: item.price,
    });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.head}>
            <View>
              <Text style={styles.location}>Location</Text>
              <Text style={styles.city}>
                Bilzen, Tanjungbalai{'  '}
                <Image source={require('../assets/pics/arrowDown.png')} />
              </Text>
            </View>
            <TouchableOpacity>
              <Image
                source={require('../assets/pics/profile_img.png')}
                style={styles.userImage}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.searchContainer}>
            <TouchableOpacity style={{marginLeft: 20}}>
              <Image
                source={require('../assets/pics/searchnormal.png')}
                style={{width: 30, height: 30}}
              />
            </TouchableOpacity>
            <TextInput
              placeholder="Search coffee"
              placeholderTextColor="#989898"
              style={styles.searchInput}
            />
            <TouchableOpacity style={styles.filterButton}>
              <Image
                source={require('../assets/pics/setting_icon.png')}
                style={{width: 30, height: 30}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.promoContainer}>
          <Image
            source={require('../assets/pics/dashboard.png')}
            style={styles.promoImage}
          />
          <View style={styles.promoOverlay}>
            <Text style={styles.promoTag}>Promo</Text>
            <Text style={styles.promoText}>Buy one get one Free</Text>
            <View style={styles.promoTextBackground1} />
            <View style={styles.promoTextBackground2} />
          </View>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={styles.categoryContainer}>
          {coffeeTypes.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setCategory(item)}
              style={[
                styles.categoryItem,
                category === item && {backgroundColor: '#C67C4E'},
              ]}>
              <Text
                style={[
                  styles.categoryText,
                  category === item && {color: '#fff'},
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.wrapper}>
          <FlatList
            data={coffeeData}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            numColumns={2}
            renderItem={({item}) => (
              <View style={styles.coffeeCard}>
                <TouchableOpacity onPress={() => handlePress(item)}>
                  <Image source={item.image} style={styles.coffeeImage} />
                  <Text style={styles.coffeeRating}>⭐  {item.rating}</Text>
                  <Text style={styles.coffeeName}>{item.name}</Text>
                  <Text style={styles.coffeeDescription}>with Chocolate</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={styles.coffeePrice}>$ {item.price}</Text>
                    <TouchableOpacity style={styles.addButton}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 20,
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }}>
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderStartRightRadius: 60,
        borderTopLeftRadius: 60,
      }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarInactiveBackgroundColor: '#fff',
          tabBarActiveBackgroundColor: '#f0f0f0',
          tabBarStyle: {
            height: 60,
            borderTopRightRadius: 60,
            borderTopLeftRadius: 60,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <Image
                source={require('../assets/pics/Home.png')}
                style={{
                  width: 27.26,
                  height: 25.79,
                  marginTop: 15,
                  borderTopRightRadius: 60,
                  borderTopLeftRadius: 60,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favourites}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <Image
                source={require('../assets/pics/Heart.png')}
                style={{
                  width: 27.26,
                  height: 25.79,
                  marginTop: 15,
                  borderTopRightRadius: 60,
                  borderTopLeftRadius: 60,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <Image
                source={require('../assets/pics/Bag.png')}
                style={{
                  width: 27.26,
                  height: 25.79,
                  marginTop: 15,
                  borderTopRightRadius: 60,
                  borderTopLeftRadius: 60,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <Image
                source={require('../assets/pics/Notification.png')}
                style={{
                  width: 27.26,
                  height: 25.79,
                  marginTop: 15,
                  borderTopRightRadius: 60,
                  borderTopLeftRadius: 60,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = {
  header: {
    backgroundColor: '#131313',
    height: height * 0.33,
    padding: 10,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1%',
    padding: '5%',
  },
  location: {color: '#fff', fontSize: 14},
  city: {fontSize: 16, fontWeight: 'bold', color: '#fff'},
  userImage: {width: width * 0.14, height: width * 0.14, borderRadius: 5},
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#313131',
    width: width * 0.86,
    height: height * 0.08,
    borderRadius: 15,
    alignItems: 'center',
    marginHorizontal: 'auto',
  },
  searchInput: {flex: 1, marginLeft: 20},
  filterButton: {
    backgroundColor: '#C67C4E',
    paddingHorizontal: '2.9%',
    paddingVertical: '2.8%',
    borderRadius: 8,
    marginRight: 10,
    width: width * 0.13,
    height: height * 0.066,
  },
  promoContainer: {
    position: 'relative',
    top: '-6%',
    marginHorizontal: '7%',
    marginBottom: '-17%',
  },
  promoImage: {width: '100%', height: height * 0.2, borderRadius: 15},
  promoOverlay: {position: 'absolute', top: '10%', left: '8%'},
  promoTag: {
    backgroundColor: '#ED5151',
    color: '#ffffff',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 2,
    width: '20%',
  },
  promoText: {
    fontSize: 42,
    letterSpacing: 2,
    lineHeight: 52,
    fontWeight: 'bold',
    color: '#fff',
    top: 10,
    left: '2%',
    width: '60%',
    zIndex: 10,
  },
  promoTextBackground1: {
    backgroundColor: '#1C1C1C',
    width: '59%',
    height: 27,
    top: -56,
  },
  promoTextBackground2: {
    backgroundColor: '#1C1C1C',
    width: '45%',
    height: 25,
    top: -40,
  },
  categoryContainer: {
    marginTop: '5%',
    marginBottom: '5%',
    paddingHorizontal: '8%',
  },
  categoryItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginRight: 15,
    backgroundColor: '#F3F3F3',
  },
  categoryText: {
    fontSize: 16,
    color: '#888',
    fontWeight: '600',
    letterSpacing: 2,
  },
  wrapper: {
    flex: 1,
    marginHorizontal: 'auto',
    marginBottom: '10%',
  },
  coffeeCard: {
    backgroundColor: '#F3F3F3',
    padding: 5,
    borderRadius: 10,
    margin: 3,
    marginBottom: 10,
    width: width * 0.42,
    paddingBottom: 20,
  },
  coffeeImage: {width: '100%', height: 130, borderRadius: 10},
  coffeeRating: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFffff',
    position: 'absolute',
    top: 12,
    left: 12,
  },
  coffeeName: {
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 5,
  },
  coffeeDescription: {
    fontSize: 14,
    marginTop: 0,
    color: '#888',
    letterSpacing: 1,
    marginLeft: 5,
  },
  coffeePrice: {
    fontSize: 22,
    color: '#2F4B4E',
    fontWeight: '700',
    marginTop: 10,
    marginLeft: 7,
  },
  addButton: {
    backgroundColor: '#C67C4E',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 10,
    top: 15,
    marginRight: 7,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
