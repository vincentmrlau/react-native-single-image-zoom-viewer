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

// import SingleImageZoomViewer from './SingleImageZoomViewer'
import SingleImageZoomViewer from 'react-native-single-image-zoom-viewer'

let remoteSource = {uri:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1972890221,1494503013&fm=26&gp=0.jpg'},
    localSource = require('./example-image.png'),
    optionRemote = {
     source: remoteSource
    },
    optionLocal = {
      source:localSource,
      width: 200,
      height: 200
    }


export default class ImageViewerExample extends Component {
  render() {
    return (
      <SingleImageZoomViewer {...optionRemote}/>
    );
  }
}


AppRegistry.registerComponent('ImageViewerExample', () => ImageViewerExample);
