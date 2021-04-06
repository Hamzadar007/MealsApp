import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform,TouchableNativeFeedback } from 'react-native'

const CategoryGridTile = props => {
    let TouchCamp=TouchableOpacity;
    if(Platform.OS==='android'&& Platform.Version>=21){
        TouchCamp=TouchableNativeFeedback;
    }
return(
    <View style={styles.gridItem}>
    <TouchCamp style={{flex:1}}   onPress={
      props.onSelect
    }>
        <View style={{...styles.container,...{backgroundColor:props.color}}}>
            <Text style={{fontWeight:'bold',fontSize:20}}>{props.title}</Text>
        </View>
    </TouchCamp>
    </View>
)
}

const styles = StyleSheet.create({

    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius:10,
        overflow:Platform.OS==='android' && Platform.Version>=21? 'hidden':'visible',
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0,height:2},
        shadowRadius:10,
        elevation:3,
      
    },
    container:{
      flex:1,
      borderRadius:10,

      padding:15,
      justifyContent:'flex-end',
      alignItems:'flex-end'
    }
})
export default CategoryGridTile