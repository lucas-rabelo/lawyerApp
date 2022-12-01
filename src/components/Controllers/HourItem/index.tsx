import { HoursProps } from '@components/Lists/HoursList';

import {
    Container,
    Title
} from './styles';

interface Props {
    data: HoursProps;
}

export function HourItem({ data }: Props) {

    const { id, hour, isSelected } = data;

    return (
        <Container
            isSelected={isSelected}
        >
            <Title isSelected={isSelected}>{hour}</Title>
        </Container>
    )
}