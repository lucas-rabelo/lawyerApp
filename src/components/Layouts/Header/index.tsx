import {
    Container,
    LeftArea,
    Avatar,
    GreetingArea,
    Name,
    TypeUser,
    SignOutButton,
    Icon
} from './styles';

export function Header() {
    return (
        <Container>
            <LeftArea>
                <Avatar source={{ uri: 'https://github.com/lucas-rabelo.png' }} />
                <GreetingArea>
                    <Name>Lucas</Name>
                    <TypeUser>Advogado</TypeUser>
                </GreetingArea>
            </LeftArea>
            <SignOutButton>
                <Icon />
            </SignOutButton>
        </Container>
    );
}