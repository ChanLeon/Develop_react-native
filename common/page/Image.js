import React ,{Component} from "react";
import {StyleSheet,View,Text,Platform,Dimensions,PixelRatio,InteractionManager,Image} from 'react-native';//不需要加入Text
import  indexCss from '../static/css/image';//css引用  修改成对应文件名
export default class Main extends Component {  
	constructor(props){
		super(props);
		this.state = {renderPlaceholderOnly: true};
	}
	componentDidMount(){
		InteractionManager.runAfterInteractions(() => {
	    	this.setState({renderPlaceholderOnly: false});
	    });
	}
	render(){
		var width = PixelRatio.getPixelSizeForLayoutSize(this.props.style.width);
        var height = PixelRatio.getPixelSizeForLayoutSize(this.props.style.height);
		if (this.state.renderPlaceholderOnly) {
	    	return this._renderPlaceholderView();
	    }
		return(
			<View style={[{flex:1},indexCss.container]}>
				<Image style={[indexCss.img,{width:width,height:height}]} source={this.props.src} />
			</View>
		)
	}
	_renderPlaceholderView() {
	    return (
	      	<View style={indexCss.container}>
	        	<Image style={indexCss.img} source={require("../static/image/img/default.jpg")} />
	      	</View>
	    );
	}
}
