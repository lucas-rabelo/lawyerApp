import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.Image.attrs({
    resizeMode: 'contain'
})`
    width: 100%;
    height: 100%;
`;

export const Title = styled.Text`
    text-align: center;
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.primary};
`;

export const Label = styled.Text`
    text-align: center;
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.primary};
`;