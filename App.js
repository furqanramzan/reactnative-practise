import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/Home';
import ContactScreen from './screens/Contact';

const HomeStack = createStackNavigator();
const ContactStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387'
    },
    headerTimeColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#fff'
    }
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()} />
      )
    }} />
  </HomeStack.Navigator>
)

const ContactStackScreen = ({ navigation }) => (
  <ContactStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387'
    },
    headerTimeColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#fff'
    }
  }}>
    <ContactStack.Screen name="Contact" component={ContactScreen} options={{
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()} />
      )
    }} />
  </ContactStack.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Contact" component={ContactStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
