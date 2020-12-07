import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, SafeAreaView, SectionList, Image, TouchableOpacity } from 'react-native';
import { Card, ListItem, Button, Icon, CheckBox } from 'react-native-elements';
import Constants from 'expo-constants';

let checkedArray = [];
const ITEMS = {
	babyShower: [
		{
			data: [
				{
					image: 'https://images.partydelights.co.uk/OHBA/BA/LL2/front/v1/p11/2.jpg',
					name: 'Oh Baby Giant Gender',
					price: '2'
				},
				{
					image: 'https://images.partydelights.co.uk/FOIL/32/10/front/v1/p11/2.jpg',
					name: 'Gold Baby Phrase Balloon ',
					price: '5'
				},
				{
					image: 'https://images.partydelights.co.uk/WEIG/11/2/front/v1/p11/2.jpg',
					name: 'Baby Bottle Blue Balloon',
					price: '10'
				}
			],
			title: 'balloons'
		},
		{
			data: [
				{
					image: 'https://images.partydelights.co.uk/OHBG/CU/PK/front/v1/p11/2.jpg',
					name: 'Baby Girl Pink Cupcake Kit',
					price: '2'
				},
				{
					image: 'https://images.partydelights.co.uk/OHBB/CU/PK/front/v1/p11/2.jpg',
					name: 'Baby Boy Blue Cupcake Kit',
					price: '2'
				},
				{
					image : 'https://images.partydelights.co.uk/SDEC/46/2/front/v1/p11/2.jpg',
					name: 'Gender Reveal Balloons Sugar Cake Toppers',
					price: '3'
				},
				{
					image: 'https://images.partydelights.co.uk/SDEC/41/7/front/v1/p11/2.jpg',
					name: "'Baby' Diamante Cake Pick ",
					price: '2'
				}
			],
			title: 'cake and sweets'
		},
		{
			data: [
				{
					image: 'https://images.partydelights.co.uk/TWTW/BA/NN/front/v3/p60/2.jpg',
					name: 'Twinkle Twinkle Baby Shower Rose Gold Banner ',
					price: '2'
				},
				{
					image: 'https://images.partydelights.co.uk/images/links/link-plates_v3.jpg',
					name: ' Paper & Plastic Plates',
					price : '2'
				},
				{
					image: 'https://images.partydelights.co.uk/SILV/2C/UPB/front/v1/p11/1.jpg',
					name: 'Paper & Plastic Cups',
					price: '2'
				},
				{
					image: 'https://images.partydelights.co.uk/BORN/GA/RL/front/v2/p11/2.jpg',
					name: 'Born To Be Loved Garland',
					price: '5'
				}
			],
			title: 'Catering and tableware'
		}
	],
	birthday: [
		{
			data: [
				{
					image: 'https://images.partydelights.co.uk/BALL/30/64/front/v2/p11/2.jpg',
					name: 'directions',
					price: '10'
				},
				{
					image: 'https://images.partydelights.co.uk/images/link/MIXICHAN-v2.jpg',
					name: 'direction ',
					price: '35'
				},
				{
					image: 'https://images.partydelights.co.uk/PMRG/FO/IL/front/v1/th2/2.jpg',
					name: "Pick & Mix Rose Gold 'Happy Birthday'",
					price : '10'
				},
				{
					image: 'https://images.partydelights.co.uk/BALL/10/35/front/v1/p11/2.jpg',
					name : 'Pink Birthday Girl',
					price : '10'
				}
			],
			title: 'balloons'
		},
		{
			data: [
				{
					image : 'https://www.partydelights.co.uk/images/header/20_candy-buffet-header-v2.jpg',
					name : 'Candy Buffet',
					price : '5'
				},
				{
					image:
						'https://images.immediate.co.uk/production/volatile/sites/2/2020/04/Easter-Cupcakes-0e58865-scaled.jpg?quality=90&crop=5px%2C1172px%2C1818px%2C782px&resize=960%2C408',
					name: 'cup cakes',
					price: '15'
				},
				{
					image:
						'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DR_xDiShk',
					name : ' Cooking Light The Ultimate Decadent Chocolate-and-Cream Layer Cake',
					price : '20'
				},
				{
					image:
						'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/4/5/1/IG1C17_30946_s4x3.jpg.rend.hgtvcom.826.620.suffix/1433541424559.jpeg',
					name: 'Pink Butter Icing',
					price : '25'
				}
			],
			title: 'cake and sweets'
		},
		{
			data: [
				{
					image: 'https://images.partydelights.co.uk/images/links/link-plates_v3.jpg',
					name: ' Paper & Plastic Plates',
					price : '3'
				},
				{
					image: 'https://images.partydelights.co.uk/SILV/2C/UPB/front/v1/p11/1.jpg',
					name: 'Paper & Plastic Cups',
					price: '2'
				},
				{
					image: 'https://images.partydelights.co.uk/PREM/CU/TLG/front/v1/p11/2.jpg',
					name: 'Cutlery',
					price: '2'
				},
				{
					image:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmU64VBnMcI0tt6BIimOpyEOKwqHTFr8yCg&usqp=CAU',
					name: 'candles birthday',
					price: '10'
				}
			],
			title: 'catering and TABLEWARE'
		}
	],
	graduation: [
		{
			data: [
				{
					image: 'https://images.partydelights.co.uk/GRAD/8B/OUQ/front/v1/ps13/2.jpg',
					name: 'Graduation Foil Balloon Bouquet - Assorted Foil',
					price: '10'
				},
				{
					image: 'https://images.partydelights.co.uk/AIRW/06/5/front/v1/ps13/2.jpg',
					name: 'Metallic Star Cluster AirLoonz Balloon ',
					price: '3'
				},
				{
					image: 'https://images.partydelights.co.uk/BALL/16/72/front/v1/p11/2.jpg',
					name: 'Congratulations Balloons',
					price: '2'
				},
				{
					image: 'https://images.partydelights.co.uk/BALL/79/2/front/v1/p11/2.jpg',
					name: 'Congratulations Graduate Balloons ',
					price: '2'
				}
			],
			title: 'balloons'
		},
		{
			data: [
				{
					image:
						'https://i1.wp.com/raisingteenstoday.com/wp-content/uploads/2019/04/Grad-Cakes-43.jpg?fit=940%2C788&ssl=1',
					name: 'graduation Cake',
					price: '2'
				},
				{
					image: 'https://www.cakeygoodness.co.uk/wp-content/uploads/2018/03/Nurse-Cupcakes-3.jpg',
					name: 'cupcakes graduation',
					price: ' 3'
				},
				{
					image: 'https://hungryhappenings.com/wp-content/uploads/2017/08/graduation-party-food-C.jpg',
					name: 'sweets  graduation',
					price: '2'
				}
			],
			title: 'cake and sweets'
		},
		{
			data: [
				{
					image: 'https://images.partydelights.co.uk/images/links/link-plates_v3.jpg',
					name: '  Paper & Plastic Plates',
					price: '3'
				},
				{
					image: 'https://images.partydelights.co.uk/SILV/2C/UPB/front/v1/p11/1.jpg',
					name: 'Paper & Plastic Cups',
					price: '2'
				},
				{
					image: 'https://images.partydelights.co.uk/PREM/CU/TLG/front/v1/p11/2.jpg',
					name: 'Cutlery',
					price: '2'
				}
			],
			title: 'Catering and tableware'
		}
	]
};
function Item({ title1 }) {
	let item = title1.params;
	const [check, setCheck] = useState(false);

	return (
		<Card style={styles.container}>
			<Card.Title>{title1.name}</Card.Title>
			<Card.Divider />
			<Card.Image
				style={styles.item}
				source={{
					uri: `${title1.image}`
				}}
			/>
			<Text style={{ marginBottom: 10 }}>{title1.price + 'JD'}</Text>
			<CheckBox center title="Click Here" onPress={() => {
				setCheck(!check)
				checkedArray.push(title1);
				console.log("jthdjtfl'oji",checkedArray);
			}} checked={check} />
		</Card>
	);
}

function showitems({ route, navigation }) {

	let option = route.params.id;

	return (
		<SafeAreaView style={styles.container}>
			<SectionList
				sections={ITEMS[`${option}`]}
				keyExtractor={(item, index) => item.name + index}
				renderItem={({ item }) => <Item title1={item} />}
				renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
			/>
			<Button title='Submit' onPress={() => {
				navigation.navigate('optionsForm', {checkedArray});
			}}
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
		height: 50
	},
	header: {
		fontSize: 32,
		backgroundColor: '#fff'
	},
	title: {
		fontSize: 24
	}
});
export default showitems