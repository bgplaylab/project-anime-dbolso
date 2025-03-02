import React, { useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useAniList } from '../hooks/useAnilist';

export default function GenerosScreen() {
  const { data, loading, error, fetchAnime } = useAniList();

  // Chama a função fetchAnime somente se não houver dados (evita chamadas desnecessárias)
  useEffect(() => {
    if (!data) {
      fetchAnime('Naruto'); // Substitua 'Naruto' pelo nome do anime que você deseja buscar
    }
  }, [fetchAnime, data]); // O efeito só será disparado se "data" for null ou undefined

  if (loading) {
    return <Text>Carregando...</Text>;
  }

  if (error) {
    return <Text>Erro: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      {data ? (
        <View>
          <Text style={styles.title}>{data.title.romaji || data.title.english}</Text>
          {data.coverImage && (
            <Image style={styles.image} source={{ uri: data.coverImage.large }} />
          )}
          <Text style={styles.description}>{data.description}</Text>
        </View>
      ) : (
        <Text>Anime não encontrado</Text>
      )}

      <Button title="Buscar Novo Anime" onPress={() => fetchAnime('One Piece')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 300,
    marginTop: 10,
  },
});
