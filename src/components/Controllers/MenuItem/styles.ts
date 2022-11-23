import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    padding: ${RFValue(18)}px;
    margin: ${RFValue(5)}px ${RFValue(5)}px;

    align-items: center;
    justify-content: center;

    border-width: ${RFValue(1)}px;
    border-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${RFPercentage(2)}px;
`;

export const Icon = styled.Image.attrs({
    resizeMode: 'contain',
})`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;

    tint-color: ${({ theme }) => theme.colors.primary};
`;

export const Label = styled.Text`
    width: ${RFPercentage(15)}px;
    text-align: center;

    margin-top: ${RFValue(10)}px;

    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.text};
`;