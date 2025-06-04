import { Center, Image, Spinner, Text, VStack } from "native-base";
import LogoSvg from "@assets/logo.svg";

export function Loading() {
  return (
    <Center flex={1} bg="gray.700">
      <VStack p="16px" alignItems="center">
        <LogoSvg />
        <Text py="8px" color="gray.100" fontSize="sm">
          Treine sua mente e o seu corpo.
        </Text>
      </VStack>
      <Spinner color="green.500" />
    </Center>
  );
}
