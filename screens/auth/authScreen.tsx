import React, { useState } from 'react';
import { Text, TextInput, Button, Alert, View } from 'react-native';
import { supabase } from 'utils/supabase'; // Certifique-se que o caminho está correto

export default function AuthScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      // Exibe um alerta de erro
      Alert.alert('Erro', error.message);
    } else {
      // Navega para a tela principal após login bem-sucedido
      navigation.replace('Home'); // Substitua 'Home' pela sua tela principal
    }
  };

  return (
    <View className="flex-1 justify-center bg-white px-6">
      <Text className="mb-6 text-center text-3xl font-semibold">Login</Text>

      <TextInput
        className="mb-4 h-12 rounded-lg border border-gray-300 px-4"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        className="mb-4 h-12 rounded-lg border border-gray-300 px-4"
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button
        title={loading ? 'Carregando...' : 'Entrar'}
        onPress={handleLogin}
        disabled={loading}
      />
    </View>
  );
}
