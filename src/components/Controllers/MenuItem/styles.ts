import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface Props {
    selected: boolean;
}

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: .8,
})<Props>`
    padding: ${RFValue(22)}px;
    margin: ${RFValue(8)}px ${RFValue(8)}px;

    align-items: center;
    justify-content: center;

    border-width: ${RFValue(1)}px;
    border-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${RFPercentage(1)}px;

    background-color: ${({ theme, selected }) => 
        selected ? theme.colors.primary : 'transparent'};
`;

export const Icon = styled.Image.attrs({
    resizeMode: 'contain',
})<Props>`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    
    margin-bottom: ${RFValue(10)}px;

    tint-color: ${({ theme, selected }) => 
        selected ? theme.colors.white : theme.colors.primary};
`;

export const Label = styled.Text<Props>`
    width: ${RFPercentage(15)}px;
    text-align: center;

    margin-top: ${RFValue(10)}px;

    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.text};

    color: ${({ theme, selected }) => 
        selected ? theme.colors.white : theme.colors.text};
`;