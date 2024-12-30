import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const SpecialMenu = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <View style={styles.cartContainer}>
        <View style={styles.cartItem}>
          <View style={styles.imageContainer}>
            <Image
              source={require('@/assets/images/kopihitam.jpg')}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>Coffee</Text>
            <Text style={styles.itemDescription}>With Sugar</Text>
            <Text style={styles.itemPrice}>Rp 50.000</Text>
            <View style={styles.itemOptions}>
              <Text style={styles.optionText}>Cap Size: Small</Text>
              <Text style={styles.optionText}>Level Sugar: No Sugar</Text>
            </View>
          </View>
          <View style={styles.itemQuantity}>
            <Text style={styles.quantity}>2</Text>
            <View style={styles.addButton}>
              <AntDesign name="plus" size={24} color="white" />
            </View>
          </View>
        </View>

        <View style={styles.cartItem}>
          <View style={styles.imageContainer}>
            <Image
              source={require('@/assets/images/minuman.jpg')}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>Coffee</Text>
            <Text style={styles.itemDescription}>With Sugar</Text>
            <Text style={styles.itemPrice}>Rp 50.000</Text>
            <View style={styles.itemOptions}>
              <Text style={styles.optionText}>Cap Size: Small</Text>
              <Text style={styles.optionText}>Level Sugar: No Sugar</Text>
            </View>
          </View>
          <View style={styles.itemQuantity}>
            <Text style={styles.quantity}>2</Text>
            <View style={styles.addButton}>
              <AntDesign name="plus" size={24} color="white" />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.summaryContainer}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Subtotal</Text>
          <Text style={styles.summaryValue}>Rp 100.000</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Discount</Text>
          <Text style={styles.summaryValue}>Rp 25.000</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Total</Text>
          <Text style={styles.summaryValue}>Rp 75.000</Text>
        </View>
      </View>

      <View style={styles.paymentContainer}>
        <Text style={styles.paymentLabel}>Payment</Text>
        <View style={styles.paymentOptions}>
          <Image source={require('../../assets/images/visa.png')} style={styles.paymentIcon} />
          <Image source={require('../../assets/images/master.png')} style={styles.paymentIcon} />
          <Image source={require('../../assets/images/paypal.png')} style={styles.paymentIcon} />
        </View>
      </View>

      <View style={styles.buyButtonContainer}>
        <View style={styles.buyButton}>
          <Text style={styles.buttonText}>Buy</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20, 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartContainer: {
    marginBottom: 20, 
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  imageContainer: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10, 
  },
  itemDetails: {
    flex: 1, 
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: 'gray',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemOptions: {
    marginTop: 5,
  },
  optionText: {
    fontSize: 12,
    color: 'gray',
  },
  itemQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    fontSize: 16,
    marginRight: 10,
  },
  addButton: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  summaryContainer: {
    marginBottom: 15,
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  summaryLabel: {
    fontSize: 14,
    color: 'gray',
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  paymentContainer: {
    marginBottom: 15,
  },
  paymentLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buyButtonContainer: {
    alignItems: 'center',
  },
  buyButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 20,
    paddingHorizontal: 120, // Tambahkan padding horizontal untuk memperlebar tombol
    paddingVertical: 15, // Sesuaikan padding vertikal agar tombol tidak terlalu tipis
    marginBottom: 40,
    marginTop: 50,
  },
  paymentOptions: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
  },
  paymentIconContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    
// Menambahkan jarak 10px di kiri dan kanan setiap ikon
  },
  paymentIcon: {
    flexDirection: 'row',
    marginTop: 5,
    marginHorizontal: 10,
    gap:0,


  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SpecialMenu;