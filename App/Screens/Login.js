import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import loginImg from '../../assets/images/logi.jpg'
import SignInWithOAuth from '../Components/SignInWithOAuth'

export default function Login() {
  return (
    <View style={{ alignItems: 'center', paddingTop: '10%' }}>
      <Image style={styles.image} source={loginImg} />
      <View style={{
        paddingLeft: '5%', paddingRight: '5%', paddingTop: '5%', width: '100%', height: '30 %',
        marginTop: '-25%',
        backgroundColor: '#001d3d',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        // borderColor:'black', 
        // borderWidth:1
      }}> 

        <Text style={styles.logText}>Book your doctor appoinment  
          <Text style={{color:'#3a86ff',fontSize:20}} > Immediately</Text>
        </Text>
        <Text style={styles.logText2}>Join our platefrom which tottaly free. Get instant appoinment</Text>
        <SignInWithOAuth/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 600,
    objectFit: 'contain',
    borderRadius: 30,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    borderWidth: 1,
    borderColor: 'black',
  },
  logText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color:'white'
  },
  logText2: {
    textAlign: 'center',
    color:'white'
  },
  // loginButton: {
  //   marginTop: 15,
  //   width: Dimensions.get('screen').width * 0.91,
  //   backgroundColor: '#3a86ff',
  //   padding: 7,
  //   borderRadius: 20
  // }
})
