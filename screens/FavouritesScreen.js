import React from 'react'
import {useSelector} from 'react-redux'
import {Text,View,StyleSheet} from 'react-native'
import MealList from '../components/MealList'
import { HeaderButtons,Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HerderButton'
const FavScreen=props=>{

const favMeals=useSelector(state=>state.meals.favouriteMeals);
console.log('fav : ',favMeals)

     if(favMeals.length===0 || !favMeals){
         return <View style={styles.content}>
             <Text>No favrite meals found. Start adding some!</Text>
         </View>
     }
 
   
    return(
       <MealList showData={favMeals} navigation={props.navigation}/>
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
const styles=StyleSheet.create({
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default FavScreen