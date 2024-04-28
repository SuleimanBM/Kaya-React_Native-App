import { View, Text,FlatList } from 'react-native'
import React from 'react'
import { List } from '../List/List'
import Item from './Item'

export default function Fugu() {
    const fugu = List.filter((item)=>{ return (item.id.slice(0, 2) === "fg")})

    return (
      <View>
      <FlatList 
      data={fugu}
      renderItem={({ item }) => <Item {...item} />}
      numColumns={2}
      keyExtractor={(item) => item.id}
      />
      </View>
    )
  
}