echo '请输入文件夹名》》》》》》'
read flodName
echo '开始创建文件...'
mkdir ./${flodName}/
mkdir ./${flodName}/page/
#touch ./${flodName}/page/index.js
mkdir ./${flodName}/static/
mkdir ./${flodName}/static/css
#mkdir ./${flodName}/static/css/index.js
mkdir ./${flodName}/static/image/
mkdir ./${flodName}/tpl/

echo "'use strict';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    Text:{
      color:'red'
    }
});
module.exports = styles;" >> ./${flodName}/static/css/index.js

echo "import React ,{Component,StyleSheet,View} from 'react-native';//不需要加入Text
var InteractionManager = require('InteractionManager');//组件过渡场景处理
import Text from '/src/libs/components/RnText/index'//注意我们不再引用原有的RN的Text项目

import  indexCss from '../static/css/index';//css引用  修改成对应文件名

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
		if (this.state.renderPlaceholderOnly) {
	    	return this._renderPlaceholderView();
	    }
		return(
			<View style={{flex:1}}>
				
			</View>
		)
	}
	_renderPlaceholderView() {
	    return (
	      	<View>
	        	<Text>Loading...</Text>
	      	</View>
	    );
	}
}" >> ./${flodName}/page/index.js
