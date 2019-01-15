// import React, { Component } from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';

// const NAV_BAR_HEIGHT_ANDROID = 50; //安卓的高度
// const NAV_BAR_HEIGHT_IOS = 44; //ios高度
// const STATUS_BAR_HEIGHT = 20; //状态条的高度

// class NavigationBar extends Component {
// 	/** 定义状态条的属性 */
// 	static propTypes = {
// 		style: View.propTypes.style,
// 		title: propTypes.string,
// 		titleView: propTypes.element,
// 		hide: propTypes.bool,
// 		leftButton: propTypes.element,
// 		rightButton: propTypes.element,
// 	};

// 	/**构造函数 */
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			title: '',
// 			hide: false, //默认状态下显示
// 		};
// 	}
// 	render() {
// 		let titleView = this.props.titleView ? this.props.titleView : <Text>{this.props.title}</Text>;
// 		let content = (
// 			<View>
// 				{this.props.leftButton}
// 				{titleView}
// 				{this.props.rightButton}
// 			</View>
// 		);
// 		return <View style={styles.container}>{content}</View>;
// 	}
// }

// export default NavigationBar;

// const styles = StyleSheet.create({
// 	container: {
// 		backgroundColor: 'gray',
// 	},
// });
