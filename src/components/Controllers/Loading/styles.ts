import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.black};
`;

export const Logo = styled.Image.attrs({
    resizeMode: 'contain',
})`
    width: 100%;
    height: ${RFPercentage(16)}px;
    margin-bottom: ${RFValue(20)}px;

    tint-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
    font-size: ${RFValue(22)}px;
    font-family: ${({ theme }) => theme.fonts.title};
    
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};

    margin-bottom: ${RFValue(10)}px;
`;

export const Label = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.complement};

    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
`;