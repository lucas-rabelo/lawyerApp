import {
    Container,
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
    return(
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
            <Footer>
                <ButtonAction>
                    <Label>Message</Label>
                </ButtonAction>
                <ButtonAction>
                    <Label>Appointment</Label>
                </ButtonAction>
            </Footer>
        </Container>
    );
}