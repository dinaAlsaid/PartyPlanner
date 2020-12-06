import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, SafeAreaView, SectionList, Image } from 'react-native';
import { Card, ListItem, Button, Icon, CheckBox } from 'react-native-elements'


import Constants from 'expo-constants';
const ITEMS = {
	birthday: [
		{
			title: 'baloons',
			data: [
				{ name: 'd2', price: 90, image: 'https://picsum.photos/200/300' },
				{ name: 'sap green baloon', price: 90, image: 'https://picsum.photos/200/300' }
			]
		},
		{
			title: 'cake',
			data: [
				{ name: 'd1', price: 100, image: 'https://picsum.photos/200/300' },
				{ name: 'ligth grey cake', price: 100, image: 'https://picsum.photos/200/300' }
			]
		},
		{
			title: 'catering',
			data: [
				{ name: 'spoons', price: 'tableware and catering', image: 'https://picsum.photos/200/300' },
				{ name: 'Forks', price: 'tableware and catering', image: 'https://picsum.photos/200/300' }
			]
		}
	],
	babyShower: [
		{
			title: 'baloons',
			data: [
				{ name: 'b1', price: 90, image: 'https://picsum.photos/200/300' },
				{ name: 'sap green baloon', price: 90, image: 'https://picsum.photos/200/300' }
			]
		},
		{
			title: 'cake',
			data: [
				{ name: 'b2', price: 100, image: 'https://picsum.photos/200/300' },
				{ name: 'ligth grey cake', price: 100, image: 'https://picsum.photos/200/300' }
			]
		},
		{
			title: 'catering',
			data: [
				{ name: 'spoons', price: 'tableware and catering', image: 'https://picsum.photos/200/300' },
				{ name: 'Forks', price: 'tableware and catering', image: 'https://picsum.photos/200/300' }
			]
		}
	],

	graduation: [
		{
			title: 'baloons',
			data: [
				{ name: 'a1', price: 90, image: 'https://picsum.photos/200/300' },
				{ name: 'sap green baloon', price: 90, image: 'https://picsum.photos/200/300' }
			]
		},
		{
			title: 'cake',
			data: [
				{ name: 'a2', price: 100, image: 'https://picsum.photos/200/300' },
				{ name: 'ligth grey cake', price: 100, image: 'https://picsum.photos/200/300' }
			]
		},
		{
			title: 'catering',
			data: [
				{ name: 'spoons', price: 'tableware and catering', image: 'https://picsum.photos/200/300' },
				{ name: 'Forks', price: 'tableware and catering', image: 'https://picsum.photos/200/300' }
			]
		}
	]
};
function Item({ title }) {
	const [check, setCheck] = useState(false)

	return (

		<Card style={styles.container} >
			<Card.Title>{title.name}</Card.Title>
			<Card.Divider />
			<Card.Image style={styles.item} source={{
				uri: `${title.image}`,
			}} />
			<Text style={{ marginBottom: 10 }}>
				{title.price +'JD'}
			</Text>
			<CheckBox
				center
				title='Click Here'
				onPress={() =>setCheck(!check )}
				checked={check}
			/>
		</Card>
	);
	// <View style={styles.item}>
	// 	{console.log('title', title)}
	// 	<Text style={styles.title}>{title.name}
	// 	</Text>
	// </View>
};

function showitems({ route, navigation }) {
	let option = route.params.id;
	console.log(route.params.id);
	return (
		<SafeAreaView style={styles.container}>
			<SectionList
				sections={ITEMS[`${option}`]}
				keyExtractor={(item, index) => item.name + index}
				renderItem={({ item }) => <Item title={item} />}
				renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: Constants.statusBarHeight,
		marginHorizontal: 16
	},
	item: {
		width: 50,
		height: 50,
	},
	header: {
		fontSize: 32,
		backgroundColor: '#fff'
	},
	title: {
		fontSize: 24
	}
});

export default showitems;
