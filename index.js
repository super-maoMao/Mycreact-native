/** @format */

import {AppRegistry} from 'react-native';
// import App from './App';
// import App from './app/pages/index';
// import App from './app/pages/index1';
import App from './app/pages/router';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
