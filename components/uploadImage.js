import React, { useState,useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import {firebase}  from '../firebase/config';
import { LogBox } from 'react-native';
import { StyleSheet,View, Image, TouchableOpacity,Button} from 'react-native';
import Constants from 'expo-constants';

const postsRef = firebase.firestore().collection('posts');

LogBox.ignoreLogs(['Setting a timer']);

function uploadImage(props) {

  return (
    <View>

      {/* <Button title="upload" onPress={() => {
        updateHandler()
      }} /> */}
    </View>

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
});

export default uploadImage;