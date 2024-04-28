import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import KayaHeader from './Components/kayaHeader';
import Home from './Components/Home';
import Categories from './Components/Categories';
import Cart from './Components/Cart';
import { ShoppingCartProvider, useShoppingCart } from './Context/ShoppingCartContext';
import { Ionicons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator()

export default function App() {

  const { cartQuantity} = useShoppingCart()
 
 
  return (
    <ShoppingCartProvider>
        <NavigationContainer>
          <KayaHeader />
                <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Top Deals') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Categories') {
              iconName = focused ? 'ios-menu' : 'ios-menu-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'ios-cart' : 'ios-cart-outline';
            }
            return <Ionicons name={iconName} color={focused ? "gold" : "white"} size={size} />;
          },
          tabBarStyle: { backgroundColor: '#010125' },
        })}
        initialRouteName="Top Deals"
      >
              <Tab.Screen name='Top Deals' component={Home} />
              <Tab.Screen name='Categories' component={Categories} />
              <Tab.Screen name='Cart' component={Cart} options={{tabBarBadge: cartQuantity ,tabBarBadgeStyle:{backgroundColor: 'red'}}}/>
          </Tab.Navigator>
        </NavigationContainer>
    </ShoppingCartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
