import { styles } from './styles';
import { Image, ImageProps, ImageStyle } from 'react-native';

type Props = ImageProps & {
  size: number;
  alt: string;
};

export function UserPhoto({ size, alt, style, ...rest }: Props) {
  const dynamicStyle: ImageStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
    borderWidth: 2,
    borderColor: '#9CA3AF',
  };

  return <Image style={[styles.image, dynamicStyle, style]} {...rest} />;
}

