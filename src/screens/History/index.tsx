import { useState } from "react";
import { Heading, SectionList, Text, VStack } from "native-base";

import { ScreenHeader } from "@screens/ScreenHeader";
import { HistoryCard } from "@components/HistoryCard";

const DATA = [
  {
    title: '28.08.22',
    data: ['Puxada frontal', 'Remada unilateral'],
  },
  {
    title: '15.03.23',
    data: ['Puxada frontal'],
  }
];

export function History() {
  const [exercises, setExercises] = useState(DATA);

  return (
    <VStack flex={1}>
      <ScreenHeader
        title="Histórico de Exercícios"
      />

      <SectionList
        sections={exercises}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <HistoryCard 
            title={item}
            subtitle={item}
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
    </VStack>
  )
};