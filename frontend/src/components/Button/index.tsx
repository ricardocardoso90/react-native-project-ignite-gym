import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { color } from "react-native-elements/dist/helpers";

type Props = TouchableOpacityProps & {
  title: string;
  variant?: "solid" | "outline";
};

export function Button({ title, variant = "solid", ...rest }: Props) {
  return (
    <TouchableOpacity>
      <Text style={{ color: variant === "outline" ? "#00B37E" : "#FFF", fontFamily: "Roboto_700Bold", fontSize: 14 }}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}