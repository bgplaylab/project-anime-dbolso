import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import HomeScreen from 'screens/homeScreen';
import GenerosScreen from 'screens/generosScreen';
import RandomScreen from 'screens/randomScreen';
import ListScreen from 'screens/listScreen';
import NewsScreen from 'screens/newsScreen';
import TabBarBackground from '../components/TabBarBackground'; // Importa a barra ondulada

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarBackground: () => <TabBarBackground color="#1E1E1E" />, // Aplica o fundo ondulado
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="home" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Generos"
        component={GenerosScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="list-ul" size={24} color={color} />,
        }}
      />

      <Tab.Screen
        name="Random"
        component={RandomScreen}
        options={{
          tabBarButton: (props) => <CustomTabButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Listas"
        component={ListScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="bookmark" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Noticias"
        component={NewsScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="globe" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

const CustomTabButton = ({ onPress }) => (
  <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
    <FontAwesome5 name="random" size={28} color="black" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'transparent', // Deixa o fundo transparente para mostrar o SVG
    height: 70,
    position: 'absolute',
    borderTopWidth: 0,
    elevation: 0,
  },
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1ACEC8',
    justifyContent: 'center',
    alignItems: 'center',
    top: -30,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
});

