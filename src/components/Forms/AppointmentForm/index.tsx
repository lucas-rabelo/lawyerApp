import { useState } from 'react';

import { Modal } from '@components/Layouts/Modal';
import { HoursList } from '@components/Lists/HoursList';
import { Picker } from '@components/Controllers/Picker';

import {
    Container,
    Title
} from './styles';

export function AppointmentForm() {

    const [serviceSelected, setServiceSelected] = useState<string | null>(null);
    const [openModal, setOpenModal] = useState<boolean>(false);

    function handleOpenModal() {
        setOpenModal(!openModal);
        alert(openModal);
    }

    return (
        <>
            <Container>
                <Title>Select service</Title>
                <Picker title="type service" onPress={handleOpenModal} statesModal={openModal} />
                {serviceSelected && (
                    <HoursList />
                )
                }
            </Container>
            <Modal>

            </Modal>
        </>
    )
}