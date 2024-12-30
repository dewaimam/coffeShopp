import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import AntDesign from '@expo/vector-icons/AntDesign';

const home = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.frameHeader}>
                    <Image source={require('@/assets/images/poto.png')} />
                    <Image source={require('@/assets/images/lokasi.png')} />
                    <Text style={{ fontWeight: '500', fontSize: 12, marginLeft: 5 }}>Pagantenan, Pamekasan</Text>
                    <Image source={require('@/assets/images/notif.png')} />
                </View>
                <View style={{ marginHorizontal: 30, marginTop: 10 }}>
                    <Text style={{ fontWeight: '500', fontSize: 14 }}>Goood morning Imam Ms</Text>
                </View>
                <View style={styles.frameCari}>
                    <Image source={require('@/assets/images/search.png')} />
                    <TextInput placeholder='Search Coffe ...' style={{
                        marginLeft: 15,
                        color: '#80A896'
                    }} />
                    <Image source={require('@/assets/images/filter.png')} />
                </View>
                <View style={styles.body}>
                    <View style={{ padding: 5 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>kategori</Text>
                        <View style={{ padding: 10, flexDirection: 'row', gap: 10, marginTop: 10 }}>
                            <View style={{ width: 100, padding: 10, borderWidth: 0.5, borderRadius: 20, backgroundColor: 'green' }}>
                                <Text style={{ textAlign: 'center' }}>Capucino</Text>
                            </View>
                            <View style={{ width: 100, padding: 10, borderWidth: 0.5, borderRadius: 20 }}>
                                <Text style={{ textAlign: 'center' }}>Coffe</Text>
                            </View>
                            <View style={{ width: 100, padding: 10, borderWidth: 0.5, borderRadius: 20 }}>
                                <Text style={{ textAlign: 'center' }}>Americano</Text>
                            </View>
                            <View style={{ width: 100, padding: 10, borderWidth: 0.5, borderRadius: 20 }}>
                                <Text style={{ textAlign: 'center' }}>Luwak</Text>
                            </View>
                            <View style={{ width: 100, padding: 10, borderWidth: 0.5, borderRadius: 20 }}>
                                <Text style={{ textAlign: 'center' }}>Bali</Text>
                            </View>
                            <View style={{ width: 100, padding: 10, borderWidth: 0.5, borderRadius: 20 }}>
                                <Text style={{ textAlign: 'center' }}>Jawa</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.frameScrool}>
                    <View style={{ height: 200, width: 160, borderWidth: 1, borderRadius: 10 }}>
                        <Image source={require('@/assets/images/teh.jpg')} style={{ height: 100, width: '100%', backgroundColor: 'red', borderRadius: 10 }}></Image>
                        <View style={{ padding: 10 }}>
                            <Text style={{ textAlign: 'center' }}>Teh</Text>
                        </View>
                        <View style={{ padding: 10, width: 150, }}>
                            <Text style={{ fontSize: 16 }}>Rp</Text>
                            <Text style={{ fontSize: 20, marginLeft: 10 }}>10.000</Text>
                            <View style={{ height: 40, width: 40, borderRadius: 50, position: 'absolute', backgroundColor: 'green', right: 5, bottom: 15 }}>
                                <AntDesign name="plus" size={24} color="white" style={{ marginVertical: 'auto', marginHorizontal: 'auto' }} />
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 200, width: 160, borderWidth: 1, borderRadius: 10 }}>
                        <Image source={require('@/assets/images/kopi1.jpg')} style={{ height: 100, width: '100%', backgroundColor: 'red', borderRadius: 10 }}></Image>
                        <View style={{ padding: 10 }}>
                            <Text style={{ textAlign: 'center' }}>Kopi sweet</Text>
                        </View>
                        <View style={{ padding: 10, width: 150, }}>
                            <Text style={{ fontSize: 16 }}>Rp</Text>
                            <Text style={{ fontSize: 20, marginLeft: 10 }}>20.000</Text>
                            <View style={{ height: 40, width: 40, borderRadius: 50, position: 'absolute', backgroundColor: 'green', right: 5, bottom: 15 }}>
                                <AntDesign name="plus" size={24} color="white" style={{ marginVertical: 'auto', marginHorizontal: 'auto' }} />
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 200, width: 160, borderWidth: 1, borderRadius: 10 }}>
                        <Image source={require('@/assets/images/potos.png')} style={{ height: 100, width: '100%', backgroundColor: 'red', borderRadius: 10 }}></Image>
                        <View style={{ padding: 10 }}>
                            <Text style={{ textAlign: 'center' }}>Kopi susu</Text>
                        </View>
                        <View style={{ padding: 10, width: 150, }}>
                            <Text style={{ fontSize: 16 }}>Rp</Text>
                            <Text style={{ fontSize: 20, marginLeft: 10 }}>50.000</Text>
                            <View style={{ height: 40, width: 40, borderRadius: 50, position: 'absolute', backgroundColor: 'green', right: 5, bottom: 15 }}>
                                <AntDesign name="plus" size={24} color="white" style={{ marginVertical: 'auto', marginHorizontal: 'auto' }} />
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 200, width: 160, borderWidth: 1, borderRadius: 10 }}>
                        <Image source={require('@/assets/images/makanan1.jpg')} style={{ height: 100, width: '100%', backgroundColor: 'red', borderRadius: 10 }}></Image>
                        <View style={{ padding: 10 }}>
                            <Text style={{ textAlign: 'center' }}>Makanan</Text>
                        </View>
                        <View style={{ padding: 10, width: 150, }}>
                            <Text style={{ fontSize: 16 }}>Rp</Text>
                            <Text style={{ fontSize: 20, marginLeft: 10 }}>25.000</Text>
                            <View style={{ height: 40, width: 40, borderRadius: 50, position: 'absolute', backgroundColor: 'green', right: 5, bottom: 15 }}>
                                <AntDesign name="plus" size={24} color="white" style={{ marginVertical: 'auto', marginHorizontal: 'auto' }} />
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 200, width: 160, borderWidth: 1, borderRadius: 10 }}>
                        <Image source={require('@/assets/images/makanan2.jpg')} style={{ height: 100, width: '100%', backgroundColor: 'red', borderRadius: 10 }}></Image>
                        <View style={{ padding: 10 }}>
                            <Text style={{ textAlign: 'center' }}>Makanan</Text>
                        </View>
                        <View style={{ padding: 10, width: 150, }}>
                            <Text style={{ fontSize: 16 }}>Rp</Text>
                            <Text style={{ fontSize: 20, marginLeft: 10 }}>25.000</Text>
                            <View style={{ height: 40, width: 40, borderRadius: 50, position: 'absolute', backgroundColor: 'green', right: 5, bottom: 15 }}>
                                <AntDesign name="plus" size={24} color="white" style={{ marginVertical: 'auto', marginHorizontal: 'auto' }} />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.frameScroolMenu}>
                    <View style={{ padding: 5 }}>
                        <Text style={{ fontSize: 16 }}>Spesial Menu</Text>
                    </View>
                    <View style={{ padding: 5, flexDirection:'row', gap:20 }}>
                        <View style={{ height: 200, width: 160, borderWidth: 1, borderRadius: 10 }}>
                            <Image source={require('@/assets/images/kopihitam.jpg')} style={{ height: 100, width: '100%', backgroundColor: 'red', borderRadius: 10 }}></Image>
                            <View style={{ padding: 10 }}>
                                <Text style={{ textAlign: 'left' }}>copi</Text>
                            </View>
                            <View style={{ padding: 10, width: 150, }}>
                                <Text style={{ fontSize: 16 }}>Rp</Text>
                                <Text style={{ fontSize: 20, marginLeft: 10 }}>15.000</Text>
                                <View style={{ height: 40, width: 40, borderRadius: 50, position: 'absolute', backgroundColor: 'green', right: 5, bottom: 15 }}>
                                    <AntDesign name="plus" size={24} color="white" style={{ marginVertical: 'auto', marginHorizontal: 'auto' }} />
                                </View>
                            </View>
                        </View>
                        <View style={{ height: 200, width: 160, borderWidth: 1, borderRadius: 10 }}>
                            <Image source={require('@/assets/images/minuman.jpg')} style={{ height: 100, width: '100%', backgroundColor: 'red', borderRadius: 10 }}></Image>
                            <View style={{ padding: 10 }}>
                                <Text style={{ textAlign: 'left' }}>caramel</Text>
                            </View>
                            <View style={{ padding: 10, width: 150, }}>
                                <Text style={{ fontSize: 16 }}>Rp</Text>
                                <Text style={{ fontSize: 20, marginLeft: 10 }}>20.000</Text>
                                <View style={{ height: 40, width: 40, borderRadius: 50, position: 'absolute', backgroundColor: 'green', right: 5, bottom: 15 }}>
                                    <AntDesign name="plus" size={24} color="white" style={{ marginVertical: 'auto', marginHorizontal: 'auto' }} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.frameScroolMenu}>
                    <View style={{ padding: 5, flexDirection:'row', gap:20 }}>
                        <View style={{ height: 200, width: 160, borderWidth: 1, borderRadius: 10 }}>
                            <Image source={require('@/assets/images/burger.jpg')} style={{ height: 100, width: '100%', backgroundColor: 'red', borderRadius: 10 }}></Image>
                            <View style={{ padding: 10 }}>
                                <Text style={{ textAlign: 'left' }}>Makanan</Text>
                            </View>
                            <View style={{ padding: 10, width: 150, }}>
                                <Text style={{ fontSize: 16 }}>Rp</Text>
                                <Text style={{ fontSize: 20, marginLeft: 10 }}>30.000</Text>
                                <View style={{ height: 40, width: 40, borderRadius: 50, position: 'absolute', backgroundColor: 'green', right: 5, bottom: 15 }}>
                                    <AntDesign name="plus" size={24} color="white" style={{ marginVertical: 'auto', marginHorizontal: 'auto' }} />
                                </View>
                            </View>
                        </View>
                        <View style={{ height: 200, width: 160, borderWidth: 1, borderRadius: 10 }}>
                            <Image source={require('@/assets/images/nasigoreng.jpg')} style={{ height: 100, width: '100%', backgroundColor: 'red', borderRadius: 10 }}></Image>
                            <View style={{ padding: 10 }}>
                                <Text style={{ textAlign: 'left' }}>Nasi Goreng</Text>
                            </View>
                            <View style={{ padding: 10, width: 150, }}>
                                <Text style={{ fontSize: 16 }}>Rp</Text>
                                <Text style={{ fontSize: 20, marginLeft: 10 }}>20.000</Text>
                                <View style={{ height: 40, width: 40, borderRadius: 50, position: 'absolute', backgroundColor: 'green', right: 5, bottom: 15 }}>
                                    <AntDesign name="plus" size={24} color="white" style={{ marginVertical: 'auto', marginHorizontal: 'auto' }} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}

export default home

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 150,
        width: '100%',
        backgroundColor: 'FBFBFB',
    },
    frameHeader: {
        height: 50,
        width: '80%',
        backgroundColor: 'FBFBFB',
        marginHorizontal: 'auto',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    frameCari: {
        height: 50,
        width: '90%',
        marginHorizontal: 'auto',
        marginTop: 8,
        borderRadius: 30,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 5,
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    body: {
        width: '100%',
        padding: 10
    },
    framebody: {
        height: 50,
        width: '80%',
        backgroundColor: 'red',
        marginHorizontal: 'auto',
        marginTop: 10,
        paddingHorizontal: 5,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
    },
    frameScrool: {
        padding: 10,
        width: '90%',
        marginHorizontal: 'auto',
        marginTop: 10,
        flexDirection: 'row',
        gap: 15

    },
    frameScroolMenu: {
        paddingVertical: 10,
        width: '90%',
        marginHorizontal: 'auto',
        marginTop: 10,
    },
    frameScroolMenu1: {
        height: '100%',
        width: '100%',
        backgroundColor: 'blue',
        marginHorizontal: 'auto',
        marginTop: 10,
    },
})