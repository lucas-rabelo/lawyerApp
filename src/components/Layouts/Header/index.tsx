import { useTheme } from '@hooks/useTheme';

import { light, dark } from '@styles/themes';

import {
    Container,
    LeftArea,
    ContainerAvatar,
    Avatar,
    GreetingArea,
    Name,
    TypeUser,
    SignOutButton,
    Icon
} from './styles';

interface Props {
    type: 'lawyer' | 'client';
}

export function Header({ type }: Props) {

    const { theme, handleTheme } = useTheme();


    function changeTheme() {
        theme.title === 'dark' ? handleTheme(light) : handleTheme(dark);
    }

    return (
        <Container>
            <LeftArea>
                <ContainerAvatar>
                    <Avatar source={{ uri: 'https://github.com/lucas-rabelo.png' }} />
                </ContainerAvatar>
                <GreetingArea>
                    <Name>{theme.title}</Name>
                    <TypeUser>{type === 'lawyer' ? 'Advogado' : 'Cliente'}</TypeUser>
                </GreetingArea>
            </LeftArea>
            <SignOutButton onPress={changeTheme}>
                <Icon color={theme.colors.text} />
            </SignOutButton>
        </Container>
    );
}