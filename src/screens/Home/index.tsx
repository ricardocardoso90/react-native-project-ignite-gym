import { useState } from "react";
import { listGroup, listExercises } from "dados";
import { FlatList, Heading, HStack, Text, VStack } from "native-base";

import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { ExerciseCard } from "@components/ExerciseCard";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProp } from "@routes/app.routes";

export function Home() {
  const [groups, setGroups] = useState(listGroup);
  const [exercises, setExercises] = useState(listExercises);
  const [groupSelected, setGroupSelected] = useState('costas');

  const navigation = useNavigation<AppNavigatorRoutesProp>();

  function handleOpenExerciseDetails() {
    navigation.navigate("exercise");
  };

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={({ name }) => name}
        renderItem={({ item }) => (
          <Group
            name={item.name}
            isActive={String(groupSelected).toLocaleUpperCase() === String(item.name).toLocaleUpperCase()}
            onPress={() => setGroupSelected(item.name)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={5}
        maxH={10}
        minH={10}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md">Exercícios</Heading>
          <Text color="gray.200" fontSize="sm">{exercises.length}</Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={item => item.title}
          renderItem={({ item }) => (
            <ExerciseCard
              data={item}
              onPress={() => handleOpenExerciseDetails()}
            />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 20 }}
        />
      </VStack>
    </VStack>
  )
};