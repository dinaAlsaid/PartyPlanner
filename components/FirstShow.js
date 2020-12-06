import React from 'react';
import {  StyleSheet, TouchableOpacity, View } from 'react-native';
import {Button} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

function login(props) {
  const navigation = useNavigation();
  return (
    <View>

      <Button color='pink' onPress={()=>{console.log('sign in');
       navigation.navigate('signin');}} title='Sign in' />
      <Button color='pink' onPress={()=>{console.log('sign up');
    navigation.navigate('signup');}}title='Sign up' />
      <Button color='pink' onPress={()=>{console.log('Visitor');
    navigation.navigate('PartyOptions')}}title='Sign in as a visitor' />
    </View>
  );
}
const styles = StyleSheet.create({
  button:{
    borderRadius:15,
    backgroundColor:'yellow',
    borderWidth:1,
    borderColor:'pink',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 60,
    width: 100,
    // height:10,
  },
})
export default login;