import React, { useState } from 'react';
import { Button, TextInput, View ,Alert, ImageBackground,StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { Left } from 'native-base';
const image = { uri: "https://i.pinimg.com/564x/7d/ca/e6/7dcae6aaf08ecb5badb85e4e6ef42d08.jpg" };



function signin(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation();

  const createTwoButtonAlert = () =>
  Alert.alert(
    "Invalid input",
    "There are empty fields",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  );

  return (
    <ImageBackground source={image} style={styles.image}>

  

    <View style={styles1.container}>
      <TextInput
        style={styles1.input}
        textContentType='emailAddress'
        placeholder='Email'
        onChangeText={text => setEmail(text)}
        autoCapitalize={'none'}
        autoCorrect={false}
        keyboardType='email-address'
        required />

      <TextInput
        style={styles1.input}

        textContentType='password'
        placeholder='Password'
        onChangeText={text => setPassword(text)}
        autoCapitalize={'none'}
        autoCorrect={false}
        keyboardType='default'
        secureTextEntry />

      <Button title='Sign in' style={styles.button}
color='#000000' onPress={() => {
        console.log(email, password)
        if (email && password) {
          navigation.navigate('PartyOptions')
        } else {
          createTwoButtonAlert();
        }
      }}
      />

    </View>
    </ImageBackground>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    marginTop: 50,

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
    position: 'absolute',
    right:50
  }
});
const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    margin:0,

  },
  input:{
    height:50,
    width: '68%',
    // textAlign:'center',
    borderColor: 'gray', 
    borderBottomWidth: 1,
    marginBottom:5,
    
 
  }
});
export default signin;