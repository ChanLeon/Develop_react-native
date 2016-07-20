import React,{Component} from 'react';
import {View,Text,Image,Animated} from 'react-native';

export default class Main extends Component {
	constructor(props){
		super(props);
		this.state={
           fadeAnim: new Animated.Value(0), // init opacity 0
		};
	}

	componentDidMount() {
     Animated.timing(          // Uses easing functions
       this.state.fadeAnim,    // The value to drive
       {toValue: 1},           // Configuration
     ).start();                // Don't forget start!
   }

	render(){
		return(
           <Animated.View          
	         style={{opacity: this.state.fadeAnim}}> 
	         <Text>{this.props.children}</Text>
	       </Animated.View>
		);
	}
}