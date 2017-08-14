# react-native-single-image-zoom-viewer

[![](https://img.shields.io/badge/Github-parsing-green.svg)](https://github.com/vincentmrlau/react-native-single-image-zoom-viewer)
[![](https://img.shields.io/badge/demo-parsing-orange.svg)](https://github.com/vincentmrlau/react-native-single-image-zoom-viewer-demo)

> move && zoom anywhere

![](https://raw.githubusercontent.com/vincentmrlau/remote-image-store/master/zoomer-move.gif)

![](https://raw.githubusercontent.com/vincentmrlau/remote-image-store/master/zoomer-zoom.gif)

## Getting Start

### install
> npm i react-native-single-image-zoom-viewer --save

### import & use
```javaScript
// import
import SingleImageZoomViewer from 'react-native-single-image-zoom-viewer'

// use in any component
// use remote image from uri
<SingleImageZoomViewer source={{uri:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1972890221,1494503013&fm=26&gp=0.jpg'}}/>

// use local image,
<SingleImageZoomViewer source={require('./example-image.png')} width={200} height={{200}}/>
```

#### props

|props|type|needed|detail|default|
|:---|:---|:---|:---|:---|
|source|RN Image Source|yes|use `{uri:uri}` or `require('local uri')` like use React Native Image|none|
|width|Number|no|if the source is `{uri:uri}`,it will auto set,if not it is default to be 200,or your setting| see detail|
|height|Number|same as width|same as width||
|style|Object|no|the container style object|`{flex:1,backgroundColor:'black'}`


## Problem may occur
### use http resource
1. open `info.plist` in Xcode
2. add `App Transport security setting` below `Information Property List`
3. add `Allow Arbitrary Load` below `App Transport security setting` and set value `yes`