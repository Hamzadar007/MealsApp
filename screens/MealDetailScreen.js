import React,{useEffect,useCallback} from 'react'
import {Image,Text,StyleSheet,View, ScrollView} from 'react-native'
import {useSelector,useDispatch} from 'react-redux';
import { HeaderButtons,Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HerderButton'
import Colors from "../constants/Colors";
import { toggleFavorite } from '../store/actions/mealActon';
const ListItem=props=>{
    return <View style={styles.listItem}>
        <Text>{props.children}</Text>
    </View>
}

const MealDetailScreen=props=>{
    const availableMeals=useSelector(state=>state.meals.meals)
    const mealId=props.navigation.getParam('mealId');
    const currentMealIsFavorite=useSelector(state=>state.meals.favouriteMeals.some(meal=>meal.id===mealId))
    const selectedMeal=availableMeals.find(meal=>meal.id===mealId)
    const dispatch=useDispatch();

    const toggleFavoriteHandler=useCallback(()=>{
        console.log(mealId)
        dispatch(toggleFavorite(mealId))
    },[dispatch,mealId])

    
    useEffect(()=>{
        // props.navigation.setParams({mealTitle:selectedMeal.title});
        // console.log('action dispatch')
         props.navigation.setParams({toggleFav:toggleFavoriteHandler});

    },[toggleFavoriteHandler])
  useEffect(()=>{
      props.navigation.setParams({isFav:currentMealIsFavorite})
  },[currentMealIsFavorite])
    return(
        <ScrollView>
         <Image source={{uri:selectedMeal.imageUrl}} style={styles.image}/>
         <View style={styles.mealRow}>
          <Text style={styles.textstyle}>{selectedMeal.duration}m</Text>
          <Text style={styles.textstyle}>{selectedMeal.affordability.toUpperCase()}</Text>
          <Text style={styles.textstyle}>{selectedMeal.complexity.toUpperCase()}</Text>
        
      </View>
      <View style={{marginTop:10,marginLeft:10}}>
      <Text style={{fontWeight:'bold',color:Colors.primaryColor,fontSize:20,alignSelf:'center'}}>Ingrediants:</Text>
       {selectedMeal.ingrediants.map(item=>(<ListItem key={item}>{item}</ListItem>))}
       <Text style={{fontWeight:'bold',color:Colors.primaryColor,fontSize:20,alignSelf:'center'}}>Steps:</Text>
       {selectedMeal.steps.map(item=>(<ListItem key={item}>{item}</ListItem>))}
      </View>
        </ScrollView>
    )
}
MealDetailScreen.navigationOptions=(navigationData)=>{
 
    const selectedMealTitle=navigationData.navigation.getParam('mealTitle');
    const toggleFavorite=navigationData.navigation.getParam('toggleFav');
    const isFavorite=navigationData.navigation.getParam('isFav')
    // const selectedMeal=MEALS.find(meal=>meal.id===mealId)
    return {
       headerTitle:selectedMealTitle,
       headerRight:()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
           <Item title='Favourite' iconName={isFavorite? "ios-star":"ios-star-outline"} onPress={toggleFavorite}/>
       </HeaderButtons>
    }
}
const styles=StyleSheet.create({
mealRow:{
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:Colors.primaryColor
},
image:{
    width:'100%',
    height:200,
   
},
textstyle:{
    fontWeight:'bold',
    color:'white'
},
listItem:{
    borderWidth:1,
    borderColor:Colors.primaryColor,
    marginVertical:10,
    marginHorizontal:20,
    padding:10
},
text:{
    fontWeight:'bold',color:Colors.primaryColor,fontSize:20,alignSelf:'center'
}
})
export default MealDetailScreen