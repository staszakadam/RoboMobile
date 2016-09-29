/* @flow */
'use strict'
import React, {Component, View, Image, StyleSheet, PixelRatio} from 'react-native';
import Dimensions from 'Dimensions';
const Window = Dimensions.get('window');

import Border from '../../Helpers/StyleBorderHelper';

export default class BackgroundComponent extends React.Component{
	render(){
		return (
		<Image source={{ uri: 'Background', isStatic: true }} style={[style.background, Border('gray')]}>
			<View style={[style.logoContainer, Border('red')]}>
				<Image source={{ uri: 'Logo', isStatic: true }} style={[style.logo, Border('yellow')]} />
			</View>
            <View style={[style.contentContainer, Border('black')]}>
                {this.props.children}
            </View>
		</Image>
			)
	}
}

const style = StyleSheet.create({
	background: {
		flex: 1,
		alignSelf: 'stretch',
		alignItems: 'center'
	},
	logoContainer: {
		position: 'absolute',
		alignItems: 'center',
		width: Window.width,
		height: Window.height,
    backgroundColor: 'transparent'
	},
	logo: {
		width: PixelRatio.getPixelSizeForLayoutSize(60),
		height: PixelRatio.getPixelSizeForLayoutSize(145),
		marginTop: 40,
        backgroundColor: 'transparent'
	},
    contentContainer: {
        width: Window.width,
        height: Window.height,
        backgroundColor: 'transparent',
        opacity: 1
  }
});
