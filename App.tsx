import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Components/Home';
import BottomTabs from './Components/Components/BottomTabs';
import SplashScreen from './Components/SplashScreen';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>   
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>  
    
    </>

);

};  

export default App;
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
