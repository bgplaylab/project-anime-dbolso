import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { supabase } from '../utils/supabase';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = () => {
  const [todos, setTodos] = useState<any>([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const { data: todos, error } = await supabase.from('artigo').select();

        if (error) {
          console.error('Error fetching todos:', error.message);
          return;
        }

        if (todos && todos.length > 0) {
          console.log(todos);
          setTodos(todos);
        }
      } catch (error: any) {
        console.error('Error fetching todos:', error.message);
      }
    };

    getTodos();
  }, []);

  return (
    <View className={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.ani_id}
          renderItem={({ item }) => {
            return (
              <View className="mx-4 my-2 flex-col gap-2 rounded-md bg-white p-4 shadow-sm">
                <Image
                  source={{ uri: item.imagem }}
                  className="h-80 w-full rounded-md"
                  resizeMode="contain"
                />
                <Text className="rounded-sm bg-slate-500 px-4 py-2 font-semibold text-white">
                  {item.titulo}
                </Text>
                <Text className="">{item.descricao}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};
const styles = {
  container: `items-center flex-1 justify-center`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};
