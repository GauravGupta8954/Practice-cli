import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';

const Login = () => {
    const navigation=useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submit=async()=>{
     if(!email || !password)
     {
        Alert.alert("Please Fill Details")
     }
     else{
     auth()
  .signInWithEmailAndPassword(email, password)
  .then(() => {
    console.log('User signed in!');
  })
  .catch(error => {
    console.error(error);
  });}
    }
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor:'lightblue'}}>
            <Text style={{fontSize:20,color:'black',marginVertical:'10%',fontWeight:'bold'}}>Login Screen </Text>
      <View style={{ borderRadius: 15, padding: '4%', backgroundColor: 'lightgrey', width: '80%',shadowColor:"black",elevation:5 }}>
        <TextInput placeholder='Enter gmail' onChangeText={(t) => { setEmail(t) }} value={email}
          style={{ borderColor: 'black', borderWidth: 1, color: 'white', marginVertical: 10, borderRadius: 10,backgroundColor:'black' }} />
        <TextInput placeholder='Enter Password' onChangeText={(t) => { setPassword(t) }} value={password}
          style={{ borderColor: 'black', borderWidth: 1, color: 'white', marginVertical: 10, borderRadius: 10 ,backgroundColor:'black'}} />
        <TouchableOpacity style={{ width: '50%', height: 45, borderRadius: 10, backgroundColor: 'lightgreen', alignSelf: 'center', 
        justifyContent: 'center',shadowColor:"green",elevation:5 }}
          onPress={submit}>
          <Text style={{ alignSelf: 'center',color:'green' ,fontWeight:'bold'}}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center',marginVertical:15}} onPress={()=>{navigation.navigate('Register')}}>
            <Text style={{color:'black'}}>Register</Text>
        </TouchableOpacity>
      </View>

    </View>
    )
}

export default Login

const styles = StyleSheet.create({})