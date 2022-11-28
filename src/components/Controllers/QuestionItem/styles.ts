import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { User, Calendar } from 'phosphor-react-native';
import styled from "styled-components/native";

interface Props {
    selected: boolean;
}

export const Container = styled.TouchableOpacity<Props>`
    width: 100%;
    padding: ${RFValue(16)}px ${RFValue(18)}px;

    background-color: ${({ theme, selected }) => 
        selected ? theme.colors.primary : theme.colors.white}; 

    border-radius:${RFValue(8)}px;
    margin-bottom: ${RFValue(8)}px;
`;

export const Header = styled.View`
    flex-direction: row;
`;

export const Title = styled.Text.attrs({
    // numberOfLines: 1
})<Props>`
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${RFValue(14)}px;
    
    color: ${({ theme, selected }) =>
        selected ? theme.colors.white : theme.colors.text};
`;

export const TagId = styled.Text`
    font-family: ${({ theme }) => theme.fonts.title};
    background-color: ${({ theme }) => theme.colors.primary_opacity};
    color: ${({ theme }) => theme.colors.white};

    text-align: center;
    justify-content: center;

    margin-top: ${RFValue(8)}px;

    padding: ${RFValue(2)}px ${RFValue(8)}px;
    border-radius: ${RFPercentage(50)}px;
`;

export const Divider = styled.View`
    width: 100%;
    height: ${RFValue(1)}px;

    background-color: ${({ theme }) => theme.colors.gray};
    margin-top: ${RFValue(20)}px;
    margin-bottom: ${RFValue(8)}px;
`;

export const Footer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const CreatedBy = styled.Text<Props>`
    font-family: ${({ theme }) => theme.fonts.complement};
    font-size: ${RFValue(12)}px;
    color: ${({ theme, selected }) => 
        selected ? theme.colors.white : theme.colors.text};
    opacity: .55;
`;

export const CreatedIn = styled.Text<Props>`
    font-family: ${({ theme }) => theme.fonts.complement};
    font-size: ${RFValue(12)}px;
    color: ${({ theme, selected }) => 
        selected ? theme.colors.white : theme.colors.text};
    opacity: .55;
`;

export const CreatedByArea = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const IconUser = styled(User)`
    margin-right: ${RFValue(5)}px;
    opacity: .55;

`;

export const CreatedInArea = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const IconDate = styled(Calendar)`
    margin-right: ${RFValue(5)}px;
    opacity: .55;
`;