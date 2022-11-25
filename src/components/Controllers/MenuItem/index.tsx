import { MenuProps } from '@components/Lists/Menu';

import {
    Container,
    Icon,
    Label
} from './styles';

import AuctionPng from '@assets/auction.png';

interface Props {
    data: MenuProps;
}

export function MenuItem({ data }: Props) {

    const { label, icon } = data;

    return (
        <Container>
            <Icon source={icon} />
            <Label>{label}</Label>
        </Container>
    );
}