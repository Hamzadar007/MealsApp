import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CategoryScreen from '../screens/CategoryScreen';
import FavouritesScreen from '../screens/FavouritesScreen'
import CategoryMealScreen from '../screens/CatoryMeal';
import MealDetailScreen from '../screens/MealDetailScreen';
import { createAppContainer } from 'react-navigation';
import {  Platform } from "react-native";
import Colors from "../constants/Colors";
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
 import FilterScreen from '../screens/FilterScreen'

const defaultSTackNavSetting={
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  
}

const FavNavigatior=createStackNavigator({
    Favourite:FavouritesScreen,
    MealDetail:MealDetailScreen
},{
    defaultNavigationOptions:defaultSTackNavSetting
})



 const MealNavigator= createStackNavigator({
Category:CategoryScreen,
CategoryMeal:{
    screen:CategoryMealScreen
},
MealDetail:MealDetailScreen


},{
    defaultNavigationOptions:defaultSTackNavSetting
});
  
const screenConfig=    {
    Meals:{screen: MealNavigator,navigationOptions:{
        tabBarIcon:(tabInfo)=>{
            return <Icon name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
        } ,
        tabBarColor:Colors.primaryColor
    
        
    }},
    Favourites:{screen: FavNavigatior,navigationOptions:{
        tabBarIcon:(tabInfo)=>{
            return <Icon name='ios-star' size={25} color={tabInfo.tintColor}/>
        },
        tabBarColor:Colors.accentColor,
       
        
    }}
}


const FilterStackNavigator=createStackNavigator({
    Filters:FilterScreen
},{
    defaultNavigationOptions:defaultSTackNavSetting
})


const MealTabNavigator=Platform.OS==='android'?createMaterialBottomTabNavigator(
    screenConfig,
    {
        activeColor:'white',
        shifting:false,
        barStyle:{
            backgroundColor:Colors.primaryColor
        },
        
    }
): createBottomTabNavigator(
    screenConfig
,{
    tabBarOptions:{
        activeTintColor:'white',
        labelStyle:{
            fontWeight:'bold'
        }
    },
    
})


const MainNavigator=createDrawerNavigator({
    MealsFav:{screen: MealTabNavigator,navigationOptions:{
        drawerLabel:'Meals',
        
    }},
    Filters:FilterStackNavigator
},{
    contentOptions:{
        activeTintColor:Colors.primaryColor
    }
})

export default  createAppContainer(MainNavigator)