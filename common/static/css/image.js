'use strict';
import {StyleSheet,PixelRatio,Dimensions,Platform} from 'react-native';
var navHeight = Platform.OS == "ios" ? 64 : 48;
var onePX = 1/PixelRatio.get();
var winheight = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
    	flexDirection:"row",
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
        height:winheight - navHeight,
    },
    Text:{
      color:'red'
    },
    img:{
        borderWidth:onePX,
        borderColor:"#ccc",
        opacity:0.8,
    },
});
module.exports = styles;
