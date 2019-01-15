import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Girl extends Component {
	constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            word:props.word,
            onCallBack:props.onCallBack
        };
	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>I am Girl</Text>
				<Text style={styles.text}>我收到了{this.state.word}</Text>
                <Text style={styles.text}
                    onPress={()=>{
                        this.state.onCallBack('Gay')
                        this.props.navigator.pop()
                    }}
                >回赠</Text>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'red',
		justifyContent: 'center',
	},
	text: {
		fontSize: 22,
	},
});
