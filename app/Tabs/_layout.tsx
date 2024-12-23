import { Tabs } from 'expo-router'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function _layout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name='home'
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" size={24} color="black" />),
                }} />
            <Tabs.Screen name='favorit'
                options={{
                    title: "favorit",
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="favorite-border" size={24} color="black" />),
                }} />
            <Tabs.Screen name='belanja'
                options={{
                    title: "belanja",
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="shoppingcart" size={24} color="black" />),
                }} />
            <Tabs.Screen name='profil'
                options={{
                    title: "profile",
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="user" size={24} color="black" />),
                }} />
        </Tabs>
    )
}