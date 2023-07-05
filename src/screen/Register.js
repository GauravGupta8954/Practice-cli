import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const navigation=useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const submit = async () => {
    if (!email || !password) {
      Alert.alert("Please Fill Details")
    }
    else 
    {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });}
  }
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1,backgroundColor:'lightblue' }}>
      <Text style={{fontSize:20,color:'black',marginVertical:'10%',fontWeight:'bold'}}>Register Screen </Text>
      <View style={{ borderRadius: 15, padding: '4%', backgroundColor: 'lightgrey', width: '80%' ,shadowColor:"black",elevation:5}}>
        <TextInput placeholder='Enter gmail' onChangeText={(t) => { setEmail(t) }} value={email}
          style={{ borderColor: 'black', borderWidth: 1, color: 'white', marginVertical: 10, borderRadius: 10,backgroundColor:'black' }} />
        <TextInput placeholder='Enter Password' onChangeText={(t) => { setPassword(t) }} value={password}
          style={{ borderColor: 'black', borderWidth: 1, color: 'white', marginVertical: 10, borderRadius: 10,backgroundColor:'black' }} />
        <TouchableOpacity style={{ width: '50%', height: 45, borderRadius: 10, backgroundColor: 'lightgreen',
         alignSelf: 'center', justifyContent: 'center',shadowColor:"green",elevation:5 }}
          onPress={submit}>
          <Text style={{ alignSelf: 'center',color:'darkgreen',fontWeight:'bold' }}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center',marginVertical:15,}} onPress={()=>{navigation.navigate('Login')}}>
            <Text style={{color:'black'}}>Login</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Register

const styles = StyleSheet.create({})