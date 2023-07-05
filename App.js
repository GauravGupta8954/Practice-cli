import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Register from './src/screen/Register';
import Login from './src/screen/Login';
const App = () => {
  //const navigation=useNavigation()
  const Stack=createNativeStackNavigator()
  // const call=async()=>{
  //   const requestOptions={
  //     method:'GET',
  //     headers:{
  //       "Content-Type":'application/json',
  //       Authorization:`Bearer ${token}`,

  //     },
  //     body:JSON.stringify({latitude:'62364514'})
  //   }
  //   try{
  //     const response=await fetch(api,requestOptions)
  //   const json=await response.json()
  //   console.log(json)
  //   }catch{
  //     console.log("fdjhd")
  //   }
    
  // }
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})