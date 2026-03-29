import { styles } from "./styles";
import { View, Text } from "react-native";

type Props = {
  title: string;
};

export function ScreenHeader({ title }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};