import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const welcome = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.body}>
            <View style={styles.columImage}>
                <Image source={require('@/assets/images/logo.png')} style={styles.image}/> 
            </View>
            <View style={styles.frameCoffe}>
                <Text style={styles.textCoffe}>Kopinya enak banget, sesuai selera</Text>
            </View>
            <TouchableOpacity 
            onPress={() => {
                router.replace('/Tabs/home')
            }}
            style={styles.Buttom}>
                <Text style={styles.textLogin}>Open</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default welcome

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#D7A870'
    },
    header:{
        flex:0.2,
    },
    body:{
        flex:0.6,
    },
    columImage:{
        height:300,
        width:300,
        marginTop:20
    },
    image:{
        marginHorizontal:'auto'
    },
    frameCoffe:{
        height:50,
        width:'100%',
        marginTop:30,
        justifyContent:'center',
    },
    textCoffe:{
        fontSize:20,
        color:'white',
        textAlign:"center"
    },
    Buttom:{
        height:50,
        width:200,
        marginTop:30,
        justifyContent:'center',
        backgroundColor:'#00512C',
        marginHorizontal:'auto',
        borderRadius:20
    },
    textLogin:{
        fontSize:20,
        color:'white',
        textAlign:"center"
    },
})