import { styles } from './styles';
import { Text, Pressable, PressableProps } from 'react-native';

type Props = PressableProps & {
  name: string;
  isActive: boolean;
};

export function Group({ name, isActive, ...rest }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed || isActive ? styles.activeBorder : null,
      ]}
      {...rest}
    >
      <Text style={[styles.text, isActive ? styles.activeText : null]}>
        {name.toUpperCase()}
      </Text>
    </Pressable>
  );
};