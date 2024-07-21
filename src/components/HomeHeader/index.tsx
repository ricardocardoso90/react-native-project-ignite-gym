
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Heading, HStack, Icon, Text, VStack, } from "native-base";

import { UserPhoto } from "@components/UserPhoto";

export function HomeHeader() {
  const userImg = "https://github.com/ricardocardoso90.png";

  return (
    <HStack bg="gray.600" py={5} px={8} alignItems="center">
      <UserPhoto
        source={{ uri: userImg }}
        alt="Imagem do usuário"
        size={16}
        mr={4}
      />

      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">Olá,</Text>
        <Heading color="gray.100" fontSize="md" fontFamily="heading">Ricardo Cardoso</Heading>
      </VStack>

      <TouchableOpacity>
        <Icon
          as={MaterialIcons}
          name="logout"
          color="gray.200"
          size={7}
        />
      </TouchableOpacity>
    </HStack>
  )
};