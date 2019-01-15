import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Boy from '../../../Boy'; // 详情页

export default class MainPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	// // 此处设置 Tab 的名称和一些样式，这里的会覆盖掉配置路由文件的样式，下面会讲
	// static navigationOptions = {
	// 	title: '首页',
	// 	tabBarLabel: '首页',
	// 	headerBackTitle: 'lefts',
	// 	headerLeft: 'leftss',
	// 	tabBarIcon: <Image style={{ height: 30, width: 30 }} source={require('../../images/ic_polular.png')} />,
	// };

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Text
					onPress={() => {
						this.goBoy();
					}}
				>
					首页界面
				</Text>
				{/* <Text onPress={() => navigate('Boy')} title="Chat with Lucy" navigation={navigate}>
					首页界面
				</Text> */}
			</View>
		);
	}

	goBoy() {
		// this.props.navigation.navigate('Boy');
		this.props.navigation.push('Boy');
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
	},
});
