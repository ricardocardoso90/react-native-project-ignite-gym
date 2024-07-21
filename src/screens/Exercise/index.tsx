import { VStack, Icon, HStack, Heading, Text, Image, Box, ScrollView } from "native-base";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProp } from "@routes/app.routes";

import BodySvg from "@assets/body.svg";
import SeriesSvg from "@assets/series.svg";
import RepetitionsSvg from "@assets/repetitions.svg";
import { Button } from "@components/Button";

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProp>();

  function handleGoBack() {
    navigation.goBack();
  };

  return (
    <VStack flex={1}>
      <VStack px={8} bg="gray.600" py={4}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon
            as={Feather}
            name="arrow-left"
            color="green.500"
            size={6}
          />
        </TouchableOpacity>
        <HStack justifyContent="space-between" mt={4} alignItems="center">
          <Heading color="gray.100" fontSize="lg" flexShrink={1}>Puxada frontal</Heading>

          <HStack alignItems="center">
            <BodySvg />
            <Text color="gray.200" ml={1} textTransform="capitalize">Costas</Text>
          </HStack>
        </HStack>
      </VStack>

      <ScrollView>
        <VStack p={8}>
          <Image
            w="full"
            h={72}
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ832OtwhDiUlpQkmINPlWhjBcIrldMd7YGgA&s' }}
            alt="imagem do exercício"
            mb={3}
            resizeMode="cover"
            rounded="lg"
          />

          <Box bg="gray.600" rounded="md" pb={4} px={4} mb={5}>
            <HStack alignItems="center" justifyContent="space-around" my={5}>
              <HStack>
                <SeriesSvg />
                <Text color="gray.200" ml={2}>3 séries</Text>
              </HStack>
              <HStack>
                <RepetitionsSvg />
                <Text color="gray.200" ml={2}>12 repetições</Text>
              </HStack>
            </HStack>

            <Button
              title="Marcar como realizado"
            />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  )
};