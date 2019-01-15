/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Navigator} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {
      selectedTab:'tb_home'
    }
  }
//   componentWillMount(){
//     console.log("componentWillMount")
// }

componentDidMount(){
    console.log("componentDidMount")
}

// shouldComponentUpdate(){
//     console.log("shouldComponentUpdate")
// }

// componentWillUpdate(){
//     console.log("componentWillUpdate")
// }


// componentDidUpdate(){
//     console.log("componentDidUpdate")
// }

// componentWillReceiveProps(){
//     console.log("componentWillReceiveProps")
// }

// componentWillUnmount(){
//     console.log("componentWillUnmount")
// }

  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_home'}
            title="主页"
            selectedTitleStyle={{color:'#00BFFF'}}
            renderIcon={() => <Image style={styles.imgageStyle} source={require('./res/images/ic_polular.png')} />}
            renderSelectedIcon={() => <Image style={[styles.imgageStyle,{tintColor:	'#00BFFF'}]} source={require('./res/images/ic_polular.png')} />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'tb_home' })}>
            <View style={styles.pagetb_home}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_news'}
            title="消息"
            selectedTitleStyle={{color:'#00BFFF'}}
            renderIcon={() => <Image style={styles.imgageStyle} source={require('./res/images/ic_trending.png')} />}
            renderSelectedIcon={() => <Image style={[styles.imgageStyle,{tintColor:'#00BFFF'}]} source={require('./res/images/ic_trending.png')} />}
            onPress={() => this.setState({ selectedTab: 'tb_news' })}>
            <View style={styles.pagetb_news}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_activity'}
            title="活动"
            selectedTitleStyle={{color:'#00BFFF'}}
            renderIcon={() => <Image style={styles.imgageStyle} source={require('./res/images/ic_favorite.png')} />}
            renderSelectedIcon={() => <Image style={[styles.imgageStyle,{tintColor:	'#00BFFF'}]} source={require('./res/images/ic_favorite.png')} />}
            onPress={() => this.setState({ selectedTab: 'tb_activity' })}>
            <View style={styles.pagetb_activity}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_my'}
            title="我的"
            selectedTitleStyle={{color:'#00BFFF'}}
            renderIcon={() => <Image style={styles.imgageStyle} source={require('./res/images/ic_my.png')} />}
            renderSelectedIcon={() => <Image style={[styles.imgageStyle,{tintColor:'#00BFFF'}]} source={require('./res/images/ic_my.png')} />}
            onPress={() => this.setState({ selectedTab: 'tb_my' })}>
            <View style={styles.pagetb_my}></View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  pagetb_home:{
    flex:1,
    backgroundColor:'#FFB6C1',
  },
  pagetb_news:{
    flex:1,
    backgroundColor:'#E6E6FA',
  },
  pagetb_activity:{
    flex:1,
    backgroundColor:'#7FFFAA',
  },
  pagetb_my:{
    flex:1,
    backgroundColor:'#FFE4E1',
  },
  imgageStyle:{
    height:22,
    width:22
  }
});
