import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    
    padding-top: ${getStatusBarHeight() + 15}px;
    padding-bottom: ${getBottomSpace() + 15}px;

    background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
    
`;