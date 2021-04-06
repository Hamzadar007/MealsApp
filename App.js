import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MealNavigator from './navigation/MealNavigation'
import { LogBox } from 'react-native';
import {createStore,combineReducers} from 'redux';
import mealsReducer from './store/reducers/meals';
import {Provider} from 'react-redux';
const rootReducer=combineReducers({
  meals: mealsReducer
});
const store=createStore(rootReducer);

export default function App() {


  LogBox.ignoreLogs(['Your project is accessing the following APIs']);

  return (
  <Provider store={store}><MealNavigator/></Provider> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
