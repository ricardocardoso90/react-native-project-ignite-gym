import { api } from "@services/api";
import { Entypo } from "@expo/vector-icons";
import { ExerciseDTO } from "@dtos/ExerciseDTO";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Heading, HStack, Icon, Image, Text, VStack } from "native-base";

type Props = TouchableOpacityProps & {
  data: ExerciseDTO;
};

export function ExerciseCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack bg="gray.500" alignItems="center" p={2} pr={4} rounded="md" mb={3}>
        <Image
          source={{ uri: `${api.defaults.baseURL}/exercise/thumb/${data.thumb}` }}
          alt="remada unilateral"
          size={16}
          rounded="md"
          mr={4}
          resizeMode="cover"
        />

        <VStack flex={1}>
          <Heading color="white" fontSize="lg">
            {data.name}
          </Heading>
          <Text color="gray.200" fontSize="sm" mt={1} numberOfLines={2}>
            {data.series} séries x {data.repetitions} repetições
          </Text>
        </VStack>

        <Icon
          as={Entypo}
          name="chevron-thin-right"
          color="gray.300"
          size={7}
        />
      </HStack>
    </TouchableOpacity>
  )
};