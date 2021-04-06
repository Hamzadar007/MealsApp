import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform,FlatList } from 'react-native'
import MealItem from './MealItem'
import {useSelector,useDispatch} from 'react-redux';
const MealList=props=>{
    const favoriteMeal=useSelector(state=>state.meals.favouriteMeals)
   
    const renderMealItem=itemData=>{
        console.log(itemData.item)
        const isFavorite=favoriteMeal.some(meal=>meal.id===itemData.item.id)
        return    <MealItem 
        title={itemData.item.title} 
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        image={itemData.item.imageUrl}
        affordability={itemData.item.affordability}
        onSelectMeal={()=>{
            props.navigation.navigate({
                routeName:'MealDetail',
                params:{
                    mealId:itemData.item.id,
                    mealTitle:itemData.item.title,
                    isFav:isFavorite
                }
            })
        }}
        />
       
    
    }

    return(
        <View style={styles.screen}>
        <FlatList data={props.showData} keyExtractor={(item,index)=>item.id} renderItem={renderMealItem}
        style={{width:'100%'}}/>
      
      </View>
    )

}

const styles=StyleSheet.create({

})

export default MealList