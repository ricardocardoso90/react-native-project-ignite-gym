import { Center, Heading } from "native-base";

type Props = {
  title: string;
};

export function ScreenHeader({ title }: Props) {
  return (
    <Center bg="gray.600" py={6}>
      <Heading
        color="gray.100"
        fontSize="xl"
      >
        {title}
      </Heading>
    </Center>
  )
};