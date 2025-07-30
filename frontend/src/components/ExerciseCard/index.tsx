import { styles } from './styles';
import { api } from '@services/api';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { ExerciseDTO } from '@dtos/ExerciseDTO';

type Props = TouchableOpacityProps & {
  data: ExerciseDTO;
};

export function ExerciseCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.card} {...rest}>
      <Image
        resizeMode="cover"
        style={styles.thumb}
        source={{ uri: `${api.defaults.baseURL}/exercise/thumb/${data.thumb}` }}
      />

      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {data.name}
        </Text>

        <Text style={styles.subtitle} numberOfLines={2}>
          {data.series} séries x {data.repetitions} repetições
        </Text>
      </View>

      <Entypo name="chevron-thin-right" size={20} color="#A3A3A3" />
    </TouchableOpacity>
  );
}