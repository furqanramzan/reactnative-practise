import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './Home';
import ContactScreen from './Contact';

const HomeStack = createStackNavigator();
const ContactStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

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
            backgroundColor: 'pink'
        },
        headerTimeColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            color: '#fff'
        }
    }}>
        <ContactStack.Screen name="Contact" component={ContactScreen} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="pink" onPress={() => navigation.openDrawer()} />
            )
        }} />
    </ContactStack.Navigator>
)

const MainTab = () => (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#e91e63"
        style={{ backgroundColor: 'tomato' }}
    >
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Hello',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Contact"
            component={ContactStackScreen}
            options={{
                tabBarLabel: 'Contact',
                tabBarColor: 'pink',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Hello"
            component={ContactStackScreen}
            options={{
                tabBarLabel: 'Contact',
                tabBarColor: 'purple',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Hi"
            component={ContactStackScreen}
            options={{
                tabBarLabel: 'Contact',
                tabBarColor: 'blue',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>
)

export default MainTab;