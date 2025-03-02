import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TextInput, Alert, View, Pressable, Image } from 'react-native';
import { supabase } from 'utils/supabase';

export default function RemenberPasswordScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleResetPassword = async () => {
    setLoading(true);
  
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'https://seuapp.com/reset-password', // Ajuste para a URL correta do seu app
    });
  
    setLoading(false);
  
    if (error) {
      Alert.alert('Erro', error.message);
    } else {
      Alert.alert('Sucesso', 'Verifique seu email para redefinir sua senha.');
      navigation.navigate('Login');
    }
  };

  const goBack = () => {
    navigation.goBack();
  };
  
  

  return (
    <View className="flex-1 justify-center bg-black px-6">
      <Image
        source={require('../../assets/anidex-logo.png')}
        className="my-6 h-48 w-full scale-75"
        resizeMode="cover"
      />
      <Text className="mb-6 mt-6 text-center text-4xl font-semibold text-white">
        Redefinir Senha
      </Text>

      <View className="mb-4 rounded-lg bg-[#1E1E1E] px-4 py-10">
        <TextInput
          className="mb-4 h-12 rounded-lg  focus:border-[#1ACEC8] border-b-2 border-gray-300 px-4 text-white"
          placeholder="E-mail"
          placeholderTextColor={'#fff'}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Text className="text-start text-xs text-white">
          Um link será enviado para o seu endereço de e-mail para redefinir sua senha.
        </Text>
      </View>
      <Pressable
        className="group mt-4 rounded-md border-2 border-[#1ACEC8] bg-black px-4 py-2 active:bg-[#1ACEC8]"
        onPress={handleResetPassword}
        disabled={loading}>
        <Text className="text-center text-2xl font-semibold text-[#1ACEC8] group-active:text-white">
          Enviar
        </Text>
      </Pressable>
      <Pressable
        className="group mt-4 rounded-md border-2 border-[#1ACEC8] bg-black px-4 py-2 active:bg-[#1ACEC8]"
        onPress={goBack}
        disabled={loading}>
        <Text className="text-center text-2xl font-semibold text-[#1ACEC8] group-active:text-white">
          Voltar
        </Text>
      </Pressable>
    </View>
  );
}
