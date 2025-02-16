import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const TrackOrder = ({navigation}) => {
  const {width, height} = Dimensions.get('window');
  const [progress, setProgress] = useState(75);
  return (
    <View style={styles.container}>
      <View style={[styles.mapPlaceholder, {height: height * 0.6}]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.Backicon}>
          <Image
            source={require('../assets/pics/arrowLeft.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.timeLeft}>10 minutes left</Text>
        <Text style={styles.subtitle}>Pickup time</Text>
        <View style={styles.progressBarContainer}>
                  <View
                    style={[
                      styles.progressBar,
                      progress >= 25 && {backgroundColor: 'green', borderRadius: 5},
                    ]}
                  />
                  <View
                    style={[
                      styles.progressBar,
                      progress >= 50 && {backgroundColor: 'green', borderRadius: 5},
                    ]}
                  />
                  <View
                    style={[
                      styles.progressBar,
                      progress >= 75 && {backgroundColor: 'green', borderRadius: 5},
                    ]}
                  />
                  <View
                    style={[
                      styles.progressBar,
                      progress === 100 && {backgroundColor: 'green', borderRadius: 5},
                    ]}
                  />
                </View>
        <View style={styles.infoCard}>
          <Image
            source={require('../assets/pics/Shopping_Bag.png')}
            style={styles.icon}
          />
          <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>Pickup order</Text>
            <Text style={styles.cardSubtitle}>
              Pick up your goods quickly and hassle-free.
            </Text>
          </View>
        </View>

        <View style={styles.courierInfo}>
          <Image
            source={require('../assets/pics/user.png')}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.courierName}>Johan Hawn</Text>
            <Text style={styles.courierRole}>Personal Courier</Text>
          </View>
          <TouchableOpacity style={styles.callButton}>
            <Image
              source={require('../assets/pics/Call.png')}
              style={styles.callIcon}
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
    width: 20,
    height: 20,
  },
  mapPlaceholder: {
    width: '100%',
    backgroundColor: '#E0E0E0',
  },
  bottomContainer: {
    padding: '5%',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
  },
  timeLeft: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: 'gray',
    marginBottom: 10,
  },
  progressBarContainer: {
    height: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 'auto',
    width: '95%',
  },
  progressBar: {
    height: '100%',
    width: '23%',
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
  },
  infoCard: {
    flexDirection: 'row',
    borderColor: 'Black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 15,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginLeft: 10,
    marginRight: 10,
  },
  cardContainer: {
    width: '80%',
  },
  cardTitle: {
    top: -5,
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
  },
  cardSubtitle: {
    color: 'gray',
    marginTop: 5,
    fontSize: 18,
    marginLeft: 10,
  },
  courierInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  courierName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  courierRole: {
    color: 'gray',
    fontSize: 16,
  },
  callButton: {
    borderRadius: 10,
    marginLeft: 'auto',
  },
  callIcon: {
    width: 50,
    height: 50,
  },
});

export default TrackOrder;
