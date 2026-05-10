import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../Home';
import Weekly_F from './Weekly_F';
import Location_Search from '../Location_Search';
import Hourly_F from './Hourly_F';

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0b3c5d',
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: 'rgb(152, 55, 55)',
        tabBarInactiveTintColor: '#dbd961',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('./HomeIcon.png')}
              style={{
                width: 50,
                height: 60,
                tintColor: focused ? '#d82735' : '#ffffff',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Weekly"
        component={Weekly_F}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('./HourlyIcon.png')}
              style={{
                width: 50,
                height: 60,
                tintColor: focused ? '#c92230' : '#ffffff',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Hourly"
        component={Hourly_F}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('./HourlyIcon.png')}
              style={{
                width: 50,
                height: 60,
                tintColor: focused ? '#d01b2a' : '#ffffff',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={Location_Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('./LOcation.png')}
              style={{
                width: 50,
                height: 60,
                tintColor: focused ? '#d83e4b' : '#ffffff',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
