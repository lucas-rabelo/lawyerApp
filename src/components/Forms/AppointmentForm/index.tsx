import { useState } from 'react';

import { HoursList } from '@components/Lists/HoursList';
import { Picker } from '@components/Controllers/Picker';
import { DateSelected } from '@components/Lists/DateSelected';

import {
    Container,
    Title
} from './styles';

export function AppointmentForm() {

    const [serviceSelected, setServiceSelected] = useState<string | null>('criminalista');
    const [openModal, setOpenModal] = useState<boolean>(false);

    function handleOpenModal() {
        setOpenModal(!openModal);
        alert(openModal);
    }

    return (
        <>
            <Container>
                <Title>Select service</Title>
                <Picker title={serviceSelected ? serviceSelected : "type service"} onPress={handleOpenModal} statesModal={openModal} />
                {
                    serviceSelected && (
                        <>
                            <Title>Date & Time</Title>
                            <DateSelected />
                            <HoursList />
                        </>
                    )
                }
            </Container>
        </>
    )
}