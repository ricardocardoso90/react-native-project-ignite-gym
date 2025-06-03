import { useCallback, useState } from "react";
import { Heading, SectionList, Text, useToast, VStack } from "native-base";

import { api } from "../../services/api";
import { AppError } from "../../utils/AppError";
import { ScreenHeader } from "../ScreenHeader";
import { HistoryCard } from "../../components/HistoryCard";
import { useFocusEffect } from "@react-navigation/native";
import { HistoryByDayDTO } from "../../dtos/HistoryByDayDTO";
import { Loading } from "../../components/Loading";

// const DATA = [
//   {
//     title: '28.08.22',
//     data: ['Puxada frontal', 'Remada unilateral'],
//   },
//   {
//     title: '15.03.23',
//     data: ['Puxada frontal'],
//   }
// ];

export function History() {
  const toast = useToast();
  const [exercises, setExercises] = useState<HistoryByDayDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchHistory() {
    try {
      setIsLoading(true);

      const { data } = await api.get('/history');
      setExercises(data);

    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : "Não foi possível carregar o histórico!"

      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500'
      });
    } finally {
      setIsLoading(false);
    };
  };

  useFocusEffect(useCallback(() => {
    fetchHistory();
  }, []));

  return (
    <VStack flex={1}>
      <ScreenHeader
        title="Histórico de Exercícios"
      />

      {isLoading
        ? <Loading />
        : (
          <SectionList
            sections={exercises}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <HistoryCard
                data={item}
              />
            )}
            renderSectionHeader={({ section }) => (
              <Heading color="gray.200" fontSize="md" mt={10} mb={3}>
                {section.title}
              </Heading>
            )}
            px={8}
            contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: "center" }}
            ListEmptyComponent={() => (
              <Text color="gray.100" textAlign="center">
                Não há exercícios registrados ainda. {"\n"}
                Vamos fazer exercícios hoje?
              </Text>
            )}
            showsVerticalScrollIndicator={false}
          />
        )
      }
    </VStack>
  )
};