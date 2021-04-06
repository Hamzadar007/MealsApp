import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform,ImageBackground } from 'react-native'

const MealItem=props=>{
    return(
        <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.onSelectMeal}>
            <View>
      <View style={{...styles.mealRow,...styles.mealHeader}}>
          <ImageBackground source={{uri:props.image}} style={styles.bgImage}>
        <View style={styles.titleContiner}>
             <Text style={styles.title}>{props.title}</Text>
             </View> 
          </ImageBackground>
          </View>
      <View style={{...styles.mealRow,...styles.mealDetail}}>
          <Text>{props.duration}m</Text>
          <Text>{props.affordability.toUpperCase()}</Text>
          <Text>{props.complexity.toUpperCase()}</Text>
          
      </View>
    </View>
    </TouchableOpacity>
    </View>
    )
}

const styles=StyleSheet.create({
mealRow:{
    flexDirection:'row'
},
mealItem:{
    height:200,
    backgroundColor:'#f5f5f5',
    borderRadius:10,
    overflow:'hidden',
    marginHorizontal:10,
    marginVertical:10,
    flex:1
},
mealHeader:{
    height:'85%'
},
titleContiner:{
    backgroundColor:'rgba(0,0,0,0.5)',
    paddingVertical:5,
    paddingHorizontal:10,
},
title:{
    fontWeight:'bold',
    fontSize:15,
    color:'white',
    textAlign:'center'

},
mealDetail:{
paddingHorizontal:10,
justifyContent:'space-between',
alignItems:'center',
height:'15%'
},
bgImage:{
width:'100%',
height:'100%',
justifyContent:'flex-end'
}
})

export default MealItem