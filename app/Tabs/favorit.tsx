import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const SpecialMenu = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Spesial Menu</Text>
      <View style={styles.menuContainer}>
        <View style={styles.card}>
          <Image
            source={require('@/assets/images/kopihitam.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text style={styles.itemName}>Kopi</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>Rp 15.000</Text>
              <View style={styles.addButton}>
                <AntDesign name="plus" size={24} color="white" />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            source={require('@/assets/images/minuman.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text style={styles.itemName}>Caramel</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>Rp 20.000</Text>
              <View style={styles.addButton}>
                <AntDesign name="plus" size={24} color="white" />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            source={require('@/assets/images/makanan1.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text style={styles.itemName}>Makanan</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>Rp 18.000</Text>
              <View style={styles.addButton}>
                <AntDesign name="plus" size={24} color="white" />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            source={require('@/assets/images/teh.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text style={styles.itemName}>Teh</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>Rp 17.000</Text>
              <View style={styles.addButton}>
                <AntDesign name="plus" size={24} color="white" />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            source={require('@/assets/images/nasigoreng.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text style={styles.itemName}>Nasi Goreng</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>Rp 22.000</Text>
              <View style={styles.addButton}>
                <AntDesign name="plus" size={24} color="white" />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            source={require('@/assets/images/makanan2.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text style={styles.itemName}>Makanan</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>Rp 25.000</Text>
              <View style={styles.addButton}>
                <AntDesign name="plus" size={24} color="white" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2, // Memberikan efek bayangan
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 120,
  },
  textContainer: {
    padding: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SpecialMenu;
