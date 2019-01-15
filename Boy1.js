import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, createAppContainer } from 'react-navigation';
let that;
export default class Boy1 extends Component {
	// navigator = {};
	constructor(props) {
		super(props);
		//初始化state
		this.state = {
			word: '',
		};
		that = this;
	}
	/**此处使用了this,但是this有指向问题，
	 * 1.在最外部声明that
	 * 2.在构造函数中将this赋值给that.
	 * 3.在此处使用that就是当前页面的this
	 */
	static navigationOptions = {
		// 导航栏标题，推荐使用
		headerTitle: '页面',
		// 导航栏返回按钮标题
		headerBackTitle: '返回',
		// 导航条左侧x，可以是按钮或者其他视图控件
		headerLeft: (
			<TouchableOpacity
				// style={styles.marginLH}
				onPress={() => {
					console.log(that.props);
					// that.props.navigation.navigate('Home');   //过滤已有导航，跳转到路由页面   
					that.props.navigation.pop();				 //返回上一页
					// this.props.navigation.popToTop()			 //返回到根页面
					// this.props.navigation.goBack()				 //返回上一页
					// this.props.navigation.push('homeNext', {message:"导航过来了"})  //不过滤已有导航，跳转到路由页面
				}}
			>
				<Icon
					name="ios-arrow-back"
					size={30} //图片大小
					color="#000" //图片颜色
					iconStyle={{ margin: 10 }}
				/>
			</TouchableOpacity>
		),
		// 导航条右侧。可以是按钮或者其他视图控件
		// headerRight: (
		// 	<Button
		// 		title="Info"
		// 		color="red"
		// 		onPress={() => {
		// 			this.props.navigation.navigate('Details');
		// 		}}
		// 	/>
		// ),
	};
	
	//render 必不可少,渲染页面
	render() {
		const { navigate } = this.props.navigation;
		let v = this.state.word ? <Text style={styles.text}>女孩送我{this.state.word}</Text> : null;
		return (
			<View style={styles.container}>
				{/* <NavgationBar title={'Boy'} /> */}
				<Text style={styles.text}>I am Boy</Text>
				<Text
					style={styles.text}
					onPress={() => {
						this.props.navigator.push({
							component: Girl,
							params: {
								word: 'GAi',
								onCallBack: word => {
									//回调
									this.setState({
										word: word,
									});
								},
							},
						});
					}}
				>
					给女孩买条GAi
				</Text>
				{/* <Text style={styles.text}>女孩送我{this.state.word}</Text> */}
				{v}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'gray',
		justifyContent: 'center', //内容居中
	},
	text: {
		fontSize: 20,
	},
	marginLH: {
		marginLeft: 100,
	},
});

