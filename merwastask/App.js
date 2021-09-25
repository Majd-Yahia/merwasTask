import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Products } from './Screens/DrawerScreen';
import { Featured, BestSeller } from './Screens/TabScreen';

import Header from './Screens/Header'
import Cart from './Screens/Cart';

const Tab = createMaterialTopTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="FEATURED"
        component={Featured}
      />
      <Tab.Screen name="BEST SELLER" component={BestSeller} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer({ navigation }) {

  const [cart, setCart] = useState([
    { id: 0, artist: "PSY", song: "GENTLEMAN M/V", album: "No album", year: 2013, duration: 240, price: 25 },
    { id: 1, artist: "Anathema", song: "Emotional Winter", album: "Judgement ", year: 1999, duration: 360, price: 15 }
  ]);

  return (
    <Drawer.Navigator >
      <Drawer.Screen
        name="Home"
        component={MyTab}
        options={{
          headerTitle: () => <Header navigation={navigation} cart={cart} />,
          title: 'Home',
          headerStyle: {
            backgroundColor: '#eee',
          },
          headerTintColor: '#f4511e',
        }}
      />
      <Drawer.Screen name="Products" component={Products} />

    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="Main"
          component={MyDrawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}