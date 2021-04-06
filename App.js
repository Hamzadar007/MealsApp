import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MealNavigator from './navigation/MealNavigation'
import { LogBox } from 'react-native';
export default function App() {


  LogBox.ignoreLogs(['Your project is accessing the following APIs']);

  return (
    <MealNavigator/>
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
