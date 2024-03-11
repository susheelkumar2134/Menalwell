import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home'
import Profile from '../Screens/Profile'
import Appoinment from '../Screens/Appoinment'
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

export default function TabNavigation() {
  return (
    <Tab.Navigator >
        <Tab.Screen name='Home' component={Home}  options={{tabBarIcon:({color,size})=>{
          <Ionicons  size={size} color={color} />
        }}}/>
        <Tab.Screen name='Profile' component={Profile} options={{tabBarIcon:({color,size})=>{
          <Ionicons  size={size} color={color} />
        }}}/>
        <Tab.Screen name='Appoinment' component={Appoinment} options={{tabBarIcon:({color,size})=>{
          <Ionicons  size={size} color={color} />
        }}}/>
    </Tab.Navigator>
  )
}