import { styles } from './styles';
import { View, ActivityIndicator} from 'react-native';

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#22C55E" /> 
    </View>
  );
}