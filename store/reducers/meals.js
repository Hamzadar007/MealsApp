import {MEALS} from '../../data/dummy-data'
import {TOGGLE_FAVORITE,SET_FILTERS} from '../actions/mealActon'
const initialState={
    meals:MEALS,
    filteredMeals:MEALS,
    favouriteMeals:[]
}

const mealsReducer=(state=initialState,action)=>{
    switch(action.type){
        case TOGGLE_FAVORITE:
            const existingIndex=state.favouriteMeals.findIndex(meal=>meal.id===action.mealId);
            if(existingIndex >= 0){
                const updatedFavMeals=[...state.favouriteMeals];
                updatedFavMeals.splice(existingIndex,1);
                return {...state,favouriteMeals:updatedFavMeals}
            }else{
                const meal=state.meals.find(meal=>meal.id===action.mealId)
                return {...state,favouriteMeals:state.favouriteMeals.concat(meal)}
            }
        case SET_FILTERS:
            const appliedFilter=action.filters;
            const filteredMeals=state.meals.filter(meal=>{
                if(appliedFilter.glutenFree && !meal.isGlutenFree){
                    return false;
                }
                if(appliedFilter.lactoseFree & !meal.isLactoseFree){
                    return false;

                }
                if(appliedFilter.vegan && !meal.isVegan){
                    return false;
                }
                if(appliedFilter.vegetarian && !meal.isVegetarian){
                    return false
                }
                return true;
            })
            return {...state,filteredMeals:filteredMeals}
        default:
            return state;
    }
}
export default mealsReducer 