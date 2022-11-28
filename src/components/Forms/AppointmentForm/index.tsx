import { useState } from 'react';

import { Picker } from '@components/Controllers/Picker';

import {
    Container,
    Title
} from './styles';

export function AppointmentForm() {

    const [serviceSelected, setServiceSelected] = useState<string>('');
    const [openModal, setOpenModal] = useState<boolean>(false);


    return(
        <Container>
            <Title>Select service</Title>
            <Picker title="type service" statesModal={openModal} />
        </Container>
    )
}