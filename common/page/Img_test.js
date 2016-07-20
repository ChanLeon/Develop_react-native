import React ,{Component} from "react";
import  MyImg from './Image';
export default class Main extends Component {  
	render(){
		return (
           <MyImg src={require("../static/image/img/default.jpg")} style={{width:75,height:75}}/>
		)
	}
}
