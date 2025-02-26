import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HeaderButton } from '../components/HeaderButton';
import { TabBarIcon } from '../components/TabBarIcon';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabOneScreen from 'screens/one';
import TabTwoScreen from 'screens/two';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: 'black',
      
              headerShown: false,
            }}>
            <Tab.Screen
              name="One"
              component={TabOneScreen}
              options={{
                title: 'Tab One',
                tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
              }}
            />
            <Tab.Screen
              name="Two"
              component={TabTwoScreen}
              options={{
                title: 'Tab Two',
                tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
              }}
            />
          </Tab.Navigator>
    </NavigationContainer>
  );
}
