import { StyleSheet, } from 'react-native'
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image 
          source={require('../../assets/images/pip.jpg')} // Ganti dengan path logo Anda
          style={styles.logo} 
        />
        <Text style={styles.cafeName}>Coffe Dewa19</Text>
        <Text style={styles.tagline}>Nikmati cita rasa kopi Indonesia yang autentik</Text>
      </View>

      <View style={styles.aboutUs}>
        <Text style={styles.sectionTitle}>Tentang Kami</Text>
        <Text style={styles.description}>
          Kopi Nusantara adalah surga bagi para pecinta kopi. 
          Kami menyajikan berbagai macam kopi pilihan dari berbagai daerah di Indonesia, 
          mulai dari kopi Arabika yang lembut hingga robusta yang kaya rasa. 
          Nikmati pengalaman minum kopi yang tak terlupakan dengan suasana yang nyaman dan pelayanan yang ramah.
        </Text>
      </View>

      <View style={styles.features}>
        <Text style={styles.sectionTitle}>Fitur Unggulan</Text>
        <View style={styles.featureItem}>
          <Text style={styles.featureText}>Pesan Online</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureText}>Customisasi Pesanan</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureText}>Program Loyalitas</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureText}>Temukan Kafe Kami</Text>
        </View>
      </View>

      <View style={styles.contact}>
        <Text style={styles.sectionTitle}>Kontak Kami</Text>
        <View style={styles.contactItem}>
          <Text style={styles.contactLabel}>Alamat:</Text>
          <Text style={styles.contactInfo}>Jl. Kopi Jokotole No. 123, Kota Pamekasan</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactLabel}>Telepon:</Text>
          <Text style={styles.contactInfo}>022-1234567</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactLabel}>Email:</Text>
          <Text style={styles.contactInfo}>[alamat email dihapus]</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactLabel}>Website:</Text>
          <Text style={styles.contactInfo}>[www.kopinusantara.com](https://www.google.com/url?sa=E&source=gmail&q=https://www.kopinusantara.com)</Text>
        </View>
      </View>

      {/* ... (tambahkan bagian lain seperti visi, misi, nilai-nilai perusahaan) ... */}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  cafeName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  tagline: {
    fontSize: 16,
    color: '#888',
  },
  aboutUs: {
    marginBottom: 20,
  },
  features: {
    marginBottom: 20,
  },
  contact: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  featureItem: {
    marginBottom: 5,
  },
  featureText: {
    fontSize: 14,
  },
  contactItem: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  contactLabel: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  contactInfo: {
    fontSize: 14,
  },
});

export default ProfileScreen;