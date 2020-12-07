import React, { useState } from 'react';
import { Text, View, Button, Alert,Image, StyleSheet, FlatList,TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';

let total = 0;
function ListItem({item}) {
  const navigation = useNavigation();
  console.log("itttteeemmm",item);
  console.log('price',item.price,parseInt(item.price));
  total +=parseInt(item.price);
	return (
    <>
    <Text  style={styles1.font}  >shoping list </Text>
		<TouchableOpacity		>
			<Text>  {item.name}</Text>
		</TouchableOpacity>
    </>
	);
}
function finalPage({ route }) {
  let { location,theme,attendees,specialRequest,date,image, checkedArray } = route.params;
  console.log(route.params);
  return (
    <View>
      <Text>Location: {location}</Text>
      <Text>Theme: {theme}</Text>
      <Text>Attendees: {attendees}</Text>
      <Text>Special Request: {specialRequest}</Text>
      <Text>Date: {date}</Text>
      <Image
       style={styles1.item} source={{ uri: image }}
       />
		<FlatList
			data={checkedArray}
			keyExtractor={(item, index) => item.name.toString()}
			renderItem={({ item, index }) => <ListItem item={item} />}
		/>
    <Text>${total} JD</Text>
    </View>
  );
}
const styles1 = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: Constants.statusBarHeight,
		marginHorizontal: 16
	},
	item: {
		width: 200,
		height: 200
  },
  font:{
    fontSize:65
  }
});

export default finalPage;