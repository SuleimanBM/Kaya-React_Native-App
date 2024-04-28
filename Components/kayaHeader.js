import { View, Text,StyleSheet, ScrollView } from 'react-native'
import React from 'react'

export default function KayaHeader() {
  return (
    <View style={headerstyle.view}>
        <Text style={headerstyle.text}>KAYA</Text>
    </View>
  )
}


const headerstyle = StyleSheet.create({
    view:{
        marginTop: 24,
        height: 70,
        backgroundColor: '#010125',
        justifyContent: 'flex-end' 
    },
    text:{
        fontSize: 40,
        color: 'gold',
        textAlign: 'center',
    }
})