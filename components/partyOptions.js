import React from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const partyOption = {
	parties: [
		{
			name: 'Birthday Party',
			image: 'url',
			id: 'birthday'
		},
		{
			name: 'BabyShower Party',
			image: 'url',
			id: 'babyShower'
		},
		{
			name: 'Graduation Party',
			image: 'url',
			id: 'graduation'
		}
	]
};
function ListItem(props) {
	const navigation = useNavigation();
	return (
		<TouchableOpacity
			onPress={() => {
				/* 1. Navigate to the Details route with params */
				navigation.navigate('showitems', {
					id: `${props.item.id}`,
					image: `${props.item.image}`
				});
			}}
		>
			<Text>{props.item.name}</Text>
		</TouchableOpacity>
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

export default partyOptions;
