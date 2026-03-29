import { styles } from './styles';
import { View, Text } from 'react-native';

import { HistoryDTO } from '@dtos/HistoryDTO';

type Props = {
  data: HistoryDTO;
};

export function HistoryCard({ data }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.group}>{data.group}</Text>
        <Text style={styles.name} numberOfLines={1}>
          {data.name}
        </Text>
      </View>

      <Text style={styles.hour}>{data.hour}</Text>
    </View>
  );
};