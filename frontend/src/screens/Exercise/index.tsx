import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { api } from "@services/api";
import { AppError } from "@utils/AppError";
import { ExerciseDTO } from "@dtos/ExerciseDTO";

import BodySvg from "@assets/body.svg";
import SeriesSvg from "@assets/series.svg";
import RepetitionsSvg from "@assets/repetitions.svg";

import { Button } from "@components/Button";
import { Loading } from "@components/Loading"; // pode converter também se quiser
import { styles } from "./styles";

type RouteParamsProps = {
  exerciseId: string;
};

export function Exercise() {
  const [isLoading, setIsLoading] = useState(true);
  const [sendingRegister, setSendingRegister] = useState(false);
  const [exercise, setExercise] = useState<ExerciseDTO>({} as ExerciseDTO);

  const route = useRoute();
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const { exerciseId } = route.params as RouteParamsProps;

  function handleGoBack() {
    navigation.goBack();
  };

  async function fetchExerciseDetails() {
    try {
      setIsLoading(true);
      const response = await api.get(`/exercises/${exerciseId}`);
      setExercise(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível carregar os detalhes do exercício";
      Alert.alert("Erro", title);
    } finally {
      setIsLoading(false);
    };
  };

  async function handleExerciseHistoryRegister() {
    try {
      setSendingRegister(true);
      await api.post("/history", { exercise_id: exerciseId });
      Alert.alert(
        "Sucesso",
        "Parabéns! Exercício registrado no seu histórico."
      );
      navigation.navigate("history");
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível registrar exercício.";
      Alert.alert("Erro", title);
    } finally {
      setSendingRegister(false);
    };
  };

  useEffect(() => {
    fetchExerciseDetails();
  }, [exerciseId]);

  if (isLoading) return <Loading />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.goBackButton}>
          <Feather name="arrow-left" size={24} color="#00B37E" />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {exercise.name}
          </Text>

          <View style={styles.groupContainer}>
            <BodySvg width={20} height={20} />
            <Text style={styles.groupText}>{exercise.group}</Text>
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: `${api.defaults.baseURL}/exercise/demo/${exercise?.demo}`,
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <View style={styles.detailsBox}>
          <View style={styles.detailsRow}>
            <View style={styles.detailItem}>
              <SeriesSvg width={24} height={24} />
              <Text style={styles.detailText}>{exercise.series} séries</Text>
            </View>

            <View style={styles.detailItem}>
              <RepetitionsSvg width={24} height={24} />
              <Text style={styles.detailText}>
                {exercise.repetitions} repetições
              </Text>
            </View>
          </View>

          <Button
            title="Marcar como realizado"
            isLoading={sendingRegister}
            onPress={handleExerciseHistoryRegister}
          />
        </View>
      </View>
    </View>
  );
}
