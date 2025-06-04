import { Image, IImageProps } from 'native-base';

type UserPhotoInterface = IImageProps & {
    size: number;
}

export function UserPhoto({ size, ...rest }: UserPhotoInterface) {
    return (
        <Image
            w={size}
            h={size}
            rounded="full"
            borderWidth={2}
            borderColor="gray.400"
            {...rest}
        />
    );
}