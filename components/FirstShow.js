import React from 'react';
import { Button,StyleSheet,ImageBackground, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const image = { uri: "https://i.pinimg.com/564x/33/7c/3b/337c3be72f3877ef7f35f4fd5328f301.jpg" };
function login(props) {
  const navigation = useNavigation();
  return (
    <ImageBackground source={image} style={styles1.image}>
    <View  style={styles1.container}>

    <Button color='#93e4d0' 
      onPress={() => {
        console.log('sign in');
        navigation.navigate('signin');
      }} title='Sign in' />
      <Button type='solid' color='#93e4d0'
      onPress={() => {
        console.log('sign up');
        navigation.navigate('signup');
      }} title='Sign up' />
      <Button color='#93e4d0' type='solid' style={styles1.button}
      onPress={() => {
        console.log('Visitor');
        navigation.navigate('PartyOptions')
      }} title='Sign in as a visitor' />
   
  
  </View>
    </ImageBackground>
    

  );
}
const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    margin:0,

  },
  image: {
    flex: 1,
    resizeMode: "stretch",
    justifyContent: "center",  
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
    justifyContent: 'center',

  },
  button:{
    marginTop:5,
  }
});

export default login;