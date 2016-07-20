'use strict';
import {StyleSheet,PixelRatio} from 'react-native';
var onePX = 1/PixelRatio.get();
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
  },
   innerContainer: {
        paddingTop:30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:"center",
  },  
  buttonContent:{
        flexDirection:"row",
        flex:1,
        marginTop:10,
        paddingVertical:10,
        borderTopWidth:1,
        borderColor:"#ccc",
  },
  modalButtonleft: {
        flex:1,
        borderRightWidth:1,
        borderColor:"#ccc",
  },
  modalButtonright: {
        flex:1,
  },
});
module.exports = styles;
