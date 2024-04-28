import React from 'react'
import { useShoppingCart } from '../Context/ShoppingCartContext';
import { View, Text, Image, StyleSheet,Pressable,TouchableOpacity } from 'react-native'


export default function Item({id, image,name,price}) {
  const {getItemQuantity,
    increaseCartQuantity, 
    decreaseCartQuantity,
    removeFromCart,} = useShoppingCart()
  const quantity = getItemQuantity(id)
 
  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode='contain' source={image} />
      <Text >{name}</Text>
      <Text >GHC {price}</Text>


      {quantity === 0 ? (
  <View style={styles.buttonview}>
     <TouchableOpacity >
        <Pressable style={{height: 25,borderColor:'gold',borderRadius: 5,borderWidth: 2,width: 130, backgroundColor: '#010125',margin: 2}} onPress={() => increaseCartQuantity(id)}><Text style={styles.text}>ADD TO CART</Text></Pressable>
     </TouchableOpacity>
  </View>
) : (
<View style={styles.buttonview}>
<TouchableOpacity style={styles.buttonview}>
<Pressable style={styles.button} onPress={quantity === 1 ? () => removeFromCart(id) : () => decreaseCartQuantity(id)}><Text style={styles.text}>-</Text></Pressable>
<Text style={{flex: 0.5, textAlign: 'center', margin: 5,fontSize:14}}>{quantity} in cart</Text>
<Pressable style={styles.button} onPress={() => increaseCartQuantity(id)}><Text style={styles.text}>+</Text></Pressable>
</TouchableOpacity>
</View>
)}

    </View>

  );
  
}


const styles = StyleSheet.create({

  display:{
    flex: 2, // the number of columns you want to devide the screen into
    width: 400
},
container: {
    height: 280,
    width: 150,
    flex: 1,
    maxWidth: "50%", // 100% devided by the number of rows you want
    alignItems: "center",
    margin:10,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10
  },
  image: {
    height: 200,
    width: 150,
  },
  text: {
    textAlign: 'center',
    color: 'white'
  },
  buttonview:{
    flexDirection: 'row', 
    flex: 1, 
    alignItems: 'flex-end'
  },
  button:{
    width: 10,
    height: 25, 
    justifyContent: 'center',
     flex: 0.5, 
     margin: 5, 
     borderWidth: 3, 
     borderColor: '#010125',
     borderColor:'gold',
     borderRadius: 5,
     borderWidth: 2,
     backgroundColor: '#010125',
     color: 'white'
  }
})

        
        
        
          
          /**<div className='fugu'>
        <div style={{backgroundImage: `url(${image})`}}></div>
          <div >
          <p ><b>{name}</b></p>
        <h4>GHC {price}</h4>
        <div>
          {quantity === 0 ? (
          <button id="Info" onClick={() => increaseCartQuantity(id)}>ADD TO CART</button>
          ) : (
            <div>
              <button id='info'  onClick={ quantity === 1 ? () => removeFromCart(id) : () => decreaseCartQuantity(id)}>-</button>
              <span><b>{quantity}</b></span> <b>in cart</b>
              <button id='info' onClick={() => increaseCartQuantity(id)}>+</button>
              <button id='infO' onClick={() => removeFromCart(id)}>Remove Item</button>
            </div>
          )}
          </div>
          </div>   
          </div>**/
        
        


