import { useState } from 'react';

import { AppointmentForm } from '@components/Forms/AppointmentForm';
import { Button } from '@components/Controllers/Button';

import {
    Container,
    Divider,
    Header,
    LeftArea,
    Avatar,
    RightArea,
    Name,
    Type,
    Main,
    HeaderMain,
    Item,
    PhoneIcon,
    PhoneLabel,
    EmailIcon,
    EmailLabel,
    FooterMain,
    LocationIcon,
    LocationLabel,
    Footer,
    ButtonAction,
    Label,
} from './styles';

export function LawyerInformations() {

    const [showButtons, setShowButtons] = useState<boolean>(true);

    function handleOpenChat() {
        alert('handleOpenCart');
    }

    function handleCreateAppointment() {
        // alert('handleCreateAppointment');
        setShowButtons(false);
    }

    return (
        <>
            <Container>
                <Header>
                    <LeftArea>
                        <Avatar source={{ uri: 'https://github.com/lucas-rabelo.png' }} />
                    </LeftArea>
                    <RightArea>
                        <Name>Lucas Rabelo</Name>
                        <Type>Criminalista</Type>
                    </RightArea>
                </Header>
                <Divider />
                <Main>
                    <HeaderMain>
                        <Item>
                            <PhoneIcon />
                            <PhoneLabel>+55 16 99999-9999</PhoneLabel>
                        </Item>
                        <Item>
                            <EmailIcon />
                            <EmailLabel>email@email.com</EmailLabel>
                        </Item>
                    </HeaderMain>
                    <FooterMain>
                        <LocationIcon />
                        <LocationLabel>Rua tal da parte de cima, 999 - Jardim Não Sei - SP</LocationLabel>
                    </FooterMain>
                </Main>
                {
                    showButtons && (
                        <>
                            <Divider />
                            <Footer>
                                <ButtonAction onPress={handleOpenChat}>
                                    <Label>Message</Label>
                                </ButtonAction>
                                <ButtonAction onPress={handleCreateAppointment}>
                                    <Label>Appointment</Label>
                                </ButtonAction>
                            </Footer>
                        </>
                    )
                }
            </Container>
            {
                !showButtons && (
                    <>
                        <AppointmentForm />
                        <Button title="create appointment" />
                    </>
                )
            }
        </>
    );
}