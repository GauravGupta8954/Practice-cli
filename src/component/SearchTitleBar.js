import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
//import Icons from 'react-native-vector-icons/Ionicons';

const SearchTitleBar = props => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: 53,
        backgroundColor: 'white',
        borderRadius: 8,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        shadowColor: '#001',
        padding: 12,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 10,
      }}>
      <TouchableOpacity
        style={{
          height: 40,
          width: 45,
          justifyContent: 'center',
        }}
        onPress={() => navigation.goBack()}>
        {/* <Icons name="arrow-back" color={"#98A6B5"} size={25}/> */}
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 18,
          fontFamily: 'Montserrat_400Regular',
          color: 'black',
        }}>
        Nanny
      </Text>

      <TouchableOpacity onPress={() => {}}>
        <Image
          style={{height: 40, width: 45}}
          source={require('../../assets/food1.jpg')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchTitleBar;

const styles = StyleSheet.create({});
