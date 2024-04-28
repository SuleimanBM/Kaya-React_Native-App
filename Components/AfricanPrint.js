import { View, Text,FlatList } from 'react-native'
import React from 'react'
import { List } from '../List/List'
import Item from './Item'

export default function AfricanPrint() {
  
    const africanprint = List.filter((item)=>{ return (item.id.slice(0, 2) === "af")})
    return (
      <View>
      <FlatList 
      data={africanprint}
      renderItem={({ item }) => <Item {...item} />}
      numColumns={2}
      keyExtractor={(item) => item.id}
      />
      </View>
    )
  
}