import styled from "styled-components/native";
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Plus } from 'phosphor-react-native';

export const Container = styled.View`
    flex: 1;
    padding: ${RFValue(10)}px ${RFValue(15)}px; 
    margin-top: ${getStatusBarHeight()}px;

    background-color: ${({ theme }) => theme.colors.background_page};
`;

export const CreateQuestion = styled.TouchableOpacity.attrs({
    activeOpacity: .8
})`
    position: absolute;
    bottom: ${getBottomSpace() + 25}px;
    right: ${RFValue(25)}px;

    background-color: ${({ theme }) => theme.colors.primary_opacity};
    padding: ${RFValue(14)}px;
    border-radius: ${RFPercentage(50)}px;
`;

export const Icon = styled(Plus).attrs({
    color: '#FFF',
    size: RFValue(24)
})`

`;