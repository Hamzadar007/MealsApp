import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Platform } from "react-native";

import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from "../data/dummy-data";
import { HeaderButtons,Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HerderButton'


const CategoryScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile 
            title={itemData.item.title}
            color={itemData.item.color} 
            onSelect={
                () => props.navigation.navigate({
                    routeName: 'CategoryMeal',
                    params: {
                        CategoryId: itemData.item.id
                    }
                })
            }/>
        );
    };
    return (
        <FlatList keyExtractor={(item, index) => item.id} numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
    );
};
CategoryScreen.navigationOptions = (navData)=>{
    return{
    headerTitle: 'Meal Categries',
    headerLeft:()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item title='Menu' iconName="md-menu" onPress={()=>{
       navData.navigation.toggleDrawer()
    }}/>
</HeaderButtons>
    }
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

});
export default CategoryScreen;
