import { styles } from "./styles";
import { api } from "@services/api";

import { View, Text, FlatList } from "react-native";
import { useState, useEffect, useCallback } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { ExerciseDTO } from "@dtos/ExerciseDTO";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { Group } from "@components/Group";
import { Loading } from "@components/Loading";
import { ExerciseCard } from "@components/ExerciseCard";
import { HomeHeader } from "@components/HomeHeader";

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);
  const [exercises, setExercises] = useState<ExerciseDTO[]>([]);
  const [groupSelected, setGroupSelected] = useState("antebraço");

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenExerciseDetails(exerciseId: string) {
    navigation.navigate("exercise", { exerciseId });
  };

  async function fetchGroups() {
    try {
      const response = await api.get("/groups");
      setGroups(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fecthExercisesByGroup() {
    try {
      setIsLoading(true);
      const response = await api.get(`/exercises/bygroup/${groupSelected}`);
      setExercises(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchGroups();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fecthExercisesByGroup();
    }, [groupSelected])
  );

  return (
    <View style={styles.containerHeader}>
      <HomeHeader />

      <View style={styles.containerExercise}>
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Group
              name={item}
              isActive={groupSelected.toUpperCase() === item.toUpperCase()}
              onPress={() => setGroupSelected(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.groupList}
          style={styles.groupListSpacing}
        />

        {isLoading ? (
          <Loading />
        ) : (
          <View style={styles.exerciseContainer}>
            <View style={styles.exerciseHeader}>
              <Text style={styles.exerciseTitle}>Exercícios</Text>
              <Text style={styles.exerciseCount}>{exercises.length}</Text>
            </View>

            <FlatList
              data={exercises}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ExerciseCard
                  data={item}
                  onPress={() => handleOpenExerciseDetails(item.id)}
                />
              )}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.exerciseList}
            />
          </View>
        )}
      </View>
    </View>
  );
}
