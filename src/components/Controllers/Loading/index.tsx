import { Container, Logo, Title, Label } from "./styles";

import LogoPng from '@assets/auction.png';

export function Loading() {
    return (
        <Container>
            <Logo source={LogoPng} />
            <Title>LaywerApp</Title>

            <Label>Loading...</Label>
        </Container>
    );
}