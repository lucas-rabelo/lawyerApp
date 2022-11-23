import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    
    padding: ${getStatusBarHeight() + 15}px ${RFValue(20)}px ${getBottomSpace() + 15}px ${RFValue(20)}px;

    background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
    
`;