import { Dimensions } from 'react-native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.background};
    opacity: .95;
`;

export const ContainerImage = styled.ImageBackground`
    width: 100%;
    height: 100%;
    /* height: ${Dimensions.get('window').height}px; */
`;

export const Title = styled.Text`
    text-align: center;

    font-size: ${RFValue(22)}px;
    font-family: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors.text};
`;

export const Subtitle = styled.Text`
    margin-top: ${RFValue(8)}px;
    margin-bottom: ${RFValue(16)}px;
    text-align: center;
    
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.complement};
    color: ${({ theme }) => theme.colors.text};
`;