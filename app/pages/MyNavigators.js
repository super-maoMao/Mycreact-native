import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
// import {StackNavigator, TabNavigator} from 'react-navigation';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import MainPage from './MainPage/MainPage'; // 首页
import SettingPage from './SettingPage/SettingPage'; // 设置页面
import MinePage from './MinePage/MinePage'; // 我的页面
import DetailsPage from './DetailsPage/DetailsPage'; // 详情页
import Boy from '../../Boy'; // boy

const activeStateColor = '#ff8500'; //选中时的颜色
const inactiveStateColor = '#999'; //未选中时的颜色
// 注册tabs
const Tabs = createBottomTabNavigator(
	{
		Home: {
			screen: MainPage,
			navigationOptions: {
				title: '首页',
				tabBarLabel: '首页',
				tabBarIcon: ({ focused }) => (
					<Image
						style={[styles.imgStyle, { tintColor: focused ? activeStateColor : inactiveStateColor }]}
						source={require('../images/ic_polular.png')}
					/>
				),
			},
		},
		Detail: {
			screen: DetailsPage,
			navigationOptions: {
				title: '详情',
				tabBarLabel: '详情',
				tabBarIcon: ({ focused }) => (
					<Image
						style={[styles.imgStyle, { tintColor: focused ? activeStateColor : inactiveStateColor }]}
						source={require('../images/ic_favorite.png')}
					/>
				),
			},
		},
		Set: {
			screen: SettingPage,
			navigationOptions: {
				title: '设置',
				tabBarLabel: '设置',
				tabBarIcon: ({ focused }) => (
					<Image
						style={[styles.imgStyle, { tintColor: focused ? activeStateColor : inactiveStateColor }]}
						source={require('../images/ic_trending.png')}
					/>
				),
			},
		},
		Me: {
			screen: MinePage,
			navigationOptions: {
				title: '我的',
				tabBarLabel: '我的',
				tabBarIcon: ({ focused }) => (
					<Image
						style={[styles.imgStyle, { tintColor: focused ? activeStateColor : inactiveStateColor }]}
						source={require('../images/ic_my.png')}
					/>
				),
			},
		},
	},
	{
		animationEnabled: false, // 切换页面时是否有动画效果
		tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
		swipeEnabled: false, // 是否可以左右滑动切换tab
		backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
		tabBarOptions: {
			activeTintColor: '#ff8500', // 文字和图片选中颜色
			inactiveTintColor: '#999', // 文字和图片未选中颜色
			showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
			indicatorStyle: {
				// height: 0, // 如TabBar下面显示有一条线，可以设高度为0后隐藏
			},
			style: {
				backgroundColor: '#fff', // TabBar 背景色
				height: 49,
			},
			labelStyle: {
				// fontSize: 12, // 文字大小
			},
		},
	}
);

const navigator = createStackNavigator(
	{
		Home: {
			screen: Tabs,
			navigationOptions: {
				header: null,
			},
		},
		Boy: {
			screen: Boy,
		},
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			headerStyle: {
				// backgroundColor: '#f4511e',
			},
			headerBackTitle: null,
			// headerTintColor: '#fff',
			headerTitleStyle: {
				fontSize: 14,
				flex: 1,
				textAlign: 'center',
			},
			// header: null,
			gesturesEnabled: true,
		},
	}
);

const AppReact = createAppContainer(navigator);
export default AppReact;

const styles = StyleSheet.create({
	imgStyle: {
		height: 22,
		width: 22,
	},
});
