import { useState } from 'react';
import { MenuProps } from '@components/Lists/Menu';

import {
    Container,
    Icon,
    Label
} from './styles';

interface Props {
    data: MenuProps;
}

export function MenuItem({ data }: Props) {

    const { id, label, icon } = data;
    const [selected, setSelected] = useState<boolean>(false);

    function handleOpenPage(idPage: string) {
        // alert(idPage);
    }

    function handleOnFocus() {
        setSelected(!selected)
    }

    return (
        <Container
            onPress={() => handleOpenPage(id)}
            onPressIn={handleOnFocus}
            onPressOut={handleOnFocus}
            selected={selected}
        >
            <Icon selected={selected} source={icon} />
            <Label selected={selected} >{label}</Label>
        </Container>
    );
}