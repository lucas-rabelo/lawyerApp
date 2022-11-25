import styled from "styled-components/native";
import { Phone, At, MapPin } from 'phosphor-react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: 100%;
    padding: ${RFValue(15)}px ${RFValue(18)}px;
    background-color: ${({ theme }) => theme.colors.white};

    border-radius: ${RFValue(8)}px;
    margin-top: ${RFValue(10)}px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const LeftArea = styled.View`
    margin-right: ${RFValue(18)}px;
`;

export const Avatar = styled.Image.attrs({
    resizeMode: 'contain'
})`
    width: ${RFValue(64)}px;
    height: ${RFValue(64)}px;

    border-radius: ${RFPercentage(50)}px;
`;

export const RightArea = styled.View``;

export const Name = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.title};
`;

export const Type = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.complement};
    opacity: .55;
`;

export const Main = styled.View`
    margin-top: ${RFValue(20)}px;
    margin-bottom: ${RFValue(24)}px;
`;

export const HeaderMain = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Item = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const PhoneIcon = styled(Phone)`
    margin-right: ${RFValue(2)}px;
    opacity: .55;
`;

export const PhoneLabel = styled.Text`
    font-family: ${({ theme }) => theme.fonts.complement};
    opacity: .65;
`;

export const EmailIcon = styled(At)`
    margin-right: ${RFValue(2)}px;
    opacity: .55;
`;

export const EmailLabel = styled.Text`
    font-family: ${({ theme }) => theme.fonts.complement};
    opacity: .65;
`;

export const FooterMain = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: ${RFValue(8)}px;

`;

export const LocationIcon = styled(MapPin)`
    margin-right: ${RFValue(2)}px;
    opacity: .55;
`;

export const LocationLabel = styled.Text`
    font-family: ${({ theme }) => theme.fonts.complement};
    opacity: .65;
`;

export const Footer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ButtonAction = styled.TouchableOpacity`
    width: 45%;
    align-items: center;

    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.gray};
    border-radius: ${RFPercentage(50)}px;

    padding: ${RFValue(8)}px ${RFValue(16)}px;
`;

export const Label = styled.Text`
    color: ${({ theme }) => theme.colors.gray};
    text-transform: uppercase;
`;
