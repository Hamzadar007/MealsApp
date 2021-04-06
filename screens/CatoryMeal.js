import React from 'react'
import { CATEGORIES } from "../data/dummy-data";
import {useSelector} from 'react-redux'
import {Text,View,StyleSheet} from 'react-native'

import MealList from '../components/MealList'
const MealScreen=props=>{
   const availableMeals=useSelector(state=>state.meals.filteredMeals);


    const catId=props.navigation.getParam('CategoryId')
    const displayedMeal=availableMeals.filter(meal=>meal.CategoryIds.indexOf(catId)>=0)
    
    if(displayedMeal.length===0|| !displayedMeal){
        return <View style={styles.content}>
            <Text>No meal found, maybe check your filters?</Text>
        </View>
    }

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
content:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}

})
export default MealScreen