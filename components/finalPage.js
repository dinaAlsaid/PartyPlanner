import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground,FlatList } from 'react-native';
import { Card, Icon, CheckBox } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
const image1 = { uri: "https://i.pinimg.com/564x/7d/ca/e6/7dcae6aaf08ecb5badb85e4e6ef42d08.jpg" };
let total = 0;
function ListItem({ item }) {
  total += parseInt(item.price);
  return (
    <>

      <TouchableOpacity		>
        <Text>  {item.name}</Text>
      </TouchableOpacity>
    </>
  );
}
function finalPage({ route }) {
  let { location, theme, attendees, specialRequest, date, image, checkedArray } = route.params;
  const navigation = useNavigation();
  return (

    <ImageBackground source={image1} style={styles1.image}>
      <View style={styles1.container}>
        <Card >
          <Card.Title>CART LIST AND CONFIRM  </Card.Title>
          <Card.Divider />

          <Text style={styles1.font} style={{}}>Location {location}</Text>
          <Text style={styles1.font}>Theme {theme}</Text>
          <Text style={styles1.font}>Attendees {attendees}</Text>
          <Text style={styles1.font}>Special Request {specialRequest}</Text>
          <Text style={styles1.font}>Date {date}</Text>
          <Image
            style={styles1.item} source={{ uri: image }}
          />
          <Text style={styles1.font}  >shoping list </Text>
          
       

        <FlatList
          data={checkedArray}
          keyExtractor={(item, index) => item.name.toString()}
          renderItem={({ item, index }) => <ListItem item={item} />}
        />
        <Text style={styles1.font}>${total} JD</Text>
        <Button
            icon={<Icon name='code' color='#000' />}
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='confirm'
            color='#000' 
            onPress={()=>navigation.navigate('Home')}/>
        </Card>
      </View>
    </ImageBackground>
  );
}
const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
    flexDirection: "column",
    marginLeft: 8,
    marginTop: 45
    // justifyContent: 'center',
    // alignItems: 'center',

  },
  item: {
    width: 200,
    height: 200
  },
  font: {
    fontSize: 15

  },
  image: {
    flex: 1,
    resizeMode: "stretch",
    justifyContent: "center",
  }
});

export default finalPage;