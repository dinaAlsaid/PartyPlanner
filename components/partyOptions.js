import React from 'react';
import { FlatList, TouchableOpacity, Text ,StyleSheet,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { View } from 'native-base';

const partyOption = {
	parties: [
		{
			name: 'Birthday Party',
			image: 'https://i.pinimg.com/564x/76/bc/e2/76bce2fc0d3b99044bdb480dfd36ef0f.jpg',
			id: 'birthday'
		},
		{
			name: 'BabyShower Party',
			image: 'https://i.pinimg.com/564x/64/d8/50/64d8500b16f98014e7fcec54868377a4.jpg',
			id: 'babyShower'
		},
		{
			name: 'Graduation Party',
			image: 'https://i.pinimg.com/564x/14/2d/0a/142d0af5847ed574bfcbb303a74396d6.jpg',
			id: 'graduation'
		}
	]
};
function ListItem(props) {
	const navigation = useNavigation();
	return (
		<View style={styles1.container}>

		<TouchableOpacity
		style={{borderColor:'grey',width:"90%",marginTop:20,marginBottom:10}}
		onPress={() => {
			/* 1. Navigate to the Details route with params */
			navigation.navigate('showitems', {
				id: `${props.item.id}`,
				image: `${props.item.image}`
			});
		}}
		
		
		>
				
				
			<Image 		style={{width:"100%",height:320}}
				source={{
					uri:`${props.item.image}`
				}} />
			<Text style={{textAlign:'center',marginTop:20}}>{props.item.name} </Text>
		</TouchableOpacity>
</View>
	);
}
function partyOptions(props) {
	return (
		<FlatList
			data={partyOption.parties}
			keyExtractor={(item, index) => item.id.toString()}
			renderItem={({ item, index }) => <ListItem item={item} />}
		/>
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

export default partyOptions;
