import './global.css';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { supabase } from 'utils/supabase'; // Supondo que você tenha o Supabase configurado corretamente
import RootStack from './navigation';
import AuthScreen from 'screens/auth/authScreen';

export default function App() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    // Obtém a sessão atual
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };

    fetchSession();

    // Assine para monitorar mudanças na autenticação
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    // Limpeza do listener quando o componente for desmontado
    return () => {
      authListener?.unsubscribe(); // Assegure-se de chamar unsubscribe corretamente
    };
  }, []);

  return <NavigationContainer>{user ? <RootStack /> : <AuthScreen />}</NavigationContainer>;
}
