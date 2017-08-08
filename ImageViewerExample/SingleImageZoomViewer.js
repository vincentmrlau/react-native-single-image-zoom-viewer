/**
 * Created by liuyiman on 2017/8/7.
 *
 * 使用
 */

import {
	View,
	Image,
	StyleSheet,
	Dimensions
} from 'react-native'

import React from 'react'

class SingleImageZoomViewer extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			isFromUri: false,
			left:0,
			top: 0,
			width: 0,
			height: 0,
			scale:1
		}
		this.center = this.center.bind(this)
	}

	center(_width, _height){
		let {width, height} = Dimensions.get('window'),
			rateImage = _width/_height,
			rateWindow = width/height,
			top,
			left,
			scale
		if (rateImage > rateWindow) {
			top = (height - _height)/2
		} else {

		}
	}


	componentWillMount(){
		// different image source deal in different way
		if (this.props.source.uri === undefined) {

		} else {
			Image.getSize(this.props.source, (width, height)=>{
				console.log(width, height)
			}, (error) => {
				console.log(error)
			})
		}
	}

	render(){
		console.log(this.state)
		return(
			<View style={
				{
					flex:1,
					backgroundColor: 'black'
				}
			}>
				<Image source={this.props.source} style={{
					position: 'absolute',
					width:this.state.width,
					height:this.state.height,
					left:this.state.left,
					top:this.state.top,
					transform: [{
						scale:this.state.scale
					}]
				}}/>
			</View>
		)
	}
}

export default SingleImageZoomViewer