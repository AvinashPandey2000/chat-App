import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatListiteam from '../components/ChatListiteam';
import  ChatScreenContainer from '../screens/ChatScreenContainer';
import MainTabNavigator from './MainTabNavigator';

const Stack = createNativeStackNavigator();


export default function Navigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} 
      
      options={{
        headerShown: false,
      }}/>
      <Stack.Screen name="ChatListiteam" component={ChatListiteam} />
      <Stack.Screen name="ChatScreenContainer" component={ChatScreenContainer} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
  
    },
  });
  