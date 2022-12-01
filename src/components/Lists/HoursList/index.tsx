
import { HourItem } from '@components/Controllers/HourItem';

const HOURS_LIST = [
    { id: '1', hour: '10:00', isSelected: true },
    { id: '2', hour: '11:30', isSelected: false },
    { id: '3', hour: '13:00', isSelected: false }
]

export interface HoursProps {
    id: string;
    hour: string;
    isSelected: boolean;
}

import {
    Container,
} from './styles';

export function HoursList() {
    return (
        <Container
            data={HOURS_LIST}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
                <HourItem data={item} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    );
}