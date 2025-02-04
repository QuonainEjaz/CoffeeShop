import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
const Tab = createBottomTabNavigator();

const coffeeTypes = ['Cappuccino', 'Macchiato', 'Latte', 'Americano'];
const coffeeData = [
  {
    id: '1',
    name: 'Cappucino',
    price: '$ 4.53',
    rating: '4.8',
    image: require('../assets/pics/card-img1.png'),
  },
  {
    id: '2',
    name: 'Cappucino',
    price: '$ 4.53',
    rating: '4.8',
    image: require('../assets/pics/card-img2.png'),
  },
  {
    id: '3',
    name: 'Cappucino',
    price: '$ 4.53',
    rating: '4.5',
    image: require('../assets/pics/card-img3.png'),
  },
  {
    id: '4',
    name: 'Cappucino',
    price: '$ 4.53',
    rating: '4.0',
    image: require('../assets/pics/card-img4.png'),
  },
];

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <ScrollView>
        <View style={{backgroundColor: '#131313', height: 300, padding: 10}}>
          <View style={styles.head}>
            <View>
              <Text style={styles.location}>Location</Text>
              <Text style={styles.city}>
                Bilzen, Tanjungbalai{'  '}
                <Image source={require('../assets/pics/arrow-down.png')} />
              </Text>
            </View>
            <TouchableOpacity>
              <Image
                source={require('../assets/pics/profile-img.png')}
                style={styles.userImage}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.searchContainer}>
            <TouchableOpacity style={{marginLeft: 20}}>
              <Image
                source={require('../assets/pics/search-normal.png')}
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
                source={require('../assets/pics/setting-icon.png')}
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
          </View>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={styles.categoryContainer}>
          {coffeeTypes.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.categoryItem,
                index === 0 && {backgroundColor: '#C67C4E'},
              ]}>
              <Text
                style={[styles.categoryText, index === 0 && {color: '#fff'}]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.wrapper}>
          <FlatList
            data={coffeeData}
            keyExtractor={item => item.id}
            numColumns={2}
            renderItem={({item}) => (
              <View style={styles.coffeeCard}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('DetailView')}>
                  <Image source={item.image} style={styles.coffeeImage} />
                </TouchableOpacity>

                <Text style={styles.coffeeRating}>⭐ {item.rating}</Text>
                <Text style={styles.coffeeName}>{item.name}</Text>
                <Text style={styles.coffeeDescription}>with Chocolate</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.coffeePrice}>{item.price}</Text>
                  <TouchableOpacity style={styles.addButton}>
                    <Text style={{color: '#fff', fontSize: 20}}>+</Text>
                  </TouchableOpacity>
                </View>
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
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarStyle: {height: 60}}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image
              source={require('../assets/pics/Home.png')}
              style={{width: 27.26, height: 25.79, marginTop: 15}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image
              source={require('../assets/pics/Heart.png')}
              style={{width: 27.26, height: 25.79, marginTop: 15}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="."
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image
              source={require('../assets/pics/Bag.png')}
              style={{width: 27.26, height: 25.79, marginTop: 15}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image
              source={require('../assets/pics/Notification.png')}
              style={{width: 27.26, height: 25.79, marginTop: 15}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;

const styles = {
  container: {},
  header: {
    flex: 1,
    padding: 20,
  },
  head: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 20,
    top: -30,
  },
  location: {color: '#888', fontSize: 14, color: '#fff'},
  city: {fontSize: 16, fontWeight: 'bold', color: '#fff'},
  userImage: {width: 54, height: 54, borderRadius: 5},

  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#313131',
    width: 350,
    height: 62,
    borderRadius: 15,
    alignItems: 'center',
    margin: 10,
    marginHorizontal: 20,
    top: -80,
  },
  searchInput: {flex: 1, marginLeft: 20},
  filterButton: {
    backgroundColor: '#C67C4E',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
    width: 50,
    height: 50,
  },

  promoContainer: {
    position: 'absolute',
    top: 200,
    left: 0,
    right: 0,
    marginBottom: 20,
    padding: 30,
  },
  promoImage: {width: '100%', height: 165, borderRadius: 15},
  promoOverlay: {position: 'absolute', top: 50, left: 50},
  promoTag: {
    flex: 1,
    backgroundColor: '#ED5151',
    color: '#ffffff',
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 10,
    width: 60,
    height: 30,
    fontfamily: 'Sora',
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 17.64,
  },
  promoText: {
    fontSize: 32,
    fontWeight: '600',
    lineHeight: 40.32,
    width: 200,
    color: '#ffffff',
    letterSpacing: 1,
    top: 20,
    height: 100,
    textShadowColor: '#000',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 3,
  },
  categoryContainer: {
    flex: 1,
    marginTop: 120,
    marginLeft: 30,
    marginBottom: 20,
  },
  categoryItem: {
    padding: 10,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: '#F3F3F3',
  },
  categoryText: {fontSize: 16, color: '#888'},
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
  },
  coffeeCard: {
    backgroundColor: '#ffffff',
    padding: 5,
    borderRadius: 15,
    margin: 7,
  },
  coffeeImage: {width: 162, height: 152, borderRadius: 10},
  coffeeRating: {
    fontSize: 14,
    color: '#FFffff',
    marginTop: 5,
    position: 'relative',
    top: -145,
    left: 10,
  },
  coffeeName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: -20,
    marginLeft: 10,
  },
  coffeeDescription: {
    fontSize: 12,
    marginTop: 5,
    marginLeft: 10,
    color: '#888',
  },
  coffeePrice: {
    fontSize: 18,
    color: '#2F4B4E',
    marginTop: -5,
    marginLeft: 10,
    fontWeight: '600',
  },
  addButton: {
    backgroundColor: '#C67C4E',
    paddingHorizontal: 13,
    paddingVertical: 2,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 10,
  },
};
