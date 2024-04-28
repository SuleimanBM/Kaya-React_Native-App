import { View, Text,FlatList,StyleSheet,ScrollView,Pressable,Image } from 'react-native'
import React from 'react'

import { List } from '../List/List'
import { useShoppingCart } from '../Context/ShoppingCartContext'

export default function Cart({id, image,name,price}) {
    const {cartItems,cartQuantity} = useShoppingCart()
    const total = cartItems.reduce((total, cartItem) => 
     {
       const item = List.find(i => i.id === cartItem.id)
       return total + (item?.price || 0) * cartItem.quantity
     }, 0)

  return (
   
        <ScrollView>
        <FlatList 
            data={cartItems}
            renderItem={({ item }) => <Item {...item} />}
            keyExtractor={(item) => item.id}
        />
        <Text style={styles.total}>{total === 0? `YOU HAVE NO ITEMS IN YOUR CART`: `TOTAL: GHC ${total}`}</Text>
        </ScrollView>
        
        
   
  )
}

function Item({id, image,name,price}) {
    const {getItemQuantity,
      increaseCartQuantity, 
      decreaseCartQuantity,
      removeFromCart,} = useShoppingCart()
    const quantity = getItemQuantity(id)
    const item = List.find(i => i.id === id)
    if (item == null) return null
   
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={item.image} />
            <View style={styles.innerView}>
                <Pressable style={styles.Pressable} onPress={quantity === 1 ? () => removeFromCart(id) : () => decreaseCartQuantity(id)} ><Text style={styles.text}>-</Text></Pressable>
                <Text>{quantity}</Text>
                <Pressable style={styles.Pressable} onPress={() => increaseCartQuantity(id)} ><Text style={styles.text}>+</Text></Pressable>
            </View>
        </View>


    );
    
  }

  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 10,
      display: 'flex', 
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end' // Add this line
    },
    innerView: {
      display: 'flex', 
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'flex-end',
    },
    image: {
        width:200,
        height: 200,
        borderRadius: 5,
        marginVertical: 5
    },
    text:{
        fontSize: 20,
        color: 'white'
    },
    total:{
        textAlign:'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
    Pressable:{
       
        minWidth: 40, // Use minWidth instead of width
        marginHorizontal: 10,
        justifyContent: 'center', // Center the content vertically
        alignItems: 'center', // Center the content horizontally
        backgroundColor: '#010125',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gold'
    }
  })

          
          
  
  
  