import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {MEALS} from '../data/dummy-data'
import MealList from '../components/MealList'
import { HeaderButtons,Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HerderButton'
const FavScreen=props=>{
const favList=MEALS.filter(meal=>meal.id==='m1' || meal.id==='m2')
    return(
       <MealList showData={favList} navigation={props.navigation}/>
    )
}

FavScreen.navigationOptions=(navData)=>{
    return{
    headerTitle: 'Your Favourites',
    headerLeft:()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item title='Menu' iconName="md-menu" onPress={()=>{
       navData.navigation.toggleDrawer()
    }}/>
</HeaderButtons>
    }
}

export default FavScreen