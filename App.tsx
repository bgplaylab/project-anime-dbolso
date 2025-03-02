import './global.css';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './navigation';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  useEffect(() => {
    const prepareApp = async () => {
      try {
        await SplashScreen.preventAutoHideAsync(); // Mantém a Splash ativa até carregar
        // Simula carregamento (exemplo: carregar fontes, dados, etc.)
        await new Promise(resolve => setTimeout(resolve, 2000)); 
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync(); // Esconde a Splash
      }
    };

    prepareApp();
  }, []);

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
