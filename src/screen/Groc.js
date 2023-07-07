import { StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Groc = () => {
  const [grocery, setGrocery] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [arr, setArr] = useState([])
  const [editSubmit, setEditSubmit] = useState(false)
  const [id, setId] = useState('')
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    //AsyncStorage.clear()
    try {
      const list = await AsyncStorage.getItem('data')
      if (list.length > 0) {
        const finalList = await JSON.parse(list)
        //console.log(finalList)
        setArr(finalList)
      }


    }
    catch {
      console.log("not initially fetched")
    }
  }


  const handleSubmit = async () => {

    if (editSubmit == false) {
      console.log("entered in norwml submit")
      if (!grocery || !price || !quantity) {
        Alert.alert("please fill something")
        return;
      }

      try {
        await AsyncStorage.setItem('data', JSON.stringify([...arr, { groc: grocery, price: price, Quan: quantity, id: Math.floor(Math.random() * 1000) }]))

      } catch {
        console.log("Not done ")
      }

      try {
        const require = await AsyncStorage.getItem('data')
        const requirefinal = JSON.parse(require)
        //console.log(requirefinal)
        setArr(requirefinal)
        cleartext();
      } catch {
        console.log('not fetch')
      }
    }
    if (editSubmit == true) {
      if (!grocery || !price || !quantity) {
        Alert.alert("please fill something")
        return;
      }
      const obj = arr.map(item => {

        if (item.id == id) {
          item.groc = grocery;
          item.Quan = quantity;
          item.price = price

        }
        return item;
      })
      try {
        setArr(obj)
        await AsyncStorage.setItem('data', JSON.stringify(arr))
        console.log(arr)
        setEditSubmit(false)
        cleartext();
      }
      catch {
        console.log("not edited")
      }
    }
  }
  const cleartext = () => {
    console.log("enterred")
    setGrocery('')
    setPrice('')
    setQuantity('')
  }


  const edit = async (groc, quan, pri, Id) => {
    setEditSubmit(true)
    setGrocery(groc)
    setQuantity(quan)
    setPrice(pri)
    setId(Id)

  }


  const remove = async (Id) => {
    setArr(arr.filter(item => item.id !== Id))
    try {

      await AsyncStorage.setItem('data', JSON.stringify(arr))
      cleartext();
    }
    catch {
      console.log("not edited")
    }
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View>
        <TextInput placeholder='Enter Item ' value={grocery} placeholderTextColor={'black'}
          onChangeText={(t) => { setGrocery(t) }} style={{ borderRadius: 10, borderWidth: 1, marginHorizontal: '4%', marginVertical: '2%', color: 'black' }} />
        <TextInput placeholder='Enter Quantity ' value={quantity} placeholderTextColor={'black'}
          onChangeText={(t) => { setQuantity(t) }} style={{ borderRadius: 10, borderWidth: 1, marginHorizontal: '4%', marginVertical: '2%', color: 'black' }} />
        <TextInput placeholder='Enter Price ' value={price} placeholderTextColor={'black'}
          onChangeText={(t) => { setPrice(t) }} style={{ borderRadius: 10, borderWidth: 1, marginHorizontal: '4%', marginVertical: '2%', color: 'black' }} />
      </View>
      <View style={{ justifyContent: 'flex-end', width: "100%", marginVertical: '2%' }}>
        <TouchableOpacity style={{
          width: '92%', backgroundColor: 'black',
          borderRadius: 10, height: 45, alignSelf: 'center', justifyContent: 'center', alignItems: 'center',
        }}
          onPress={handleSubmit}>
          <Text style={{ color: 'white' }}>submit</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={arr}
          inverted={true}
          renderItem={({ item }) => {
            return (

              <View style={{
                borderRadius: 10, borderWidth: 1, padding: '3%', marginVertical: '2%', backgroundColor: 'lightblue',
                flexDirection: 'row', justifyContent: 'space-between'
              }}>
                <TouchableOpacity style={{
                  backgroundColor: 'lightgreen', borderWidth: 1,
                  padding: 10, borderRadius: 20, justifyContent: 'center', alignItems: 'center', width: '20%', height: 50,
                }} onPress={() => { edit(item.groc, item.Quan, item.price, item.id) }}>
                  <Text style={{ color: 'black' }}>Edit</Text>
                </TouchableOpacity>
                <View>
                  <Text style={{ color: 'black' }}>Id : {item.id}</Text>
                  <Text style={{ color: 'black' }}>Grocery : {item.groc}</Text>
                  <Text style={{ color: 'black' }}>Quantity: {item.Quan}</Text>
                  <Text style={{ color: 'black' }}>Price : {item.price}</Text>
                </View>
                <TouchableOpacity style={{
                  backgroundColor: 'lightgreen', borderWidth: 1,
                  padding: 10, borderRadius: 20, justifyContent: 'center', alignItems: 'center', width: '20%', height: 50,
                }} onPress={() => { remove(item.id) }}>
                  <Text style={{ color: 'black' }}>Delete</Text>
                </TouchableOpacity>
              </View>

            )
          }}
        />
      </View>

    </View>
  )
}

export default Groc

const styles = StyleSheet.create({})