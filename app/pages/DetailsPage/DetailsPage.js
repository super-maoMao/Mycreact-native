import React, { Component } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
export default class DetailsPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	// // 此处设置 Tab 的名称和一些样式，这里的会覆盖掉配置路由文件的样式，下面会讲
	// static navigationOptions = {
	// 	title: '详情',
	// 	tabBarLabel: '详情',
	// 	tabBarIcon: <Image style={{ height: 30, width: 30 }} source={require('../../images/ic_favorite.png')} />,
	// };
	render() {
		// const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Text>详情界面</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
	},
});
