import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TextInput, Alert, View, Pressable, Image } from 'react-native';
import { supabase } from 'utils/supabase';

export default function SignUpScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleSignUp = async () => {
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      Alert.alert('Erro', error.message);
    } else {
      Alert.alert('Sucesso', 'Verifique seu email para confirmar o cadastro!');
    }
  };

  return (
    <View className="flex-1 justify-center bg-black px-6">
      <Image
        source={require('../../assets/anidex-logo.png')}
        className="my-6 h-48 w-full scale-75"
        resizeMode="cover"
      />
      <Text className="mb-6 mt-6 text-center text-4xl font-semibold text-white">Criar Conta</Text>

      <View className="mb-4 rounded-lg bg-[#1E1E1E] px-4 py-10">
        <TextInput
          className="mb-4 h-12 rounded-lg border-b-2 focus:border-[#1ACEC8] border-gray-300 px-4 text-white"
          placeholder="E-mail"
          placeholderTextColor={'#fff'}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <View className="relative">
          <TextInput
            className="mb-4 h-12 rounded-lg border-b-2 focus:border-[#1ACEC8] border-gray-300 px-4 text-white"
            placeholder="Senha"
            placeholderTextColor={'#fff'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={mostrarSenha}
          />
          <Text
            className="absolute right-4 top-4 text-sm text-white"
            onPress={() => setMostrarSenha(!mostrarSenha)}>
            {!mostrarSenha ? 'Ocultar' : 'Mostrar'}
          </Text>
        </View>

        <Text className="text-xs text-start text-white">
          Mínimo de 6 caracteres, sem espaços em branco
        </Text>
      </View>
      <Pressable
        className="group mt-4 rounded-md border-2 border-[#1ACEC8] bg-black px-4 py-2 active:bg-[#1ACEC8]"
        onPress={handleSignUp}
        disabled={loading}>
        <Text className="text-center text-2xl font-semibold text-[#1ACEC8] group-active:text-white">
          Criar Conta
        </Text>
      </Pressable>

      <Text className="mt-6 text-center text-lg text-white">
        Já possui uma conta?{' '}
        <Text className="text-[#1ACEC8]" onPress={() => navigation.navigate('Login')}>
          LOGIN
        </Text>
      </Text>
    </View>
  );
}
