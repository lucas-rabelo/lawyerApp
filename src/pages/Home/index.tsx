import { Menu } from '@components/Lists/Menu';

import BackgroundPng from '@assets/background.png';

import {
    Container,
    ContainerImage,
    Title,
    Subtitle
} from './styles';

export function Home() {
    return (
        <ContainerImage source={BackgroundPng}>
            <Container>
                <Title>Your law service</Title>
                <Subtitle>Choose one option for continue</Subtitle>
                <Menu />
            </Container>
        </ContainerImage>
    );
}