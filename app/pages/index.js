import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image} from 'react-native';
import  {Navigator} from 'react-native-deprecated-custom-components'

import Boy from '../../Boy';
export default class initApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// selectedTab: 'tb_home',
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<Navigator 
					initialRoute={{ component: Boy }}
					/** 每个个页面被渲染时，首先调用renderScene，传过来两个参数 路由和navigator*/
					renderScene={(route, navigator) => {
						let Component = route.component; //组件名大写，从路由中取出组件
						console.log(route.params);
						return <Component navigator={navigator} route={route}
						//重点: 将route所有内容,赋给navigator
						{...route.params} />; //将组件传过去和组建的延展属性传过去
					}}
				/>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'gray',
	},
});
