import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home'
import Profile from '../Screens/Profile'
import Appoinment from '../Screens/Appoinment'
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

export default function TabNavigation() {
  const iconSize = 18;
  const iconColor = 'blue';
  return (<>
    <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name='Home' component={Home}  options={{tabBarIcon:()=>{
          return <Ionicons name='home' size={iconSize} color={iconColor} />
        }}}/>
        <Tab.Screen name='Profile' component={Profile} options={{tabBarIcon:()=>{
          return <Ionicons name='camera' size={iconSize} color={iconColor} />
        }}}/>
        <Tab.Screen name='Appoinment' component={Appoinment} options={{tabBarIcon:()=>{
          return <Ionicons name='camera' size={iconSize} color={iconColor} />
        }}}/>
    </Tab.Navigator>
  </>
    
  )
}