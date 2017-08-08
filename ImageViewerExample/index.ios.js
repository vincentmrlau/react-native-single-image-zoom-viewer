/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import SingleImageZoomViewer from './SingleImageZoomViewer'

let remoteSource = {uri:'http://developer.baidu.com/map/static/img/js_fn14.jpg'},
  localSource = require('./example-image.png')

export default class ImageViewerExample extends Component {
  render() {
    return (
      <SingleImageZoomViewer source={remoteSource}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ImageViewerExample', () => ImageViewerExample);
