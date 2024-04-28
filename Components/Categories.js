import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'
import Kente from './Kente';
import Fugu from './Fugu';
import AfricanPrint from './AfricanPrint';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator()

export default function Categories() {
  return (
<>

    <Drawer.Navigator>
        <Drawer.Screen name='Kente' component={Kente}/>
        <Drawer.Screen name='Fugu' component={Fugu}/>
        <Drawer.Screen name='African Print' component={AfricanPrint}/>
    </Drawer.Navigator>

</>

  )
}