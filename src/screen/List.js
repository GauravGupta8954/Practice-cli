import {Image, StyleSheet, Text, TouchableOpacity, View, TouchableHighlight, Animated} from 'react-native';
import React, {useEffect,useState} from 'react';
import {FlatList} from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import SearchTitleBar from '../component/SearchTitleBar';
//import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Swipeable from 'react-native-swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const rightButtons = [
    <TouchableHighlight><Text style={{color:'black'}}>Button 1</Text></TouchableHighlight>,
    <TouchableHighlight><Text style={{color:'black'}}>Button 2</Text></TouchableHighlight>
  ];
   
  

   

export const List = () => {

   const navigation=useNavigation();
    
    const list = [
        {
          key: 1,
          title: 'Title 1',
          text: 'Description.\nSay something cool',
          image: require('../../assets/food1.jpg'),
          address: 'malesia',
          price: '500',
          age: '20',
          backgroundColor: '#ffffff',
          rating: 4.6,
        },
        {
          key: 2,
          title: 'Title 2',
          text: 'Other cool stuff',
          image: require('../../assets/food2.jpg'),
          address: 'malesia',
          price: '500',
          age: '20',
          backgroundColor: 'rgba(0, 0, 0, .2)',
          rating: 4.6,
        },
        {
          key: 4,
          title: 'Rocket guy',
          text: "I'm already out of descriptions\n  ",
          image: require('../../assets/food3.jpg'),
          address: 'malesia',
          price: '500',
          age: '20',
          backgroundColor: '#ffffff',
          rating: 4.6,
        },
        {
          key: 5,
          title: 'Rocket guy',
          text: "I'm already out of descriptions\n  ",
          image: require('../../assets/food4.jpg'),
          address: 'malesia',
          price: '500',
          age: '20',
          backgroundColor: '#ffffff',
          rating: 4.6,
        },
        {
          key: 6,
          title: 'Rocket guy',
          text: "I'm already out of descriptions\n  ",
          image: require('../../assets/food5.jpg'),
          address: 'malesia',
          price: '500',
          age: '20',
          backgroundColor: '#ffffff',
          rating: 4.6,
        },
        {
          key: 7,
          title: 'Rocket guy',
          text: "I'm already out of descriptions\n  ",
          image: require('../../assets/food6.jpg'),
          address: 'malesia',
          price: '500',
          age: '20',
          backgroundColor: '#ffffff',
          rating: 4.6,
        },
        {
          key: 8,
          title: 'Rocket guy',
          text: "I'm already out of descriptions  ",
          image: require('../../assets/food7.jpg'),
          address: 'malesia',
          price: '500',
          age: '20',
          backgroundColor: '#ffffff',
          rating: 4.6,
        },
      ];
      return (
        <View style={styles.mainContainer} >
          <View style={styles.titleContainer}>
            <SearchTitleBar />
          </View>
          <FlatList
            data={list}
            renderItem={({item}) => {
              return (
                <Swipeable  rightButtons={rightButtons}>
                <View
                  style={styles.cardContainer}>
                  <View style={styles.cardImageContainer}>
                    <Image source={item.image} style={styles.imageStyling} />
                  </View>
                  <View style={styles.cardSideView}>
                    <Text style={[styles.blackText, {fontSize: 16}]}>
                      {item.title}
                    </Text>
                    <View style={styles.cardAddressViewContainer}>
                      <Text style={styles.blackText}>{item.address}</Text>
                      <Text style={styles.blackText}> . </Text>
                      <Text style={styles.blackText}>{item.age} years old</Text>
                    </View>
                    <Text style={[styles.blackText, {fontWeight: 'bold'}]}>
                      ${item.price}
                    </Text>
                    <View style={styles.cardRatingContainer}>
                      <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={item.rating}
                        starSize={18}
                        color="#FFD407"
                        emptyColor="#DFDFDF"
                        starStyle={{
                          marginRight: 0,
                          marginLeft: 0,
                        }}
                        //selectedStar={(rating) => this.onStarRatingPress(rating)}
                      />
                      <Text style={[styles.greytext, {paddingLeft: '2%'}]}>
                        {item.rating}
                      </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                      <TouchableOpacity style={styles.inviteButtonView}>
                        <Text style={[styles.whiteText, {fontSize: 14}]}>
                          Invite
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.hireButtonView} onPress={()=>{navigation.navigate('Groc')}}>
                        <Text style={styles.hireButtonText}>Hire</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                </Swipeable>
              );
            }}
          />
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      mainContainer: {flex: 1},
      titleContainer: {marginHorizontal: '4%', marginTop: '5%'},
      cardContainer: {
        marginHorizontal: '4%',
        padding: '3%',
        marginVertical: '2%',
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: 'black',
        elevation: 5,
      },
      cardImageContainer: {height: '100%', width: '30%', marginRight: '3%'},
      imageStyling: {
        height: '100%',
        width: '100%',
        borderRadius: 10,
        resizeMode: 'stretch',
      },
      whiteText: {color: 'white'},
      blackText: {color: 'black'},
      cardSideView: {flex: 1},
      cardAddressViewContainer: {flexDirection: 'row'},
      cardRatingContainer: {flexDirection: 'row', pointerEvents: 'none'},
      greytext: {color: 'grey'},
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: '2%',
        marginRight: '5%',
      },
      inviteButtonView: {
        borderRadius: 5,
        borderColor: '#8585C5',
        borderWidth: 1,
        height: 37,
        width: '47%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8585C5',
      },
      hireButtonView: {
        borderRadius: 5,
        borderColor: '#8585C5',
        borderWidth: 1,
        height: 37,
        width: '47%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      },
      hireButtonText: {color: '#8585C5', fontSize: 14},
    });