/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/component/Login';
 import MainGoal from './src/component/MainGoal';
const App  =() => {
 
  const Stack =createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MainGoal'>
        <Stack.Screen  name='Login' component={Login}/>
          <Stack.Screen name="MainGoal" component={MainGoal}/>
       </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
