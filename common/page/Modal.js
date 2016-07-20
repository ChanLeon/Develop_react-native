import React,{Component} from 'react';
import {View,Text,Modal,Image} from 'react-native';

import  modalCss from '../static/css/modal';//css引用  修改成对应文件名
import Button from 'react-native-button';

export default class Main extends Component {
	constructor(props){
		super(props);
		this.state = {
	      modalVisible: false,
	      transparent: false,
		};
	}

	_setModalVisible(visible) {

        this.setState({modalVisible: visible});
    }

	_toggleTransparent() {
	      this.setState({transparent: !this.state.transparent});
	}

	_onpress(visible){
		this.setState({modalVisible: visible});
		this.props._onpress();
	}

    render() {
	    var modalBackgroundStyle = {
	      backgroundColor: 'rgba(0, 0, 0, 0.5)' ,
	    };
	    var innerContainerTransparentStyle = {
	      backgroundColor: "#fff",
	    };
	    return (
	      <View>
		        <Modal
		          transparent={!this.state.transparent}
		          visible={this.state.modalVisible}
		          onRequestClose={() => {this._setModalVisible(false)}}>
		          <View style={[modalCss.container, modalBackgroundStyle]}>
			            <View style={[modalCss.innerContainer, innerContainerTransparentStyle]}>
			                  <Image source={this.props.message[0].img}/>	  
				              <Text>
				                {this.props.message[0].msg}
				              </Text>
				                {
					              (this.props.status.length === 4) ?
						              <View style={modalCss.buttonContent}>
						                   <View style={modalCss.modalButtonleft}>
								              <Button onPress={this._setModalVisible.bind(this, false)} style={{color:this.props.status[2].colorleft}}>
								                {this.props.status[0].btnleft}
								              </Button>
								           </View>
								           <View style={modalCss.modalButtonright}>
								              <Button onPress={this._onpress.bind(this,false)} style={{color:this.props.status[3].colorright}}>
								                 {this.props.status[1].btnright}
								              </Button>
								           </View>
							          </View>
						              :					          
							          (this.props.status[0].btn == "取消" ?
								          <View style={modalCss.buttonContent}>
							                   <View style={modalCss.modalButtonleft}>
									              <Button onPress={this._setModalVisible.bind(this, false)} style={{color:this.props.status[1].color}}>
									               {this.props.status[0].btn}
									              </Button>
									           </View>
								          </View>
								          :
								          <View style={modalCss.buttonContent}>
							                   <View style={modalCss.modalButtonleft}>
									              <Button onPress={this._onpress.bind(this,false)} style={{color:this.props.status[1].color}}>
									                {this.props.status[0].btn}	
									              </Button>
									           </View>
								          </View>
							          )
					            }
			            </View>
		          </View>
		        </Modal>
                <View></View>
		        <Button style={{marginTop:50,}} onPress={this._setModalVisible.bind(this, true)}>
			      点击弹出modal框
			    </Button>
	      </View>

	    )
    }
}