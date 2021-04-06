import React from 'react'
import {View,Text,StyleSheet,Button,FlatList} from 'react-native'
import { CATEGORIES,MEALS } from "../data/dummy-data";

import MealList from '../components/MealList'
const MealScreen=props=>{
    const catId=props.navigation.getParam('CategoryId')
    const displayedMeal=MEALS.filter(meal=>meal.CategoryIds.indexOf(catId)>=0)


    return(
<MealList showData={displayedMeal} navigation={props.navigation}/>
    )
}


MealScreen.navigationOptions=navigationData => {
    const catId=navigationData.navigation.getParam('CategoryId')
    const selectedCat=CATEGORIES.find(cat=>cat.id===catId)
    return{
        headerTitle: selectedCat.title,
    
}
}
const styles=StyleSheet.create({
screen:{
      flex:1
},

})
export default MealScreen