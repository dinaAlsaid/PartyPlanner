import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements';
import FirstShow from './components/FirstShow.js';
import SignUp from './components/signup.js';
import Signin from './components/signin.js';
import PartyOptions from './components/partyOptions';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import showitems from './components/showitems.js';
import optionsForm from './components/optionsForm.js'
import FinalPage from './components/finalPage.js';

const Stack = createStackNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={FirstShow} />
				<Stack.Screen name="signup" component={SignUp} />
				<Stack.Screen name="signin" component={Signin} />
				<Stack.Screen name="PartyOptions" component={PartyOptions} />
				<Stack.Screen name="showitems" component={showitems} />
				<Stack.Screen name="optionsForm" component={optionsForm} />
				<Stack.Screen name="FinalPage" component={FinalPage} />

			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'transparent',
		alignItems: 'center',
		justifyContent: 'center'
	},
	div: {
		position: 'absolute',
		top: 50,
		right: 0,
		backgroundColor: 'purple'
	}
});
