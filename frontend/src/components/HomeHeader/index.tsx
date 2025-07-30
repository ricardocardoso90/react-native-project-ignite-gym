import { styles } from './styles';
import { api } from '@services/api';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';

import { useAuth } from '@hooks/useAuth';
import defaulUserPhotoImg from '@assets/userPhotoDefault.png';

import { UserPhoto } from '@components/UserPhoto';

export function HomeHeader() {
  const { user, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <UserPhoto
        source={
          user.avatar
            ? { uri: `${api.defaults.baseURL}/avatar/${user.avatar}` }
            : defaulUserPhotoImg
        }
        size={64}
        alt="Imagem do usuário"
        style={styles.userPhoto}
      />

      <View style={styles.textContainer}>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.username}>{user.name}</Text>
      </View>

      <TouchableOpacity onPress={signOut}>
        <MaterialIcons name="logout" size={28} color="#C4C4CC" />
      </TouchableOpacity>
    </View>
  );
}