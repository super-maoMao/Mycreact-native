import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class initPages extends Component {
	constructor(props) {
		super(props);
		this.state = {
			word: 'Hello world!',
		};
	}

	render() {

		return (
			<View style={styles.container}>
				<Text style={styles.text}>{this.state.word}</Text>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'gray',
		justifyContent: 'center',
	},
	text: {
		fontSize: 22,
	},
});
