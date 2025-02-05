import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView,} from 'react-native';

const OrderDeliverScreen = ({navigation}) => {
  const [deliveryType, setDeliveryType] = useState('Delivery');
  const [quantity, setQuantity] = useState(1);
  const price = 4.53;
  const deliveryFee = 1.0;
  const totalPayment = ((price + deliveryFee)*quantity).toFixed(2);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('DetailView')}>
          <Image
            source={require('../assets/pics/arrowLeft.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order</Text>
      </View>

      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            deliveryType === 'Delivery' && styles.activeToggle,
          ]}
          onPress={() => setDeliveryType('Delivery')}>
          <Text
            style={[
              styles.toggleText,
              deliveryType === 'Delivery' && styles.activeToggleText,
            ]}>
            Deliver
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            deliveryType === 'Pick Up' && styles.activeToggle,
          ]}
          onPress={() => {
            setDeliveryType('Pick Up');
            navigation.navigate('OrderPickupScreen');
          }}>
          <Text
            style={[
              styles.toggleText,
              deliveryType === 'Pick Up' && styles.activeToggleText,
            ]}>
            Pick Up
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Delivery Address</Text>
      <View style={styles.addressContainer}>
        <Text style={styles.addressTitle}>Jl. Kpg Sutoyo</Text>
        <Text style={styles.addressDetail}>
          Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.
        </Text>
        <View style={styles.addressButtons}>
          <TouchableOpacity style={styles.addressButton}>
            <Image
              source={require('../assets/pics/edit.png')}
              style={{width: 17, height: 17}}
            />
            <Text style={styles.addressButtonText}> Edit Address</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addressButton}>
            <Image
              source={require('../assets/pics/note.png')}
              style={{width: 17, height: 17}}
            />
            <Text style={styles.addressButtonText}> Add Note</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={require('../assets/pics/Line.png')}
        style={styles.line}
      />

      <View style={styles.itemContainer}>
        <Image
          source={require('../assets/pics/cardImg1.png')}
          style={styles.itemImage}
        />
        <View style={styles.itemDetails}>
          <Text style={styles.itemTitle}>Cappucino</Text>
          <Text style={styles.itemSubtitle}>with Chocolate</Text>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={() => setQuantity(Math.max(1, quantity - 1))}>
            <Image
              source={require('../assets/pics/minus.png')}
              style={styles.quantityIcon}
            />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
            <Image
              source={require('../assets/pics/plus.png')}
              style={styles.quantityIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={require('../assets/pics/line2.png')}
        style={{width: 410, height: 4, marginBottom: 10, marginLeft: -20}}
      />

      <TouchableOpacity style={styles.discountContainer}>
        <Image
          source={require('../assets/pics/Discount.png')}
          style={{width: 30, height: 30}}
        />
        <Text style={styles.discountText}>    1 Discount is applied</Text>
        <Image
          source={require('../assets/pics/arrowRight.png')}
          style={styles.discountArrow}
        />
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Payment Summary</Text>
      <View style={styles.paymentRow}>
        <Text style={styles.paymentText}>Price</Text>
        <Text style={[styles.paymentText, {fontWeight: 'bold'}]}>
          $ {price.toFixed(2)}
        </Text>
      </View>
      <View style={styles.paymentRow}>
        <Text style={styles.paymentText}>Delivery Fee</Text>
        <Text style={[styles.paymentText, {fontWeight: 'bold'}]}>
          <Text style={styles.strikeThrough}>$2.0</Text> ${' '}
          {deliveryFee.toFixed(1)}
        </Text>
      </View>
      <Image
        source={require('../assets/pics/Line.png')}
        style={{
          width: 355,
          height: 1,
          marginTop: 20,
          marginBottom: 10,
          marginLeft: 10,
        }}
      />
      <View style={styles.paymentRow}>
        <Text style={styles.paymentTotal}>Total Payment</Text>
        <Text style={[styles.paymentTotal, {fontWeight: '600'}]}>
          $ {totalPayment}
        </Text>
      </View>

      <View
        style={{
          marginTop: 20,
          borderColor: '#F1F1F1',
          borderWidth: 1,
          marginHorizontal: -20,
          borderTopEndRadius: 40,
          borderTopStartRadius: 40,
          paddingHorizontal: 30,
        }}>
        <View style={styles.paymentMethod}>
          <TouchableOpacity style={styles.paymentMethodButton}>
            <Image
              source={require('../assets/pics/moneys.png')}
              style={{
                width: 28,
                height: 28,
                marginTop: 0,
                marginLeft: 10,
                marginRight: 10,
              }}
            />
            <Text style={styles.paymentMethodText}> Cash </Text>
            <Text style={styles.paymentAmount}>$ {totalPayment}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/pics/dots.png')}
              style={{width: 28, height: 28, marginTop: 10, marginRight: 10}}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.orderButton}
          onPress={() => navigation.navigate('ThankYouMessageScreen')}>
          <Text style={styles.orderButtonText}>Order</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = {
  container: {flex: 1, padding: 20, backgroundColor: '#F9F9F9'},
  header: {flexDirection: 'row', alignItems: 'center', marginBottom: 20},
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 135,
    color: '#2F2D2C',
  },
  icon:{
    width: 28,
    height: 28,},
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    borderRadius: 20,
    padding: 5,
    marginBottom: 20,
    height: 55,
  },
  toggleButton: {flex: 1, padding: 10, alignItems: 'center', borderRadius: 15},
  activeToggle: {backgroundColor: '#C67C4E'},
  toggleText: {fontSize: 16, color: '#2F2D2C', fontWeight: '600'},
  activeToggleText: {color: '#ffffff', fontWeight: '600'},

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 15,
    color: '#2F2D2C',
  },
  addressContainer: {padding: 15, borderRadius: 10},
  addressTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: -5,
    marginBottom: 12,
    color: '#2F2D2C',
  },
  addressDetail: {
    fontSize: 14,
    color: '#808080',
    marginBottom: 15,
    marginTop: -5,
  },
  line:{width: 355, height: 1, marginBottom: 20, marginLeft: 10},
  addressButtons: {flexDirection: 'row', left: -5},
  addressButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  addressButtonText: {color: '#303336', padding: 5},

  itemContainer: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  itemImage: {
    width: 65,
    height: 65,
    marginRight: 10,
    borderRadius: 10,
    marginRight: 30,
  },
  itemDetails: {flex: 1},
  itemTitle: {fontSize: 20, fontWeight: 'bold', marginBottom: 5},
  itemSubtitle: {fontSize: 14, color: '#888'},
  quantityContainer: {flexDirection: 'row', alignItems: 'center'},
  quantityText: {marginHorizontal: 10, fontSize: 18, fontWeight: 'bold'},
  quantityIcon: {width: 28, height: 28},
  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    marginTop: 10,
  },
  discountText: {flex: 1, fontSize: 18, fontWeight: '600'},
  discountArrow: {width: 28, height: 28},
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    paddingHorizontal: 15,
  },
  paymentText: {fontSize: 17},
  paymentTotal: {fontSize: 18, fontWeight: '400'},
  strikeThrough: {textDecorationLine: 'line-through', color: '#000010', fontWeight: '400'},

  paymentMethod: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  paymentMethodButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  paymentMethodText: {
    fontSize: 16,
    marginLeft: 10,
    backgroundColor: '#C67C4E',
    borderRadius: 20,
    color: '#ffffff',
    fontWeight: '400',
    padding: 3,
  },
  paymentAmount: {fontSize: 16, marginLeft: 10},

  orderButton: {
    backgroundColor: '#C67C4E',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  orderButtonText: {fontSize: 18, color: '#fff', fontWeight: 'bold'},
};

export default OrderDeliverScreen;
