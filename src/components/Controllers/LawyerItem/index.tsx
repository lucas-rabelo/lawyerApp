import { useState } from 'react';

import {
    Container,
    ContainerAvatar,
    LawyerContainer,
    Avatar,
    InformationsLawyer,
    Name,
    Type,
    Icon
} from './styles';

export interface LawyerProps {
    id: string;
    name: string;
    type: string;
    avatar: string;
}

export interface Props {
    data: LawyerProps
}

export function LawyerItem({ data }: Props) {

    const { id, name, type, avatar } = data;
    const [selected, setSelected] = useState(false);

    function handleOnFocus() {
        setSelected(!selected)
    }

    return(
        <Container
            onPressIn={handleOnFocus}
            onPressOut={handleOnFocus}
            selected={selected}
            >
            <LawyerContainer>
                <ContainerAvatar
                    selected={selected}
                >
                    <Avatar source={{ uri: avatar }} />
                </ContainerAvatar>
                <InformationsLawyer>
                    <Name>{name}</Name>
                    <Type selected={selected}>{type}</Type>
                </InformationsLawyer>
            </LawyerContainer>
            <Icon selected={selected} />
        </Container>
    );
}