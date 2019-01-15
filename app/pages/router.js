import React, {Component} from 'react';

import MyNavigators from './MyNavigators';

export default class AppInit extends Component {
    constructor(props) {
		super(props);
		this.state = {
			// selectedTab: 'tb_home',
		};
	}
    render() {
        return (
            // 路由组件
            <MyNavigators/>
        );
    }
}