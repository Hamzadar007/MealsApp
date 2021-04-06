import React,{useState,useEffect,useCallback} from 'react'
import {View,Text,StyleSheet,Switch,Platform} from 'react-native'
import { HeaderButtons,Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HerderButton'
import Colors from "../constants/Colors";

const FilterSwitch=props=>{
    return(
        <View style={styles.filterContiner}>
        <Text>{props.lable}</Text>
        <Switch 
        trackColor={{true:Colors.primaryColor}} 
        thumbColor={Platform.OS==='android'?Colors.primaryColor:''}
        value={props.state} 
        onValueChange={props.onChange}/>
        </View>
    )
}



const FilterScreen=props=>{
    const { navigation }=props;
    const [isGlutonFree,setGlutonFree]=useState(false)
    const [isLactoseFree,setLactoseFree]=useState(false)
    const [isVegan,setVegan]=useState(false)
    const [isVegetarian,setVegetarian]=useState(false)
    const saveFilter=useCallback( ()=>{
        const appliedFilter={
            glutenFree:isGlutonFree,
            lactoseFree:isLactoseFree,
            vegan:isVegan,
            isVegetarian:isVegetarian
        }
        console.log(appliedFilter)
    },[isGlutonFree,isLactoseFree,isVegan,isVegetarian])
    
    useEffect(()=>{
        navigation.setParams({save:saveFilter});
    },[saveFilter])

    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch lable='Gluten-free' state={isGlutonFree} onChange={val=>setGlutonFree(val)}/>
            <FilterSwitch lable='Lactose-free' state={isLactoseFree} onChange={val=>setLactoseFree(val)}/>
            <FilterSwitch lable='Vegan' state={isVegan} onChange={val=>setVegan(val)}/>
            <FilterSwitch lable='Vegetarian' state={isVegetarian} onChange={val=>setVegetarian(val)}/>
        </View>
    )
}

FilterScreen.navigationOptions=(navData)=>{
    return{
    headerTitle: 'Filter Meal',
    headerLeft:()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item title='Menu' iconName="md-menu" onPress={()=>{
       navData.navigation.toggleDrawer()
    }}/>
</HeaderButtons>,
    headerRight:()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item title='Save' iconName="md-save" onPress={navData.navigation.getParam('save') }/>
</HeaderButtons>,
    }
}

const styles=StyleSheet.create({
screen:{
    flex:1,
    alignItems:'center'
},
title:{
    fontSize:22,
    fontWeight:'bold',
    margin:20,
    textAlign:'center'
},
filterContiner:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'80%',
    marginVertical:15
}
})
export default FilterScreen