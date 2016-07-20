import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import Button from 'react-native-button';
import Modal from './Modal';

export default class Main extends Component {
  constructor(props){
  	super(props);
  	this.state={

  	}
  }

  _onpress(){
  	alert("hello world");
  }

  render(){
     var data = [{msg:"hello world\nhello world\nhello world\n"}];
  	 // var data = [{msg:"hello world\nhello world\nhello world\n",img:require('../static/image/img/default.jpg')}];
     // var btn = [{btnleft:"取消"},{btnright:"确定"},{colorleft:"#f00"},{colorright:"#f0f"}];
     // var btn = [{btn:"确定"},{color:"#f0f"}];
     var btn = [{btn:"取消"},{color:"#ffaaee"}];

    return (
    	<View>
	        <Modal message={data} status={btn} _onpress={this._onpress.bind(this)}/>
	        <Text>test测试test测试test测试test测试test测试test测试{"\n"}</Text>  
	        <Text>test测试test测试test测试test测试test测试test测试{"\n"}</Text>  
	        <Text>test测试test测试test测试test测试test测试test测试{"\n"}</Text>  
	        <Text>test测试test测试test测试test测试test测试test测试{"\n"}</Text>  
	        <Text>test测试test测试test测试test测试test测试test测试{"\n"}</Text>  
	        <Text>test测试test测试test测试test测试test测试test测试{"\n"}</Text>
      </View>

    )
  }
}