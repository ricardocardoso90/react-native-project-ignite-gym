import { View, TextInput, Text, StyleSheet, TextInputProps } from 'react-native';
import { styles } from './styles';

type Props = TextInputProps & {
  errorMessage?: string | null;
};

export function Input({ errorMessage = null, style, ...rest }: Props) {
  const invalid = !!errorMessage;

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          invalid ? styles.inputInvalid : null,
          style,
        ]}
        placeholderTextColor="#A3A3A3"
        {...rest}
      />

      {invalid && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
}