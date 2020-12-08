import React from 'react';
import { Button, StyleSheet, ImageBackground, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const image = { uri: "https://i.pinimg.com/564x/7d/ca/e6/7dcae6aaf08ecb5badb85e4e6ef42d08.jpg" };
function login(props) {
  const navigation = useNavigation();
  return (
    <ImageBackground source={image} style={styles1.image}>
      <View style={styles1.container}>

        <View style={styles1.button}>

          <Button color='#000'
            onPress={() => {
              console.log('sign in');
              navigation.navigate('signin');
            }} title='Sign in' />

        </View>
        <View style={styles1.button}>

          <Button  color='#000'
            onPress={() => {
              console.log('sign up');
              navigation.navigate('signup');
            }} title='Sign up' />
        </View>
        <View style={styles1.button}>


          <Button color='#000' 
            onPress={() => {
              console.log('Visitor');
              navigation.navigate('PartyOptions')
            }} title='Sign in as a visitor' />
        </View>
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
    // marginTop: 50,

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
  button: {
    marginTop: 5,
  }
});

export default login;