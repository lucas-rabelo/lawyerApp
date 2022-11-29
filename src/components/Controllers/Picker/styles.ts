import styled from 'styled-components/native';
import { CaretUp, CaretDown } from 'phosphor-react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.gray};
    border-radius: ${RFPercentage(50)}px;

    padding: ${RFValue(8)}px ${RFValue(16)}px;
    margin-top: ${RFValue(10)}px;
    margin-bottom: ${RFValue(10)}px;
`;

export const Label = styled.Text`
    color: ${({ theme }) => theme.colors.gray};
    text-transform: uppercase;
`;

export const IconUp = styled(CaretUp).attrs({
    size: RFValue(22)
})``;

export const IconDown = styled(CaretDown).attrs({
    size: RFValue(22)
})``;