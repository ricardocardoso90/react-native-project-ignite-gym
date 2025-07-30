import { styles } from "./styles";

import {
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  ViewStyle,
}
  from "react-native";

type Props = {
  title: string;
  variant?: "solid" | "outline";
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  style?: ViewStyle;
  isLoading?: boolean;
};

export function Button({
  title,
  variant = "solid",
  onPress,
  disabled = false,
  style,
}: Props) {

  const isOutline = variant === "outline";
  
  return (
    <TouchableOpacity
      style={[
        styles.button,
        isOutline ? styles.outlineButton : styles.solidButton,
        disabled && styles.disabledButton,
        style,
      ]}
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={[styles.text, isOutline ? styles.outlineText : styles.solidText]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
