import { MenuProps } from '@components/Lists/Menu';

import {
    Container,
    Icon,
    Label
} from './styles';

import AuctionPng from '@assets/auction.png';

export function MenuItem() {
    return (
        <Container>
            <Icon source={AuctionPng} />
            <Label>Pergunte a um advogado</Label>
        </Container>
    );
}