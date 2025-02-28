import React from 'react';
import { TabBarIcon } from '../components/TabBarIcon';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabOneScreen from 'screens/one';
import TabTwoScreen from 'screens/two';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',

        headerShown: false,
      }}>
      <Tab.Screen
        name="One"
        component={TabOneScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tab.Screen
        name="Two"
        component={TabTwoScreen}
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color }) => <TabBarIcon name="star" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
