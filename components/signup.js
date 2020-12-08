import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TextInput, View, Button, Alert, StyleSheet ,ImageBackground} from 'react-native';
const image = { uri: "https://i.pinimg.com/564x/7d/ca/e6/7dcae6aaf08ecb5badb85e4e6ef42d08.jpg" };

function signUp(props) {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
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
        textContentType='name'
        placeholder='Name'
        autoCapitalize={'none'}
        onChangeText={text => setName(text)}
        autoCorrect={false}
        keyboardType='default' />
      <TextInput
        style={styles1.input}
        textContentType='password'
        placeholder='Password'
        autoCapitalize={'none'}
        onChangeText={password => setPassword(password)}
        autoCorrect={false}
        keyboardType='default'
        secureTextEntry />

      <TextInput
        style={styles1.input}
        textContentType='telephoneNumber'
        placeholder='Phone number'
        autoCapitalize={'none'}
        onChangeText={text => setPhone(text)}
        autoCorrect={false}
        keyboardType='number-pad' />

      <TextInput
        style={styles1.input}
        textContentType='emailAddress'
        placeholder='Email'
        autoCapitalize={'none'}
        onChangeText={text => setEmail(text)}
        autoCorrect={false}
        keyboardType='email-address' />

      <Button title='Sign up'
        color='#000'
        style={styles.button}
        onPress={() => {
          console.log(email, password)
          if (name && password && phone && email) {
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
    right: 50
  }
});
const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,

  },
  input: {
    height: 50,
    width: '68%',
    // textAlign:'center',
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 5,


  }
});

export default signUp;