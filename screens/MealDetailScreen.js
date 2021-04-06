import React from 'react'
import {Image,Text,StyleSheet,View, ScrollView} from 'react-native'
import {MEALS} from '../data/dummy-data'
import { HeaderButtons,Item} from 'react-navigation-header-buttons'
import Icon from 'react-native-ionicons'
import HeaderButton from '../components/HerderButton'
import Colors from "../constants/Colors";

const ListItem=props=>{
    return <View style={styles.listItem}>
        <Text>{props.children}</Text>
    </View>
}

const MealDetailScreen=props=>{
    const mealId=props.navigation.getParam('mealId');
    const selectedMeal=MEALS.find(meal=>meal.id===mealId)
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
    const mealId=navigationData.navigation.getParam('mealId');
    const selectedMeal=MEALS.find(meal=>meal.id===mealId)
    return {
       headerTitle:selectedMeal.title,
       headerRight:()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
           <Item title='Favourite' iconName="md-star" onPress={()=>{
               console.log('Mark as fav!!!')
           }}/>
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