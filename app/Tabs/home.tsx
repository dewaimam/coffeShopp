import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const home = () => {
  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.header}>
            <View style={styles.frameHeader}>
                <Image source={require('@/assets/images/poto.png')}/>
                <Image source={require('@/assets/images/lokasi.png')}/>
                <Text style={{ fontWeight: '500', fontSize:12, marginLeft:5 }}>Pagantenan, Pamekasan</Text>
                <Image source={require('@/assets/images/notif.png')}/>
            </View>
            <View style={{ marginHorizontal: 30, marginTop:10}}>
                <Text style={{fontWeight: '500', fontSize:14}}>Goood morning Imam Ms</Text>
            </View>
            <View style={styles.frameCari}>
                <Image source={require('@/assets/images/search.png')} />
                <TextInput placeholder='Search Coffe ...' style={{marginLeft: 15,
                color: '#80A896'}}/>
                <Image source={require('@/assets/images/filter.png')} />
            </View>
            <View style={styles.body}></View>
            <View style={styles.frameScrool}></View>
            <View style={styles.frameScroolMenu}></View>
            <View style={styles.framebody}></View>
            <View style={styles.frameScroolMenu1}></View>
        </View>

    </SafeAreaView>
  )
}

export default home

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        height:150,
        width:'100%',
        backgroundColor:'FBFBFB',
    },
    frameHeader:{
        height:50,
        width:'80%',
        backgroundColor:'FBFBFB',
        marginHorizontal:'auto',
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    frameCari:{
        height:50,
        width:'80%',
        backgroundColor:'E5E5E5',
        marginHorizontal: 30,
        marginTop: 8,
        borderRadius :30,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 5,
        justifyContent: 'space-between',
        alignItems: 'center'
        
    },
    body:{
        height:'100%',
        width:'100%',
        backgroundColor:'#FBFBFB',
    },
    framebody:{
        height:50,
        width:'80%',
        backgroundColor:'#00582F',
        marginHorizontal:'auto',
        marginTop:10,
        paddingHorizontal:5,
        paddingVertical:5,
        flexDirection:'row',
        alignItems: 'center',
        borderRadius: 30,
    },
    frameScrool:{
        height:50,
        width:'100%',
        backgroundColor:'blue',
        marginHorizontal:'auto',
        marginTop:10,

    },
    frameScroolMenu:{
        height:200,
        width:'100%',
        backgroundColor:'blue',
        marginHorizontal:'auto',
        marginTop:10,
    },
    frameScroolMenu1:{
        height:'100%',
        width:'100%',
        backgroundColor:'blue',
        marginHorizontal:'auto',
        marginTop:10,
    },
})