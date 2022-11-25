import styled from "styled-components/native";
import { ArrowRight } from 'phosphor-react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

interface Props {
    selected: boolean;
}

export const Container = styled.TouchableOpacity<Props>`
    width: 100%;
    padding: ${RFValue(16)}px ${RFValue(18)}px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background-color: ${({ theme, selected }) => 
        selected ? theme.colors.primary : theme.colors.white}; 

    border-radius:${RFValue(8)}px;
    margin-bottom: ${RFValue(8)}px;
`;

export const LawyerContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ContainerAvatar = styled.View<Props>`
    border-radius: ${RFPercentage(50)}px;
    background-color: ${({ theme, selected }) => 
        selected ? theme.colors.white : theme.colors.primary};
    padding: ${RFValue(2)}px;
    margin-right: ${RFValue(25)}px;
`;

export const Avatar = styled.Image.attrs({
    resizeMode: 'contain'
})`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;

    border-radius: ${RFPercentage(50)}px;
`;

export const InformationsLawyer = styled.View``;

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${RFValue(13)}px;
`;

export const Type = styled.Text<Props>`
    margin-top: ${RFValue(3)}px;

    font-family: ${({ theme }) => theme.fonts.complement};
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.colors.black};
    opacity: ${({ selected }) => 
        selected ? 1 : .5 };
`;

export const Icon = styled(ArrowRight).attrs({
    size: RFValue(18),
})<Props>`
    opacity: ${({ selected }) => 
        selected ? 1 : .5 };
`;
